import BadgeHero from "@/shared/BadgeHero";
import { Asterisk } from "lucide-react";
import Marquee from "react-fast-marquee";

export default function StartedSpiralink() {
  const marqueeItems = [
    "There is no separate AI environment to manage.",
    "No duplicate workflows.",
    "No manual syncing between tools.",
  ];
  return (
    <section className="container py-8 lg:py-16 flex flex-col text-center items-center justify-center">
      <BadgeHero label="Why we started SpiraLink ✨" />
      <h1 className="page-title mb-6 lg:mb-8! mt-7">
        We started SpiraLink in Gent, Belgium because we saw this gap.
      </h1>
      <p className="section-subtitle max-w-[950px]">
        Call centers were excited about AI. They tried the platforms. They ran
        pilots. Most failed—not because AI doesn’t work, but because nobody
        owned the full solution. The platform vendors said “that’s an
        integration issue.” The integrators said “that’s an AI issue. <br />{" "}
        <br /> The call center was stuck in the middle. We decided to be the
        team that owns everything. We build the voicebot. We design the
        conversation logic. We integrate with their systems. We handle the edge
        cases. We keep it running.
      </p>
      <div className="relative overflow-hidden pt-12 lg:pt-20">
        <Marquee
          speed={80}
          gradient={false}
          pauseOnHover={false}
          autoFill
          className="overflow-hidden"
        >
          {marqueeItems?.map((item, index) => (
            <div
              key={index}
              className="flex items-center gap-4 mx-8 whitespace-nowrap pb-2"
            >
              <Asterisk
                size={32}
                className="text-primary  font-semibold! shrink-0 "
              />
              <span className="text-xl lg:text-4xl font-semibold text-white tracking-wide">
                {item}
              </span>
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  );
}
