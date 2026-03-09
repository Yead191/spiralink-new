"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { LuArrowUpRight } from "react-icons/lu";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  navItems: { labelKey: string; href: string }[];
  pathname: string;
}

export default function MobileMenu({
  isOpen,
  onClose,
  navItems,
  pathname,
}: MobileMenuProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-40 flex flex-col pt-8 overflow-y-auto lg:hidden animate-in fade-in slide-in-from-top-4 duration-500 bg-black">
      {/* Background Image / Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/assets/bg/nav/mobile-menu.png"
          alt="Menu Background"
          fill
          className="object-cover"
          draggable={false}
        />
        {/* Dark Overlay to ensure readability and cover background content */}
        {/* <div className="absolute inset-0 bg-[#050505]/95 backdrop-blur-xl"></div> */}
      </div>

      <div className="relative z-10 flex flex-col min-h-full px-8 pb-4 text-center">
        {/* Menu Items */}
        <div className="flex flex-col grow justify-center space-y-4 md:space-y-12 pb-8 pt-4">
          {navItems.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              onClick={onClose}
              className={`text-3xl md:text-4xl font-semibold tracking-tight transition-all duration-300 transform hover:translate-x-2 ${
                item.href === pathname
                  ? "text-white"
                  : "text-white/70 hover:text-white"
              }`}
            >
              {item.labelKey}
            </Link>
          ))}
        </div>

        {/* Bottom Buttons */}
        <div className="flex flex-col gap-4 w-full">
          <Link
            href="/contact"
            onClick={onClose}
            className="flex items-center justify-center gap-2 bg-white text-black py-2 rounded-full text-lg font-semibold transition-transform active:scale-95"
          >
            Contact us <LuArrowUpRight size={22} />
          </Link>
          <Link
            href="/demo"
            onClick={onClose}
            className="flex items-center justify-center gap-2 bg-linear-to-r from-[#7D3BB7] to-[#2C4C91] text-white py-2 rounded-full text-lg font-semibold shadow-[0_0_20px_rgba(125,59,183,0.3)] transition-transform active:scale-95"
          >
            Request a demo <LuArrowUpRight size={22} />
          </Link>
        </div>
      </div>
    </div>
  );
}
