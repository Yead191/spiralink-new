import React from "react";
import WhiteLabelBanner from "./components/WhiteLabelBanner";
import PracticeMeans from "./components/PracticeMeans";
import StructuredDelivery from "./components/StructuredDelivery";

export default function WhiteLabel() {
  return (
    <section
      style={{
        backgroundImage: "url('/assets/bg/white-label/white-label-bg.svg')",
        backgroundSize: "cover",
        // backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <WhiteLabelBanner />
      <PracticeMeans />
      <StructuredDelivery />
    </section>
  );
}
