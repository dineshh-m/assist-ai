import Sidebar from "@/app/ui/sidebar";
import Chat from "@/app/ui/chat";
import { conversation } from "@/app/lib/data";

export default function Home({ params }: { params: { chat_id: string }}) {
  return (
    <main>
      <div className="h-screen w-[250px] fixed">
        <Sidebar userId={conversation.user_id} />
      </div>
      <div className="ml-[250px] h-screen overflow-y-hidden">
       <Chat conversationId={params.chat_id}/> 
      </div>
    </main>
  );
}