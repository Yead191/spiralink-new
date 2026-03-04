import GlowingTag from "@/shared/GlowingTag";

import React from "react";
import CoBrandingBannerRight from "./CoBrandingBannerRight";
import BannerBottom from "./BannerBottom";
import { Asterisk } from "lucide-react";

export default function CoBrandingBanner() {
  return (
    <section className="container lg:pt-[266px] pt-[120px]  pb-8 lg:pb-16">
      {/* TOP */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-6 md:w-11/12 lg:w-3/4 px-6 xl:px-0">
        {/* left side */}
        <div className="">
          <GlowingTag text="Why Co-Branding Works" />
          <h2 className="lg:text-[56px] text-[40px] leading-[40px] md:leading-[48px] lg:leading-[66px] tracking-[-4%] mt-6 font-bold md:max-w-[296px] lg:max-w-[540px]">
            Better service through direct communication.
          </h2>
        </div>
        {/* right */}
        <CoBrandingBannerRight />
      </div>
      {/* BOTTOM */}
      <BannerBottom />
      <div className="section-subtitle mt-6 md:flex flex-col space-y-6 hidden  lg:hidden">
        <p className="text-primary text-2xl font-semibold leading-[34px] tracking-[-4%] ">
          The difference is how we work together.
        </p>
        <p>
          Co-branding enables direct communication. White-label requires
          everything to go through the partner first. This indirection affects
          speed, clarity, and service quality.
        </p>
      </div>
    </section>
  );
}
