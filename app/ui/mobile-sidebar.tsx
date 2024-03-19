'use client';
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import Link from "next/link";

import ChatMessageInfo from "./chat-message-info";
import { fetchHistory } from "../lib/client-data";
import Spinner from "./loading";

export default function MobileSidebar({
  userId,
  toggleSidebar
}: {
  userId: string;
  toggleSidebar: Dispatch<SetStateAction<boolean>>
}) {
    const [history, setHistory] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            const data = await fetchHistory(userId);
            setHistory(data);
        };
        fetchData();
    }, []);
    const handleCloseClick = () => {
        toggleSidebar(false);
    }
    return (
      <div className="w-full h-full py-3 px-2 bg-gray-50 shadow-sm">
        <div className="w-full flex justify-center">
          <Link
            className="border-solid border-gray-400 border-[1px]  rounded-full w-full mx-2 py-1 text-center"
            href="/chat/"
          >
            New Thread
          </Link>
          <button onClick={handleCloseClick}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18 18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        {!history.length ? (
          <div className="h-screen">
            <Spinner />
          </div>
        ) : (
          <div className="w-full h-full px-3 py-2 flex flex-col items-start gap-3 text-sm overflow-y-scroll no-scrollbar">
            {history.map((messageInfo: any) => (
              <ChatMessageInfo key={messageInfo.id} messageInfo={messageInfo} />
            ))}
          </div>
        )}
      </div>
    );
}