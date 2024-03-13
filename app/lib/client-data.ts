import { Auxilary, Message } from "@/app/lib/definitions";

export async function fetchChatHistory(conversationId: string) {
  try {
    const response = await fetch(`/api/chat/${conversationId}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const chatHistory = await response.json();
    return chatHistory;
  } catch (error) {
    console.log(error);
    throw new Error('Failed to fetch chat history');
  }
}

export async function fetchChatResponse(conversationId: string, prompt: string, messages: Message[]) {
  const url = `/api/chat/${conversationId}`;
  const contextHistory = convertAuxilary(messages);
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ message: prompt, contextHistory: contextHistory }),
  });
  const data = await response.json();
  return data;
}

export async function fetchHistory(userId: string) {
  const url = `/api/conversation/${userId}`;
  const response = await fetch(url, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    }
  });
  const data = await response.json();
  data.history.reverse();
  return data.history;
}

function convertAuxilary(messages: Message[]): Auxilary[] {
  const auxilary: Auxilary[] = [];
  for (const message of messages) {
    auxilary.push(message.content);
  }
  return auxilary;
}