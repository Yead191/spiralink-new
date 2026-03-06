import { MARQUEE_IMAGES } from "@/constants/marquee";
import GlowingTag from "@/shared/GlowingTag";
import Image from "next/image";
import React from "react";
import Marquee from "react-fast-marquee";

export default function WhiteLabelBanner() {
  return (
    <section className="pt-[123px] md:pt-[138px] lg:pt-[180px] mb-8 lg:mb-16">
      <div className="container flex flex-col justify-center items-center space-y-6 lg:space-y-10 text-center mb-10 lg:mb-20">
        <GlowingTag text="White-Label Model" />
        <h1 className="page-title max-w-[952px]">
          A controlled delivery model for specific use cases
        </h1>
        <p className="section-subtitle max-w-[822px] lg:text-xl!">
          In some situations, a white-label setup is required. SpiraLink
          supports a white-label model where the partner delivers the solution
          entirely under their own brand.
          <br /> <br />
          This model is designed for partners who need full brand ownership
          while maintaining production-grade delivery.
        </p>
      </div>

      {/* Marquee Section */}
      <div className="relative ">
        <Marquee
          speed={50}
          pauseOnHover={false}
          gradient={false}
          className="overflow-visible"
        >
          {MARQUEE_IMAGES.map((img, index) => (
            <div
              key={index}
              className="mx-2 md:mx-4 h-[450px] md:h-[550px]  relative rounded-4xl overflow-hidden"
            >
              <Image
                src={img}
                alt={`Opposite way ${index + 1}`}
                width={1000}
                height={1000}
                className="object-contain w-fit h-full"
                draggable={false}
              />
            </div>
          ))}
          {/* Duplicate for seamless effect if needed, though react-fast-marquee handles it */}
        </Marquee>
      </div>
    </section>
  );
}
