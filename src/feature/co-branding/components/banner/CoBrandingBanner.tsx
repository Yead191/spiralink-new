import GlowingTag from "@/shared/GlowingTag";

import React from "react";
import CoBrandingBannerRight from "./CoBrandingBannerRight";
import BannerBottom from "./BannerBottom";

export default function CoBrandingBanner() {
  return (
    <section className="container lg:pt-[266px] md:pt-[136px] pt-[120px] pb-8 lg:pb-16">
      {/* TOP */}
      <div className="flex items-center justify-between gap-4 lg:w-3/4">
        {/* left side */}
        <div>
          <GlowingTag text="Why Co-Branding Works" />
          <h2 className="lg:text-[56px] text-[40 px] leading-[40px] lg:leading-[66px] tracking-[-4%] mt-6 font-bold max-w-[540px]">
            Better service through direct communication.
          </h2>
        </div>
        {/* right */}
        <CoBrandingBannerRight />
      </div>
      {/* BOTTOM */}
      <BannerBottom />
    </section>
  );
}
