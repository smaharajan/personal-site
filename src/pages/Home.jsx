import { Link } from "react-router-dom";
import { ArrowUpRight, Cpu, Sparkles, Zap, Code2 } from "lucide-react";

const stack = [
  "Python", "Go", "TypeScript", "Rust",
  "Kubernetes", "gRPC", "Kafka", "PostgreSQL",
  "Redis", "ClickHouse", "PyTorch", "vLLM",
  "FAISS", "OpenTelemetry", "Terraform", "AWS",
];

const sections = [
  {
    to: "/technologies",
    cmd: "ls ./tech",
    title: "Technologies",
    desc: "Stack I reach for, grouped by where it lives in the system.",
    icon: Code2,
  },
  {
    to: "/problems",
    cmd: "cat ./problems/*",
    title: "Problems Solved",
    desc: "Postmortem-style write-ups: latency, consistency, scale, cost.",
    icon: Zap,
  },
  {
    to: "/ai",
    cmd: "run ./ai",
    title: "AI",
    desc: "RAG, inference economics, evals, and agentic systems in production.",
    icon: Sparkles,
  },
  {
    to: "/about",
    cmd: "whoami",
    title: "About",
    desc: "Background, principles, and what I'm exploring now.",
    icon: Cpu,
  },
];

const recent = [
  { date: "2025-04", what: "Cut LLM tail latency 6× with continuous batching + KV reuse." },
  { date: "2025-02", what: "Shipped hybrid retrieval (BM25 + dense + reranker) — nDCG@10 +34%." },
  { date: "2024-11", what: "Migrated 11 services out of a 400k-LOC monolith with zero downtime." },
  { date: "2024-08", what: "Built CDC-backed exactly-once pipeline across Kafka → PG → Redis." },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="mx-auto max-w-6xl px-6 pb-16 pt-16 md:px-10 md:pt-24">
        <div className="reveal-fade font-mono text-[11px] uppercase tracking-[0.25em] text-emerald-400/80">
          $ ./sommah --intro
        </div>

        <h1 className="reveal mt-5 max-w-3xl text-2xl font-medium leading-snug tracking-tight text-white md:text-4xl">
          I build distributed systems and AI infrastructure
          <span className="text-white/50"> — the parts that have to work at p99.</span>
        </h1>

        <p
          className="reveal mt-6 max-w-2xl text-base leading-relaxed text-white/60 md:text-lg"
          style={{ animationDelay: "0.1s" }}
        >
          Software engineer focused on the seams between large-scale backends and
          machine-learning systems. This is a working notebook of the technologies I use,
          the hard problems I've shipped solutions for, and how I think about AI in production.
        </p>

        {/* terminal status card */}
        <div
          className="reveal mt-10 overflow-hidden rounded-lg border border-white/10 bg-black/40"
          style={{ animationDelay: "0.15s" }}
        >
          <div className="font-mono flex items-center gap-2 border-b border-white/10 bg-white/[0.03] px-4 py-2 text-[11px] text-white/50">
            <span className="h-2.5 w-2.5 rounded-full bg-rose-400/70" />
            <span className="h-2.5 w-2.5 rounded-full bg-amber-400/70" />
            <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/70" />
            <span className="ml-3">~/sommah — zsh</span>
          </div>
          <div className="font-mono space-y-1.5 px-4 py-4 text-[13px] leading-relaxed">
            <div><span className="text-emerald-400">$</span> <span className="text-white/80">status</span></div>
            <div className="text-white/60">role        : principal engineer · ai + platform</div>
            <div className="text-white/60">currently   : agentic retrieval, inference at scale</div>
            <div className="text-white/60">open to     : architecture reviews, hard problems</div>
            <div className="text-white/60">location    : remote-friendly</div>
            <div><span className="text-emerald-400">$</span> <span className="cursor text-white/80">_</span></div>
          </div>
        </div>
      </section>

      {/* Stack chips */}
      <section className="mx-auto max-w-6xl px-6 pb-16 md:px-10">
        <div className="font-mono mb-4 text-[11px] uppercase tracking-[0.25em] text-white/40">
          // working with
        </div>
        <div className="flex flex-wrap gap-2">
          {stack.map((s) => (
            <span
              key={s}
              className="font-mono rounded-md border border-white/10 bg-white/[0.02] px-3 py-1.5 text-xs text-white/70"
            >
              {s}
            </span>
          ))}
        </div>
      </section>

      {/* Sections grid */}
      <section className="mx-auto max-w-6xl px-6 pb-16 md:px-10">
        <div className="font-mono mb-6 text-[11px] uppercase tracking-[0.25em] text-white/40">
          // sections
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          {sections.map((s) => (
            <Link
              key={s.to}
              to={s.to}
              className="group flex items-start justify-between rounded-lg border border-white/10 bg-white/[0.02] p-6 card-hover"
            >
              <div className="flex-1">
                <div className="font-mono flex items-center gap-2 text-[11px] text-emerald-400/80">
                  <span>$</span><span>{s.cmd}</span>
                </div>
                <h3 className="mt-3 text-xl font-medium text-white md:text-2xl">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/60 md:text-base">{s.desc}</p>
              </div>
              <ArrowUpRight
                className="h-4 w-4 shrink-0 text-white/40 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-white"
                strokeWidth={2}
              />
            </Link>
          ))}
        </div>
      </section>

      {/* Recent log */}
      <section className="mx-auto max-w-6xl px-6 pb-24 md:px-10">
        <div className="font-mono mb-4 text-[11px] uppercase tracking-[0.25em] text-white/40">
          $ tail -n 4 changelog.log
        </div>
        <ul className="font-mono divide-y divide-white/5 rounded-lg border border-white/10 bg-white/[0.02] text-[13px]">
          {recent.map((r) => (
            <li key={r.date} className="flex flex-col gap-1 px-5 py-3 md:flex-row md:items-center md:gap-6">
              <span className="text-emerald-400/80">{r.date}</span>
              <span className="text-white/70">{r.what}</span>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
