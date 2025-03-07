import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./Navbar";
import BackgroundMusic from "./images/Backgroundmusic";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Secret Valentine",
  description: "Created By Byte Brothers",
  icons: "/in-love.png", // This sets the favicon
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar></Navbar>
        <BackgroundMusic></BackgroundMusic>
        {children}
      </body>
    </html>
  );
}
