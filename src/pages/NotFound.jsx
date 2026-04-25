import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-32 md:px-10">
      <div className="font-mono text-[11px] uppercase tracking-[0.25em] text-rose-400/80">
        $ cat ./404
      </div>
      <h1 className="mt-4 text-3xl font-medium tracking-tight text-white md:text-4xl">
        Lost in the stack trace.
      </h1>
      <p className="mt-4 max-w-xl text-base text-white/60 md:text-lg">
        That page doesn't exist — or it did once and got refactored away.
      </p>
      <Link
        to="/"
        className="font-mono mt-8 inline-flex items-center gap-2 rounded-md bg-white px-4 py-2.5 text-xs text-black transition hover:bg-emerald-300"
      >
        ← cd /
      </Link>
    </section>
  );
}
