import { Minus } from "lucide-react";
import Image from "next/image";
import React from "react";

export default function WhatWeBelive() {
  return (
    <section className="py-8 lg:py-16 container ">
      {/* TOP */}
      <div className="text-center flex flex-col justify-center items-center">
        <div className="flex items-center gap-2 point-heading mb-[24px] md:mb-[32px]">
          <Minus /> What we believe
        </div>
        <p className=" text-xl md:text-2xl lg:text-[32px] tracking-[2%] lg:leading-[48px] md:leading-[34px] leading-[28px]">
          Call centers are operations businesses. Their expertise is managing
          people, processes, and client relationships—not building AI systems.
          <br /> <br />
          Voice AI engineering is a different skill entirely. It requires
          understanding conversation design, system integration, real-time
          decision making, and the hundreds of edge cases that happen in live
          calls.
        </p>
      </div>
      {/* BOTTOM */}
      <div className="flex flex-col-reverse lg:flex-row mt-[64px] md:mt-[96px] items-center gap-10 lg:gap-20">
        {/* left */}
        <div className="lg:w-3/4">
          <Image
            src={"/assets/images/existence/we-belive-img.png"}
            width={900}
            height={900}
            alt="sense img"
            draggable={false}
            className="h-[431px] md:h-full lg:h-[616px] w-fit object-contain"
          />
        </div>
        {/* right */}
        <div className="w-full text-center lg:text-left">
          <h3 className="box-title lg:text-[56px]! md:text-[48px] lg:leading-[66px]! md:leading-[56px] tracking-[-6%]">
            We believe call centers need an engineering{" "}
            <br className="lg:block hidden" /> partner, not a software tool.
          </h3>
          <p className="section-subtitle lg:text-xl! lg:mt-8 mt-6">
            Asking a call center to “build their own AI” is like asking them to
            build their own telephony infrastructure. It doesn’t make sense.
            <br />
            <br />
            Someone who builds the solution, integrates it into their systems,
            handles the complexity, and keeps it running. So they can focus on
            what they’re good at: running the operation and serving their
            clients.
          </p>
        </div>
      </div>
    </section>
  );
}
