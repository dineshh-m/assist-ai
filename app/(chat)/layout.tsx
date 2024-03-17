import Sidebar from "@/app/ui/sidebar";
import { headers } from "next/headers";

export default function Layout({ children }: { children: React.ReactNode }) {
  const userId = String(headers().get("x-user-id"));
  return (
    <main>
      <div className="lg:h-screen lg:w-[250px] fixed z-10">
        <Sidebar userId={userId} />
      </div>
      <div className="ml-[0px] h-screen overflow-y-hidden lg:ml-[250px] z-20">
        {children}
      </div>
    </main>
  );
}