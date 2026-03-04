import React from "react";

export default function Communication() {
  return (
    <section className="max-w-6xl mx-auto py-8 lg:py-16 relative overflow-hidden px-4 lg:px-5">
      <div className="glass-box rounded-[24px] p-4 md:p-8 lg:px-20 lg:py-16 relative overflow-hidden border border-white/10">
        {/* SVG Line */}
        <svg
          className="absolute -right-[240px] md:-right-[140px] lg:-right-10 -top-[130px] md:-top-[230px] lg:-top-[180px] h-[250px] md:h-[350px] lg:h-[340px] z-0 pointer-events-none transform scale-x-[-1]"
          viewBox="143 0 5000 294"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M-4163 284H332.044C418.566 284 411.961 146.34 328.081 146.34H250.145C168.246 146.34 169.567 10 250.145 10H418.566C441.682 10 453.901 27.1663 453.901 50.9349V238.113C453.901 265.183 453.901 284 487.585 284H837"
            stroke="url(#communication_line_gradient)"
            className="stroke-[14px]"
          />
          <defs>
            <linearGradient
              id="communication_line_gradient"
              x1="189.215"
              y1="147"
              x2="837"
              y2="147"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#C175FC" />
              <stop offset="1" stopColor="#6C35BE" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>

        <div className="relative z-10">
          <h2 className="box-title max-w-[600px] mb-12 md:mb-[50px] lg:mb-20 ">
            Direct vs indirect communication
          </h2>

          <div className="grid md:grid-cols-2 gap-8 lg:gap-16">
            {/* Co-branded */}
            <div className="flex flex-col space-y-6">
              <h3 className="point-heading">Co-branded</h3>
              <div className="section-subtitle flex flex-col space-y-6">
                <p>
                  Spiralink speaks directly with the client’s team. Technical
                  questions get answered by the people who built the system.
                </p>
                <p>
                  Problems are understood firsthand. Solutions are implemented
                  immediately.
                </p>
              </div>
            </div>

            {/* White-label */}
            <div className="flex flex-col space-y-6">
              <h3 className="point-heading">White-label</h3>
              <div className="section-subtitle flex flex-col space-y-6">
                <p>
                  Client talks to partner. Partner relays to Spiralink.
                  Spiralink responds. Partner translates back. Or Spiralink
                  joins calls anonymously as “the partner’s engineers.”
                </p>
                <p>
                  Every step of indirection introduces delay and potential
                  miscommunication. When a problem is relayed through someone
                  else, details get lost.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
