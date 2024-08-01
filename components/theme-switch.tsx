"use client";

import { useTheme } from "@/context/theme-context";
import Link from "next/link";
import React from "react";
import { BsMoon, BsSun, BsWhatsapp } from "react-icons/bs";

export default function ThemeSwitch() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="fixed bottom-5 right-5 flex flex-col gap-3">
      <Link
        target="_blank"
        href="https://api.whatsapp.com/send/?phone=5511948637739&text=Ol%C3%A1%2C%20encontrei%20seu%20site%20e%20estou%20muito%20interessado%20em%20aprender%20ingl%C3%AAs.%20Como%20posso%20come%C3%A7ar%3F&type=phone_number&app_absent=0"
        className=" bg-[#10ff60] w-[3rem] h-[3rem] backdrop-blur-[0.5rem] border border-green-700 dark:border-white border-opacity-40 shadow-2xl rounded-full flex items-center justify-center hover:scale-[1.15] active:scale-105 transition-all dark:bg-[#26a856]"
      >
        <BsWhatsapp color={theme === "light" ? "#16552b" : "#fff"} />
      </Link>
      <button
        className=" bg-white w-[3rem] h-[3rem] bg-opacity-80 backdrop-blur-[0.5rem] border border-white border-opacity-40 shadow-2xl rounded-full flex items-center justify-center hover:scale-[1.15] active:scale-105 transition-all dark:bg-gray-950"
        onClick={toggleTheme}
      >
        {theme === "light" ? <BsSun /> : <BsMoon />}
      </button>
    </div>
  );
}
