"use client";
import BadgeHero from "@/shared/BadgeHero";
import Image from "next/image";
import React, { useRef, useState } from "react";

const teamMembers = [
  {
    name: "Tarik",
    designation: "CEO & Co-Founder",
    image: "/assets/images/existence/team/tarik.png",
  },
  {
    name: "Ömer",
    designation: "COO & Co-Founder",
    image: "/assets/images/existence/team/omer.png",
  },
  {
    name: "Sari",
    designation: "CTO",
    image: "/assets/images/existence/team/sari.png",
  },
  {
    name: "Hıdır",
    designation: "Head of Operations",
    image: "/assets/images/existence/team/hidir.png",
  },
];

export default function TheTeam() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const index = Math.round(scrollLeft / clientWidth);
      setActiveIndex(index);
    }
  };

  const scrollTo = (index: number) => {
    if (scrollRef.current) {
      const { clientWidth } = scrollRef.current;
      scrollRef.current.scrollTo({
        left: index * clientWidth,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="container py-8 lg:py-16 flex flex-col items-center justify-center overflow-hidden">
      <div className="flex flex-col items-center text-center max-w-[905px] mb-8 ">
        <BadgeHero label="The team" />
        <h2 className="box-title mt-8 mb-6 lg:mb-8!">
          SpiraLink was founded by Tarik and Ömer. Sari and Hıdır joined later
          to help build the vision.
        </h2>
        <p className="point-heading">
          Based in Gent, Belgium. Serving call centers across Europe.
        </p>
      </div>

      <div
        ref={scrollRef}
        onScroll={handleScroll}
        className="flex items-start gap-6 w-full overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-4 lg:pb-0"
      >
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="flex flex-col items-center lg:items-start shrink-0 w-full md:w-[calc(50%-12px)] lg:w-[calc(25%-18px)] snap-center lg:snap-align-none"
          >
            <div className="relative w-full aspect-square rounded-[24px] overflow-hidden glass-box border border-white/10 mb-6 group">
              {/* Member Image */}
              <div className="relative w-full h-full transition-all duration-500">
                <Image
                  src={member?.image}
                  alt={member?.name}
                  fill
                  draggable={false}
                  className="object-cover object-top"
                />
              </div>
            </div>
            <h3 className="text-[24px] md:text-[32px] lg:text-[40px] leading-[28px] md:leading-[50px] tracking-[-6%] font-semibold text-white mb-2 text-center lg:text-left">
              {member?.name}
            </h3>
            <span className="text-[#C175FC] text-lg md:text-xl lg:text-2xl font-semibold text-center lg:text-left">
              {member?.designation}
            </span>
          </div>
        ))}
      </div>

      {/* Pagination Dots */}
      <div className="flex gap-2 mt-8 md:hidden">
        {teamMembers.map((_, index) => (
          <button
            key={index}
            onClick={() => scrollTo(index)}
            className={`h-2 transition-all duration-300 rounded-full ${
              activeIndex === index ? "bg-white w-8" : "bg-white/20 w-2"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
