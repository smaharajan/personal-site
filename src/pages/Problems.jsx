import PageHeader from "../components/PageHeader";

const cases = [
  {
    id: "01",
    year: "2025",
    tag: "latency · gpu inference",
    title: "Cutting LLM tail latency 6×",
    problem:
      "A production LLM endpoint had p50 280ms but p99 4.2s. SLO breaches were paging nightly. The cause was buried under three layers of autoscaling.",
    approach: [
      "Instrumented every hop with OpenTelemetry: router → model server → tokenizer.",
      "Bottleneck wasn't GPU compute — head-of-line blocking from large prompts behind small ones.",
      "Added length-aware request bucketing + KV-cache reuse for repeated system prompts.",
      "Switched fixed batches to dynamic continuous batching with target queue depth.",
    ],
    result: "p99: 4.2s → 680ms. GPU util: 38% → 71%. Pager went quiet.",
    stack: ["vLLM", "Triton", "Envoy", "Prometheus"],
  },
  {
    id: "02",
    year: "2024",
    tag: "consistency · streaming",
    title: "Exactly-once across three datastores",
    problem:
      "Order events flowed Kafka → service → Postgres + Redis + downstream webhook. Replays caused duplicate side effects. 'At-least-once' was costing real money.",
    approach: [
      "Idempotency keys bound to source offset, not generated downstream.",
      "Single Postgres transaction for the write set, with outbox + CDC for fan-out.",
      "Reframed Redis as a derived projection — never a primary truth source.",
      "Deterministic replay harness proved zero duplicates across 3M synthetic events.",
    ],
    result: "Duplicate-event incidents: zero in 18 months. Reconciliation: nightly → weekly.",
    stack: ["Kafka", "PostgreSQL", "Debezium", "Go"],
  },
  {
    id: "03",
    year: "2024",
    tag: "search · nlp",
    title: "Hybrid retrieval that beat pure-vector by 34%",
    problem:
      "A semantic-search rollout regressed against legacy BM25 on short keyword queries. Users felt it; metrics confirmed it.",
    approach: [
      "Built an offline eval harness over 12k labeled query/doc pairs.",
      "Confirmed dense lost on rare-term queries; BM25 lost on paraphrase.",
      "Reciprocal-rank-fusion of both, per-query weighting from a small classifier.",
      "Added a learned reranker on the top-50.",
    ],
    result: "nDCG@10 +34% over pure-vector, +21% over BM25 alone. Tail-query satisfaction ↑ in A/B.",
    stack: ["FAISS", "Elasticsearch", "FastAPI", "PyTorch"],
  },
  {
    id: "04",
    year: "2023",
    tag: "architecture · migration",
    title: "Decomposing a 400k-LOC monolith — without downtime",
    problem:
      "A decade-old monolith owned the most critical write path. Six teams blocked weekly. Previous decomposition attempts had stalled.",
    approach: [
      "Mapped bounded contexts from real call graphs — not the org chart.",
      "Strangler-fig pattern, fronted by a feature router.",
      "CDC into new services so dual-writes were never required.",
      "Backfilled invariants with shadow traffic and diff-testing per endpoint.",
    ],
    result: "11 services extracted in 9 months. Deploy frequency 4×. Zero customer-visible incidents.",
    stack: ["Java", "Spring", "AWS", "Terraform"],
  },
  {
    id: "05",
    year: "2023",
    tag: "cost · infra",
    title: "Cutting cloud spend 42% without slowing down",
    problem:
      "Quarterly cloud bill was outgrowing revenue. Easy wins were taken. Velocity was sacrosanct.",
    approach: [
      "Cost-attribution pipeline tagging every workload by team & feature.",
      "Three workloads consumed 60% of compute — none were on leadership's radar.",
      "Right-sized via VPA in shadow mode for two weeks before enforcement.",
      "Moved batch ML training to spot capacity with checkpointing — saved 70% on that line.",
    ],
    result: "Total spend ↓ 42%. P95 latency unchanged. Finance stopped pinging engineering.",
    stack: ["Kubernetes", "VPA", "Athena", "Terraform"],
  },
];

export default function Problems() {
  return (
    <>
      <PageHeader
        eyebrow="$ cat ./problems/*"
        title="Problems solved."
        lead="Postmortem-style write-ups of the problems that didn't yield to the obvious fix."
      />

      <section className="mx-auto max-w-6xl px-6 pb-20 md:px-10">
        <div className="space-y-4">
          {cases.map((c) => (
            <article
              key={c.id}
              className="rounded-lg border border-white/10 bg-white/[0.02] p-6 card-hover md:p-8"
            >
              <div className="grid gap-8 md:grid-cols-12">
                <div className="md:col-span-4">
                  <div className="font-mono text-[11px] uppercase tracking-[0.2em] text-emerald-400/80">
                    {c.id} · {c.tag}
                  </div>
                  <h2 className="mt-4 text-xl font-medium text-white md:text-2xl">{c.title}</h2>
                  <div className="font-mono mt-4 text-[11px] text-white/40">{c.year}</div>
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {c.stack.map((s) => (
                      <span
                        key={s}
                        className="font-mono rounded border border-white/10 px-2 py-0.5 text-[10px] text-white/60"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="md:col-span-8">
                  <Block label="problem">
                    <p className="text-sm leading-relaxed text-white/75 md:text-base">{c.problem}</p>
                  </Block>
                  <Block label="approach">
                    <ul className="space-y-1.5">
                      {c.approach.map((step, i) => (
                        <li key={i} className="font-mono flex gap-3 text-[13px] leading-relaxed text-white/70">
                          <span className="select-none text-emerald-400/70">{String(i + 1).padStart(2, "0")}</span>
                          <span>{step}</span>
                        </li>
                      ))}
                    </ul>
                  </Block>
                  <Block label="result">
                    <p className="font-mono text-[13px] leading-relaxed text-emerald-300/90">{c.result}</p>
                  </Block>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}

function Block({ label, children }) {
  return (
    <div className="border-t border-white/5 py-4 first:border-t-0 first:pt-0">
      <div className="font-mono mb-2 text-[10px] uppercase tracking-[0.25em] text-white/40">
        // {label}
      </div>
      {children}
    </div>
  );
}
