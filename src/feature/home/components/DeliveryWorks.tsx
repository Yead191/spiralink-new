import BadgeHero from "@/shared/BadgeHero";
import { Asterisk, Sparkle } from "lucide-react";
import React from "react";

const steps = [
  {
    title: "Joint intake",
    description:
      "SpiraLink leads intake with the partner and client together. Direct access means we understand requirements firsthand.",
  },
  {
    title: "Manufacturing",
    description: "SpiraLink builds the voicebot based on operational reality.",
  },
  {
    title: "Testing",
    description: "Internal validation before any live exposure.",
  },
  {
    title: "Rollout",
    description: "Controlled deployment with clear escalation paths.",
  },
];

export default function DeliveryWorks() {
  return (
    <section className="container py-8 lg:py-16">
      <div className="flex flex-col items-center text-center">
        {/* Title */}
        <h2 className="section-title text-white">How delivery works</h2>

        {/* Timeline Tag */}
        <div className="flex items-center gap-2 text-[#C175FC] text-[16px] md:text-xl lg:text-2xl font-medium tracking-[-4%] leading-[21px]">
          <Asterisk size={20} className="w-5 h-5 lg:w-8 lg:h-8 fill-current" />

          <span>Timeline: 1-5 weeks from intake to live.</span>
        </div>

        {/* Steps Container */}
        <div className="relative w-full">
          {/* Steps Row */}
          <div className="relative flex flex-row flex-nowrap lg:grid lg:grid-cols-4 gap-6 overflow-x-auto pb-8 lg:pb-0 scrollbar-hide pt-14">
            {/* Dotted Line Behind Badges */}
            {/* <div className="absolute top-20 left-[140px] right-[140px] lg:left-[12.5%] lg:right-[12.5%] h-px border-t border-dashed border-[#C175FC]/30 z-0" /> */}
            <div className="absolute top-20  lg:left-[12.5%] lg:right-[12.5%] h-px border-t border-dashed border-[#C175FC]/30 z-0" />

            {steps.map((step, index) => (
              <div
                key={index}
                className="flex flex-col items-center gap-10 min-w-[280px] lg:min-w-0 z-10"
              >
                {/* Step Badge */}
                <BadgeHero
                  label={`Step ${index + 1}`}
                  glowColor="#C175FC4D"
                  borderColor="#C175FC33"
                />

                {/* Card */}
                <div className="glass-box p-8 rounded-3xl flex flex-col items-center text-center h-full min-h-[300px] w-full border border-white/5">
                  <h3 className="text-white text-2xl font-semibold mb-10 mt-6 px-4 tracking-[-4%] leading-[24px]">
                    {step.title}
                  </h3>
                  <p className="text-[#FFFFFF]/50  text-base lg:text-lg leading-[26px] tracking-[2%] px-2">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
