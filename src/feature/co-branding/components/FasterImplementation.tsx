import { BadgeCheck } from "lucide-react";
import React from "react";

export default function FasterImplementation() {
  const CO_BRANDED_ITEMS = [
    "Co-branded projects take 1-5 weeks from intake to live.",
    "Spiralink participates directly in discovery. We hear needs firsthand, ask questions in real time, understand context immediately.",
    "Direct understanding is faster than indirect understanding.",
  ];

  const WHITE_LABEL_ITEMS = [
    "White-label takes longer—not because the technology is different, but because understanding takes longer.",
    "Partner conducts discovery, documents it, relays to Spiralink. We ask questions. They go back to the client. The client answers. The partner relays again.",
    "Direct understanding is faster than indirect understanding.",
  ];

  return (
    <section className="container py-8 lg:py-16">
      <h2 className="section-title mb-12 md:mb-16! lg:mb-20! text-center">
        Faster implementation
      </h2>

      <div className="grid lg:grid-cols-2 gap-8 lg:gap-5 items-stretch">
        {/* Co-branded Card (Highlighted) */}
        <div
          style={{
            boxShadow: "-9px 11px 48px 0px #BC72F873",
            backdropFilter: "blur(45px)",
          }}
          className={`glass-box p-8 md:p-12 rounded-[32px] flex flex-col transition-all duration-500 border-2 border-primary/30 bg-[#010403A6] lg:-translate-y-8`}
        >
          <h3 className="box-title mb-8 md:mb-12 ">Co-branded</h3>

          <div className="mt-auto">
            <p className="point-heading mb-6">It includes:</p>
            <ul className="space-y-5">
              {CO_BRANDED_ITEMS.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <BadgeCheck className="text-primary w-6 h-6 shrink-0 mt-1" />
                  <span className="text-white/70 text-[16px] lg:text-lg md:text-xl leading-snug tracking-[2%]">
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
          <h3 className="box-title mb-8 md:mb-12 ">White-label</h3>

          <div className="mt-auto">
            <p className="point-heading mb-6">It includes:</p>
            <ul className="space-y-5">
              {WHITE_LABEL_ITEMS.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <BadgeCheck className="text-primary w-6 h-6 shrink-0 mt-1" />
                  <span className="text-white/70 text-[16px] lg:text-lg leading-snug tracking-[2%]">
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
