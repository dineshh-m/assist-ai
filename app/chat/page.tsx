import Sidebar from "@/app/ui/sidebar";
import Chat from "@/app/ui/chat";
import { conversation } from "../lib/data";
import { cookies, headers } from "next/headers";

export default function Home() {
  const userId = String(headers().get('x-user-id'));
  console.log("headers", headers().get('x-user-id'));
  return (
    <main>
      <div className="h-screen w-[250px] fixed">
        <Sidebar userId={userId} />
      </div>
      <div className="ml-[250px] h-screen overflow-y-hidden">
       <Chat userId={userId} conversationId=""/> 
      </div>
    </main>
  );
}
