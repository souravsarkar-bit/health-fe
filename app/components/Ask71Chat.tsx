"use client";

import { useEffect, useRef, useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import {CornerDownLeft} from 'lucide-react';

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
      const assistant: ChatMessage = {
        id: `${user.id}-a`,
        role: "assistant",
        content: "",
      };
      setMessages((p) => [...p, assistant]);

      let acc = "";
      while (true) {
        const { value, done } = await reader.read();
        if (done) break;
        acc += decoder.decode(value, { stream: true });
        setMessages((p) =>
          p.map((m) => (m.id === assistant.id ? { ...m, content: acc } : m))
        );
      }
    } catch {
      setMessages((p) => [
        ...p,
        {
          id: `${Date.now()}-err`,
          role: "assistant",
          content: "Sorry, something went wrong.",
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="rounded-2xl  bg-white shadow-lg rounded-xl p-6 backdrop-blur-sm p-4">
      <div className="flex items-start gap-5">
        <div className="size-8 rounded-md bg-white/10 grid place-items-center text-white/80">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="36"
            height="36"
            viewBox="0 0 36 36"
            fill="none"
          >
            <path
              d="M5.913 36C5.1444 36 4.3974 35.8542 3.6882 35.5662C2.9538 35.2692 2.295 34.8318 1.7316 34.2666C1.1682 33.7032 0.7308 33.0444 0.432 32.31C0.1458 31.6026 0 30.8538 0 30.087C0 29.3202 0.1458 28.5714 0.4338 27.8622C0.7308 27.1278 1.1682 26.469 1.7334 25.9056L15.8112 11.8278H5.9148C5.1174 11.8278 4.3416 11.6712 3.6126 11.3634C2.9088 11.0664 2.2752 10.6398 1.7334 10.0962C1.1898 9.55263 0.765 8.92083 0.4662 8.21703C0.1584 7.48803 0.0018 6.71223 0.0018 5.91483C0.0018 5.11743 0.1584 4.34163 0.4662 3.61263C0.7632 2.90883 1.1898 2.27523 1.7334 1.73343C2.277 1.18983 2.9088 0.765031 3.6126 0.466231C4.3416 0.158431 5.1174 0.00183105 5.9148 0.00183105H20.0826C24.165 0.00183105 27.8118 2.43903 29.3742 6.21003C30.9366 9.98103 30.0798 14.2848 27.1944 17.1702L10.0962 34.2684C9.5328 34.8318 8.874 35.2692 8.1396 35.568C7.4304 35.856 6.6816 36.0018 5.9148 36.0018L5.913 36ZM5.913 1.46703C4.725 1.46703 3.609 1.92963 2.7684 2.76843C1.9278 3.60903 1.467 4.72503 1.467 5.91303C1.467 7.10103 1.9296 8.21703 2.7684 9.05763C3.6072 9.89823 4.725 10.359 5.913 10.359H19.3518L2.7702 26.9424C1.9296 27.783 1.4688 28.899 1.4688 30.087C1.4688 31.275 1.9314 32.391 2.7702 33.2316C3.609 34.0722 4.7268 34.533 5.9148 34.533C7.1028 34.533 8.2188 34.0704 9.0594 33.2316L26.1576 16.1334C28.6236 13.6674 29.3544 9.99363 28.0206 6.77163C26.6868 3.54963 23.571 1.46883 20.0844 1.46883H5.913V1.46703Z"
              fill="#AFD8D4"
            />
            <path
              d="M30.0886 36.0001C29.2912 36.0001 28.5154 35.8435 27.7864 35.5357C27.0826 35.2387 26.449 34.8121 25.9072 34.2685C25.3636 33.7249 24.9388 33.0931 24.64 32.3893C24.3322 31.6603 24.1756 30.8845 24.1756 30.0871V14.8933C24.1756 13.2031 22.8004 11.8279 21.1102 11.8279H15.811L25.9054 1.73346C26.0314 1.60746 26.1682 1.48326 26.314 1.36086C27.4426 0.423058 28.8754 -0.0575423 30.346 0.00725773C31.8274 0.0720577 33.2188 0.684058 34.2682 1.73346C34.8316 2.29866 35.269 2.95566 35.5678 3.69006C35.8558 4.39926 35.9998 5.14626 35.9998 5.91486V30.0871C35.9998 30.8845 35.8432 31.6603 35.5354 32.3893C35.2384 33.0931 34.8118 33.7267 34.2682 34.2685C33.7246 34.8121 33.0928 35.2369 32.389 35.5357C31.66 35.8435 30.8842 36.0001 30.0868 36.0001H30.0886ZM19.3552 10.3591H21.1102C23.6086 10.3591 25.6426 12.3931 25.6426 14.8915V30.0853C25.6426 31.2733 26.1052 32.3893 26.944 33.2299C27.7828 34.0705 28.9006 34.5313 30.0886 34.5313C31.2766 34.5313 32.3926 34.0687 33.2332 33.2299C34.0738 32.3911 34.5346 31.2733 34.5346 30.0853V5.91306C34.5346 4.72506 34.072 3.60906 33.2332 2.77026C32.4448 1.98186 31.3972 1.52106 30.2848 1.47246C29.1796 1.42386 28.1032 1.78566 27.2536 2.48946C27.1402 2.58306 27.0394 2.67486 26.944 2.77026L19.3534 10.3609L19.3552 10.3591Z"
              fill="#F88265"
            />
          </svg>
        </div>
        <div className="flex-1">
          <p className="text-sm bg-basecard p-3 rounded-lg">
            Welcome to Health! I’m Ask — here to support you with our portfolio
            and medical knowledge.
          </p>

          {/* <div className="mt-3 flex flex-wrap gap-2">
            {chips.map((chip) => (
              <button
                key={chip}
                className="text-xs rounded-full border"
                onClick={() => send(chip)}
              >
                {chip}
              </button>
            ))}
          </div> */}

          <div
            ref={scrollRef}
            className="mt-3 max-h-[240px] overflow-y-auto space-y-2 pr-1"
          >
            {messages.map((m) => (
              <div
                key={m.id}
                className={m.role === "user" ? "text-right" : "text-left"}
              >
                <div
                  className={
                    "inline-block text-sm bg-basecard p-3 rounded-xl" 
                    // +
                    // (m.role === "user"
                    //   ? "bg-white/10 border border-white/10"
                    //   : "bg-black/30 border border-white/10")
                  }
                >
                  {m.role === "assistant" ? (
                    <ReactMarkdown remarkPlugins={[remarkGfm]}>
                      {m.content}
                    </ReactMarkdown>
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
        </div>
      </div>
      <div className="mt-8 flex items-center gap-2 rounded-xl  p-2 bg-basecard ">
        <input
          className="flex-1 bg-white outline-none text-sm rounded-xl h-10 px-3"
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
        <button
          className="rounded-lg bg-green-700 p-2 text-sm text-white"
          onClick={() => send()}
          disabled={loading}
        >
          <CornerDownLeft className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
}
