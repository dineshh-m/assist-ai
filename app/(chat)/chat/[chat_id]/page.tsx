import Chat from "@/app/ui/chat";
import { headers } from "next/headers";
import Sidebar from "@/app/ui/sidebar";
import MobileSidebar from "@/app/ui/mobile-sidebar";

export default function Home({ params }: { params: { chat_id: string } }) {
  const userId = String(headers().get("x-user-id"));
  return <Chat userId={userId} conversationId={params.chat_id} />;
}
