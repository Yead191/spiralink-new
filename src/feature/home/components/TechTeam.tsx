import PrimaryButton from "@/shared/PrimaryButton";
import Image from "next/image";
import React from "react";

export default function TechTeam() {
  return (
    <section className="py-8 lg:py-16 relative mb-8 lg:mb-16 overflow-visible">
      <div className=" lg:max-w-4xl mx-auto 2xl:max-w-7xl relative z-10 px-6 md:px-4 ">
        <div className="relative z-10">
          <h1 className="text-5xl md:text-6xl lg:text-[8rem] 2xl:text-[9rem] leading-[0.9] font-medium tracking-tighter lg:max-w-3xl  2xl:max-w-5xl mb-12 relative z-10">
            Let us be your tech team.
          </h1>
          <PrimaryButton
            label="Book a Strategy Call with the CEO"
            className="w-fit text-nowrap"
          />

          {/* Top Left SVG Line */}
          <svg
            className="absolute -left-[44%] lg:-left-[365%] h-[274px] lg:top-[-150px] 2xl:top-[-190px] z-0 hidden 2xl:block pointer-events-none scale-110"
            viewBox="-4163 0 5000 294"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M-4163 284H332.044C418.566 284 411.961 146.34 328.081 146.34H250.145C168.246 146.34 169.567 10 250.145 10H418.566C441.682 10 453.901 27.1663 453.901 50.9349V238.113C453.901 265.183 453.901 284 487.585 284H837"
              stroke="url(#techteam_line_gradient_1)"
              strokeWidth="20"
            />
            <defs>
              <linearGradient
                id="techteam_line_gradient_1"
                x1="189.215"
                y1="147"
                x2="837"
                y2="147"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#C175FC" />
                <stop offset="1" stopColor="#6C35BE" stopOpacity="0" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        <div className="relative">
          {/* Bottom Right SVG Line */}
          <svg
            className="absolute -right-[44%] lg:right-[80%] 2xl:-right-[315%] bottom-0 lg:bottom-0 2xl:-bottom-[120px] h-[274px] z-0  2xl:block pointer-events-none hidden "
            viewBox="0 0 5000 294"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 10H310.876C397.427 10 390.82 147.66 306.912 147.66H228.95C147.024 147.66 148.345 284 228.95 284H397.427C420.551 284 432.774 266.834 432.774 243.065V55.8868C432.774 28.8169 432.774 10 466.469 10H5000"
              stroke="url(#techteam_line_gradient_2)"
              strokeWidth="20"
            />
            <defs>
              <linearGradient
                id="techteam_line_gradient_2"
                x1="-31"
                y1="147"
                x2="300"
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

      <Image
        src="/assets/lines/home/line-up.svg"
        alt="line"
        width={600}
        height={600}
        className="absolute -top-18 -left-48  lg:-top-18 lg:-left-52 2xl:-top-28 2xl:-left-40 h-auto 2xl:scale-150 z-0 pointer-events-none lg:block 2xl:hidden"
        draggable={false}
      />
      <Image
        src="/assets/lines/home/line-down.svg"
        alt="line"
        width={600}
        height={600}
        className="absolute bottom-4 -right-40 lg:bottom-28  lg:-right-52 2xl:bottom-20 2xl:right-20 h-auto 2xl:scale-150 z-0 pointer-events-none lg:block 2xl:hidden"
        draggable={false}
      />
    </section>
  );
}
