"use client";
import GlowingTag from "@/shared/GlowingTag";
import { Grid } from "antd";
import Image from "next/image";
import React from "react";

export default function HomeBanner() {
  const { lg, md } = Grid.useBreakpoint();
  return (
    <section className="px-2">
      <section
        style={{
          backgroundImage: "url('/assets/bg/home/banner-bg.png')",
          backgroundSize: lg || md ? "contain" : "cover",
          backgroundPosition: "top right",
          backgroundRepeat: "no-repeat",
        }}
        className=" lg:min-h-screen mt-2  relative rounded-2xl"
      >
        <div className="container grid grid-cols-1 md:grid-cols-2 pt-26 md:pt-48 pb-28 ">
          {/* left */}
          <div className="pl-6 2xl:pl-0 relative col-span-2">
            {/* Glowing Tag */}
            <GlowingTag text="Co-Branded Partnership" />

            <h1 className="page-title my-8 relative z-10  lg:max-w-[800px]">
              A shared delivery model with clear ownership
            </h1>
            <p className="section-subtitle max-w-[600px] relative z-10">
              SpiraLink partners with call centers and service providers through
              a co- branded model. Built to scale without compromising quality,
              accountability, or control.
              <Image
                src="/assets/lines/operations/banner-line.svg"
                alt="line"
                width={600}
                height={600}
                className="absolute bottom-10 -left-[38%]  lg:w-fit z-0 object-contain pointer-events-none scale-200 lg:scale-100 md:hidden"
                draggable={false}
              />
            </p>
            {/* Top Left SVG Line */}
            <svg
              className="absolute -left-[607%] lg:-left-[605%]  xl:-left-[633%] 2xl:-left-[628%] h-[274px] top-10 lg:h-[400px] lg:top-[120px]  xl:top-[40px] 2xl:top-[30px] z-0  pointer-events-none xl:scale-150 hidden md:block"
              viewBox="-4163 0 5000 294"
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
                  x2="837"
                  y2="147"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#C175FC" />
                  <stop offset="1" stopColor="#6C35BE" stopOpacity="0" />
                </linearGradient>
              </defs>
            </svg>

            {/* <Image
              src="/assets/lines/operations/banner-line.svg"
              alt="line"
              width={600}
              height={600}
              className="absolute -left-[44%] lg:-left-[40%] lg:top-[25%] w-contain h-auto 2xl:scale-150 z-0 hidden md:block"
              draggable={false}
            /> */}
          </div>
        </div>
      </section>
    </section>
  );
}
