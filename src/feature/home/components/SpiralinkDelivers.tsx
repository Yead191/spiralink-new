"use client";
import { DELIVERABLES } from "@/constants/DELIVERABLES";
import { Grid } from "antd";
import { BadgeCheck } from "lucide-react";
import React from "react";

export default function SpiralinkDelivers() {
  const { lg } = Grid.useBreakpoint();
  return (
    <section className="container py-8 lg:py-16">
      <h2 className="section-title mb-16 lg:mb-28! text-center">
        What SpiraLink delivers
      </h2>

      <div className="flex flex-col md:flex-row  md:overflow-x-auto lg:overflow-visible lg:grid lg:grid-cols-3 gap-6  pb-8 md:pb-4 scrollbar-hide">
        {DELIVERABLES.map((card, index) => {
          const Icon = card.icon;
          return (
            <div
              key={index}
              style={{
                boxShadow:
                  lg && card.highlight
                    ? "-9px 11px 48px 0px #BC72F873"
                    : "none",
                backdropFilter: "blur(45px)",
              }}
              className={`glass-box p-8  rounded-[32px]  flex flex-col min-w-[320px] md:min-w-[380px] lg:min-w-0 transition-all duration-500 ${
                card.highlight && lg
                  ? "lg:-mt-12 border-2 border-primary/30  bg-[#010403A6]"
                  : "border-white/10 border"
              }`}
            >
              <div className="w-16 h-16 lg:w-20 lg:h-20 bg-[#121214] rounded-full flex items-center justify-center mb-8 border border-white/10">
                <Icon size={32} className="text-white" />
              </div>

              <h3 className="text-2xl lg:text-[40px] font-bold text-white mb-8 tracking-[-6%]">
                {card.title}
              </h3>

              <div className="mt-auto">
                <p className="text-primary font-semibold text-lg lg:text-[24px] mb-6 tracking-[-4%]">
                  It includes:
                </p>
                <ul className="space-y-4">
                  {card.items.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <BadgeCheck className="text-primary w-6 h-6 shrink-0 mt-0.5" />
                      <span className="text-white/70 text-[16px] lg:text-lg leading-tight">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
