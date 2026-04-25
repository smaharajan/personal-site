import PageHeader from "../components/PageHeader";
import { Cpu, Sparkles, Zap, Code2 } from "lucide-react";

const pillars = [
  {
    icon: Sparkles,
    title: "Retrieval-Augmented Generation",
    body:
      "RAG systems that survive contact with real corpora — chunking that respects document structure, hybrid retrieval (dense + lexical), rerankers tuned on in-domain pairs. The model is the smallest part of the stack.",
  },
  {
    icon: Cpu,
    title: "Inference economics",
    body:
      "Cost-per-token isn't constant. KV-cache reuse, speculative decoding, quantization (INT8/INT4/FP8), and continuous batching can collapse the bill an order of magnitude — when the workload shape allows.",
  },
  {
    icon: Zap,
    title: "Evaluation that doesn't lie",
    body:
      "Vibes-based eval is technical debt. Offline harnesses with golden sets, calibrated LLM-as-judge, and online A/B tied back to product KPIs. Regressions get caught in CI.",
  },
  {
    icon: Code2,
    title: "Agentic systems",
    body:
      "Agents that loop forever are a UX problem in disguise. State machines with explicit tools, deterministic fallbacks, and tracing on every hop. The 'agent' is just another service.",
  },
];

const writings = [
  { tag: "retrieval",  title: "Why your RAG is hallucinating (it's the chunker)", blurb: "An accidental experiment in chunk boundaries — and the 18% lift from respecting Markdown structure." },
  { tag: "inference",  title: "Quantization without tears", blurb: "A practical walk through INT8 and FP8 quantization for production serving — what breaks, what doesn't." },
  { tag: "evaluation", title: "Evals before models", blurb: "Building a golden set in a week, calibration for LLM-as-judge, and why your offline metrics drifted." },
  { tag: "agents",     title: "Agents are just services with bad memory", blurb: "Designing agentic flows as explicit state machines instead of prompt soup. Patterns from production." },
];

export default function AI() {
  return (
    <>
      <PageHeader
        eyebrow="$ run ./ai"
        title="AI in production."
        lead="The interesting part of AI isn't the demo — it's what happens at p99 with real users, drifting data, and a finance team that reads the bill."
      />

      <section className="mx-auto max-w-6xl px-6 pb-12 md:px-10">
        <div className="grid gap-4 md:grid-cols-2">
          {pillars.map((p) => (
            <article
              key={p.title}
              className="rounded-lg border border-white/10 bg-white/[0.02] p-6 card-hover"
            >
              <p.icon className="h-5 w-5 text-emerald-400/80" strokeWidth={1.75} />
              <h2 className="mt-4 text-lg font-medium text-white md:text-xl">{p.title}</h2>
              <p className="mt-3 text-sm leading-relaxed text-white/65 md:text-[15px]">{p.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-12 md:px-10">
        <div className="font-mono mb-4 text-[11px] uppercase tracking-[0.25em] text-white/40">
          // writing
        </div>
        <ul className="divide-y divide-white/5 rounded-lg border border-white/10 bg-white/[0.02]">
          {writings.map((w) => (
            <li key={w.title}>
              <a
                href="#"
                className="group flex flex-col gap-2 px-5 py-4 transition hover:bg-white/[0.03] md:flex-row md:items-center md:justify-between md:gap-6"
              >
                <div className="md:max-w-3xl">
                  <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-emerald-400/70">
                    {w.tag}
                  </div>
                  <h3 className="mt-1.5 text-base font-medium text-white transition group-hover:text-emerald-300 md:text-lg">
                    {w.title}
                  </h3>
                  <p className="mt-1 text-sm text-white/55">{w.blurb}</p>
                </div>
                <div className="font-mono text-[11px] text-white/30 transition group-hover:text-white">
                  read →
                </div>
              </a>
            </li>
          ))}
        </ul>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-20 md:px-10">
        <div className="rounded-lg border border-white/10 bg-white/[0.02] p-6 md:p-8">
          <div className="font-mono text-[11px] uppercase tracking-[0.25em] text-white/40">
            // currently exploring
          </div>
          <p className="mt-3 text-base leading-relaxed text-white/80 md:text-lg">
            Long-horizon agents, structured generation as a primary interface, and the
            quiet shift from prompts to <span className="text-emerald-300">programs</span>.
          </p>
        </div>
      </section>
    </>
  );
}
