// components/LandingPage.tsx
import { ArrowUpRight, SendHorizonal } from 'lucide-react';

export default function LandingPage() {
  return (
    <main className="bg-gray-50 text-gray-900 font-sans px-6 md:px-16 py-12 space-y-16">
      {/* Header */}
      <section className="text-center space-y-2">
        <h1 className="text-3xl md:text-4xl font-semibold">
          Health by <span className="text-pink-600">Ai71</span>
        </h1>
        <p className="text-lg text-gray-600">
          The Intelligence Layer Orchestrating Modern Healthcare
        </p>
      </section>

      {/* Agentic AI Solutions */}
      <section>
        <h2 className="text-xl font-semibold mb-4">Our Agentic AI Solutions</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {['RCM71', 'Ops71', 'Docu71'].map((title, idx) => (
            <div
              key={title}
              className="relative h-40 rounded-xl overflow-hidden group"
              style={{ backgroundImage: `url(/images/bg-${idx + 1}.png)`, backgroundSize: 'cover' }}
            >
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-end p-4 text-white justify-between">
                <span className="font-semibold text-lg">{title}</span>
                <ArrowUpRight className="w-5 h-5 text-white" />
              </div>
            </div>
          ))}
        </div>
        <div className="text-center text-sm mt-4 text-gray-500">
          <p className="font-medium">More Agents Coming Soon…</p>
          <p>The Health71 agent network is growing. From RCM to clinical ops, our autonomous modules plug into your system and scale with your needs.</p>
        </div>
      </section>

      {/* Ask Chat Section */}
      <section>
        <h2 className="text-xl font-semibold mb-4">Meet Ask – Your Healthcare AI Expert</h2>
        <div className="bg-white shadow-md rounded-xl p-6 space-y-4">
          <div className="flex items-start gap-3">
            <div className="text-pink-500 font-bold text-xl">🤖</div>
            <p className="text-gray-700 text-sm">
              Welcome to Health! I’m Ask — here to support you with our portfolio and medical knowledge.
            </p>
          </div>
          <div className="flex items-center border rounded-md px-4 py-2">
            <input
              type="text"
              placeholder="Ask anything..."
              className="flex-1 outline-none text-sm"
            />
            <button className="text-green-600">
              <SendHorizonal size={18} />
            </button>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section>
        <h2 className="text-xl font-semibold mb-4">Case Studies</h2>
        <p className="text-gray-500 text-sm mb-6">Let’s see what we are doing…..</p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {[
            {
              title: 'RCM71',
              desc: 'Claims, coding, denials, and billing — handled by autonomous agents that cut costs by 30–50% and lift revenue by +3–5%.',
            },
            {
              title: 'Ops71',
              desc: 'Forecasting, workforce management, patient flow optimization — boosting capacity by 10–25% through intelligent orchestration.',
            },
            {
              title: 'Docu71',
              desc: 'Ambient note capture and EMR summarization — reducing documentation time by up to 30%, multilingual and workflow-native.',
            },
          ].map(({ title, desc }) => (
            <div key={title} className="bg-white border rounded-xl p-4 flex flex-col justify-between">
              <div>
                <img src={`/images/case-${title}.jpg`} alt={title} className="w-full h-32 object-cover rounded-md mb-3" />
                <h3 className="font-semibold">{title}</h3>
                <p className="text-sm text-gray-600 mt-1">{desc}</p>
              </div>
              <button className="mt-4 text-blue-600 text-sm font-medium hover:underline">Read more</button>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
