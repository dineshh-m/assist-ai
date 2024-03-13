import { conversationHistory, fetchChatHistory } from "@/app/lib/data";
import { Auxilary } from "@/app/lib/definitions";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { sql } from "@vercel/postgres";
import { conversation as convo } from "@/app/lib/data";
import { getCurrentTimestamp } from "@/app/lib/util";
import { createConversation, fetchChatResponseFromModel } from "@/app/lib/server-data";


// This function is called for new conversation history creeation
export async function POST(request: Request) {
  // Get the message prompt from the user
  const {
    message,
    contextHistory,
  }: { message: string; contextHistory: Auxilary[] } = await request.json();
  const userTimestamp = getCurrentTimestamp();
  // TODO
  // 1. Check if the user is authenticated if yes get his user_id
  // 2. create a conversation in the database with the associated user_id and get the conversation id
  // 3. Store messages in the server with the conversation_id
  // 4. Return the conversation_id along with the conversation response from the model
  // 5. IN CLIENT: update the URL to reflect the latest conversation


  const text = await fetchChatResponseFromModel([...conversationHistory, ...contextHistory], message);
  const modelTimestamp = getCurrentTimestamp();

  const conversation = await createConversation(convo.user_id, text);

  const insertedRows = await sql`
    INSERT INTO messages (conversation_id, role, message, generated_timestamp) 
      VALUES 
        (${conversation.conversation_id}, 'user', ${message}, ${userTimestamp}),
        (${conversation.conversation_id}, 'model', ${text}, ${modelTimestamp})
      RETURNING conversation_id
    ;
  `;

  const response = {
    conversationId: conversation.conversation_id,
    message: text,
  }

  return Response.json(response);
}