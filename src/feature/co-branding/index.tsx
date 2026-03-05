import React from "react";
import CoBrandingBanner from "./components/banner/CoBrandingBanner";
import Communication from "./components/Communication";
import FasterImplementation from "./components/FasterImplementation";
import CallCenters from "./components/CallCenters";
import ClearAccountability from "./components/ClearAccountability";
import ProfessionalServices from "./components/ProfessionalServices";
import CommonConcern from "./components/CommonConcern";

export default function CoBrandingPage() {
  return (
    <section
      style={{
        backgroundImage: "url('/assets/bg/co-branding/co-branding-bg.svg')",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
      className="lg:min-h-screen overflow-hidden"
    >
      <CoBrandingBanner />
      <Communication />
      <FasterImplementation />
      <CallCenters />
      <ClearAccountability />
      <ProfessionalServices />
      <CommonConcern />
    </section>
  );
}
