import { Buffer } from "node:buffer";

import { NextResponse } from "next/server";

import { isAdminAuthenticated } from "@/lib/admin/auth";
import { uploadAsset } from "@/lib/admin/storage";

export async function POST(request: Request) {
  if (!(await isAdminAuthenticated())) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const formData = await request.formData();
  const file = formData.get("file");
  const targetFolder = formData.get("targetFolder");

  if (!(file instanceof File)) {
    return NextResponse.json({ error: "No file uploaded." }, { status: 400 });
  }

  if (targetFolder !== "uploads" && targetFolder !== "logos") {
    return NextResponse.json(
      { error: "Target folder must be uploads or logos." },
      { status: 400 },
    );
  }

  const bytes = Buffer.from(await file.arrayBuffer());
  const result = await uploadAsset({
    filename: file.name,
    bytes,
    targetFolder,
  });

  return NextResponse.json(result);
}

