"use client";
import React, { useState, useEffect, useRef } from "react";
import { MenuOutlined } from "@ant-design/icons";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import navItems from "@/constants/navItem";
import { LuArrowUpRight } from "react-icons/lu";
import MobileMenu from "./components/MobileMenu";

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const lastScrollTop = useRef(0);

  useEffect(() => {
    // Prevent body scroll when menu is open
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [menuOpen]);

  useEffect(() => {
    const handleScroll = () => {
      const bannerHeight = document.getElementById("banner")?.offsetHeight || 0;
      const scrollY = globalThis.scrollY;
      setIsScrolled(scrollY > bannerHeight - 80);

      // Hide/show logic
      if (scrollY > lastScrollTop.current && scrollY > 100) {
        // scrolling down
        if (!menuOpen) setShowNavbar(false);
      } else {
        // scrolling up
        setShowNavbar(true);
      }

      lastScrollTop.current = scrollY <= 0 ? 0 : scrollY;
    };

    globalThis.addEventListener("scroll", handleScroll);
    return () => globalThis.removeEventListener("scroll", handleScroll);
  }, [menuOpen]);

  return (
    <>
      <nav
        className={`fixed top-0 z-50 w-full transition-all duration-500 navbar-container px-4 mt-4 ${
          showNavbar ? "translate-y-0" : "-translate-y-28"
        }`}
      >
        <div
          className={`container mx-auto px-2 lg:px-4 py-0.5 lg:py-2 transition-colors duration-300 bg-[#374151]/15 rounded-full`}
          style={{
            backdropFilter: "blur(10px) saturate(120%)",
            WebkitBackdropFilter: "blur(10px) saturate(120%)",
          }}
        >
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link
              href={"/"}
              className="shrink-0 "
              onClick={() => setMenuOpen(false)}
            >
              <Image
                src="/logo.png"
                alt="VIAJIA Logo"
                width={600}
                height={100}
                className="h-[30px] w-fit object-contain"
                draggable={false}
              />
            </Link>

            {/* Desktop Navigation Links */}
            <div className="hidden lg:flex items-center gap-8">
              {navItems?.map((item, index) => (
                <Link
                  key={index}
                  href={item.href}
                  className={`text-sm lg:text-xs 2xl:text-sm transition-all duration-300 ${
                    item.href === pathname
                      ? "text-[#FFFFFF]"
                      : "text-[#FFFFFF]/60 hover:text-[#FFFFFF]"
                  }`}
                >
                  {item.labelKey}
                </Link>
              ))}
            </div>

            {/* Right Section */}
            <div className="flex items-center gap-4">
              {/* Contact & Request Demo Buttons */}
              <div className="hidden lg:flex items-center gap-4">
                <Link
                  href="#"
                  className="flex items-center gap-2 bg-[#1d1f22] hover:bg-[#2F2F2F] text-white px-5 py-2.5 rounded-full transition-colors text-sm font-medium"
                >
                  Contact <LuArrowUpRight />
                </Link>
                <Link
                  href="/demo"
                  className="flex items-center gap-2 bg-linear-to-r from-[#7D3BB7] to-[#2C4C91] hover:opacity-90 text-white px-5 py-2.5 rounded-full transition-all text-sm font-medium"
                >
                  Request demo <LuArrowUpRight />
                </Link>
              </div>

              {/* Mobile Menu Icon */}
              <button
                className="lg:hidden text-2xl text-white transition-all duration-300 p-2"
                onClick={() => setMenuOpen(!menuOpen)}
              >
                {menuOpen ? <X size={24} /> : <Menu />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Custom Mobile Mega Menu */}
      <MobileMenu
        isOpen={menuOpen}
        onClose={() => setMenuOpen(false)}
        navItems={navItems || []}
        pathname={pathname}
      />
    </>
  );
}
