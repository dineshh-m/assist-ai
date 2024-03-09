import Link from "next/link";
import Image from "next/image";
import logo from "@/app/assets/logo.png";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      {/* NavBar Starts */}
      <div className="shadow-md w-full box-border h-16 inline-flex items-center justify-between py-3 px-10 text-lg text-gray font-public-sans border-b-1 border-gainsboro bg-white">
        <div className="h-full flex items-center justify-start">
          <div className="h-full flex items-center justify-start space-x-2">
            <span className=" font-bold text-black">AssistAI</span>
          </div>
        </div>
        <div className=" inline-flex items-center justify-end space-x-10 ">
          <Link className=" text-black text-base" href="/">
            Home
          </Link>
          <Link className=" text-black text-base" href="/explore">
            Explore
          </Link>
          <Link className=" text-black text-base" href="/learn">
            Learn
          </Link>
          <Link className=" text-black text-base" href="#">
            Help
          </Link>
          <button className="rounded-lg  bg-blue-500 text-white py-2 px-4 font-bold text-base">
            Login
          </button>
          <button className="rounded-xl bg-[#F0F2F5] text-black py-2 px-4 font-bold text-base">
            Sign up
          </button>
        </div>
      </div>
      {/* NavBar Ends */}
      <div>{children}</div>
    </>
  );
}
