import React from "react";

import Image from "next/image";
import ContactSteps from "./ContactSteps";
import DemoButton from "@/shared/DemoButton";
import ContactRight from "./ContactRight";
export default function ContactLeft() {
  return (
    <div className="flex flex-col justify-center relative pl-4 lg:pl-6 2xl:pl-0">
      <h1 className="box-title md:text-[56px]! mb-6">Get in touch</h1>
      <p className="point-heading mb-6 max-w-[460px]">
        Have a question, a partnership idea, or need technical clarity? We’re
        here to help.
      </p>
      <p className="section-subtitle mb-12 max-w-[544px] ">
        We don't do sales pitches. We build demos. Pick your most painful call
        type. We'll build an AI that handles it. Then you call it yourself and
        decide if it works.
      </p>

      <div className="md:hidden">
        <ContactRight />
      </div>

      <h3 className="text-white text-xl lg:text-2xl font-semibold mb-6 tracking-[-2%] leading-[28px] md:leading-[26px] lg:leading-[34px] mt-8 md:mt-0">
        The "Human Promise"
      </h3>

      {/* Steps Grid - Scrollable on Mobile */}
      <ContactSteps />
      <div className="mt-8 lg:mt-16 flex justify-center items-center md:items-start">
        <DemoButton />
      </div>

      <Image
        src={"/assets/lines/demo/demo-line.svg"}
        alt="line"
        width={600}
        height={600}
        className="absolute -left-[32%] md:-left-[27%] top-20 lg:-left-[32%] 2xl:-left-[45%] lg:top-[15%] w-contain h-auto scale-200 z-0 lg:hidden"
        draggable={false}
      />
      {/* Top Left SVG Line */}
      <svg
        className="absolute -left-[44%] xl:-left-[994%] lg:-left-[1177%] 2xl:-left-[1013%] h-[274px] lg:h-[600px]  lg:top-[250px] z-0 hidden lg:block pointer-events-none lg:scale-200"
        viewBox="-4163 0 5000 694"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M-4163 284H332.044C418.566 284 411.961 146.34 328.081 146.34H250.145C168.246 146.34 169.567 10 250.145 10H418.566C441.682 10 453.901 27.1663 453.901 50.9349V238.113C453.901 265.183 453.901 284 487.585 284H837"
          stroke="url(#home_line_gradient_1)"
          strokeWidth="10"
        />
        <defs>
          <linearGradient
            id="home_line_gradient_1"
            x1="189.215"
            y1="147"
            x2="737"
            y2="147"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#C175FC" />
            <stop offset="1" stopColor="#6C35BE" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}
