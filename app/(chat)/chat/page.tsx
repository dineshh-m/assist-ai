import Sidebar from "@/app/ui/sidebar";
import Chat from "@/app/ui/chat";
import { cookies, headers } from "next/headers";

export default function Home() {
  const userId = String(headers().get("x-user-id"));
  console.log("headers", headers().get("x-user-id"));
  return <Chat userId={userId} conversationId="" />;
}
