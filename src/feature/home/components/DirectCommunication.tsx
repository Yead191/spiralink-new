import React from "react";
import BadgeHero from "@/shared/BadgeHero";
import { BadgeCheck } from "lucide-react";
import Image from "next/image";

const BENEFITS = [
  "Handles volume without increasing pressure",
  "Scales without fragmenting the customer experience",
  "Reduces repetitive workload for agents",
  "Maintains service quality across peak moments",
];

export default function DirectCommunication() {
  return (
    <section
      style={{
        backgroundImage: "url('/assets/bg/home/ai-bg.svg')",
        backgroundSize: "contain",
        backgroundPosition: "top",
        backgroundRepeat: "no-repeat",
      }}
      className="relative text-white pt-8 pb-16 lg:pt-16 lg:pb-16"
    >
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-20 items-center">
          {/* Left Column - Content */}
          <div className="lg:col-span-7 space-y-8">
            <div className="w-fit">
              <BadgeHero label="Direct communication" />
            </div>

            <h2 className="lg:text-[56px] text-[32px] leading-[40px] lg:leading-[66px] tracking-[-4%] mb-8 font-bold">
              Co-branding enables direct communication.
            </h2>

            <p className="section-subtitle max-w-2xl">
              The partner stays involved. But SpiraLink can speak directly to
              the client’s team when needed. This improves service quality
              significantly.
            </p>

            <div className="space-y-6">
              <h3 className="text-primary font-medium text-xl">
                The result is an operation that:
              </h3>
              <ul className="space-y-4">
                {BENEFITS.map((item, index) => (
                  <li
                    key={index}
                    className="flex items-center gap-3 text-lg text-gray-300"
                  >
                    <BadgeCheck className="w-6 h-6 text-primary shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right Column - Card */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div
              style={{
                background:
                  "linear-gradient(304.65deg, rgba(255, 255, 255, 0.05) 13.81%, rgba(153, 153, 153, 0.0332332) 33.55%, rgba(153, 153, 153, 0.0125) 81.13%)",
                backdropFilter: "blur(10px)",
              }}
              className="relative w-full max-w-[420px] p-10 rounded-[2.5rem] border border-white/10 space-y-6 z-10"
            >
              <p className="text-xl lg:text-2xl font-medium leading-normal text-white/90 relative z-10">
                AI and humans are <br />
                not competing for control.
              </p>
              <p className="text-xl lg:text-2xl font-medium leading-normal text-white/90 relative z-10">
                They are coordinated within <br />
                one operational system.
              </p>
              <Image
                src={"/assets/lines/home/daily.svg"}
                alt="daily-operations"
                width={700}
                height={500}
                draggable={false}
                className="absolute -bottom-20 lg:bottom-20 2xl:-bottom-20 lg:-right-40 2xl:right-0 z-0 w-fit object-contain h-[400px] 2xl:h-[400px] opacity-70 scale-150 lg:scale-200 "
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
