import BadgeHero from "@/shared/BadgeHero";
import Image from "next/image";
import React from "react";

export default function ProblemWeSaw() {
  return (
    <section className="py-8 lg:py-16 container">
      {/* TOP */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-4">
        {/* left side */}
        <div>
          <div className="relative flex items-center justify-center md:justify-start md:items-start">
            <BadgeHero label="The problem we saw" />
            <Image
              draggable={false}
              src="/assets/lines/home/expert-line.png"
              alt="Choose Experts"
              width={400}
              height={400}
              className="w-fit h-full md:h-[300px] object-contain absolute top-2/6 left-3/7 z-0 hidden md:block lg:hidden"
            />
          </div>
          <h4 className="font-semibold lg:text-[40px] md:text-[32px] text-[24px] leading-[32px] md:leading-[40px] lg:leading-[48px] mt-8 lg:mt-10 relative z-10 text-center md:text-left">
            Call centers are not known for AI operations. And that is fine.
            Co-branding shows clients you made a strategic choice:
          </h4>
        </div>
        {/* right side */}
        <div className="flex justify-center relative">
          <Image
            draggable={false}
            src="/assets/images/home/expert1.png"
            alt="Choose Experts"
            width={400}
            height={400}
            className="w-fit h-[300px] object-contain block md:hidden lg:block relative z-10"
          />
          {/* Bottom Right SVG Line */}
          <svg
            className="absolute -right-[1144%] lg:-right-[1418%] xl:-right-[1268%] bottom-0 lg:-bottom-[330px] h-[274px] lg:h-[400px] z-0  xl:block pointer-events-none hidden lg:scale-150"
            viewBox="0 0 5000 294"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 10H310.876C397.427 10 390.82 147.66 306.912 147.66H228.95C147.024 147.66 148.345 284 228.95 284H397.427C420.551 284 432.774 266.834 432.774 243.065V55.8868C432.774 28.8169 432.774 10 466.469 10H5000"
              stroke="url(#techteam_line_gradient_2)"
              strokeWidth="10"
            />
            <defs>
              <linearGradient
                id="techteam_line_gradient_2"
                x1="170"
                y1="147"
                x2="500"
                y2="147"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#6C35BE" stopOpacity="0" />
                <stop offset="1" stopColor="#C175FC" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>

      {/* MIDDLE */}
      <div className="max-w-[834px] lg:mb-[60px] md:mb-[46px] mb-8">
        <h1 className="extra-large-text lg:mb-10 mb-6">
          Everyone says <br /> AI is the answer.
        </h1>
        <p className="point-heading max-w-[442px]">
          But when call centers look for solutions, they find two options:
        </p>
      </div>

      {/* BOTTOM */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-6 md:max-w-xl lg:max-w-max md:mx-auto">
        {/* Card 1 */}
        <div className="glass-box rounded-[24px] p-4 py-8 md:p-8 lg:p-12 lg:py-16 border border-white/10 flex flex-col h-full">
          <span className="box-subtitle mb-4">Option 1</span>
          <h2 className="box-title mb-10">DIY platforms</h2>

          <div className="border border-[#C175FC] rounded-2xl p-4 py-6 md:p-6 bg-[#000000] relative mb-12 min-h-[160px] md:-translate-x-24 backdrop-blur-2xl">
            <span className="text-[#FFFFFF]/30 text-lg">
              | Describe your interview description...
            </span>
            <div className="absolute bottom-6 right-6 bg-[#FFFFFF]/10 w-10 h-10 rounded-full flex items-center justify-center border border-white/5 shadow-2xl">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-[#FFFFFF]/30"
              >
                <path d="m17 11-5-5-5 5" />
                <path d="M12 18V6" />
              </svg>
            </div>
          </div>

          <div className="mt-auto space-y-6">
            <p className="section-subtitle">
              “Here’s a tool. Build it yourself. Figure out the prompts, the
              integrations, the edge cases. Good luck.”
            </p>
            <p className="section-subtitle">
              This works if you have AI engineers. Most call centers don’t.
            </p>
          </div>
        </div>

        {/* Card 2 */}
        <div className="glass-box rounded-[24px] p-8 lg:p-12 lg:py-16 border border-white/10 flex flex-col h-full relative">
          {/* Floating Icons */}
          {/* Top Icon */}
          <div className="absolute md:-top-6 right-[15%] bg-[#111113] p-4 rounded-3xl border border-white/5 shadow-2xl z-20">
            <div className="bg-[#C175FC] p-2 rounded-lg">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#000"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect width="18" height="18" x="3" y="3" rx="2" />
                <path d="M3 9h18" />
                <path d="M9 21V9" />
                <path d="M14 13h2" />
                <path d="M14 17h2" />
              </svg>
            </div>
          </div>
          {/* Mid-Lower Center Icon */}
          <div className="absolute top-0 left-1/2 md:top-[50%] lg:top-[55%] md:left-3/4 lg:left-1/2 bg-[#111113] p-5 rounded-3xl border border-white/5 shadow-2xl -translate-x-1/2 -translate-y-1/2 z-20">
            <div className="relative">
              <svg
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#C175FC"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              <div className="absolute -top-1 -right-1 bg-[#111113] p-0.5 rounded-full">
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="#C175FC"
                  stroke="#C175FC"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  <path d="m9 12 2 2 4-4" />
                </svg>
              </div>
            </div>
          </div>
          {/* Mid Right Icon */}
          <div className="absolute top-[30%] md:top-[25%] lg:top-[45%] -right-8 bg-[#111113] p-4 rounded-2xl border border-white/5 shadow-2xl z-20">
            <div className="bg-[#C175FC]/10 p-2 rounded-lg">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#C175FC"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M2 9V5.25A2.25 2.25 0 0 1 4.25 3h15.5A2.25 2.25 0 0 1 22 5.25V9" />
                <path d="M2 15v3.75A2.25 2.25 0 0 0 4.25 21h15.5A2.25 2.25 0 0 0 22 18.75V15" />
                <path d="M2 12h5" />
                <path d="M17 12h5" />
                <path d="M7 12a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2 2 2 0 0 1-2 2H9a2 2 0 0 1-2-2z" />
              </svg>
            </div>
          </div>

          <span className="box-subtitle mb-4">Option 2</span>
          <h2 className="box-title mb-10 max-w-[300px]">Generic AI products</h2>

          <div className="mt-auto">
            <p className="section-subtitle">
              Solutions built for demos, not for real operations. They sound
              good in a pitch. They break when a caller has an accent,
              interrupts, or asks something unexpected.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
