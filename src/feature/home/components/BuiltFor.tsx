import { MARQUEE_IMAGES } from "@/constants/marquee";
import Image from "next/image";
import React from "react";
import Marquee from "react-fast-marquee";

export default function BuiltFor() {
  return (
    <section className=" pt-8 lg:pt-16 pb-16 lg:pb-32">
      {/* Header Section */}
      <div className="flex flex-col lg:justify-between lg:items-start container">
        <div className="relative">
          {/* Title */}
          <h2 className="text-center lg:text-left text-[32px] md:text-[40px] lg:text-[120px] leading-[40px] md:leading-[48px] lg:leading-[120px] font-semibold tracking-[-6%] lg:max-w-[690px]">
            Built for <br className="hidden lg:block" /> long-term collaboration
          </h2>
          <p className="text-[#FFFFFF]/75 text-xl leading-[30px] tracking-[2%] hidden lg:block absolute top-6 -right-20 lg:-right-110 lg:max-w-[570px]">
            Partners can onboard multiple clients without rebuilding processes
            or hiring AI teams.
            <br className="hidden lg:block" />
            <br className="hidden lg:block" />
            As client needs evolve—call flows change, volumes increase—the
            solution evolves with them. Clear ownership means changes happen
            smoothly.
          </p>
        </div>
        <div className="flex flex-col gap-8 mt-6">
          <p className="text-[#FFFFFF]/75 text-sm md:text-[16px] lg:text-xl text-center lg:text-left leading-[26px] tracking-[2%] lg:hidden">
            Partners can onboard multiple clients without rebuilding processes
            or hiring AI teams.
            <br className="md:hidden lg:block" />
            <br className="hidden lg:block" />
            As client needs evolve—call flows change, volumes increase—the
            solution evolves with them. Clear ownership means changes happen
            smoothly.
          </p>
        </div>
      </div>
      {/* Marquee Section */}
      <div className="relative pt-8 lg:pt-16">
        <Marquee
          speed={50}
          pauseOnHover={false}
          gradient={false}
          className="overflow-visible"
        >
          {MARQUEE_IMAGES.map((img, index) => (
            <div
              key={index}
              className="mx-2 md:mx-4 h-[450px] md:h-[550px]  relative rounded-4xl overflow-hidden"
            >
              <Image
                src={img}
                alt={`Opposite way ${index + 1}`}
                width={1000}
                height={1000}
                className="object-contain w-fit h-full"
                draggable={false}
              />
            </div>
          ))}
          {/* Duplicate for seamless effect if needed, though react-fast-marquee handles it */}
        </Marquee>
      </div>
    </section>
  );
}
