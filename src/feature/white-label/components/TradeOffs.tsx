import { BadgeCheck } from "lucide-react";
import React from "react";

export default function TradeOffs() {
  const tradeOffsItems = [
    "Less transparency for the end client",
    "Higher dependency on partner communication",
    "Reduced visibility of the underlying technology",
  ];

  const structureItems = [
    "Client expectations",
    "Regulatory or contractual constraints",
    "Operational complexity",
    "Long-term scalability",
  ];

  return (
    <section className="container pt-8 lg:pt-16">
      <div className="grid lg:grid-cols-2 gap-8 lg:gap-10">
        {/* Card 1: Trade-offs */}
        <div className="glass-box p-8 md:p-12 rounded-[24px] flex flex-col justify-between border border-white/5">
          <div>
            <h3 className="box-title mb-8 lg:max-w-[400px]">
              Trade-offs to consider
            </h3>
            <p className="section-subtitle mb-10 max-w-[400px]">
              Compared to co-branding, white-label involves trade-offs.
            </p>

            <ul className="space-y-4 mb-10 mt-auto">
              {tradeOffsItems.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <BadgeCheck className="text-primary w-6 h-6 shrink-0 mt-0.5" />
                  <span className="text-white text-[16px] lg:text-lg leading-tight">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <p className="section-subtitle mt-10">
            For these reasons, white-label is supported as a specific delivery
            model, not the default.
          </p>
        </div>

        {/* Card 2: Choosing partnership structure */}
        <div className="glass-box p-8 md:p-12 rounded-[24px] flex flex-col justify-between border border-white/5">
          <div>
            <h3 className="box-title mb-8 ">
              Choosing the right partnership structure
            </h3>
            <p className="section-subtitle mb-10 max-w-[420px]">
              Every partner setup is evaluated individually. The choice between
              co-branded and white-label depends on:
            </p>

            <ul className="space-y-4 mb-10 mt-auto">
              {structureItems.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <BadgeCheck className="text-primary w-6 h-6 shrink-0 mt-0.5" />
                  <span className="text-white text-[16px] lg:text-lg leading-tight">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <p className="section-subtitle mt-10">
            SpiraLink works with partners to select the model that best protects
            quality and trust.
          </p>
        </div>
      </div>
    </section>
  );
}
