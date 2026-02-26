import React from "react";
import Banner from "./sections/banner/Banner";

export default async function DemoPage() {
  return (
    <section
      style={{
        backgroundImage: "url('/assets/bg/demo/demo-bg.svg')",
        backgroundSize: "cover",
        // backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Banner />
    </section>
  );
}
