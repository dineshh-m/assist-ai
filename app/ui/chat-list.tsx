import { Message } from "../lib/definitions";
import ChatMessage from "./chat-message";

export default function ChatList({
  messages,
  chatContainerRef,
}: {
  messages: Message[];
  chatContainerRef: React.RefObject<HTMLDivElement>;
}) {
  return (
    <div
      ref={chatContainerRef}
      className="w-full h-full flex flex-col gap-4 overflow-y-scroll scroll-smooth"
    >
      {messages.map((message) => (
        <ChatMessage key={message.id} message={message} />
      ))}
    </div>
  );
}