import PageHeader from "../components/PageHeader";

const groups = [
  {
    title: "Languages",
    blurb: "Tools chosen for the shape of the problem, not the loudest hype.",
    items: [
      { name: "Python", note: "ML, data, glue. Type-hinted everywhere." },
      { name: "Go", note: "Network services, CLIs, anything that has to be boring & fast." },
      { name: "TypeScript", note: "From the API edge to the browser." },
      { name: "Java / Kotlin", note: "Long-haul JVM systems and Android-adjacent work." },
      { name: "Rust", note: "Hot paths and memory-sensitive components." },
      { name: "SQL", note: "Still the most underrated language on this list." },
    ],
  },
  {
    title: "Backend & Infrastructure",
    blurb: "The boring stack that keeps the lights on at p99.",
    items: [
      { name: "Kubernetes", note: "Multi-tenant clusters, GPU scheduling, custom controllers." },
      { name: "gRPC / Protobuf", note: "Strongly-typed contracts between services." },
      { name: "Kafka / Redpanda", note: "Event sourcing, CDC, exactly-once semantics done honestly." },
      { name: "Terraform", note: "Infra as code — the diff is the change request." },
      { name: "AWS / GCP", note: "VPC peering to managed inference — the whole menu." },
      { name: "Envoy / Istio", note: "L7 routing, mTLS, gradual rollouts." },
    ],
  },
  {
    title: "Data & Storage",
    blurb: "The right datastore for the right access pattern.",
    items: [
      { name: "PostgreSQL", note: "Logical replication, partitioning, JSONB when warranted." },
      { name: "Redis", note: "Caches, rate limits, lock primitives." },
      { name: "ClickHouse", note: "Analytics at uncomfortable cardinality." },
      { name: "FAISS / pgvector", note: "Vector retrieval, hybrid with BM25." },
      { name: "Elasticsearch", note: "Lexical search and log analytics." },
      { name: "DynamoDB", note: "Single-table designs done with intent." },
    ],
  },
  {
    title: "AI / ML",
    blurb: "Modeling, serving, and the tooling around them.",
    items: [
      { name: "PyTorch", note: "Training, fine-tuning, custom ops." },
      { name: "Transformers / vLLM", note: "Inference orchestration and KV-cache reuse." },
      { name: "LangGraph / LlamaIndex", note: "Agent flows where state is explicit." },
      { name: "Ray", note: "Distributed training and batched inference." },
      { name: "Triton Inference Server", note: "Multi-model GPU serving." },
      { name: "MLflow / W&B", note: "Experiment tracking that survives reorg." },
    ],
  },
  {
    title: "Frontend",
    blurb: "When the UI matters as much as the engine behind it.",
    items: [
      { name: "React", note: "Hooks, suspense, server components when they fit." },
      { name: "Tailwind CSS", note: "Design system as utility classes." },
      { name: "Vite", note: "Dev loops measured in milliseconds." },
      { name: "Next.js", note: "Edge rendering for content-heavy surfaces." },
    ],
  },
  {
    title: "Observability & Ops",
    blurb: "If you can't see it, you can't fix it.",
    items: [
      { name: "OpenTelemetry", note: "Traces, metrics, logs — one pipeline." },
      { name: "Prometheus / Grafana", note: "SLO dashboards that drive decisions." },
      { name: "Loki / Tempo", note: "Cheap log + trace storage at scale." },
      { name: "PagerDuty", note: "Runbooks, not heroics." },
    ],
  },
];

export default function Technologies() {
  return (
    <>
      <PageHeader
        eyebrow="$ ls ./tech"
        title="Technologies."
        lead="A working list of the tools I've shipped with — grouped by where they live in the system. Notes are opinions, not gospel."
      />

      <section className="mx-auto max-w-6xl px-6 pb-20 md:px-10">
        <div className="grid gap-4 md:grid-cols-2">
          {groups.map((g) => (
            <article
              key={g.title}
              className="rounded-lg border border-white/10 bg-white/[0.02] p-6 card-hover"
            >
              <h2 className="text-lg font-medium text-white md:text-xl">{g.title}</h2>
              <p className="mt-2 text-sm leading-relaxed text-white/55">{g.blurb}</p>

              <ul className="font-mono mt-5 divide-y divide-white/5 border-t border-white/10 text-[13px]">
                {g.items.map((it) => (
                  <li key={it.name} className="grid grid-cols-12 gap-3 py-2.5">
                    <span className="col-span-12 text-white sm:col-span-4">{it.name}</span>
                    <span className="col-span-12 text-white/50 sm:col-span-8">{it.note}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
