"use client";

import { useState } from "react";

export function LoginForm() {
  const [username, setUsername] = useState("admin");
  const [password, setPassword] = useState("calmcove2026");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLoading(true);
    setError("");

    try {
      const response = await fetch("/api/admin/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });

      const data = (await response.json()) as { error?: string };

      if (!response.ok) {
        throw new Error(data.error ?? "Login failed.");
      }

      window.location.reload();
    } catch (submitError) {
      setError(submitError instanceof Error ? submitError.message : "Login failed.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="mx-auto w-full max-w-md rounded-[2rem] border border-white/70 bg-white/90 p-8 shadow-[0_28px_80px_rgba(22,49,58,0.12)] backdrop-blur"
    >
      <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#2e6a69]">
        Admin Login
      </p>
      <h1 className="mt-3 font-display text-5xl text-[#14313a]">CalmCove</h1>
      <p className="mt-3 text-sm leading-7 text-[#4b5d64]">
        Simple admin access for editing JSON content and uploading visuals.
      </p>

      <div className="mt-8 space-y-4">
        <div>
          <label className="mb-2 block text-sm font-medium text-[#17313b]">
            Username
          </label>
          <input
            value={username}
            onChange={(event) => setUsername(event.target.value)}
            className="w-full rounded-[1rem] border border-[#d7e3e0] bg-[#f9f7f2] px-4 py-3 text-[#17313b] outline-none focus:border-[#2e6a69]"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium text-[#17313b]">
            Password
          </label>
          <input
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            className="w-full rounded-[1rem] border border-[#d7e3e0] bg-[#f9f7f2] px-4 py-3 text-[#17313b] outline-none focus:border-[#2e6a69]"
          />
        </div>
      </div>

      {error ? (
        <div className="mt-5 rounded-[1rem] bg-[#f7e7e7] px-4 py-3 text-sm text-[#8c2f2f]">
          {error}
        </div>
      ) : null}

      <button
        type="submit"
        disabled={loading}
        className="mt-6 w-full rounded-full bg-[#17313b] px-6 py-4 text-sm font-semibold uppercase tracking-[0.2em] text-white disabled:opacity-60"
      >
        {loading ? "Logging in..." : "Log in"}
      </button>
    </form>
  );
}

