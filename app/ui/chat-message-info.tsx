'use client';
import { usePathname } from "next/navigation";
import { MessageInfo } from "../lib/definitions";
import Link from "next/link";
import clsx from "clsx";

export default function ChatMessageInfo({ messageInfo }: { messageInfo: MessageInfo}) {
    const pathname = usePathname();
    const currentConvoId = pathname.split('/')[2];

    return (
        <Link href={`/chat/${messageInfo.id}`} className={clsx("w-full px-2 py-2 hover:bg-gray-200 rounded-md", messageInfo.id === currentConvoId && "bg-gray-300 hover:bg-gray-300")}>
            <div className="w-full whitespace-nowrap overflow-x-hidden">{messageInfo.title}</div>
        </Link>
    )
}