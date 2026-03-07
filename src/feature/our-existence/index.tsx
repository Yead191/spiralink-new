import React from "react";
import ExistenceBanner from "./components/ExistenceBanner";
import ProblemWeSaw from "./components/ProblemWeSaw";
import WhatWeBelive from "./components/WhatWeBelive";
import StartedSpiralink from "./components/StartedSpiralink";

export default function OurExistencePage() {
  return (
    <section
      style={{
        backgroundImage: "url('/assets/bg/co-branding/co-branding-bg.svg')",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
      className="overflow-hidden"
    >
      <ExistenceBanner />
      <ProblemWeSaw />
      <WhatWeBelive />
      <StartedSpiralink />
    </section>
  );
}
