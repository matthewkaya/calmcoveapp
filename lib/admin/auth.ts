import { createHmac, timingSafeEqual } from "node:crypto";

import { cookies } from "next/headers";

const SESSION_COOKIE = "calmcove_admin_session";
const SESSION_DURATION_MS = 1000 * 60 * 60 * 24 * 7;

function getCredentials() {
  return {
    username: process.env.ADMIN_USERNAME ?? "admin",
    password: process.env.ADMIN_PASSWORD ?? "calmcove2026",
    secret: process.env.ADMIN_SESSION_SECRET ?? "calmcove-session-secret",
  };
}

function safeEqual(a: string, b: string) {
  const aBuffer = Buffer.from(a);
  const bBuffer = Buffer.from(b);

  if (aBuffer.length !== bBuffer.length) {
    return false;
  }

  return timingSafeEqual(aBuffer, bBuffer);
}

function signSession(payload: string, secret: string) {
  return createHmac("sha256", secret).update(payload).digest("hex");
}

function encodeSession(username: string, secret: string) {
  const expiresAt = Date.now() + SESSION_DURATION_MS;
  const payload = `${username}:${expiresAt}`;
  const signature = signSession(payload, secret);

  return `${payload}:${signature}`;
}

function decodeSession(value: string, secret: string) {
  const [username, expiresAtString, signature] = value.split(":");

  if (!username || !expiresAtString || !signature) {
    return null;
  }

  const payload = `${username}:${expiresAtString}`;
  const expected = signSession(payload, secret);

  if (!safeEqual(signature, expected)) {
    return null;
  }

  const expiresAt = Number(expiresAtString);

  if (!Number.isFinite(expiresAt) || expiresAt < Date.now()) {
    return null;
  }

  return { username, expiresAt };
}

export function validateAdminCredentials(username: string, password: string) {
  const expected = getCredentials();

  return safeEqual(username, expected.username) && safeEqual(password, expected.password);
}

export async function createAdminSession() {
  const store = await cookies();
  const { username, secret } = getCredentials();

  store.set(SESSION_COOKIE, encodeSession(username, secret), {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: SESSION_DURATION_MS / 1000,
  });
}

export async function clearAdminSession() {
  const store = await cookies();
  store.delete(SESSION_COOKIE);
}

export async function isAdminAuthenticated() {
  const store = await cookies();
  const value = store.get(SESSION_COOKIE)?.value;

  if (!value) {
    return false;
  }

  const { secret, username } = getCredentials();
  const decoded = decodeSession(value, secret);

  return decoded?.username === username;
}

