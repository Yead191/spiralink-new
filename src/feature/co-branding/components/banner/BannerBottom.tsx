import { Asterisk } from "lucide-react";
import Image from "next/image";
import React from "react";

export default function BannerBottom() {
  return (
    <div className="flex flex-col-reverse md:flex-row gap-8 items-center mt-16 md:px-6 xl:px-0">
      {/* left side */}
      <div className="lg:w-3/5 flex justify-center items-start relative">
        <Image
          src={"/assets/images/co-branding/banner2.png"}
          alt="Choose Experts"
          width={600}
          height={900}
          draggable={false}
          className="h-full lg:h-[812px] w-fit object-contain relative z-10"
        />
        {/* Top Left SVG Line */}
        <svg
          className="absolute -left-[2700%] lg:-left-[2012%] xl:-left-[1625%]  h-[400px] -top-[60%] lg:-top-[390px]  z-0  pointer-events-none scale-150 hidden md:block"
          viewBox="-4163 0 5000 294"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M-4163 284H332.044C418.566 284 411.961 146.34 328.081 146.34H250.145C168.246 146.34 169.567 10 250.145 10H418.566C441.682 10 453.901 27.1663 453.901 50.9349V238.113C453.901 265.183 453.901 284 487.585 284H837"
            stroke="url(#banner_bottom_line_gradient)"
            className="stroke-[4px] md:stroke-[6px] lg:stroke-[10px]"
          />
          <defs>
            <linearGradient
              id="banner_bottom_line_gradient"
              x1="189.215"
              y1="147"
              x2="690"
              y2="147"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#C175FC" />
              <stop offset="1" stopColor="#6C35BE" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      {/* right side */}
      <div className="lg:w-11/12 ">
        <div className="lg:hidden mb-10">
          <Asterisk
            size={32}
            className="text-primary  font-semibold! shrink-0 mt-[-18px] md:mt-0"
          />
          <p className="text-primary text-[20px] xl:text-[24px]  font-semibold leading-[34px] tracking-[-4%] pl-8 md:pl-0">
            Co-branded and white-label use the same technology. The difference
            is service quality.
          </p>
        </div>
        <h1 className="lg:text-[120px] md:text-[64px] text-[48px] max-w-[650px] font-semibold tracking-[-6%] leading-[56px] md:leading-[70px] lg:leading-[120px] relative z-10 ">
          Same product, different service.
        </h1>
        <div className="section-subtitle mt-10 flex flex-col space-y-6 max-w-[494px]">
          <p>
            The voicebot is identical. The platform is identical. What gets
            built is identical.
          </p>
          <p className="text-primary text-2xl font-semibold leading-[34px] tracking-[-4%] md:hidden lg:block">
            The difference is how we work together.
          </p>
          <p className="md:hidden lg:block">
            Co-branding enables direct communication. White-label requires
            everything to go through the partner first. This indirection affects
            speed, clarity, and service quality.
          </p>
        </div>
      </div>
    </div>
  );
}
