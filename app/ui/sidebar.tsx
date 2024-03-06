import { chatHistory } from "../lib/data"
import ChatMessageInfo from "./chat-message-info"

export default function Sidebar() {
  return (
    <div className="w-full h-full bg-gray-50">
      <div className="w-full h-full px-3 py-2 flex flex-col items-start gap-3 overflow-y-auto no-scrollbar">
        {chatHistory.map((messageInfo) => (
          <ChatMessageInfo key={messageInfo.id} messageInfo={messageInfo} />
        ))}
      </div>
    </div>
  );
}