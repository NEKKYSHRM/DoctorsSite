"use client";

import React, {useState} from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Header() {
  const [isLoggedIn, setIsLoggedIn] = React.useState(null);

  const router = useRouter();

  function nav() {
    router.push("/login")
  }

  return (
    <div className="w-full bg-blue-50 flex py-2 px-4 lg:py-4 lg:px-12 xl:px-20 sm:px-6 items-center justify-between">
      <div className="font-bold text-blue-700 md:text-2xl">Logo</div>
      <div className="flex items-center justify-between gap-3 sm:gap-5 lg:gap-8">
        <ul className="flex text-[9px] text-gray-400 gap-1 lg:gap-6 sm:gap-3 sm:text-xs lg:text-sm">
          <li>
            <Link href="/">
              Home
            </Link>
          </li>
          <li>
            <Link href="#">
              About Us
            </Link>
          </li>
          <li>
            <Link href="#">
              Contact Us
            </Link>
          </li>
          <li>
            <Link href="#">
              Services
            </Link>
          </li>
        </ul>
        {isLoggedIn ? "Visit Profile" : <button onClick={nav} className="bg-blue-700 hover:bg-blue-500 text-white text-[9px] sm:text-xs lg:text-base px-2 py-1 lg:px-5 md:px-3 cursor-pointer rounded-sm">
          Login
        </button>}
        
        
      </div>
    </div>
  );
}
