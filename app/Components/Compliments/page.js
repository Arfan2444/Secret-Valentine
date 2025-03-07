"use client";
import React, { useState, useEffect } from "react";
import { FaHeart } from "react-icons/fa";

const compliments = [
  "Pyaar dosti hai... Aur dosti jo ek baar ho jaaye, usse bhoolna mumkin nahi… Tum meri zindagi ki woh kahani ho, jiska har lafz sirf tumse likha gaya hai.",
  "Agar tum muskura do, toh duniya roshan ho jaaye… Aur agar tum haath pakad lo, toh zindagi mukammal ho jaaye.",
  "Mujhe pata nahi tha ki pyaar ka ehsaas kya hota hai… Jab tak tum meri zindagi mein nahi aayi… Ab toh saans bhi sirf tumhare naam ki chalti hai.",
  "Har baar jab tum paas aati ho, dil ke har dhadkan mein sirf ek hi awaaz hoti hai… ‘Bas ruk jao, yahin… Hamesha ke liye.’",
  "Mujhe pyaar ka matlab nahi pata tha… Phir ek din tum mile… Aur tab se, zindagi ek khoobsurat kahani ban gayi.",
  "Mohabbat toh har kisi se ho jaati hai… Par jo ishq sirf ek hi shakhs se ho, wahi asli ishq hai… Aur mera ishq sirf tumho.",
];

const Page = () => {
  const [compliment, setCompliment] = useState(
    "Click the button to receive a compliment!"
  );
  const [hearts, setHearts] = useState([]);

  useEffect(() => {
    const audio = new Audio("/music.mp3");
    audio.loop = true;
    audio.play().catch((err) => console.log("Autoplay blocked:", err));

    return () => {
      audio.pause();
      audio.currentTime = 0;
    };
  }, []);

  const generateCompliment = () => {
    const randomIndex = Math.floor(Math.random() * compliments.length);
    setCompliment(compliments[randomIndex]);

    const newHearts = Array.from({ length: 10 }).map((_, index) => ({
      id: Date.now() + index,
      left: Math.random() * 100 + "vw",
      animationDuration: Math.random() * 2 + 3 + "s",
    }));

    setHearts((prevHearts) => [...prevHearts, ...newHearts]);

    setTimeout(() => {
      setHearts((prevHearts) => prevHearts.slice(10));
    }, 5000);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-pink-100 text-center p-6 relative overflow-hidden">
      {/* Background Music */}
      <audio src="/music.mp3" autoPlay loop />

      {/* Floating Hearts */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        {hearts.map((heart) => (
          <FaHeart
            key={heart.id}
            className="absolute text-red-500 text-2xl animate-float"
            style={{
              left: heart.left,
              animationDuration: heart.animationDuration,
            }}
          />
        ))}
      </div>

      {/* Compliment Text */}
      <p className="text-lg md:text-2xl font-bold text-red-700 mb-6 drop-shadow-md max-w-lg">
        {compliment}
      </p>

      {/* Button */}
      <button
        className="flex items-center gap-2 bg-red-500 text-white px-6 py-3 rounded-lg font-semibold text-lg shadow-md hover:bg-red-700 transition transform hover:scale-105"
        onClick={generateCompliment}
      >
        <FaHeart className="text-xl" /> Get Compliment
      </button>
    </div>
  );
};

export default Page;
