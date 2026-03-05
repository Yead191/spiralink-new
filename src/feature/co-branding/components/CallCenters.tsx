import React from "react";
import { Asterisk, BadgeCheck, MoveUpRight } from "lucide-react";
import Image from "next/image";

export default function CallCenters() {
  return (
    <section
      style={{
        backgroundImage: "url('/assets/bg/co-branding/call-center-bg.svg')",
        backgroundSize: "contain",
        backgroundPosition: "top",
        backgroundRepeat: "no-repeat",
      }}
      className="relative text-white my-16 pt-8 md:mt-32 mb-32 "
    >
      <div className="container relative ">
        <div className="flex flex-col md:grid  md:grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 ">
          {/* Left Column - Badge & Text */}
          <div className="relative z-20 pt-10 lg:pt-0 text-left">
            <div className="mt-4 lg:mt-32 ">
              <h2 className="box-title max-w-[456px] lg:leading-[66px]! md:leading-[48px] leading-[40px] tracking-[-6%] mb-5!">
                Call centers are not AI companies.
              </h2>
              <p className="point-heading mb-4 lg:mb-8!">
                This is not criticism. It is simply true.
              </p>
              <p className="section-subtitle md:mb-10 lg:mb-20">
                Call centers excel at operations, client relationships, and
                service delivery. Voice AI engineering is a different expertise.
              </p>
              <div className="relative hidden md:block">
                <div className="flex gap-4 justify-between items-center md:mb-12 lg:mb-0">
                  <div className="lg:w-[300px] lg:h-[200px] w-[200px] h-[150px] rounded-3xl overflow-hidden border border-white/10 relative">
                    <Image
                      src="/assets/images/co-branding/person2.jpg"
                      alt="AI Agent"
                      width={300}
                      height={200}
                      draggable={false}
                      className="object-cover w-full h-full object-top"
                    />
                  </div>
                  <p className="hidden md:block lg:hidden w-2/4">
                    <span className="text-primary font-semibold">
                      Co-branding
                    </span>{" "}
                    acknowledges this. It shows clients that the partner made a
                    smart choice: bringing in specialists for specialized work.
                  </p>
                </div>
                {/* Chat Bubble */}
                <div
                  style={{
                    backdropFilter: "blur(25px)",
                    background:
                      "linear-gradient(304.65deg, rgba(255, 255, 255, 0.05) 13.81%, rgba(153, 153, 153, 0.0332332) 33.55%, rgba(153, 153, 153, 0.0125) 81.13%)",
                  }}
                  className="absolute lg:-bottom-10 lg:left-60 left-28 -bottom-20 ml-4 border border-white/10 p-4 lg:p-5 rounded-2xl w-56 lg:w-[280px] shadow-2xl"
                >
                  <p className="text-gray-300 text-sm leading-relaxed">
                    Your AI voice agent is ready to take responsibility when
                    you're not available to answer!
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Title & List & Floating Images */}
          <div className="relative z-10 pt-0 lg:pt-32">
            <div className="flex flex-col space-y-6 md:space-y-12 section-subtitle ">
              <p className="md:hidden lg:block">
                <span className="text-primary font-semibold">Co-branding</span>{" "}
                acknowledges this. It shows clients that the partner made a
                smart choice: bringing in specialists for specialized work.
              </p>
              <p className="md:w-2/4 lg:w-full">
                <span className="text-primary font-semibold">White-label</span>{" "}
                asks partners to appear as if they have AI expertise they do not
                have. When clients ask technical questions, the partner must
                either bluff or delay.
              </p>
            </div>
            <div className="mt-12 md:mt-6 lg:mt-16 max-w-[330px] md:w-2/4 lg:w-full md:ml-auto lg:ml-0">
              <Asterisk
                size={32}
                className="text-primary  font-semibold! shrink-0 mt-[-18px] md:mt-0"
              />
              <p className="text-primary text-[20px] xl:text-[24px]  font-semibold leading-[34px] tracking-[-4%] pl-8 ">
                Clients notice eventually. Co-branding is more honest—and
                honesty builds trust.
              </p>
            </div>
          </div>
        </div>
        <div className="relative md:hidden mt-8 ">
          <div className="lg:w-[300px] lg:h-[200px] w-[200px] h-[150px] rounded-3xl overflow-hidden border border-white/10 relative">
            <Image
              src="/assets/images/co-branding/person2.jpg"
              alt="AI Agent"
              width={300}
              height={200}
              draggable={false}
              className="object-cover w-full h-full object-top"
            />
          </div>
          {/* Chat Bubble */}
          <div
            style={{
              backdropFilter: "blur(25px)",
              background:
                "linear-gradient(304.65deg, rgba(255, 255, 255, 0.05) 13.81%, rgba(153, 153, 153, 0.0332332) 33.55%, rgba(153, 153, 153, 0.0125) 81.13%)",
            }}
            className="absolute lg:-bottom-10 lg:left-60 left-28 -bottom-15 ml-4 border border-white/10 p-4 lg:p-5 rounded-2xl w-[200px] lg:w-[280px] shadow-2xl"
          >
            <p className="text-white/90 text-xs lg:text-sm leading-[18px] tracking-[2%] max-w-[200px]">
              Your AI voice agent is ready to take responsibility when you're
              not available to answer!
            </p>
          </div>
        </div>

        {/* Floating Image 2 (Man) - Desktop Position */}
        <div className="hidden md:block absolute -top-42 right-5 w-[400px]">
          <div className="relative">
            {/* Chat Bubble Left */}
            <div
              style={{
                backdropFilter: "blur(25px)",
                background:
                  "linear-gradient(304.65deg, rgba(255, 255, 255, 0.05) 13.81%, rgba(153, 153, 153, 0.0332332) 33.55%, rgba(153, 153, 153, 0.0125) 81.13%)",
              }}
              className="absolute top-18 md:-left-3 lg:-left-14 border border-white/10 p-5 rounded-2xl md:max-w-[300px] lg:max-w-xs z-20 shadow-2xl"
            >
              <p className="text-white/90 text-xs lg:text-sm leading-[18px] tracking-[2%] max-w-[200px]">
                Hi David, My boss is busy in assisting the clients will get back
                to you soon. Meanwhile, I'm here to answer your queries :)
              </p>
            </div>

            <div className="ml-auto md:w-48 lg:w-64 md:h-32 lg:h-40 rounded-3xl overflow-hidden border border-white/10 relative">
              <Image
                src="/assets/images/co-branding/person1.png"
                alt="Customer"
                width={300}
                height={200}
                draggable={false}
                className="object-cover w-full h-full"
              />
              <div className="absolute top-4 left-4 w-3 h-3 bg-purple-500 rounded-full animate-pulse shadow-[0_0_10px_#a855f7]" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
