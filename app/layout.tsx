'use client';
import { Inter } from "next/font/google";
import NavBar from "./components/Navbar";
import Header from "./components/Header";
import "./globals.css";

export default function RootLayout({
  children,
  // pageName,
}: {
  children: React.ReactNode
  pageName: string;
}) {
  return (
    <html lang="en">
      <body className="flex flex-row h-screen bg-gray-900">
        <div><NavBar /></div>
        <div>
          <div><Header /></div>
          <div>{children}</div>
        </div>
      </body>
    </html>
  )
}