import { ArrowUpRight, Mail } from "lucide-react";
import { Github, Linkedin } from "./Icons";

export default function Footer() {
  return (
    <footer id="contact" className="relative z-10 mx-auto max-w-6xl px-6 pb-16 pt-24 md:px-10">
      <div className="rounded-xl border border-white/10 bg-white/[0.02] p-8 md:p-10">
        <div className="font-mono text-[11px] uppercase tracking-[0.25em] text-emerald-400/80">
          $ contact --open
        </div>
        <h2 className="mt-3 text-2xl font-medium tracking-tight text-white md:text-3xl">
          Got a hard problem? Let's talk.
        </h2>
        <p className="mt-3 max-w-xl text-sm text-white/60 md:text-base">
          Best for: distributed systems work, AI infrastructure, performance forensics, or
          architecture reviews where the easy answers have already been tried.
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href="mailto:hello@example.com"
            className="font-mono group inline-flex items-center gap-2 rounded-md bg-white px-4 py-2.5 text-xs text-black transition hover:bg-emerald-300"
          >
            <Mail className="h-4 w-4" strokeWidth={2} />
            hello@example.com
            <ArrowUpRight className="h-3.5 w-3.5 transition group-hover:rotate-45" strokeWidth={2} />
          </a>
          <a
            href="https://github.com/"
            target="_blank"
            rel="noreferrer"
            className="font-mono inline-flex items-center gap-2 rounded-md border border-white/15 px-4 py-2.5 text-xs text-white/80 transition hover:border-white/40 hover:text-white"
          >
            <Github className="h-4 w-4" strokeWidth={2} />
            github
          </a>
          <a
            href="https://linkedin.com/"
            target="_blank"
            rel="noreferrer"
            className="font-mono inline-flex items-center gap-2 rounded-md border border-white/15 px-4 py-2.5 text-xs text-white/80 transition hover:border-white/40 hover:text-white"
          >
            <Linkedin className="h-4 w-4" strokeWidth={2} />
            linkedin
          </a>
        </div>
      </div>

      <div className="font-mono mt-10 flex flex-col gap-2 border-t border-white/5 pt-6 text-[11px] text-white/30 md:flex-row md:items-center md:justify-between">
        <div>© {new Date().getFullYear()} sommah · built with vite + react</div>
        <div>uptime: ∞ · region: global</div>
      </div>
    </footer>
  );
}
