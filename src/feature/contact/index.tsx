import React from "react";
import ContactBanner from "./components/ContactBanner";

export default function ContactPage() {
  return (
    <section
      style={{
        backgroundImage: "url('/assets/bg/demo/demo-bg.svg')",
        backgroundSize: "cover",
        // backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <ContactBanner />
    </section>
  );
}
