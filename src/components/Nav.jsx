import { NavLink, Link } from "react-router-dom";

const links = [
  { to: "/technologies", label: "tech" },
  { to: "/problems", label: "problems" },
  { to: "/ai", label: "ai" },
  { to: "/about", label: "about" },
];

export default function Nav() {
  return (
    <nav className="sticky top-0 z-50 border-b border-white/5 bg-[#07080b]/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 md:px-10">
        <Link
          to="/"
          className="font-mono flex items-center gap-2 text-sm text-white/80 transition hover:text-white"
        >
          <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_8px_2px_rgba(52,211,153,0.6)]" />
          <span className="text-white/40">~/</span>
          <span>sommah</span>
        </Link>
        <div className="hidden gap-1 md:flex">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              className={({ isActive }) =>
                `font-mono rounded-md px-3 py-1.5 text-xs transition ${
                  isActive
                    ? "bg-white/10 text-white"
                    : "text-white/50 hover:bg-white/5 hover:text-white"
                }`
              }
            >
              ./{l.label}
            </NavLink>
          ))}
        </div>
      </div>
    </nav>
  );
}
