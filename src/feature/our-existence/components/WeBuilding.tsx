import Image from "next/image";
import React from "react";

export default function WeBuilding() {
  return (
    <div className="pb-8 lg:pb-16 container flex flex-col items-center justify-center">
      <Image
        src="/assets/bg/Spiralink.png"
        alt="line"
        width={1400}
        height={800}
        draggable={false}
        className="w-full h-fit object-contain container lg:translate-y-28 translate-y-4 md:translate-y-10"
      />
      <div className="text-center -translate-y-6  lg:-translate-y-10">
        <h2 className="text-[40px] md:text-[64px] lg:text-[78px]  font-semibold 2xl:font-bold mb-6 leading-11 md:leading-[170px] lg:leading-[78px] tracking-[-6%] text-white">What we’re building</h2>
        <p className="section-subtitle max-w-[868px]">
          A company that gives call centers the engineering capability they need
          without building an internal AI team. We manufacture custom voicebots.
          We integrate them into existing operations. We handle the technical
          complexity. We improve them over time. Our partners scale their
          operations. We scale the technology.
        </p>
      </div>
    </div>
  );
}
