import React from "react";

export default function GlowingTag({ text }: { text: string }) {
  return (
    <div
      style={{
        background: "#010403A6",
        backdropFilter: "blur(45px)",
        boxShadow: "-9px 11px 48px 0px #BC72F873",
      }}
      className="inline-flex items-center gap-0.5 lg:gap-2 px-4 lg:px-8 py-2 md:py-3 rounded-full border-[1.5px] border-[#6C35BE] "
    >
      <span className="text-gray-300 text-[10px] md:text-[18px] font-medium tracking-wide text-nowrap">
        {text}
      </span>
    </div>
  );
}
