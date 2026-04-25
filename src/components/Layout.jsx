import { useEffect, useState } from "react";
import { useLocation, Outlet } from "react-router-dom";
import Nav from "./Nav";
import Footer from "./Footer";
import SharedStyles from "./SharedStyles";

export default function Layout() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [pathname]);

  return (
    <div className="font-sans relative min-h-screen w-full overflow-x-hidden bg-[#07080b] text-white">
      <SharedStyles />

      {/* subtle grid + single muted glow */}
      <div className="grid-bg pointer-events-none fixed inset-0 z-0 opacity-40" />
      <div
        className="blob pointer-events-none fixed -top-40 left-1/2 z-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full opacity-20 blur-[120px]"
        style={{ background: "radial-gradient(circle, #6366f1 0%, transparent 70%)" }}
      />

      <Nav />
      <main className="relative z-10">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
