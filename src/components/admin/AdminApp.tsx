"use client";

import { useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { SITE_FIELD_LABELS, isSiteField, resolveSiteField } from "@/content/fields";
import type { SiteContent, SiteField } from "@/content/types";

type Json = unknown;

const SECTION_NAMES: Record<string, string> = {
  site: "Site & contact",
  home: "Home",
  over: "Over mij",
  diensten: "Diensten",
  organisatie: "Organisatie",
  contact: "Contactpagina",
};

function isObj(v: Json): v is Record<string, Json> {
  return typeof v === "object" && v !== null && !Array.isArray(v);
}

function title(key: string): string {
  const t = key
    .replace(/([a-z])([A-Z])/g, "$1 $2")
    .replace(/[_-]+/g, " ")
    .trim();
  return t ? t[0].toUpperCase() + t.slice(1) : key;
}

/* ------------------------------------------------------------------ */

export default function AdminApp({
  initialContent,
  initialImages,
}: {
  initialContent: SiteContent;
  initialImages: string[];
}) {
  const [content, setContent] = useState<SiteContent>(initialContent);
  const [images, setImages] = useState<string[]>(initialImages);
  const [status, setStatus] = useState<string>("");
  const [busy, setBusy] = useState(false);
  const router = useRouter();

  const sections = useMemo(() => Object.keys(content), [content]);

  function update(path: (string | number)[], value: Json) {
    setContent((prev) => {
      const next = structuredClone(prev) as unknown as Record<string | number, Json>;
      let node: Record<string | number, Json> = next;
      for (let i = 0; i < path.length - 1; i++) {
        node = node[path[i]] as Record<string | number, Json>;
      }
      node[path[path.length - 1]] = value;
      return next as unknown as SiteContent;
    });
  }

  async function upload(file: File): Promise<string> {
    const fd = new FormData();
    fd.append("file", file);
    const res = await fetch("/api/upload", { method: "POST", body: fd });
    const data = await res.json();
    if (!res.ok) throw new Error(data.error || "Upload mislukt.");
    setImages((prev) => (prev.includes(data.src) ? prev : [...prev, data.src]));
    return data.src as string;
  }

  async function save() {
    setBusy(true);
    setStatus("Opslaan…");
    try {
      const res = await fetch("/api/content", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(content),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Opslaan mislukt.");
      setContent(data.content);
      setStatus("Opgeslagen ✓");
      router.refresh();
    } catch (e) {
      setStatus(`Fout bij opslaan: ${(e as Error).message}`);
    } finally {
      setBusy(false);
    }
  }

  async function reload() {
    setBusy(true);
    try {
      const res = await fetch("/api/content");
      const data = await res.json();
      if (res.ok) {
        setContent(data.content);
        setImages(data.images);
        setStatus("Herladen ✓");
      }
    } finally {
      setBusy(false);
    }
  }

  async function logout() {
    await fetch("/api/auth", { method: "DELETE" });
    router.refresh();
  }

  return (
    <div className="admin">
      <header className="admin-bar">
        <div>
          <h1>Content beheer</h1>
          <p className="admin-bar__sub">
            Bewerk tekst, afbeeldingen en contactgegevens. Klik op opslaan om de
            wijzigingen te publiceren.
          </p>
        </div>
        <div className="admin-bar__actions">
          <button className="admin-btn admin-btn--ghost" onClick={logout}>
            Uitloggen
          </button>
          <button className="admin-btn admin-btn--ghost" onClick={reload} disabled={busy}>
            Herladen
          </button>
          <button
            className="admin-btn admin-btn--primary"
            onClick={save}
            disabled={busy}
          >
            {busy ? "Bezig…" : "Wijzigingen opslaan"}
          </button>
        </div>
      </header>

      <div className="admin-layout">
        <nav className="admin-nav">
          {sections.map((s) => (
            <a key={s} href={`#section-${s}`} className="admin-nav__link">
              {SECTION_NAMES[s] ?? title(s)}
            </a>
          ))}
        </nav>

        <main className="admin-main">
          {status && <div className="admin-status">{status}</div>}
          <ContentEditor
            value={content as Json}
            path={[]}
            images={images}
            site={content.site}
            onUpload={upload}
            onChange={update}
          />
        </main>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */

type EditorProps = {
  value: Json;
  path: (string | number)[];
  images: string[];
  /** The live site block, for rows that show a site-wide contact detail. */
  site: SiteContent["site"];
  onUpload: (file: File) => Promise<string>;
  onChange: (path: (string | number)[], value: Json) => void;
};

function ContentEditor({ value, path, images, site, onUpload, onChange }: EditorProps) {
  if (typeof value === "boolean") {
    return (
      <label className="admin-field admin-field--check">
        <input
          type="checkbox"
          checked={value}
          onChange={(e) => onChange(path, e.target.checked)}
        />
        {title(String(path[path.length - 1]))}
      </label>
    );
  }

  if (typeof value === "number") {
    return (
      <FieldShell label={title(String(path[path.length - 1]))}>
        <input
          className="admin-input"
          type="number"
          value={value}
          onChange={(e) => onChange(path, Number(e.target.value))}
        />
      </FieldShell>
    );
  }

  if (typeof value === "string") {
    return <TextField value={value} path={path} onChange={onChange} />;
  }

  if (Array.isArray(value)) {
    if (value.length === 0 || typeof value[0] === "string") {
      return <ListField value={value as string[]} path={path} onChange={onChange} />;
    }
    return <ObjectArrayField value={value} path={path} images={images} site={site} onUpload={onUpload} onChange={onChange} />;
  }

  if (isObj(value)) {
    return <ObjectGroup value={value} path={path} images={images} site={site} onUpload={onUpload} onChange={onChange} />;
  }

  return null;
}

function TextField({
  value,
  path,
  onChange,
}: {
  value: string;
  path: (string | number)[];
  onChange: EditorProps["onChange"];
}) {
  const label = title(String(path[path.length - 1]));
  const multiline = value.length > 70 || value.includes("\n");
  return (
    <FieldShell label={label}>
      {multiline ? (
        <textarea
          className="admin-input"
          rows={value.split("\n").length > 4 ? 6 : 3}
          value={value}
          onChange={(e) => onChange(path, e.target.value)}
        />
      ) : (
        <input
          className="admin-input"
          value={value}
          onChange={(e) => onChange(path, e.target.value)}
        />
      )}
    </FieldShell>
  );
}

function ListField({
  value,
  path,
  onChange,
}: {
  value: string[];
  path: (string | number)[];
  onChange: EditorProps["onChange"];
}) {
  const label = title(String(path[path.length - 1]));
  return (
    <FieldShell
      label={label}
      hint="Eén regel per item."
    >
      <textarea
        className="admin-input"
        rows={Math.max(3, value.length + 1)}
        value={value.join("\n")}
        onChange={(e) => onChange(path, e.target.value.split("\n"))}
      />
    </FieldShell>
  );
}

function ObjectArrayField({
  value,
  path,
  images,
  site,
  onUpload,
  onChange,
}: {
  value: Json[];
  path: (string | number)[];
  images: string[];
  site: EditorProps["site"];
  onUpload: EditorProps["onUpload"];
  onChange: EditorProps["onChange"];
}) {
  const label = title(String(path[path.length - 1]));
  const template = isObj(value[0]) ? structuredClone(value[0]) : {};

  return (
    <section className="admin-block">
      <div className="admin-block__head">
        <h3 className="admin-block__title">{label}</h3>
        <button
          className="admin-btn admin-btn--sm"
          onClick={() => onChange(path, [...value, structuredClone(template)])}
        >
          + Toevoegen
        </button>
      </div>
      <div className="admin-block__list">
        {value.map((item, i) => (
          <div key={i} className="admin-card">
            <div className="admin-card__head">
              <span className="admin-card__index">
                {label} #{i + 1}
              </span>
              <button
                className="admin-btn admin-btn--sm admin-btn--danger"
                onClick={() =>
                  onChange(
                    path,
                    value.filter((_, j) => j !== i)
                  )
                }
              >
                Verwijderen
              </button>
            </div>
            <ContentEditor
              value={item}
              path={[...path, i]}
              images={images}
              site={site}
              onUpload={onUpload}
              onChange={onChange}
            />
          </div>
        ))}
      </div>
    </section>
  );
}

function ObjectGroup({
  value,
  path,
  images,
  site,
  onUpload,
  onChange,
}: {
  value: Record<string, Json>;
  path: (string | number)[];
  images: string[];
  site: EditorProps["site"];
  onUpload: EditorProps["onUpload"];
  onChange: EditorProps["onChange"];
}) {
  const isSection = path.length === 1;
  const name = String(path[path.length - 1]);

  // A row that shows a site-wide detail. Its own `value`/`href` are ignored by
  // the site, and older saved content still carries them — editing those boxes
  // would change nothing, so show the linked value instead of them.
  const linkedField = isSiteField(value.field) ? value.field : null;
  const keys = Object.keys(value).filter(
    (k) => !(linkedField && (k === "value" || k === "href"))
  );

  return (
    <section id={isSection ? `section-${name}` : undefined} className="admin-section">
      {isSection && (
        <h2 className="admin-section__title">{SECTION_NAMES[name] ?? title(name)}</h2>
      )}
      <div className="admin-grid">
        {keys.map((k) => {
          const childPath = [...path, k];
          const childValue = value[k];
          const childOnChange = (v: Json) => onChange(childPath, v);
          if (k === "src") {
            return (
              <ImagePicker
                key={k}
                value={childValue as string}
                images={images}
                onUpload={onUpload}
                onChange={childOnChange}
              />
            );
          }
          if (k === "field" && linkedField) {
            return <LinkedField key={k} field={linkedField} site={site} />;
          }
          return (
            <ContentEditor
              key={k}
              value={childValue}
              path={childPath}
              images={images}
              site={site}
              onUpload={onUpload}
              onChange={onChange}
            />
          );
        })}
      </div>
    </section>
  );
}

/**
 * A row whose value is the site-wide one. Read-only on purpose: the point is
 * that there is one place to change a phone number, and this shows both what
 * will appear and where to go and change it.
 */
function LinkedField({
  field,
  site,
}: {
  field: SiteField;
  site: EditorProps["site"];
}) {
  const { value } = resolveSiteField(site, field);
  return (
    <FieldShell
      label={SITE_FIELD_LABELS[field]}
      hint="Overgenomen uit Site & contact — pas het daar aan, dan verandert het op elke pagina."
    >
      <input className="admin-input" value={value} readOnly disabled />
    </FieldShell>
  );
}

function ImagePicker({
  value,
  images,
  onUpload,
  onChange,
}: {
  value: string;
  images: string[];
  onUpload: (file: File) => Promise<string>;
  onChange: (value: string) => void;
}) {
  const [err, setErr] = useState<string>("");
  const options = value && !images.includes(value) ? [value, ...images] : images;

  async function handleFile(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;
    setErr("");
    try {
      const src = await onUpload(file);
      onChange(src);
    } catch (err2) {
      setErr((err2 as Error).message);
    }
  }

  return (
    <FieldShell label="Afbeelding">
      {value ? (
        <img className="admin-thumb" src={value} alt="Geselecteerde afbeelding" />
      ) : (
        <div className="admin-thumb admin-thumb--empty">Geen afbeelding</div>
      )}
      <select className="admin-input" value={value} onChange={(e) => onChange(e.target.value)}>
        <option value="">— Geen afbeelding —</option>
        {options.map((img) => (
          <option key={img} value={img}>
            {img}
          </option>
        ))}
      </select>
      <label className="admin-upload">
        Upload nieuwe afbeelding
        <input type="file" accept="image/*" onChange={handleFile} />
      </label>
      {err && <span className="admin-error">{err}</span>}
    </FieldShell>
  );
}

function FieldShell({
  label,
  hint,
  children,
}: {
  label: string;
  hint?: string;
  children: React.ReactNode;
}) {
  return (
    <label className="admin-field">
      <span className="admin-field__label">{label}</span>
      {hint && <span className="admin-field__hint">{hint}</span>}
      {children}
    </label>
  );
}
