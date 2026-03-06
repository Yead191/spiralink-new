import React from "react";
import WhiteLabelBanner from "./components/WhiteLabelBanner";
import PracticeMeans from "./components/PracticeMeans";
import StructuredDelivery from "./components/StructuredDelivery";
import ClearBoundaries from "./components/ClearBoundaries";
import MakesSense from "./components/MakesSense";
import TradeOffs from "./components/TradeOffs";
import Image from "next/image";

export default function WhiteLabel() {
  return (
    <section
      style={{
        backgroundImage: "url('/assets/bg/white-label/white-label-bg.svg')",
        backgroundSize: "cover",
        // backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
      className="relative"
    >
      <WhiteLabelBanner />
      <PracticeMeans />
      <StructuredDelivery />
      <ClearBoundaries />
      <MakesSense />
      <TradeOffs />
      <Image
        src="/assets/bg/Spiralink.png"
        alt="line"
        width={1400}
        height={800}
        draggable={false}
        className="w-full h-fit object-contain container lg:translate-y-28 translate-y-4 md:translate-y-10"
      />
    </section>
  );
}
