import React from "react";
import { X } from "lucide-react";
import Image from "next/image";

const BENEFITS = [
  "Modify AI behavior independently",
  "Change system logic or integrations",
  "Deploy updates without alignment",
];

export default function ClearBoundaries() {
  return (
    <section className="relative text-white py-8 lg:py-16 ">
      <div className="container overflow-hidden lg:overflow-visible">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-20 items-center">
          {/* Left Column - Content */}
          <div className="md:col-span-6 lg:col-span-7 space-y-8">
            <h2 className="box-title mb-8 max-w-[518px] ">
              Clear boundaries protect quality
            </h2>

            <p className="section-subtitle max-w-2xl lg:text-xl!">
              The white-label model comes with strict boundaries.
            </p>

            <div className="space-y-6">
              <h3 className="point-heading">Partners do not:</h3>
              <ul className="space-y-4">
                {BENEFITS.map((item, index) => (
                  <li
                    key={index}
                    className="flex items-center gap-3 text-lg text-white! font-semibold! section-subtitle"
                  >
                    <X className="w-6 h-6 text-white/60 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right Column - Card */}
          <div className="md:col-span-6 lg:col-span-5 flex justify-center lg:justify-end">
            <div
              style={{
                background:
                  "linear-gradient(304.65deg, rgba(255, 255, 255, 0.05) 13.81%, rgba(153, 153, 153, 0.0332332) 33.55%, rgba(153, 153, 153, 0.0125) 81.13%)",

                backdropFilter: "blur(45px)",
              }}
              className="relative w-full max-w-[420px] p-10 rounded-[2.5rem] border border-white/10 space-y-6 z-10 "
            >
              <p className="text-xl lg:text-2xl font-medium leading-normal text-white/90 relative z-10">
                All technical changes remain the responsibility of SpiraLink.
              </p>
              <p className="text-xl lg:text-2xl font-medium leading-normal text-white/90 relative z-10">
                These boundaries exist to prevent fragmentation and protect
                long-term quality.
              </p>
              <Image
                src={"/assets/lines/home/daily.svg"}
                alt="daily-operations"
                width={700}
                height={500}
                draggable={false}
                className="absolute -bottom-10 md:-bottom-20 lg:bottom-20 2xl:-bottom-5 lg:-right-40 2xl:right-0 z-0 w-fit object-contain h-[400px] 2xl:h-[400px] opacity-70 scale-150 lg:scale-200 "
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
