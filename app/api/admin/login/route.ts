import { NextResponse } from "next/server";

import { createAdminSession, validateAdminCredentials } from "@/lib/admin/auth";

export async function POST(request: Request) {
  const body = (await request.json()) as {
    username?: string;
    password?: string;
  };

  if (!body.username || !body.password) {
    return NextResponse.json(
      { error: "Username and password are required." },
      { status: 400 },
    );
  }

  if (!validateAdminCredentials(body.username, body.password)) {
    return NextResponse.json({ error: "Invalid credentials." }, { status: 401 });
  }

  await createAdminSession();

  return NextResponse.json({ ok: true });
}

