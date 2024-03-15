import Sidebar from "@/app/ui/sidebar";
import Chat from "@/app/ui/chat";
import { conversation } from "@/app/lib/data";
import { headers } from "next/headers";

export default function Home({ params }: { params: { chat_id: string }}) {
  const userId = String(headers().get('x-user-id'));
  console.log("Headers", headers().get('x-user-id'))
  console.log("user id", userId);
  return (
    <main>
      <div className="h-screen w-[250px] fixed">
        <Sidebar userId={userId} />
      </div>
      <div className="ml-[250px] h-screen overflow-y-hidden">
       <Chat userId={userId} conversationId={params.chat_id}/> 
      </div>
    </main>
  );
}