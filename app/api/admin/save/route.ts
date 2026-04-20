import { NextResponse } from "next/server";

import { isAdminAuthenticated } from "@/lib/admin/auth";
import { saveContentFile } from "@/lib/admin/storage";

export async function POST(request: Request) {
  if (!(await isAdminAuthenticated())) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const body = (await request.json()) as {
    path?: string;
    value?: string;
  };

  if (!body.path || typeof body.value !== "string") {
    return NextResponse.json(
      { error: "Path and JSON content are required." },
      { status: 400 },
    );
  }

  try {
    await saveContentFile(body.path, body.value);
    return NextResponse.json({ ok: true });
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "Failed to save content.";

    return NextResponse.json({ error: message }, { status: 400 });
  }
}

