import BadgeHero from "@/shared/BadgeHero";
import Image from "next/image";
import React from "react";

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
  return (
    <section className="container py-8 lg:py-16 flex flex-col items-center justify-center">
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

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
        {teamMembers.map((member, index) => (
          <div key={index} className="flex flex-col items-start">
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
            <h3 className="text-[24px] md:text-[32px] lg:text-[40px] leading-[28px] md:leading-[50px] tracking-[-6%] font-semibold text-white mb-2">
              {member?.name}
            </h3>
            <span className="text-[#C175FC] text-lg md:text-xl lg:text-2xl font-semibold">
              {member?.designation}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
