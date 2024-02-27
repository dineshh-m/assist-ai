import Image from "next/image";
import config from "@/tailwind.config";
import logo from "./assets/logo.png";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className=" border-solid border-b-2 border-gray-100 shadow-md w-full box-border h-16 flex items-center justify-between py-3 px-10 text-lg text-gray font-public-sans border-b-1 border-gainsboro bg-white">
        <div className="h-full flex items-center justify-start">
          <div className="h-full flex items-center justify-start space-x-2">
            <Image
              className="w-10 rounded-full"
              priority
              src={logo}
              alt="logo"
            />
            <span className=" font-bold text-black">AssistAI</span>
          </div>
        </div>
        <div className="flex items-center justify-end space-x-10 ">
          <Link className=" text-black text-base" href="#">
            Home
          </Link>
          <Link className=" text-black text-base" href="#">
            Explore
          </Link>
          <Link className=" text-black text-base" href="#">
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
      <main className="flex flex-col items-center  min-h-screen p-24 bg-white relative">
        <div className="w-full mx-8 bg-cover bg-center h-[60vh] rounded-lg shadow-md overflow-hidden bg-images">
          <div className="px-4 pt-64 sm:px-6">
            <h1 className="font-bold text-3xl leading-6 text-neutral-50 mt-40">
              Discover the power of GovBot
            </h1>
            <p className="mt-4 text-[16px] max-w-2xl text-neutral-50">
              Your personal guide to government programs and services
            </p>
          </div>
          <div className="px-4 pt-10 sm:pb-40">
            <button className="py-2 px-4 bg-blue-500 hover:bg-blue-700 text-white font-bold rounded">
              Get Started
            </button>
          </div>
        </div>
        <div className="w-full">
          <h1 className=" text-3xl font-bold text-black mt-8">
            Why use GovBot?
          </h1>
          <p className="mt-1 text-[16px] max-w-2xl text-black font-semibold justify-normal">
            GovBot is a free service that helps you navigate the complex world
            of government programs and services. Whether you're looking for
            information on how to apply for a passport, renew your driver's
            license, or get help with your student loans, we're here to help.
          </p>
          <div className="my-6 mx-2 px-3"></div>
          <div className="flex gap-4 mt-20">
            <div className="bg-addimg flex-auto w-32 h-72 rounded-lg"></div>
            <div className="bg-addimg flex-auto w-32 h-72 rounded-lg"></div>
            <div className="bg-addimg flex-auto w-32 h-72 rounded-lg"></div>
          </div>
          <div className="flex justify-center items-center">
            <div className="max-w-2xl text-center">
              <h1 className="text-3xl font-bold text-black mt-8">
                Not sure where to start?
              </h1>
              <p className="mt-4 text-lg text-black font-semibold">
                Tell us about yourself, and we'll suggest some popular topics
                you might be interested in.
              </p>
            </div>
          </div>
          <div className="my-6 mx-2 px-3 flex justify-center">
            <button className="py-2 px-4 bg-blue-500 hover:bg-blue-700 text-white font-bold rounded ">
              Get Started
            </button>
          </div>
        </div>
      </main>
    </>
  );
}
