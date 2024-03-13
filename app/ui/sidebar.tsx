'use client';
import { useEffect, useState } from "react";
import ChatMessageInfo from "./chat-message-info"
import { fetchHistory } from "../lib/client-data";

export default function Sidebar({ userId }: { userId: string }) {
  const [ history, setHistory ] = useState([]);
  useEffect(() => {
    const initHistory = async () => {
      const convoHistory = await fetchHistory(userId);
      setHistory(convoHistory);
    };
    initHistory();
  }, []);

  return (
    <div className="w-full h-full bg-gray-50 shadow-sm">
      <div className="w-full h-full px-3 py-2 flex flex-col items-start gap-3 overflow-y-auto no-scrollbar">
        {history.map((messageInfo: any) => (
          <ChatMessageInfo key={messageInfo.id} messageInfo={messageInfo} />
        ))}
      </div>
    </div>
  );
}