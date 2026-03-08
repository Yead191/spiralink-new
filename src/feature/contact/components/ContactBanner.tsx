import React from "react";
import Image from "next/image";
import ContactLeft from "./ContactLeft";
import ContactRight from "./ContactRight";

export default function ContactBanner() {
  return (
    <div className="relative min-h-screen pt-24 lg:pt-44 pb-12  overflow-hidden">
      {/* Background Overlay */}
      <div className="absolute inset-0 z-0 opacity-40 pointer-events-none" />

      <div className="container relative z-10 pb-14 ">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 2xl:gap-20 items-start">
          {/* Left Column */}
          <ContactLeft />
          {/* Right Column - Form */}
          <div className="hidden md:block">
            <ContactRight />
          </div>
        </div>
      </div>
    </div>
  );
}
