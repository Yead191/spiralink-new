"use client";
import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";
import Image from "next/image";

export default function ContactRight() {
  const [activeAccordion, setActiveAccordion] = useState<number[]>([
    1, 2, 3, 4, 5, 6,
  ]);
  const [callAbout, setCallAbout] = useState<string>("Password resets");
  const [contextAbout, setContextAbout] =
    useState<string>("Specific workflows");

  const toggleAccordion = (index: number) => {
    setActiveAccordion((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index],
    );
  };

  const inputStyle = {
    background:
      "linear-gradient(304.65deg, rgba(255, 255, 255, 0.05) 13.81%, rgba(153, 153, 153, 0.0332332) 33.55%, rgba(153, 153, 153, 0.0125) 81.13%)",
    backdropFilter: "blur(45px)",
  };

  return (
    <section>
      <div
        style={{
          background:
            "linear-gradient(304.65deg, rgba(255, 255, 255, 0.05) 13.81%, rgba(153, 153, 153, 0.0332332) 33.55%, rgba(153, 153, 153, 0.0125) 81.13%)",
        }}
        className="border border-white/10 rounded-3xl p-6 lg:p-8"
      >
        <div className="mb-8">
          <h2 className="text-2xl lg:text-[40px] font-semibold mb-2 tracking-[-6%] leading-[40px] lg:leading-[56px]">
            The form — <br /> Get in touch with us
          </h2>
        </div>

        <form className="space-y-6">
          {/* Section 1: About you */}
          <div className="space-y-4">
            <div className="space-y-4">
              <div className="grid grid-cols-1 gap-4">
                <div className="flex flex-col gap-2">
                  <label className="text-xs lg:text-[16px] text-white/80 ml-1 ">
                    Full name*
                  </label>
                  <input
                    type="text"
                    placeholder="John"
                    style={inputStyle}
                    className="w-full rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#A78BFA] transition-colors border border-white/10"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-xs lg:text-[16px] text-white/80 ml-1">
                  Work email*
                </label>
                <input
                  type="email"
                  placeholder="john.smith@example.com"
                  style={inputStyle}
                  className="w-full rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#A78BFA] transition-colors border border-white/10"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-xs lg:text-[16px] text-white/80 ml-1">
                  Company / Organization{" "}
                  <span className="text-sm"> (optional)</span>
                </label>
                <input
                  type="text"
                  placeholder="Spiralink INC"
                  style={inputStyle}
                  className="w-full rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#A78BFA] transition-colors border border-white/10"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-xs lg:text-[16px] text-white/80 ml-1">
                  Phone number <span className="text-gray-600">(optional)</span>
                </label>
                <input
                  type="tel"
                  placeholder="Only if email doesn't reach you"
                  style={inputStyle}
                  className="w-full rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#A78BFA] transition-colors border border-white/10"
                />
                <p className="text-sm text-primary">
                  We only call if you specifically prefer phone contact.
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-xs lg:text-[16px] text-white/80 ml-1">
              How can we help?*
            </label>
            <div className="relative">
              <select
                style={inputStyle}
                className="w-full rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#A78BFA] transition-colors appearance-none text-gray-300 border border-white/10"
              >
                <option className="bg-[#111]">General Questions</option>
                <option className="bg-[#111]">Partnership</option>
                <option className="bg-[#111]">Other</option>
              </select>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-xs lg:text-[16px] text-white/80 ml-1">
              Message*
            </label>
            <div className="flex flex-col gap-2">
              <textarea
                placeholder="Tell us briefly what you’re reaching out about..."
                rows={3}
                style={inputStyle}
                className="w-full rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#A78BFA] transition-colors resize-none border border-white/10 text-white placeholder:text-gray-500"
              ></textarea>
            </div>
          </div>
        </form>
        <button
          style={{
            background: "linear-gradient(135deg, #7D3BB7 0%, #2C4C91 100%)",
            backdropFilter: "blur(45px)",
            boxShadow: "-9px 11px 48px 0px #BC72F873",
            border: "1.5px solid",
            borderImageSource:
              "linear-gradient(90deg, #C175FC 0%, #6C35BE 100%)",
          }}
          type="submit"
          className="w-full  text-white font-semibold py-4 rounded-full transition-all cursor-pointer!  hover:scale-105! relative z-10 lg:my-16 mt-6 mb-10"
        >
          Send Message
        </button>
      </div>
    </section>
  );
}
