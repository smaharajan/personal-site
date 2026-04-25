export default function SharedStyles() {
  return (
    <style>{`
      @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&family=JetBrains+Mono:wght@400;500;600&display=swap');

      @keyframes float-slow {
        0%, 100% { transform: translate(0, 0) scale(1); }
        50% { transform: translate(20px, -20px) scale(1.03); }
      }
      @keyframes reveal-up {
        from { opacity: 0; transform: translateY(16px); }
        to { opacity: 1; transform: translateY(0); }
      }
      @keyframes reveal-fade {
        from { opacity: 0; }
        to { opacity: 1; }
      }
      @keyframes marquee {
        from { transform: translateX(0); }
        to { transform: translateX(-50%); }
      }
      @keyframes blink {
        0%, 49% { opacity: 1; }
        50%, 100% { opacity: 0; }
      }

      .font-mono { font-family: 'JetBrains Mono', ui-monospace, monospace; }
      .font-sans { font-family: 'Inter', ui-sans-serif, system-ui, sans-serif; }

      .reveal { animation: reveal-up 0.6s cubic-bezier(0.22, 1, 0.36, 1) both; }
      .reveal-fade { animation: reveal-fade 1s ease-out both; }
      .blob { animation: float-slow 24s ease-in-out infinite; }
      .cursor::after {
        content: '▋';
        margin-left: 4px;
        color: #34d399;
        animation: blink 1.1s step-end infinite;
      }

      .grid-bg {
        background-image:
          linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px),
          linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px);
        background-size: 48px 48px;
      }

      .card-hover { transition: border-color 0.3s, background 0.3s, transform 0.3s; }
      .card-hover:hover { border-color: rgba(255,255,255,0.25); background: rgba(255,255,255,0.03); }

      html { scroll-behavior: smooth; }
      body { font-family: 'Inter', ui-sans-serif, system-ui, sans-serif; }
    `}</style>
  );
}

