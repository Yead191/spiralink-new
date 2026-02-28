import BadgeHero from "@/shared/BadgeHero";
import Image from "next/image";
import React from "react";

export default function ChooseExperts() {
  return (
    <section className="py-8 lg:py-16 container">
      {/* TOP */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-4">
        {/* left side */}
        <div>
          <div className="relative flex items-center justify-center md:justify-start md:items-start">
            <BadgeHero label="Clients choose experts" />
            <Image
              draggable={false}
              src="/assets/lines/home/expert-line.png"
              alt="Choose Experts"
              width={400}
              height={400}
              className="w-fit h-full md:h-[300px] object-contain absolute top-2/6 left-3/7 z-0 hidden md:block lg:hidden"
            />
          </div>
          <h4 className="font-semibold lg:text-[40px] md:text-[32px] text-[24px] leading-[32px] md:leading-[40px] lg:leading-[48px] mt-8 lg:mt-10 relative z-10 text-center md:text-left">
            Call centers are not known for AI operations. And that is fine.
            Co-branding shows clients you made a strategic choice:
          </h4>
        </div>
        {/* right side */}
        <div className="flex justify-center relative">
          <Image
            draggable={false}
            src="/assets/images/home/expert1.png"
            alt="Choose Experts"
            width={400}
            height={400}
            className="w-fit h-[300px] object-contain block md:hidden lg:block relative z-10"
          />
          {/* Bottom Right SVG Line */}
          <svg
            className="absolute -right-[1144%] lg:-right-[1418%] xl:-right-[1268%] bottom-0 lg:-bottom-[330px] h-[274px] lg:h-[400px] z-0  xl:block pointer-events-none hidden lg:scale-150"
            viewBox="0 0 5000 294"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 10H310.876C397.427 10 390.82 147.66 306.912 147.66H228.95C147.024 147.66 148.345 284 228.95 284H397.427C420.551 284 432.774 266.834 432.774 243.065V55.8868C432.774 28.8169 432.774 10 466.469 10H5000"
              stroke="url(#techteam_line_gradient_2)"
              strokeWidth="10"
            />
            <defs>
              <linearGradient
                id="techteam_line_gradient_2"
                x1="170"
                y1="147"
                x2="500"
                y2="147"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#6C35BE" stopOpacity="0" />
                <stop offset="1" stopColor="#C175FC" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>
      {/* BOTTOM */}
      <div className="flex flex-col-reverse md:flex-row gap-8 lg:gap-16 items-center mt-10">
        {/* left side */}
        <div className="lg:w-3/5 flex justify-center items-start ">
          <Image
            src={"/assets/images/home/export2.png"}
            alt="Choose Experts"
            width={600}
            height={900}
            draggable={false}
            className="h-full lg:h-[726px] w-fit object-contain"
          />
        </div>
        {/* right side */}
        <div className="lg:w-3/4 ">
          <h1 className="lg:text-[78px] md:text-[32px] text-[40px] max-w-[650px] font-semibold tracking-[-6%] leading-[40px] md:leading-[40px] lg:leading-[78px] relative z-10 ">
            Partnering with specialists instead of pretending to build
            everything yourself.
          </h1>
          <p className="section-subtitle mt-10">
            This is how professional services work. Architects partner with
            structural engineers. Agencies partner with developers. Call centers
            partner with AI specialists.
            <br />
            <br />
            Clients respect this. They see a partner who knows operations,
            backed by a technology provider who specializes in voice AI.
          </p>
        </div>
      </div>
    </section>
  );
}
