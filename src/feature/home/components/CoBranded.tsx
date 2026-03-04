import Image from "next/image";
import React from "react";
import { PiSealCheck } from "react-icons/pi";

export default function CoBranded() {
  const listItems = [
    {
      title: "The partner owns the service relationship",
    },
    {
      title: "SpiraLink owns the technology and delivery",
    },
  ];
  return (
    <section className="container">
      <div className="  relative glass-box mb-8 mt-8 md:mt-16  lg:mb-16 lg:-mt-8 rounded-3xl border border-white/8">
        <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-14 items-center p-4 py-8 md:p-8 md:py-14 lg:p-14 ">
          {/* Left Content */}
          <div className="order-2 md:order-1">
            <h2 className="box-title mb-6 lg:mb-12">What co-branded means</h2>
            <p className="box-subtitle mb-8 lg:text-nowrap">
              Both SpiraLink and the partner are visible to the end client.
            </p>

            <ul className="space-y-2 mb-10">
              {listItems.map((item, index) => (
                <li key={index} className="flex items-start gap-4">
                  <PiSealCheck className="text-primary w-6 h-6 mt-1 shrink-0" />
                  <span className="text-white/90 text-[16px] md:text-sm lg:text-xl">
                    {item.title}
                  </span>
                </li>
              ))}
            </ul>

            <p className="section-subtitle max-w-2xl">
              This is not resale. It is a shared delivery model where each party
              operates within their expertise.
            </p>
          </div>

          {/* Right Graphic Section */}
          <div className="order-1 md:order-2 flex  justify-start  relative ">
            <div className="relative md:w-[300px] h-[180px] md:h-[300px] lg:w-[400px] lg:h-[400px] flex items-center justify-center lg:-mt-78">
              {/* Logo Wrapper with Negative Margin Top */}
              <div className="relative -mt-12 md:-mt-16 z-10">
                <div className=" lg:w-[250px] h-fit relative">
                  <Image
                    src="/assets/images/home/co-branded.png"
                    alt="SL Logo"
                    width={600}
                    height={600}
                    draggable={false}
                    className="h-[120px] md:h-[152px] lg:h-[250px] w-fit object-contain"
                  />
                  {/* Purple Dot on the ring */}
                  <div className="absolute -right-2 lg:right-2 top-1/2 lg:top-3/4 -translate-y-1/2 w-4 h-4 bg-primary rounded-full shadow-[0_0_15px_rgba(193,117,252,0.8)]"></div>
                </div>
              </div>

              {/* Apple Inc. Card Overlay */}
              <div className="absolute bottom-2/18 md:bottom-1/3 lg:bottom-16 right-[-170px] md:right-[-180px] lg:right-[-140px] z-20">
                <div className="glass-box p-3 lg:p-5 md:min-w-[220px] rounded-[12px] border border-white/8">
                  <h4 className="text-white font-semibold text-lg mb-1">
                    Apple Inc.
                  </h4>
                  <p className="text-white/40 text-sm">Powered by Spiralink.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
