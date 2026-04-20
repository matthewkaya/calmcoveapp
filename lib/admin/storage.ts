import { Buffer } from "node:buffer";
import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";

import { contentFiles } from "@/lib/admin/content-files";

const contentDir = path.join(process.cwd(), "content");
const publicDir = path.join(process.cwd(), "public");
const githubApiBase = "https://api.github.com";

type GitHubConfig = {
  owner: string;
  repo: string;
  branch: string;
  token: string;
  committerName: string;
  committerEmail: string;
};

type RemoteFile = {
  sha?: string;
  content?: string;
};

function getGitHubConfig(): GitHubConfig | null {
  const owner = process.env.GITHUB_REPO_OWNER;
  const repo = process.env.GITHUB_REPO_NAME;
  const token = process.env.GITHUB_TOKEN;

  if (!owner || !repo || !token) {
    return null;
  }

  return {
    owner,
    repo,
    token,
    branch: process.env.GITHUB_BRANCH ?? "main",
    committerName: process.env.GITHUB_COMMITTER_NAME ?? "CalmCove Admin",
    committerEmail:
      process.env.GITHUB_COMMITTER_EMAIL ?? "admin@calmcove.local",
  };
}

async function githubRequest<T>(input: string, init?: RequestInit): Promise<T> {
  const config = getGitHubConfig();

  if (!config) {
    throw new Error("GitHub repository environment variables are missing.");
  }

  const response = await fetch(`${githubApiBase}${input}`, {
    ...init,
    headers: {
      Accept: "application/vnd.github+json",
      Authorization: `Bearer ${config.token}`,
      "X-GitHub-Api-Version": "2022-11-28",
      ...(init?.headers ?? {}),
    },
    cache: "no-store",
  });

  if (!response.ok) {
    const text = await response.text();
    throw new Error(`GitHub API error (${response.status}): ${text}`);
  }

  return (await response.json()) as T;
}

async function getRemoteFile(filePath: string): Promise<RemoteFile> {
  const config = getGitHubConfig();

  if (!config) {
    throw new Error("GitHub repository environment variables are missing.");
  }

  return githubRequest<RemoteFile>(
    `/repos/${config.owner}/${config.repo}/contents/${encodeURIComponent(filePath).replace(
      /%2F/g,
      "/",
    )}?ref=${config.branch}`,
  );
}

function decodeGitHubContent(content?: string) {
  if (!content) {
    return "";
  }

  return Buffer.from(content.replace(/\n/g, ""), "base64").toString("utf8");
}

async function putRemoteFile(filePath: string, content: Buffer | string, message: string) {
  const config = getGitHubConfig();

  if (!config) {
    throw new Error("GitHub repository environment variables are missing.");
  }

  let sha: string | undefined;

  try {
    const current = await getRemoteFile(filePath);
    sha = current.sha;
  } catch {
    sha = undefined;
  }

  const encodedContent =
    typeof content === "string"
      ? Buffer.from(content, "utf8").toString("base64")
      : content.toString("base64");

  await githubRequest(
    `/repos/${config.owner}/${config.repo}/contents/${encodeURIComponent(filePath).replace(
      /%2F/g,
      "/",
    )}`,
    {
      method: "PUT",
      body: JSON.stringify({
        message,
        content: encodedContent,
        branch: config.branch,
        sha,
        committer: {
          name: config.committerName,
          email: config.committerEmail,
        },
      }),
    },
  );
}

export async function getEditableContentFiles() {
  const github = getGitHubConfig();

  const result = await Promise.all(
    contentFiles.map(async (file) => {
      if (github) {
        const remote = await getRemoteFile(file.path);

        return {
          ...file,
          value: decodeGitHubContent(remote.content),
        };
      }

      const absolutePath = path.join(contentDir, path.basename(file.path));
      const value = await readFile(absolutePath, "utf8");

      return {
        ...file,
        value,
      };
    }),
  );

  return result;
}

export async function saveContentFile(filePath: string, value: string) {
  const knownFile = contentFiles.find((file) => file.path === filePath);

  if (!knownFile) {
    throw new Error("Unsupported content file.");
  }

  JSON.parse(value);

  const github = getGitHubConfig();

  if (github) {
    await putRemoteFile(
      filePath,
      value,
      `Update ${knownFile.label} from CalmCove admin`,
    );
    return;
  }

  const absolutePath = path.join(contentDir, path.basename(filePath));
  await writeFile(absolutePath, `${value.trim()}\n`, "utf8");
}

function sanitizeFilename(filename: string) {
  return filename.replace(/[^a-zA-Z0-9._-]/g, "-").toLowerCase();
}

export async function uploadAsset(params: {
  filename: string;
  bytes: Buffer;
  targetFolder: "uploads" | "logos";
}) {
  const filename = sanitizeFilename(params.filename);
  const relativePath = path.posix.join("public", params.targetFolder, filename);
  const publicPath = `/${params.targetFolder}/${filename}`;
  const github = getGitHubConfig();

  if (github) {
    await putRemoteFile(
      relativePath,
      params.bytes,
      `Upload ${filename} from CalmCove admin`,
    );
    return { publicPath };
  }

  const absoluteDirectory = path.join(publicDir, params.targetFolder);
  const absolutePath = path.join(absoluteDirectory, filename);

  await mkdir(absoluteDirectory, { recursive: true });
  await writeFile(absolutePath, params.bytes);

  return { publicPath };
}

export function getStorageMode() {
  return getGitHubConfig() ? "github" : "local";
}
