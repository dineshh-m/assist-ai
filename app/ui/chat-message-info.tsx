import { MessageInfo } from "../lib/definitions";
import Link from "next/link";

export default function ChatMessageInfo({ messageInfo }: { messageInfo: MessageInfo}) {
    return (
        <Link href={`/chat/${messageInfo.id}`} className="w-full px-2 py-2 hover:bg-gray-200 rounded-md">
            <div className="w-full whitespace-nowrap overflow-x-hidden">{messageInfo.title}</div>
        </Link>
    )
}