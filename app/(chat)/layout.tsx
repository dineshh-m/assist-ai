import Sidebar from "@/app/ui/sidebar";
import { headers } from "next/headers";

export default function Layout({ children }: { children: React.ReactNode }) {
  const userId = String(headers().get("x-user-id"));
  return (
    <main>
      <div className="h-screen w-[250px] fixed">
        <Sidebar userId={userId} />
      </div>
      <div className="ml-[0px] h-screen overflow-y-hidden lg:ml-[250px]">
        {children}
      </div>
    </main>
  );
}