'use client';
import PromptInput from "@/app/ui/prompt-input";
import ChatList from "./chat-list";
import { fetchChatResponse } from "@/app/lib/data";
import { useEffect, useRef, useState } from "react";
import { Message } from "../lib/definitions";

export default function Chat() {
    const [ messages, setMessages] = useState<Message[]>([]);
    const [ prompt, setPrompt ] = useState('');
    const [isGenerating, setIsGenerating] = useState(false); // for disabling the send button when the content is generating.
    const chatContainerRef = useRef<HTMLDivElement>(null); 
    useEffect(() => {
        if (chatContainerRef.current) {
            chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
        }
    }, [messages]);

    const handleClick = async () => {
      // Checking whether the prompt is empty
      if (prompt) {
        setIsGenerating(true);
        // Pushing the user message
        setMessages((messages) => [
          ...messages,
          { id: generateUniqueId(), role: "user", message: prompt, content: { role: "user", parts: [ { text: prompt} ]} },
        ]);
        // Setting the input field empty
        setPrompt("");
        // Pushing a dummy message i.e with an empty string as message
        setMessages((messages) => [
          ...messages,
          { id: generateUniqueId(), role: "model", message: "", content: { role: "model", parts: [{ text: ""}]}},
        ]);
        // Fetching data
        const data = await fetchChatResponse(prompt, messages);
        // Applying the returned response to the chat
        setMessages((messages) => {
          const finalMessages = [...messages];
          const responseMessage = finalMessages[finalMessages.length - 1];
          responseMessage.content.parts[0].text = data.text
          finalMessages[finalMessages.length - 1] = responseMessage;
          return [
            ...finalMessages,
          ];
        });
        setIsGenerating(false);
      }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPrompt(e.target.value);
    }

    const handleKeyPress = (e: React.KeyboardEvent) => {
      if (e.key === 'Enter') {
        document.getElementById("send-btn")?.click();
      }
    }
    return (
      <>
        <div className="pb-[6rem] w-full h-full overflow-y-hidden">
          <ChatList messages={messages} chatContainerRef={chatContainerRef} />
        </div>
        <PromptInput
          prompt={prompt}
          isGenerating={isGenerating}
          handleChange={handleChange}
          handleClick={handleClick}
          handleKeyPress={handleKeyPress}
        />
      </>
    );
}

function generateUniqueId() {
  // Generate a random string
  const randomString = Math.random().toString(36).substring(2, 10);
  // Get the current timestamp
  const timestamp = Date.now().toString(36);
  // Concatenate random string and timestamp to create unique ID
  const uniqueId = randomString + timestamp;
  return uniqueId;
}