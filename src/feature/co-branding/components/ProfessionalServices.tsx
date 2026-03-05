import React from "react";
import { BadgeCheck } from "lucide-react";
import Marquee from "react-fast-marquee";

export default function ProfessionalServices() {
  const industries = [
    "No one expects a marketing agency to build their own CMS.",
    "No one expects an architecture firm to also be structural engineers",
    "No one expects a call center to be an AI research lab.",
    "No one expects a law firm to also be a cybersecurity company",
    "No one expects a healthcare provider to also be a medical device manufacturer",
    "No one expects a financial services firm to also be a data analytics company",
  ];

  return (
    <section
      style={{
        backgroundImage: "url('/assets/bg/co-branding/professional-bg.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
      className="py-11 lg:pt-24 overflow-hidden relative lg:mt-16"
    >
      <div className="container flex flex-col items-center text-center z-10 relative">
        <h2 className="section-title mb-6 lg:mb-8 max-w-[420px] lg:max-w-[750px]">
          Professional services work this way
        </h2>

        <p className="section-subtitle max-w-[480px] lg:max-w-[778px] mb-12 px-4 lg:text-xl!">
          The partner brings operational and relationship expertise. SpiraLink
          brings AI expertise. Both are visible. Both contribute. Clients
          understand this.
        </p>

        <div className="flex flex-col items-center gap-6 mb-16 w-full">
          <div className="w-full relative">
            {/* Mobile View - Double Marquee */}
            <div className="flex flex-col gap-4 ">
              <Marquee gradient={false} speed={40} autoFill>
                {industries.slice(0, 3).map((item, index) => (
                  <div
                    key={`mobile-1-${index}`}
                    style={{
                      background:
                        "linear-gradient(304.65deg, rgba(255, 255, 255, 0.05) 13.81%, rgba(153, 153, 153, 0.0332332) 33.55%, rgba(153, 153, 153, 0.0125) 81.13%)",
                      backdropFilter: "blur(45px)",
                    }}
                    className="group flex items-center gap-2.5 px-6 py-3 rounded-full border border-white/5 hover:border-purple-500/50 hover:bg-[#111] transition-all duration-300 mx-2"
                  >
                    <BadgeCheck className="w-5 h-5 text-purple-500" />
                    <span className="text-gray-200 font-medium">{item}</span>
                  </div>
                ))}
              </Marquee>
              <Marquee gradient={false} speed={40} direction="right" autoFill>
                {industries.slice(3).map((item, index) => (
                  <div
                    key={`mobile-2-${index}`}
                    style={{
                      background:
                        "linear-gradient(304.65deg, rgba(255, 255, 255, 0.05) 13.81%, rgba(153, 153, 153, 0.0332332) 33.55%, rgba(153, 153, 153, 0.0125) 81.13%)",
                      backdropFilter: "blur(45px)",
                    }}
                    className="group flex items-center gap-2.5 px-6 py-3 rounded-full border border-white/5 hover:border-purple-500/50 hover:bg-[#111] transition-all duration-300 mx-2"
                  >
                    <BadgeCheck className="w-5 h-5 text-purple-500" />
                    <span className="text-gray-200 font-medium">{item}</span>
                  </div>
                ))}
              </Marquee>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
