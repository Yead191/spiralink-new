import { Asterisk } from "lucide-react";
import Image from "next/image";
import React from "react";

export default function CoBrandingBannerRight() {
  return (
    <div className="relative">
      <Image
        src={"/assets/images/co-branding/banner1.png"}
        width={600}
        height={600}
        alt="banner1"
        draggable={false}
        className="w-fit h-[175px] md:h-[295px] object-contain lg:-mt-20 relative z-10"
      />
      <div className="hidden lg:flex items-start gap-2  absolute -bottom-[25%] -right-[130%] z-10 w-[310px]  xl:w-[350px]">
        <Asterisk
          size={32}
          className="text-primary  font-semibold! shrink-0 mt-[-18px]"
        />
        <p className="text-primary text-[20px] xl:text-[24px]  font-semibold leading-[34px] tracking-[-4%] ">
          Co-branded and white-label use the same technology. The difference is
          service quality.
        </p>
      </div>
      {/* Top Left SVG Line */}
      <svg
        className="absolute -left-[1430px] h-[300px] -top-[260px] z-0  pointer-events-none  md:hidden"
        viewBox="-863 0 5000 294"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M-4163 284H332.044C418.566 284 411.961 146.34 328.081 146.34H250.145C168.246 146.34 169.567 10 250.145 10H418.566C441.682 10 453.901 27.1663 453.901 50.9349V238.113C453.901 265.183 453.901 284 487.585 284H837"
          stroke="url(#co_branding_banner_right_line_gradient)"
          className="stroke-[10px]"
        />
        <defs>
          <linearGradient
            id="co_branding_banner_right_line_gradient"
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

      {/* Bottom Right SVG Line */}
      <svg
        className="absolute -right-[3034%] md:-right-[2404%] lg:-right-[2750%] xl:-right-[3030%] -bottom-[140px] md:-bottom-[280px] xl:-bottom-[330px] 
        h-[300px] md:h-[400px] z-0  block pointer-events-none  xl:scale-150"
        viewBox="0 0 5000 294"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0 10H310.876C397.427 10 390.82 147.66 306.912 147.66H228.95C147.024 147.66 148.345 284 228.95 284H397.427C420.551 284 432.774 266.834 432.774 243.065V55.8868C432.774 28.8169 432.774 10 466.469 10H5000"
          stroke="url(#techteam_line_gradient_2)"
          className="stroke-[10px] md:stroke-[8px] lg:stroke-[10px]"
        />
        <defs>
          <linearGradient
            id="techteam_line_gradient_2"
            x1="50"
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
  );
}
