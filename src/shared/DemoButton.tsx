import Link from "next/link";
import React from "react";

export default function DemoButton() {
  return (
    <Link
      href="/demo"
      className="px-6 py-3 rounded-full flex items-center gap-2 transition-transform hover:scale-105 font-medium text-white w-fit"
      style={{
        background: "linear-gradient(135deg, #7D3BB7 0%, #2C4C91 100%)",
        backdropFilter: "blur(45px)",
        boxShadow: "-9px 11px 48px 0px #BC72F873",
        border: "1.5px solid",
        borderImageSource: "linear-gradient(90deg, #C175FC 0%, #6C35BE 100%)",
      }}
    >
      Request free tailored demo
      <svg
        width="10"
        height="10"
        viewBox="0 0 12 12"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M1 11L11 1M11 1H3M11 1V9"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </Link>
  );
}
