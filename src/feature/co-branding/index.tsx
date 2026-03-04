import React from "react";
import CoBrandingBanner from "./components/banner/CoBrandingBanner";
import Communication from "./components/Communication";

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
    </section>
  );
}
