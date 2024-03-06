import { conversationHistory } from "@/app/lib/data";
import { Auxilary } from "@/app/lib/definitions";
import {
  GoogleGenerativeAI,
  HarmCategory,
  HarmBlockThreshold,
} from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.GOOGLE_GEN_AI_KEY || "");
const MODEL_NAME = "gemini-1.0-pro";

export async function POST(request: Request) {
  // Get the message prompt from the user
  const { message, contextHistory }: { message: string, contextHistory: Auxilary[] } = await request.json();
  console.log(contextHistory);
  // Creating and configuring the model
  const model = genAI.getGenerativeModel({ model: MODEL_NAME });
  const generationConfig = {
    temperature: 0.9,
    topK: 1,
    topP: 1,
    maxOutputTokens: 2048,
  };
  const safetySettings = [
    {
      category: HarmCategory.HARM_CATEGORY_HARASSMENT,
      threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
    },
    {
      category: HarmCategory.HARM_CATEGORY_HATE_SPEECH,
      threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
    },
    {
      category: HarmCategory.HARM_CATEGORY_SEXUALLY_EXPLICIT,
      threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
    },
    {
      category: HarmCategory.HARM_CATEGORY_DANGEROUS_CONTENT,
      threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
    },
  ];

  // Configuring the chat with the conversation history
  const chat = model.startChat({
    generationConfig,
    safetySettings,
    history: [...conversationHistory, ...contextHistory],
  });

  // Awaiting the model output and return response
  const result = await chat.sendMessage(message);
  const response = await result.response;
  const text = response.text();
  return Response.json({ text });
}