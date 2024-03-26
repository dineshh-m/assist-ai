import Sidebar from "@/app/ui/sidebar";
import Chat from "@/app/ui/chat";
import { cookies, headers } from "next/headers";
import MobileSidebar from "@/app/ui/mobile-sidebar";

export default function Home() {
  const userId = String(headers().get("x-user-id"));
  return <Chat userId={userId} conversationId=""/>;
}
