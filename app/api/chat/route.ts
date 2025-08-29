import { NextRequest } from "next/server";
import { streamText } from "ai";
import { createOpenAI } from "@ai-sdk/openai";

export const runtime = "edge";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json().catch(() => ({ messages: [] as never[] }));
    const { messages } = (body ?? {}) as { messages?: { role: "user" | "assistant" | "system"; content: string }[] };

    const systemMessage = {
      role: "system" as const,
      content:
        "You are a helpful healthcare coding and RCM assistant. Answer succinctly, avoid PHI, and include clinical disclaimers where appropriate. Prefer ICD-10 terminology when asked.",
    };

    const inputMessages = Array.isArray(messages) && messages.length > 0 ? [systemMessage, ...messages] : [systemMessage];

    const openai = createOpenAI({
      apiKey: process.env.AI71_FOUNDRY_API_KEY,
      baseURL: process.env.AI71_FOUNDRY_URL,
    });

    const result = streamText({
      model: openai("azure/gpt-4o"),
      messages: inputMessages,
    });

    return result.toTextStreamResponse();
  } catch (error: unknown) {
    return new Response(JSON.stringify({ error: (error as Error)?.message ?? "Unknown error" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}


