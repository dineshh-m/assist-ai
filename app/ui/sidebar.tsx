// 'use client';
import { useEffect, useState } from "react";
import ChatMessageInfo from "./chat-message-info"
import { fetchHistory } from "../lib/client-data";
import { getConversationHistory } from "../lib/server-data";
import Link from "next/link";

export default async function Sidebar({ userId }: { userId: string }) {
  // const [ history, setHistory ] = useState([]);
  // useEffect(() => {
    const history = await getConversationHistory(userId);
  // }, []);

  return (
    <div className="w-full h-full bg-gray-50 shadow-sm hidden lg:block">
      <div className="w-full flex justify-center mt-4">
        <Link
          className="border-solid border-gray-400 border-[1px]  rounded-full w-full mx-2 py-1 text-center"
          href="/chat/"
        >
          New Thread<span className="text-xl">+</span>
        </Link>
      </div>
      <div className="w-full h-full px-3 py-2 flex flex-col items-start gap-3 text-sm overflow-y-auto no-scrollbar">
        {history.map((messageInfo: any) => (
          <ChatMessageInfo key={messageInfo.id} messageInfo={messageInfo} />
        ))}
      </div>
    </div>
  );
}