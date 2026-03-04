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
        className="w-fit h-[295px] object-contain lg:-mt-20 relative z-10"
      />
      <div className="hidden lg:flex items-start gap-2  absolute -bottom-[25%] -right-[130%] z-10 w-[350px]">
        <Asterisk
          size={32}
          className="text-primary  font-semibold! shrink-0 mt-[-18px]"
        />
        <p className="text-primary text-[20px] md:text-[24px]  font-semibold leading-[34px] tracking-[-4%] ">
          Co-branded and white-label use the same technology. The difference is
          service quality.
        </p>
      </div>
      {/* Bottom Right SVG Line */}
      <svg
        className="absolute -right-[1144%] lg:-right-[1418%] xl:-right-[3030%] bottom-0 lg:-bottom-[330px] h-[274px] lg:h-[400px] z-0  xl:block pointer-events-none hidden lg:scale-150"
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
