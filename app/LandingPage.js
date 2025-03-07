"use client";
import Link from "next/link";
import React from "react";
import Navbar from "./Navbar";

import { FaHeart, FaRegHeart, FaGift, FaEnvelope } from "react-icons/fa";

function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen bg-cover bg-center bg-fixed px-5 bg-pink-100 text-pink-700 p-6">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center text-white h-screen p-5 relative z-10">
        <h1 className="text-4xl font-bold uppercase flex items-center gap-3 text-purple-400 animate-pulse">
          <FaHeart className="text-3xl text-red-500 animate-bounce" /> Welcome
          to Secret Valentine 💌
          <FaRegHeart className="text-3xl text-red-500 animate-bounce" />
        </h1>

        <div className="mt-5 max-w-xl text-lg font-medium text-pink-500 bg-gradient-to-r from-yellow-100 to-red-100 p-4 rounded-lg shadow-md">
          <p>Too shy to compliment your crush? We got you!</p>
          <p>
            Send a{" "}
            <span className="font-bold text-red-500">Secret Message</span> to
            your loved one anonymously, revealed only on{" "}
            <span className="font-bold text-red-500">February 13</span>.
          </p>
        </div>

        {/* Buttons */}
        <div className="flex gap-5 mt-6">
          <Link href="/Components/Send">
            <button className="flex items-center gap-2 text-lg font-bold px-6 py-3 bg-gradient-to-r from-pink-500 to-red-400 text-white rounded-full shadow-lg transition-transform transform hover:scale-110">
              <FaEnvelope className="text-xl" /> Start Sending 💘
            </button>
          </Link>
          <Link href="/Components/Messages">
            <button className="flex items-center gap-2 text-lg font-bold px-6 py-3 bg-gradient-to-r from-pink-500 to-red-400 text-white rounded-full shadow-lg transition-transform transform hover:scale-110">
              <FaGift className="text-xl" /> Check Messages
            </button>
          </Link>
        </div>
      </section>

    </div>
  );
}

export default LandingPage;
