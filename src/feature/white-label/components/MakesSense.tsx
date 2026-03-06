import { X } from "lucide-react";
import Image from "next/image";
import React from "react";

export default function MakesSense() {
  const whiteLabels = [
    "Partners with strong existing brands",
    "Environments where vendor visibility is restricted",
    "Cases where co-branding is not commercially viable",
  ];

  return (
    <section className="container py-8 lg:py-16 flex flex-col-reverse md:flex-row justify-between items-center gap-6 lg:gap-10">
      {/* LEFT SIDE */}
      <div className="lg:flex-1 md:-ml-16 lg:ml-0">
        <Image
          src={"/assets/images/white/sense-img.png"}
          width={900}
          height={900}
          alt="sense img"
          className="h-[450px] lg:h-[727px] w-fit object-contain"
        />
      </div>
      {/* RIGHT */}
      <div>
        <h2 className="box-title mb-6 lg:mb-8 max-w-[518px]">
          When white-label makes sense
        </h2>
        <p className="section-subtitle mb-8 lg:mb-10 max-w-[507px]">
          It is not designed for rapid experimentation or highly customized
          partner-side implementations.
        </p>
        <p className="point-heading">White-label is typically suited for:</p>
        <ul className="space-y-4 mt-6">
          {whiteLabels.map((item, index) => (
            <li
              key={index}
              className="flex items-center gap-3 text-lg text-white! font-semibold! section-subtitle"
            >
              <X className="w-6 h-6 text-white/60 shrink-0" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
