export default function PageHeader({ eyebrow, title, lead }) {
  return (
    <header className="reveal mx-auto max-w-6xl px-6 pb-10 pt-16 md:px-10 md:pt-20">
      <div className="font-mono text-[11px] uppercase tracking-[0.25em] text-emerald-400/80">
        {eyebrow}
      </div>
      <h1 className="mt-4 text-3xl font-medium tracking-tight text-white md:text-4xl">
        {title}
      </h1>
      {lead && (
        <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/60 md:text-lg">
          {lead}
        </p>
      )}
    </header>
  );
}
