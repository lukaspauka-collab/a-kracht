export default function Home() {
  return (
    <main className="flex flex-1 flex-col items-center justify-center gap-6 px-6 text-center">
      <h1 className="text-4xl font-semibold tracking-tight sm:text-6xl">
        growyour.music
      </h1>
      <p className="max-w-md text-lg text-black/60 dark:text-white/60">
        Grow your music. The base is set up — start building here in{" "}
        <code className="rounded bg-black/[.06] px-1.5 py-0.5 font-mono text-[0.9em] dark:bg-white/[.08]">
          src/app/page.tsx
        </code>
        .
      </p>
    </main>
  );
}
