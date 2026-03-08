import React from "react";
import { FileText, BadgeCheck, PackageSearch } from "lucide-react";
export default function ContactSteps() {
  const items: { id: number; text: string }[] = [
    {
      id: 1,
      text: "Co-branded or white-label partnerships",
    },
    {
      id: 2,
      text: "General questions about SpiraLink",
    },
    {
      id: 3,
      text: "Inbound customer support use cases",
    },
    {
      id: 4,
      text: "Security, compliance, or technical specs",
    },
  ];
  return (
    <div className="flex flex-col md:flex-row lg:flex-col gap-4 overflow-x-auto pb-4 lg:pb-0 snap-x snap-mandatory scrollbar-hide -mx-4 px-4 lg:mx-0 lg:px-0 items-start relative z-10">
      {/* step1 */}
      <div
        style={{
          backdropFilter: "blur(25px)",
          background:
            "linear-gradient(304.65deg, rgba(255, 255, 255, 0.05) 13.81%, rgba(153, 153, 153, 0.0332332) 33.55%, rgba(153, 153, 153, 0.0125) 81.13%)",
        }}
        className={`
      border border-white/10
      p-6
       lg:px-[30px]
      lg:py-10
      rounded-2xl
w-full
      md:min-w-[350px]
      lg:max-w-[478px]
      snap-center
      flex flex-col gap-4 min-h-[270px] lg:min-h-auto
    `}
      >
        <div className="w-12 h-12 lg:w-14 lg:h-14 rounded-full bg-white/5 flex items-center justify-center border border-white/10 mb-10 lg:mb-12">
          <FileText className="w-6 h-6 lg:w-8 lg:h-8  text-primary" />
        </div>

        <div>
          <h4 className="font-semibold text-xl lg:text-2xl mb-4 leading-[24px] tracking-[-2%]">
            No bots, no automated loops.
          </h4>
          <p className="section-subtitle text-[16px]!">
            We review every message manually and respond with context.
          </p>
        </div>
      </div>
      {/* step2 */}
      <div
        style={{
          backdropFilter: "blur(25px)",
          background:
            "linear-gradient(304.65deg, rgba(255, 255, 255, 0.05) 13.81%, rgba(153, 153, 153, 0.0332332) 33.55%, rgba(153, 153, 153, 0.0125) 81.13%)",
        }}
        className={`
      border border-white/10
      p-6
      lg:px-[30px]
      lg:py-10
      rounded-2xl
            w-full
      md:min-w-[350px]

      lg:w-[478px]
      snap-center
      flex flex-col gap-4 min-h-[270px] lg:min-h-auto
    `}
      >
        <div>
          <h4 className="font-semibold text-xl lg:text-2xl mb-6 leading-[24px] tracking-[-2%]">
            What you can contact us for
          </h4>
          <ul className="flex flex-col space-y-5">
            {items?.map((item, index) => (
              <li
                key={index}
                className="flex items-center gap-3 text-lg text-gray-300"
              >
                <BadgeCheck className="w-6 h-6 text-primary shrink-0" />
                <span>{item.text}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
      {/* step3 */}
      <div
        style={{
          backdropFilter: "blur(25px)",
          background:
            "linear-gradient(304.65deg, rgba(255, 255, 255, 0.05) 13.81%, rgba(153, 153, 153, 0.0332332) 33.55%, rgba(153, 153, 153, 0.0125) 81.13%)",
        }}
        className={`
      border border-white/10
      p-6
       lg:px-[30px]
      lg:py-10
      rounded-2xl
            w-full
      md:min-w-[350px]

      lg:w-[478px]
      snap-center
      flex flex-col gap-4 min-h-[270px] lg:min-h-auto
    `}
      >
        <div className="w-12 h-12 lg:w-14 lg:h-14 rounded-full bg-white/5 flex items-center justify-center border border-white/10 mb-10 lg:mb-12">
          <PackageSearch className="w-6 h-6 lg:w-8 lg:h-8  text-primary" />
        </div>

        <div>
          <h4 className="font-semibold text-xl lg:text-2xl mb-4 leading-[24px] tracking-[-2%]">
            The "Demo" Diverter
          </h4>
          <p className="section-subtitle text-[16px]!">
            Looking for a deep dive? If you need a concrete setup tailored to
            your operation, skip the queue.
          </p>
        </div>
      </div>
    </div>
  );
}
