import Image from "next/image";

function ArrowIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="size-6"
    >
      <path
        fillRule="evenodd"
        d="M13.28 3.22a.75.75 0 011.06 0l6.44 6.44a.75.75 0 010 1.06l-6.44 6.44a.75.75 0 11-1.06-1.06l5.16-5.16H3.75a.75.75 0 010-1.5h14.69l-5.16-5.16a.75.75 0 010-1.06z"
        clipRule="evenodd"
      />
    </svg>
  );
}

type AppTile = {
  title: string;
  gradientFrom: string;
  gradientTo: string;
};

const APP_TILES: AppTile[] = [
  { title: "Investment Plan", gradientFrom: "from-slate-300/40", gradientTo: "to-slate-500/20" },
  { title: "Analyze Studio", gradientFrom: "from-yellow-300/50", gradientTo: "to-lime-500/20" },
  { title: "Digital Twin Studio", gradientFrom: "from-slate-400/40", gradientTo: "to-slate-600/20" },
  { title: "Visualization", gradientFrom: "from-rose-300/40", gradientTo: "to-violet-500/20" },
  { title: "Construction Monitoring", gradientFrom: "from-cyan-400/40", gradientTo: "to-sky-600/20" },
  { title: "Operations & Management", gradientFrom: "from-blue-500/40", gradientTo: "to-indigo-700/20" },
];

export default function Home() {
  return (
    <main className="mx-auto w-full max-w-[1120px] px-6 py-10">
      <header className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="size-8 rounded-md bg-gradient-to-br from-indigo-400 to-cyan-400 grid place-items-center">
            <Image src="/next.svg" width={20} height={20} alt="logo" className="invert" />
          </div>
          <span className="text-sm/6 text-white/70">Ai71</span>
        </div>
        <div className="flex items-center gap-3">
          <button className="rounded-full size-8 grid place-items-center bg-white/5 hover:bg-white/10 transition-colors">
            <span className="sr-only">Notifications</span>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-5 text-white/80">
              <path d="M12 2a7 7 0 00-7 7v3.764l-.894 2.235A1 1 0 005 16h14a1 1 0 00.894-1.001L19 12.764V9a7 7 0 00-7-7z" />
              <path d="M8 18a4 4 0 008 0H8z" />
            </svg>
          </button>
          <div className="size-8 rounded-full bg-gradient-to-br from-indigo-400/60 to-cyan-500/60 grid place-items-center text-[10px] font-semibold ring-1 ring-white/10 text-white">JD</div>
        </div>
      </header>

      <section className="mt-10">
        <p className="text-white/70 text-lg">Welcome,</p>
        <h1 className="text-3xl md:text-4xl font-semibold tracking-tight">John Doe</h1>
      </section>

      <section className="mt-8">
        <h2 className="text-white/80 text-sm uppercase tracking-wider">Choose app to get started</h2>
        <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {APP_TILES.map((tile) => (
            <div
              key={tile.title}
              className={`relative group rounded-xl p-5 h-[140px] bg-gradient-to-br ${tile.gradientFrom} ${tile.gradientTo} ring-1 ring-white/10 hover:ring-white/20 transition-shadow shadow-[0_0_0_1px_rgba(255,255,255,0.04)] hover:shadow-[0_10px_30px_rgba(0,0,0,0.35)]`}
            >
              <div className="absolute inset-0 rounded-xl bg-[radial-gradient(1000px_200px_at_0%_100%,rgba(255,255,255,0.06),transparent)]" />
              <div className="relative h-full flex flex-col justify-between">
                <span className="text-base font-medium drop-shadow-[0_1px_0_rgba(0,0,0,0.6)]">{tile.title}</span>
                <div className="self-end text-white/70 group-hover:text-white">
                  <ArrowIcon />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-8">
        <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-4">
          <div className="flex items-start gap-3">
            <div className="size-8 rounded-md bg-white/10 grid place-items-center text-white/80">AI</div>
            <div className="flex-1">
              <p className="text-sm text-white/70">Welcome to SuperHive! I’m your AI Construction Expert. You can ask any question!</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {[
                  "Automate rule extraction from regulations",
                  "Optimize AI for construction",
                ].map((chip) => (
                  <button
                    key={chip}
                    className="text-xs rounded-full border border-white/10 bg-white/5 px-3 py-1 text-white/70 hover:text-white hover:bg-white/10"
                    type="button"
                  >
                    {chip}
                  </button>
                ))}
              </div>
              <div className="mt-4 flex items-center gap-2 rounded-xl border border-white/10 bg-black/30 px-3 py-2">
                <input
                  className="flex-1 bg-transparent outline-none text-sm placeholder:text-white/40"
                  placeholder="Ask anything..."
                />
                <button className="rounded-lg bg-white/10 hover:bg-white/15 border border-white/10 px-3 py-1.5 text-sm text-white">Send</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-10">
        <h2 className="text-white/80 text-sm uppercase tracking-wider">AI Agents</h2>
        <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {["Compliance Review AI Agent", "Progress Validation AI Agent", "Operational Feedback AI Agent", "Site Capture AI Agent"].map(
            (agent) => (
              <div key={agent} className="rounded-xl overflow-hidden border border-white/10 bg-white/5">
                <div className="h-28 bg-gradient-to-br from-sky-400/30 to-blue-700/20" />
                <div className="p-4 flex items-center justify-between">
                  <span className="text-sm font-medium">{agent}</span>
                  <div className="text-white/70">
                    <ArrowIcon />
                  </div>
                </div>
              </div>
            )
          )}
        </div>
      </section>
    </main>
  );
}
