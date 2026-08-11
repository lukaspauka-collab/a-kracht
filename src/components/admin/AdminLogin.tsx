"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AdminLogin() {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [busy, setBusy] = useState(false);
  const router = useRouter();

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setBusy(true);
    setError("");
    try {
      const res = await fetch("/api/auth", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password }),
      });
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        setError(data.error || "Inloggen mislukt.");
        return;
      }
      router.refresh();
    } catch {
      setError("Inloggen mislukt.");
    } finally {
      setBusy(false);
    }
  }

  return (
    <div className="admin admin-login">
      <form className="admin-login__card" onSubmit={submit}>
        <h1 className="admin-login__title">Content beheer</h1>
        <p className="admin-login__sub">Log in om de website te bewerken.</p>
        <label className="admin-field">
          <span className="admin-field__label">Wachtwoord</span>
          <input
            className="admin-input"
            type="password"
            value={password}
            autoFocus
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        {error && <div className="admin-error">{error}</div>}
        <button
          className="admin-btn admin-btn--primary admin-login__submit"
          type="submit"
          disabled={busy}
        >
          {busy ? "Bezig…" : "Inloggen"}
        </button>
      </form>
    </div>
  );
}
