"use client";
import { collection, getDocs, where, query } from "firebase/firestore";
import React, { useState } from "react";
import Navbar from "../../Navbar";
import { db } from "../../Config/firebaseconfig";

function Message() {
  const [email, setEmail] = useState("");
  const [messages, setMessages] = useState([]);
  const [searched, setSearched] = useState(false);
  const [openedMessages, setOpenedMessages] = useState({}); // Track opened envelopes

  const fetchMessage = async () => {
    if (email.trim() === "") return;
    setSearched(true);

    const q = query(
      collection(db, "messages"),
      where("email", "==", email.toLowerCase())
    );

    const snapshot = await getDocs(q);
    const fetchedMessages = snapshot.docs.map((doc) => doc.data());

    setMessages(fetchedMessages);
  };

  const toggleOpen = (index) => {
    setOpenedMessages((prev) => ({
      ...prev,
      [index]: !prev[index], // Toggle open state
    }));
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-pink-100 text-pink-700 p-6">
      <Navbar />
      <h1 className="text-3xl font-bold mb-6">Check Your Messages</h1>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter your Email"
        className="w-full max-w-md p-3 border-2 border-pink-500 rounded-lg text-lg mb-4 focus:outline-none focus:ring-2 focus:ring-pink-400 shadow-sm"
      />
      <button
        className="bg-pink-500 text-white px-6 py-3 rounded-lg text-lg font-bold transition transform hover:bg-pink-600 hover:scale-105 animate-pulse"
        onClick={fetchMessage}
      >
        Check Messages
      </button>

      {searched && (
        <div className="mt-6 w-full max-w-2xl p-4 bg-white rounded-lg shadow-md text-center overflow-scroll">
          {messages.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {messages.map((msg, index) => (
                <div
                  key={index}
                  className={`relative envelope-container ${
                    openedMessages[index] ? "opened" : ""
                  }`}
                  onClick={() => toggleOpen(index)}
                >
                  <div className="envelope-flap"></div>
                  <div className="envelope-body">
                    <div className="letter">
                      <p className="font-bold">Message:</p>
                      <p>{msg.text}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-lg">No messages found for this email.</p>
          )}
        </div>
      )}
    </div>
  );
}

export default Message;
