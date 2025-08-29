"use client";

import { useEffect, useRef, useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

type ChatMessage = {
  id: string;
  role: "user" | "assistant";
  content: string;
};

export default function Ask71Chat() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [loading, setLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement | null>(null);

  const chips = [
    "Automate rule extraction from regulations",
    "ICD-10 suggestions for diabetes with neuropathy",
  ];

  useEffect(() => {
    requestAnimationFrame(() => {
      scrollRef.current?.scrollTo({
        top: scrollRef.current.scrollHeight,
        behavior: "smooth",
      });
    });
  }, [messages, loading]);

  const send = async (text?: string) => {
    const content = (text ?? input).trim();
    if (!content || loading) return;

    const user: ChatMessage = { id: `${Date.now()}`, role: "user", content };
    setMessages((p) => [...p, user]);
    setInput("");
    setLoading(true);
    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          messages: messages
            .concat(user)
            .map((m) => ({ role: m.role, content: m.content })),
        }),
      });
      if (!res.ok || !res.body) throw new Error("Network error");

      const reader = res.body.getReader();
      const decoder = new TextDecoder();
      const assistant: ChatMessage = { id: `${user.id}-a`, role: "assistant", content: "" };
      setMessages((p) => [...p, assistant]);

      let acc = "";
      while (true) {
        const { value, done } = await reader.read();
        if (done) break;
        acc += decoder.decode(value, { stream: true });
        setMessages((p) => p.map((m) => (m.id === assistant.id ? { ...m, content: acc } : m)));
      }
    } catch {
      setMessages((p) => [...p, { id: `${Date.now()}-err`, role: "assistant", content: "Sorry, something went wrong." }]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-4">
      <div className="flex items-start gap-3">
        <div className="size-8 rounded-md bg-white/10 grid place-items-center text-white/80">AI</div>
        <div className="flex-1">
          <p className="text-sm text-white/70">
            Welcome to Health71! I’m Ask71 — your AI Healthcare Agent. Before you sign in, explore how I can help you work smarter: from accelerating claims and coding to streamlining documentation and utilization. Ask me anything about my capabilities.
          </p>

          <div className="mt-3 flex flex-wrap gap-2">
            {chips.map((chip) => (
              <button key={chip} className="text-xs rounded-full border border-white/10 bg-white/5 px-3 py-1 text-white/70 hover:text-white hover:bg-white/10" onClick={() => send(chip)}>
                {chip}
              </button>
            ))}
          </div>

          <div ref={scrollRef} className="mt-3 max-h-[240px] overflow-y-auto space-y-2 pr-1">
            {messages.map((m) => (
              <div key={m.id} className={m.role === "user" ? "text-right" : "text-left"}>
                <div className={
                  "inline-block rounded-xl px-3 py-2 text-sm " +
                  (m.role === "user" ? "bg-white/10 border border-white/10" : "bg-black/30 border border-white/10")
                }>
                  {m.role === "assistant" ? (
                    <ReactMarkdown remarkPlugins={[remarkGfm]}>{m.content}</ReactMarkdown>
                  ) : (
                    m.content
                  )}
                </div>
              </div>
            ))}
            {loading && (
              <div className="text-left">
                <div className="inline-flex items-center gap-2 rounded-xl px-3 py-2 bg-black/30 border border-white/10">
                  <span className="inline-flex gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-white/70 animate-bounce [animation-delay:0ms]"></span>
                    <span className="w-1.5 h-1.5 rounded-full bg-white/70 animate-bounce [animation-delay:150ms]"></span>
                    <span className="w-1.5 h-1.5 rounded-full bg-white/70 animate-bounce [animation-delay:300ms]"></span>
                  </span>
                  <span className="text-xs text-white/70">Thinking…</span>
                </div>
              </div>
            )}
          </div>

          <div className="mt-3 flex items-center gap-2 rounded-xl border border-white/10 bg-black/30 px-3 py-2">
            <input
              className="flex-1 bg-transparent outline-none text-sm placeholder:text-white/40"
              placeholder={loading ? "Thinking…" : "Ask anything..."}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter" && !e.shiftKey) {
                  e.preventDefault();
                  send();
                }
              }}
            />
            <button className="rounded-lg bg-white/10 hover:bg-white/15 border border-white/10 px-3 py-1.5 text-sm text-white" onClick={() => send()} disabled={loading}>
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}


