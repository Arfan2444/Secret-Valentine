"use client";

import Link from "next/link";
import React from "react";

function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-pink-200 px-6 py-4 flex justify-between items-center rounded-lg shadow-md z-50">
      <div className="text-lg font-bold text-pink-700 flex items-center">
        💖 Secret Valentine
      </div>
      <div className="flex gap-4">
        <Link
          href="/"
          className="text-lg font-bold text-pink-700 px-3 py-2 rounded-md transition duration-300 hover:bg-pink-700 hover:text-white"
        >
          Home
        </Link>
        <Link
          href="/Components/Send"
          className="text-lg font-bold text-pink-700 px-3 py-2 rounded-md transition duration-300 hover:bg-pink-700 hover:text-white"
        >
          Send Message
        </Link>
        <Link
          href="/Components/Messages"
          className="text-lg font-bold text-pink-700 px-3 py-2 rounded-md transition duration-300 hover:bg-pink-700 hover:text-white"
        >
          Message List
        </Link>
        <Link
          href="/Components/Compliments"
          className="text-lg font-bold text-pink-700 px-3 py-2 rounded-md transition duration-300 hover:bg-pink-700 hover:text-white"
        >
          Compliment Generator
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
