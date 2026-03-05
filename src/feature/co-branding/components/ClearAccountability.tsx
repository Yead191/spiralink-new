import Image from "next/image";
import React from "react";

export default function ClearAccountability() {
  return (
    <section className="container py-8 lg:py-16">
      <Image
        src="/assets/bg/Spiralink.png"
        alt="line"
        width={1400}
        height={800}
        draggable={false}
        className="w-full h-fit object-contain container"
      />
      {/* clear accountability card */}
      <div className="glass-box p-8 py-12 md:p-12 md:py-16 lg:p-16 lg:py-20 rounded-[24px] border border-white/10 -mt-8 md:-mt-16 lg:-mt-32">
        <h2 className="box-title mb-10 md:mb-14 text-center! lg:text-left!">
          Clear accountability
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-24 text-center md:text-left">
          {/* Co-branded point */}
          <div className="flex flex-col">
            <h3 className="point-heading mb-4">Co-branded</h3>
            <div className="section-subtitle space-y-2">
              <p>
                Partner owns relationship and commercial terms - SpiraLink owns
                technology and delivery. When something goes wrong, everyone
                knows who handles it.
              </p>
            </div>
          </div>

          {/* White-label point */}
          <div className="flex flex-col">
            <h3 className="point-heading mb-4">White-label</h3>
            <div className="section-subtitle space-y-2">
              <p>
                Partner carries all visible responsibility—even for things they
                did not build and cannot fix. <br /> Clear accountability makes
                problems easier to solve.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
