"use client";

import { useState } from "react";

type EditableFile = {
  key: string;
  label: string;
  path: string;
  description: string;
  value: string;
};

type AdminPanelProps = {
  initialFiles: EditableFile[];
  storageMode: "local" | "github";
};

export function AdminPanel({ initialFiles, storageMode }: AdminPanelProps) {
  const [files, setFiles] = useState(initialFiles);
  const [activePath, setActivePath] = useState(initialFiles[0]?.path ?? "");
  const [message, setMessage] = useState("");
  const [savingPath, setSavingPath] = useState("");
  const [uploading, setUploading] = useState(false);
  const [uploadFolder, setUploadFolder] = useState<"uploads" | "logos">("uploads");
  const [uploadedPath, setUploadedPath] = useState("");

  const activeFile = files.find((file) => file.path === activePath) ?? files[0];

  async function saveFile(path: string) {
    const file = files.find((entry) => entry.path === path);

    if (!file) {
      return;
    }

    setSavingPath(path);
    setMessage("");

    try {
      const response = await fetch("/api/admin/save", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          path,
          value: file.value,
        }),
      });

      const data = (await response.json()) as { error?: string };

      if (!response.ok) {
        throw new Error(data.error ?? "Save failed.");
      }

      setMessage(`${file.label} saved successfully.`);
    } catch (error) {
      setMessage(error instanceof Error ? error.message : "Save failed.");
    } finally {
      setSavingPath("");
    }
  }

  async function logout() {
    await fetch("/api/admin/logout", { method: "POST" });
    window.location.reload();
  }

  async function handleUpload(event: React.ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0];

    if (!file) {
      return;
    }

    setUploading(true);
    setMessage("");
    setUploadedPath("");

    try {
      const formData = new FormData();
      formData.append("file", file);
      formData.append("targetFolder", uploadFolder);

      const response = await fetch("/api/admin/upload", {
        method: "POST",
        body: formData,
      });
      const data = (await response.json()) as { error?: string; publicPath?: string };

      if (!response.ok || !data.publicPath) {
        throw new Error(data.error ?? "Upload failed.");
      }

      setUploadedPath(data.publicPath);
      setMessage(`Uploaded successfully: ${data.publicPath}`);
    } catch (error) {
      setMessage(error instanceof Error ? error.message : "Upload failed.");
    } finally {
      setUploading(false);
      event.target.value = "";
    }
  }

  return (
    <div className="grid gap-8 lg:grid-cols-[18rem_1fr]">
      <aside className="rounded-[2rem] border border-white/70 bg-white/85 p-5 shadow-[0_18px_45px_rgba(22,49,58,0.08)] backdrop-blur">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#2e6a69]">
              Admin files
            </p>
            <p className="mt-2 text-sm leading-6 text-[#4b5d64]">
              Storage mode:{" "}
              <span className="font-semibold text-[#14313a]">{storageMode}</span>
            </p>
          </div>
          <button
            type="button"
            onClick={logout}
            className="rounded-full border border-[#17313b]/15 px-4 py-2 text-sm font-semibold text-[#17313b]"
          >
            Log out
          </button>
        </div>

        <div className="mt-6 space-y-3">
          {files.map((file) => (
            <button
              key={file.path}
              type="button"
              onClick={() => setActivePath(file.path)}
              className={`w-full rounded-[1.25rem] px-4 py-4 text-left transition ${
                activePath === file.path
                  ? "bg-[#17313b] text-white"
                  : "bg-[#f6f1e8] text-[#17313b]"
              }`}
            >
              <p className="text-sm font-semibold">{file.label}</p>
              <p
                className={`mt-2 text-xs leading-5 ${
                  activePath === file.path ? "text-white/80" : "text-[#5b6d73]"
                }`}
              >
                {file.description}
              </p>
            </button>
          ))}
        </div>
      </aside>

      <section className="space-y-6">
        <article className="rounded-[2rem] border border-white/70 bg-white/85 p-6 shadow-[0_22px_60px_rgba(22,49,58,0.08)] backdrop-blur">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#2e6a69]">
                JSON editor
              </p>
              <h2 className="mt-2 font-display text-4xl text-[#14313a]">
                {activeFile?.label}
              </h2>
              <p className="mt-2 text-sm leading-6 text-[#4b5d64]">
                {activeFile?.description}
              </p>
              <p className="mt-2 font-mono text-xs text-[#6a8480]">
                {activeFile?.path}
              </p>
            </div>

            <button
              type="button"
              onClick={() => activeFile && saveFile(activeFile.path)}
              disabled={!activeFile || savingPath === activeFile.path}
              className="rounded-full bg-[#17313b] px-6 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-white disabled:opacity-60"
            >
              {savingPath === activeFile?.path ? "Saving..." : "Save file"}
            </button>
          </div>

          <textarea
            value={activeFile?.value ?? ""}
            onChange={(event) =>
              setFiles((current) =>
                current.map((file) =>
                  file.path === activeFile?.path
                    ? { ...file, value: event.target.value }
                    : file,
                ),
              )
            }
            spellCheck={false}
            className="mt-6 min-h-[34rem] w-full rounded-[1.5rem] border border-[#d7e3e0] bg-[#f9f7f2] p-5 font-mono text-sm leading-7 text-[#17313b] outline-none focus:border-[#2e6a69]"
          />
        </article>

        <article className="rounded-[2rem] border border-white/70 bg-white/85 p-6 shadow-[0_22px_60px_rgba(22,49,58,0.08)] backdrop-blur">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#2e6a69]">
            Media upload
          </p>
          <h3 className="mt-2 font-display text-3xl text-[#14313a]">
            Upload new images or logos
          </h3>
          <p className="mt-3 max-w-2xl text-sm leading-7 text-[#4b5d64]">
            Upload a file, then paste the returned path into the JSON field you want
            to update. Use `logos` for brand marks and `uploads` for visuals.
          </p>

          <div className="mt-6 flex flex-col gap-4 md:flex-row md:items-center">
            <select
              value={uploadFolder}
              onChange={(event) =>
                setUploadFolder(event.target.value as "uploads" | "logos")
              }
              className="rounded-full border border-[#d7e3e0] bg-[#f9f7f2] px-4 py-3 text-sm text-[#17313b] outline-none"
            >
              <option value="uploads">uploads</option>
              <option value="logos">logos</option>
            </select>

            <label className="cursor-pointer rounded-full bg-[#17313b] px-5 py-3 text-sm font-semibold text-white">
              {uploading ? "Uploading..." : "Choose file"}
              <input
                type="file"
                className="hidden"
                onChange={handleUpload}
                disabled={uploading}
              />
            </label>
          </div>

          {uploadedPath ? (
            <div className="mt-5 rounded-[1.25rem] bg-[#eef4f2] p-4">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#2e6a69]">
                Uploaded path
              </p>
              <p className="mt-2 font-mono text-sm text-[#17313b]">{uploadedPath}</p>
            </div>
          ) : null}
        </article>

        {message ? (
          <div className="rounded-[1.5rem] border border-[#d7e3e0] bg-[#eef4f2] px-5 py-4 text-sm text-[#17313b]">
            {message}
          </div>
        ) : null}
      </section>
    </div>
  );
}
