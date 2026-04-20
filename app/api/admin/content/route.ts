import { NextResponse } from "next/server";

import { isAdminAuthenticated } from "@/lib/admin/auth";
import { getEditableContentFiles, getStorageMode } from "@/lib/admin/storage";

export async function GET() {
  if (!(await isAdminAuthenticated())) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const files = await getEditableContentFiles();

  return NextResponse.json({
    files,
    storageMode: getStorageMode(),
  });
}

