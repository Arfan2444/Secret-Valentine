"use client";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import React, { useState } from "react";
import { db } from "../../Config/firebaseconfig";
import Navbar from "../../Navbar";
import Swal from "sweetalert2";

function Send() {
  const [recipientName, setRecipientName] = useState("");
  const [recipientEmail, setRecipientEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    if (!recipientName || !recipientEmail || !message) {
      setLoading(false);
      return;
    }

    await addDoc(collection(db, "messages"), {
      name: recipientName,
      email: recipientEmail,
      text: message,
      timestamp: serverTimestamp(),
      revealed: false,
    });

    Swal.fire({
      title: "Success!",
      text: "Your sweet person will receive your message 🌹",
      icon: "success",
    }).then(() => {
      e.target.reset();
      setRecipientName("");
      setRecipientEmail("");
      setMessage("");
      setLoading(false);
    });
  };

  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-pink-100 p-6">
      <Navbar />
      <h1 className="text-3xl font-semibold text-pink-700 text-center mb-6 animate-pulse">
        Let Me Be Your Wingman. Confess or Compliment Your Crush Without Getting
        Caught!
      </h1>
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-lg bg-white shadow-lg p-6 rounded-lg space-y-4"
      >
        <input
          type="text"
          name="name"
          value={recipientName}
          onChange={(e) => setRecipientName(e.target.value)}
          placeholder="Recipient's Name"
          className="w-full p-3 border rounded-md focus:ring-2 focus:ring-pink-400"
          required
        />
        <input
          type="email"
          name="email"
          value={recipientEmail}
          onChange={(e) => setRecipientEmail(e.target.value)}
          placeholder="Recipient's Email"
          className="w-full p-3 border rounded-md focus:ring-2 focus:ring-pink-400"
          required
        />
        <textarea
          name="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Type your secret message..."
          className="w-full p-3 border rounded-md focus:ring-2 focus:ring-pink-400 min-h-[150px]"
          required
        ></textarea>
        <button
          type="submit"
          className="w-full bg-pink-500 text-white py-3 rounded-md hover:bg-pink-600 transition duration-200 shadow-md"
          disabled={loading}
        >
          {loading ? "Sending..." : "Just Send It Bro!!"}
        </button>
      </form>
    </section>
  );
}

export default Send;
