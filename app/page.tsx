import Image from "next/image";
import config from "@/tailwind.config";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between min-h-screen p-24 bg-white relative">
      <div className="w-full mx-8 bg-cover bg-center h-96 rounded-lg shadow-md overflow-hidden bg-images">
        <div className="px-4 pt-52 sm:px-6">
          <h1 className="font-bold text-3xl leading-6 text-neutral-50">
            Discover the power of GovBot
          </h1>
          <p className="mt-1 text-sm max-w-2xl text-neutral-50">
            Your personal guide to government programs and services
          </p>
        </div>
        <div className="px-4 pt-16 sm:px-6">
          <button className="py-2 px-4 bg-blue-500 hover:bg-blue-700 text-white font-bold rounded">
            Get Started
          </button>
        </div>
      </div>
      <div className="w-full">
        <h1 className="pl-8 text-3xl font-bold text-black mt-8">
          Why use GovBot?
        </h1>
      </div>
    </main>
  );
}
