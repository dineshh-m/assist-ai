import Sidebar from "@/app/ui/sidebar";
import Chat from "@/app/ui/chat";

export default function Home() {
  return (
    <main>
      <div className="h-screen w-[250px] fixed">
        <Sidebar />
      </div>
      <div className="ml-[250px] h-screen overflow-y-hidden">
       <Chat /> 
      </div>
    </main>
  );
}
