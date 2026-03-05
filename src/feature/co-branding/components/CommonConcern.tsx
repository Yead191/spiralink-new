"use client";
import React, { useState } from "react";
import BadgeHero from "@/shared/BadgeHero";
import { Plus, X } from "lucide-react";
import { accordionData } from "@/constants/accordionData";

export default function CommonConcern() {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  return (
    <section className="container py-8 md:py-16   relative">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-start relative">
        {/* Left Column */}
        <div className="flex flex-col items-start gap-4 md:gap-6 relative pl-6 md:pl-0">
          <BadgeHero label="A common concern" />
          <h2 className="box-title max-w-[500px] text-balance">
            “What if your competitors see?”
          </h2>
          <div className="section-subtitle space-y-4 md:space-y-6 relative">
            <p className="max-w-[450px]">
              A common concern: “If competitors see I work with SpiraLink, they
              will contact you too.”
            </p>
            <p className="point-heading">Here is why that fear is misplaced:</p>
            {/* small and large screen svg */}
            <svg
              className="absolute -left-[1478%] lg:-left-[1538%]   h-[274px] -top-[140px] lg:h-[400px] lg:-top-[250px]  z-0  pointer-events-none scale-120 md:hidden lg:block"
              viewBox="-4163 0 5000 294"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M-4163 284H332.044C418.566 284 411.961 146.34 328.081 146.34H250.145C168.246 146.34 169.567 10 250.145 10H418.566C441.682 10 453.901 27.1663 453.901 50.9349V238.113C453.901 265.183 453.901 284 487.585 284H837"
                stroke="url(#home_line_gradient_1)"
                className="stroke-[8px] lg:stroke-[10px]"
              />
              <defs>
                <linearGradient
                  id="home_line_gradient_1"
                  x1="189.215"
                  y1="147"
                  x2="700"
                  y2="147"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#C175FC" />
                  <stop offset="1" stopColor="#6C35BE" stopOpacity="0" />
                </linearGradient>
              </defs>
            </svg>
          </div>
          {/* medium screen svg */}
          {/* SVG Line */}
          <svg
            className="absolute h-[400px] -top-[70px]  z-0 pointer-events-none transform  hidden md:block lg:hidden"
            viewBox="-103 0 5000 294"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M-4163 284H332.044C418.566 284 411.961 146.34 328.081 146.34H250.145C168.246 146.34 169.567 10 250.145 10H418.566C441.682 10 453.901 27.1663 453.901 50.9349V238.113C453.901 265.183 453.901 284 487.585 284H837"
              stroke="url(#md_line_gradient)"
              className="stroke-[10px]"
            />
            <defs>
              <linearGradient
                id="md_line_gradient"
                x1="-189.215"
                y1="147"
                x2="837"
                y2="147"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#C175FC" />
                <stop offset="1" stopColor="#6C35BE" stopOpacity="0" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        {/* Right Column - Accordion */}
        <div className="flex flex-col mt-4 lg:mt-0">
          {accordionData?.map((item, index) => {
            const isActive = activeIndex === index;
            return (
              <div
                key={index}
                className={`transition-all duration-300 custom-dashed-border`}
                style={{
                  color: isActive ? "#C175FC" : "rgba(255, 255, 255, 0.45)",
                }}
              >
                <button
                  onClick={() => setActiveIndex(isActive ? null : index)}
                  className="w-full py-5 md:py-6 flex items-center justify-between text-left group outline-none"
                >
                  <span
                    className={`text-xl lg:text-2xl font-bold transition-colors duration-300 pr-4 leading-[28px] md:leading-[24px] lg:leading-[34px] tracking-[-6% ] ${
                      isActive
                        ? "text-white"
                        : "text-white/80 group-hover:text-white"
                    }`}
                  >
                    {item.title}
                  </span>
                  <div className="shrink-0 transition-transform duration-300">
                    {isActive ? (
                      <X className="w-5 h-5 md:w-6 md:h-6 text-[#C175FC]" />
                    ) : (
                      <Plus className="w-5 h-5 md:w-6 md:h-6 text-white" />
                    )}
                  </div>
                </button>

                <div
                  className={`grid transition-[grid-template-rows,padding-bottom] duration-300 ease-in-out ${
                    isActive
                      ? "grid-rows-[1fr] pb-6 md:pb-8 lg:pb-12"
                      : "grid-rows-[0fr] pb-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="section-subtitle text-white/70 leading-relaxed font-light">
                      {item.content}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
