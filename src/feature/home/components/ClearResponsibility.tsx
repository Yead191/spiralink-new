import BadgeHero from "@/shared/BadgeHero";
import { Asterisk, BadgeCheck } from "lucide-react";
import React from "react";

export default function ClearResponsibility() {
  const partnerItems = [
    "Client relationship",
    "Commercial agreements",
    "Business context and adoption",
  ];

  const spiralinkItems = [
    "Voicebot manufacturing",
    "AI behavior and system logic",
    "Integrations and reliability",
    "Ongoing technical refinement",
  ];

  return (
    <section className="container py-16 lg:py-24 relative">
      {/* Top Header Section */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 lg:mb-20 gap-8">
        <div>
          <div>
            <BadgeHero label="Clear Responsibility" />
            <h1 className="font-semibold lg:text-[78px] text-[32px]leading-[40px] lg:leading-[78px] mt-8 lg:mt-10 relative z-10 tracking-[-6%] ">
              Everyone knows who is responsible for what.{" "}
            </h1>
          </div>
        </div>

        <div className="flex items-start gap-2 max-w-[420px]">
          <Asterisk
            size={32}
            className="text-primary  font-semibold! shrink-0 mt-[-8px]"
          />
          <p className="text-primary text-[20px] md:text-[24px]  font-semibold leading-[1.2]">
            When something needs attention, clients know exactly where to go.
          </p>
        </div>
      </div>

      {/* Main Responsibilities Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
        {/* Partner Responsibility Box */}
        <div className="glass-box p-8 md:p-10 lg:p-14 rounded-[24px] border border-white/10 flex flex-col min-h-[300px] lg:min-h-[420px] relative">
          <h3 className="text-white text-[24px] font-semibold absolute top-10 left-10 pointer-events-none">
            Partner:
          </h3>
          <div className="mt-auto flex flex-col gap-4 items-end w-full z-10">
            {partnerItems.map((item, idx) => (
              <div
                key={idx}
                className="glass-box px-6 py-2 md:py-3.5  lg:py-4 rounded-full border border-white/8 flex items-center gap-3 w-fit transition-transform hover:scale-[1.02] cursor-default"
              >
                <BadgeCheck className="text-primary w-6 h-6 shrink-0" />
                <span className="text-white text-xs lg:text-xl font-medium tracking-tight whitespace-nowrap">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* SpiraLink Responsibility Box */}
        <div className="glass-box p-8 md:p-10  lg:p-14 rounded-[24px]  border border-white/10 flex flex-col min-h-[360px] md:min-h-[400px] lg:min-h-[420px] relative">
          <h3 className="text-white text-[24px] font-semibold absolute top-10 left-10 pointer-events-none">
            SpiraLink:
          </h3>
          <div className="mt-auto flex flex-col gap-4 items-end w-full z-10">
            {spiralinkItems.map((item, idx) => (
              <div
                key={idx}
                className="glass-box px-6 py-2 md:py-3.5  lg:py-4 rounded-full border border-white/8 flex items-center gap-3 w-fit transition-transform hover:scale-[1.02] cursor-default"
              >
                <BadgeCheck className="text-primary w-6 h-6 shrink-0" />
                <span className="text-white text-xs lg:text-xl font-medium tracking-tight whitespace-nowrap">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
