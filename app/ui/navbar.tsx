"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [hidden, setHidden] = useState("hidden");
  const handleClick = () => {
    if (hidden === "hidden") {
      setHidden("");
      return;
    }
    setHidden("hidden");
  };

  return (
    <>
      <div className="border-b-[1px] shadow-sm   font-sans">
        <div className="w-full mx-auto px-4">
          <div className="flex justify-between">
            <div className="flex space-x-4 ">
              <div className="">
                <Link
                  href="#"
                  className="flex items-center py-5 px-2 text-gray-700 hover:text-gray-900">
                  {/* add logo svg file */}
                  <span className="font-bold">AssistAI</span>
                </Link>
              </div>
            </div>

            <div className="hidden md:flex items-center gap-3 space-x-1">
              <div className=" hidden md:flex items-center space-x-1 font-medium">
                <Link
                  href="#"
                  className="py-5 px-3 text-gray-700 hover:text-gray-900">
                  Home
                </Link>
                <Link
                  href="#"
                  className="py-5 px-3 text-gray-700 hover:text-gray-900">
                  Explore
                </Link>
                <Link
                  href="#"
                  className="py-5 px-3 text-gray-700 hover:text-gray-900">
                  Learn
                </Link>
                <Link
                  href="#"
                  className="py-5 px-3 text-gray-700 hover:text-gray-900">
                  Help
                </Link>
              </div>
              <Link
                href=""
                className="py-2 bg-[#1C91F2] px-3 font-bold rounded-lg text-white">
                Login
              </Link>
              <Link
                href=""
                className="py-2 px-3 bg-[#F0F2F5] font-bold  rounded-lg">
                Signup
              </Link>
            </div>

            {/* mobile screen */}
            <div className="md:hidden flex gap-4 items-center">
              <Link
                href=""
                className="py-2  bg-[#1C91F2] px-3 font-bold  rounded-lg text-white">
                Login
              </Link>
              <Link
                href=""
                className="py-2 px-3 bg-[#F0F2F5] font-bold  rounded-lg">
                Signup
              </Link>
              <button className="mobile-menu-button  " onClick={handleClick}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="w-6 h-6">
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
              </button>
            </div>
            {/* mobile screen ends */}
          </div>
        </div>

        <div className={`mobile-menu ${hidden} md:hidden `}>
          <Link
            href="#"
            className="block py-4 mx-4 font-medium px-4 text-sm hover:bg-gray-200">
            Home
          </Link>
          <Link
            href="#"
            className="block py-4 mx-4 font-medium px-4 text-sm hover:bg-gray-200">
            Explore
          </Link>
          <Link
            href="#"
            className="block py-4 mx-4 font-medium px-4 text-sm hover:bg-gray-200">
            Learn
          </Link>
          <Link
            href="#"
            className="block py-4 mx-4 font-medium px-4 text-sm hover:bg-gray-200">
            Help
          </Link>
        </div>
      </div>
    </>
  );
}
