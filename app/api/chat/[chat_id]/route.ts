import { conversationHistory, fetchChatHistory } from "@/app/lib/data";
import { getCurrentTimestamp } from "@/app/lib/util";
import { fetchChatResponseFromModel } from "@/app/lib/server-data";
import type { Auxilary } from "@/app/lib/definitions";
import { sql } from "@vercel/postgres";

export async function GET(request: Request, { params }: { params: { chat_id: string }}) {
  const conversationId = params.chat_id;
  const chatHistory = await fetchChatHistory(conversationId);
  return Response.json(chatHistory)
}

export async function POST(request: Request, { params }: { params: { chat_id: string }}) {
  const conversationId = params.chat_id;
  const {
    message,
    contextHistory,
  }: { message: string; contextHistory: Auxilary[] } = await request.json();
  const userTimestamp = getCurrentTimestamp();

  const text = await fetchChatResponseFromModel([...conversationHistory, ...contextHistory], message);  
  const modelTimestamp = getCurrentTimestamp();

  const insertedRows = await sql`
    INSERT INTO messages (conversation_id, role, message, generated_timestamp)
      VALUES
        (${conversationId}, 'user', ${message}, ${userTimestamp}),
        (${conversationId}, 'model', ${text}, ${modelTimestamp})
    ;
  `;

  const response = {
    conversationId: conversationId,
    message: text,
  }
  return Response.json(response);
}