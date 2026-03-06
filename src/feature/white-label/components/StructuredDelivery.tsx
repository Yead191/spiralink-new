import { BadgeCheck } from "lucide-react";
import React from "react";

export default function StructuredDelivery() {
  const spiralinkContinues = [
    "Manufacture the voicebot",
    "Design AI behavior and system logic",
    "Manage integrations and reliability",
    "Ensure operational quality",
  ];

  const thePartner = [
    "Owns the client relationship",
    "Manages commercial agreements",
    "Handles communication and support",
  ];

  return (
    <section className="container pb-8 lg:pb-16">
      <h2 className="page-title mb-6 lg:mb-8  text-center lg:text-[72px]!">
        How delivery is structured
      </h2>
      <p className="section-subtitle lg:text-xl! md:mb-8! lg:mb-12! text-center">
        Even in a white-label setup, the delivery process remains controlled.
      </p>

      <div className="grid lg:grid-cols-2 gap-8 lg:gap-5 items-stretch">
        {/* Co-branded Card (Highlighted) */}
        <div
          style={{
            boxShadow: "-9px 11px 48px 0px #BC72F873",
            backdropFilter: "blur(45px)",
          }}
          className={`glass-box p-8 md:p-12 rounded-[32px] flex flex-col transition-all duration-500 border-2 border-primary/30 bg-[#010403A6]`}
        >
          <h3 className="box-title mb-8 md:mb-12 ">SpiraLink continues to:</h3>

          <div className="mt-auto">
            <ul className="space-y-5">
              {spiralinkContinues.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <BadgeCheck className="text-primary w-6 h-6 shrink-0 mt-1" />
                  <span className="text-white/80 text-[16px] lg:text-lg md:text-xl leading-snug tracking-[2%]">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* White-label Card */}
        <div
          style={{
            backdropFilter: "blur(45px)",
          }}
          className="glass-box p-8 md:p-12 rounded-[32px] flex flex-col border border-white/10"
        >
          <h3 className="box-title mb-8 md:mb-12 ">The partner:</h3>

          <div className="my-auto">
            <ul className="space-y-5">
              {thePartner.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <BadgeCheck className="text-primary w-6 h-6 shrink-0 mt-1" />
                  <span className="text-white/80 text-[16px] lg:text-lg leading-snug tracking-[2%]">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
