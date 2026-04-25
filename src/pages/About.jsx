import PageHeader from "../components/PageHeader";
import { Cpu, Code2, Zap, Sparkles } from "lucide-react";

const principles = [
  { icon: Cpu, label: "Measure, don't guess", desc: "Profilers, traces, dashboards before opinions." },
  { icon: Code2, label: "Boring tech for the hot path", desc: "Novelty belongs at the edges, not the core." },
  { icon: Zap, label: "Optimize for change", desc: "Architectures that survive the next requirement." },
  { icon: Sparkles, label: "Ship to learn", desc: "Production teaches what staging cannot." },
];

const timeline = [
  { year: "2025 →", what: "Building agentic retrieval systems and AI infra at scale." },
  { year: "2023–24", what: "Led monolith decomposition + first wave of LLM features in production." },
  { year: "2020–22", what: "Distributed systems — event streaming, exactly-once pipelines, observability." },
  { year: "2016–19", what: "Backend platform engineering across JVM and Go services." },
  { year: "earlier", what: "A curiosity, a terminal, and too many tabs open." },
];

export default function About() {
  return (
    <>
      <PageHeader
        eyebrow="$ whoami"
        title="About."
        lead="An engineer drawn to the parts of systems that resist obvious answers — distributed state, model behavior at p99, and trade-offs nobody wants to write down."
      />

      <section className="mx-auto max-w-6xl px-6 pb-20 md:px-10">
        <div className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-7">
            <div className="space-y-4 text-base leading-relaxed text-white/75 md:text-lg">
              <p>
                I've spent years in the trenches of large-scale systems — debugging the kind of
                issue that hides in a thousand stack frames, and rewriting the parts everyone
                said were fine.
              </p>
              <p className="text-white/60">
                More recently I've been deep in AI: training, serving, and most importantly
                trusting models in production. The interesting work isn't the demo — it's what
                happens at p99.
              </p>
              <p className="text-white/60">
                I write here about the work — the wins, the near-misses, and the architectural
                choices I'd defend in a postmortem.
              </p>
            </div>

            <div className="mt-12">
              <div className="font-mono mb-4 text-[11px] uppercase tracking-[0.25em] text-white/40">
                // timeline
              </div>
              <ul className="font-mono divide-y divide-white/5 rounded-lg border border-white/10 bg-white/[0.02] text-[13px]">
                {timeline.map((t) => (
                  <li key={t.year} className="grid grid-cols-12 gap-4 px-5 py-3">
                    <span className="col-span-12 text-emerald-400/80 sm:col-span-3">{t.year}</span>
                    <span className="col-span-12 text-white/70 sm:col-span-9">{t.what}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="md:col-span-5">
            <div className="font-mono mb-4 text-[11px] uppercase tracking-[0.25em] text-white/40">
              // principles
            </div>
            <div className="space-y-2">
              {principles.map((p) => (
                <div
                  key={p.label}
                  className="group flex items-start gap-4 rounded-lg border border-white/10 bg-white/[0.02] p-4 card-hover"
                >
                  <p.icon className="mt-0.5 h-5 w-5 text-emerald-400/80" strokeWidth={1.75} />
                  <div>
                    <div className="text-sm font-medium text-white">{p.label}</div>
                    <div className="font-mono mt-1 text-[11px] text-white/45">{p.desc}</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 grid grid-cols-3 gap-3">
              {[
                { num: "10+", label: "yrs shipping" },
                { num: "∞", label: "bugs squashed" },
                { num: "p99", label: "always watching" },
              ].map((s) => (
                <div key={s.label} className="rounded-lg border border-white/10 bg-white/[0.02] p-4">
                  <div className="text-2xl font-medium text-white md:text-3xl">{s.num}</div>
                  <div className="font-mono mt-1 text-[10px] uppercase tracking-widest text-white/40">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
