import Image from "next/image";
import Ask71Chat from "./components/Ask71Chat";

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

// previously used demo tiles retained for reference; now replaced by healthcare-specific cards

export default function Home() {
  return (
    <main className="mx-auto w-full max-w-[1120px] px-6 py-10">
      <header className="flex items-center gap-3">
        <Image height={28} width={60} src="/icons/ai71_dark.svg" alt="Ai71" />
        <span className="text-sm/6 text-white/60">Health71</span>
      </header>

      <section className="mt-10">
        <h1 className="text-2xl md:text-3xl font-semibold tracking-tight font-sans">Health71: The Intelligence Layer for Modern Healthcare</h1>
      </section>

      <section className="mt-8">
        <h2 className="text-white/80 text-sm uppercase tracking-wider">Our Agentic AI Solutions</h2>
        <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            {
              title: "RCM71",
              tag: "Your AI revenue cycle team on autopilot.",
              sub: "Claims, coding, denials, and billing — handled by autonomous agents that cut costs by 30–50% and lift revenue by +3–5%.",
              from: "from-slate-300/40",
              to: "to-slate-500/20",
            },
            {
              title: "Docu71",
              tag: "AI that writes, so doctors don’t have to.",
              sub: "Ambient note capture and EMR summarization — reducing documentation time by up to 30%, multilingual and workflow-native",
              from: "from-yellow-300/50",
              to: "to-lime-500/20",
            },
            {
              title: "Ops71",
              tag: "AI that keeps your hospital humming.",
              sub: "Forecasting, workforce management, patient flow optimization — boosting capacity by 10–25% through intelligent orchestration.",
              from: "from-blue-500/40",
              to: "to-indigo-700/20",
            },
          ].map((item) => (
            <div key={item.title} className={`relative group rounded-xl p-5 min-h-[180px] bg-gradient-to-br ${item.from} ${item.to} ring-1 ring-white/10 hover:ring-white/20 transition-shadow shadow-[0_0_0_1px_rgba(255,255,255,0.04)] hover:shadow-[0_10px_30px_rgba(0,0,0,0.35)]`}>
              <div className="absolute inset-0 rounded-xl bg-[radial-gradient(1000px_200px_at_0%_100%,rgba(255,255,255,0.06),transparent)]" />
              <div className="relative flex h-full flex-col gap-2">
                <div className="flex items-center justify-between">
                  <span className="text-base font-medium drop-shadow-[0_1px_0_rgba(0,0,0,0.6)]">{item.title}</span>
                  <div className="text-white/70 group-hover:text-white"><ArrowIcon /></div>
                </div>
                <p className="text-sm text-white/90">{item.tag}</p>
                <p className="text-xs text-white/70 leading-relaxed">{item.sub}</p>
                <div className="mt-auto flex gap-3 pt-2">
                  <button className="text-xs rounded-md border border-white/20 bg-black/30 px-3 py-1 hover:bg-white/10">Login</button>
                  <button className="text-xs rounded-md border border-white/20 bg-black/30 px-3 py-1 hover:bg-white/10">More info</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-6">
        <div className="rounded-xl border border-white/10 bg-white/5 p-5">
          <div className="flex flex-col gap-2 items-start md:flex-row md:items-center md:justify-between">
            <p className="text-white/90 font-medium">More Agents Coming Soon…</p>
            <button className="rounded-lg bg-white/10 hover:bg-white/15 border border-white/10 px-3 py-1.5 text-sm text-white">Sign up</button>
          </div>
          <p className="mt-2 text-sm text-white/70">The Health71 agent network is growing. From RCM to clinical ops, our autonomous modules plug into your system and scale with your needs.</p>
        </div>
      </section>

      <section className="mt-8">
        <h2 className="text-white/80 text-sm uppercase tracking-wider mb-3">Meet Ask71 – Your Healthcare AI Expert</h2>
        <Ask71Chat />
      </section>

      <section className="mt-10">
        <h2 className="text-white/80 text-sm uppercase tracking-wider">AI Agents</h2>
        <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {["Compliance Review AI Agent", "Progress Validation AI Agent", "Operational Feedback AI Agent", "Site Capture AI Agent"].map(
            (agent) => (
              <div key={agent} className="rounded-xl overflow-hidden border border-white/10 bg-white/5">
                <div className="h-28 bg-gradient-to-br from-sky-400/30 to-blue-700/20" />
                <div className="p-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">{agent}</span>
                  </div>
                  <div className="mt-3 flex gap-2">
                    <button className="text-xs rounded-md border border-white/20 bg-black/30 px-3 py-1 hover:bg-white/10">Login</button>
                    <button className="text-xs rounded-md border border-white/20 bg-black/30 px-3 py-1 hover:bg-white/10">More info</button>
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
