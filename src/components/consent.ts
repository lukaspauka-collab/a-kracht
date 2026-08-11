import { useSyncExternalStore } from "react";

export type ConsentChoice = {
  necessary: true;
  preferences: boolean;
  analytics: boolean;
  marketing: boolean;
  updatedAt: string;
};

const STORAGE_KEY = "a-kracht-cookie-consent-v1";

const listeners = new Set<() => void>();
let cached: ConsentChoice | null | undefined;

function read(): ConsentChoice | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as Partial<ConsentChoice>;
    return {
      necessary: true,
      preferences: Boolean(parsed.preferences),
      analytics: Boolean(parsed.analytics),
      marketing: Boolean(parsed.marketing),
      updatedAt: typeof parsed.updatedAt === "string" ? parsed.updatedAt : "",
    };
  } catch {
    return null;
  }
}

function getSnapshot(): ConsentChoice | null {
  if (cached === undefined) cached = read();
  return cached;
}

function subscribe(onChange: () => void) {
  listeners.add(onChange);
  return () => listeners.delete(onChange);
}

function emit() {
  listeners.forEach((l) => l());
}

export function setConsent(
  choice: Pick<ConsentChoice, "preferences" | "analytics" | "marketing">,
): ConsentChoice {
  const next: ConsentChoice = {
    ...choice,
    necessary: true,
    updatedAt: new Date().toISOString(),
  };
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
  } catch {
    /* storage unavailable — nothing to persist */
  }
  cached = next;
  emit();
  return next;
}

/**
 * React hook for the consent store. Use in any component that needs to
 * gate a non-essential script; the component re-renders when the user
 * changes their choice.
 */
export function useConsent() {
  return useSyncExternalStore(subscribe, getSnapshot, () => null);
}

/**
 * Gate for loading non-essential scripts. Any future tracking or
 * marketing tool must check `hasConsent("analytics")` (or "marketing")
 * before loading. The site currently sets no non-essential cookies.
 */
export function hasConsent(category: "preferences" | "analytics" | "marketing") {
  const consent = getSnapshot();
  return consent ? consent[category] : false;
}
