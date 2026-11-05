import React from "react";
import { MEDIA, WEDDING_CONFIG } from "../data/weddingConfig";

export function SwansWelcome() {
  return (
    <section
      className="relative w-full bg-background overflow-hidden"
      aria-label="Siddhart and Pooja wedding invitation"
    >
      <img
        src={MEDIA.swansHero}
        alt="Embroidered wedding invitation with floral garden and swans"
        className="block h-auto w-full select-none pointer-events-none"
      />
      <div
        className="absolute inset-x-0 top-[37.5%] h-[25%] flex flex-col items-center justify-center text-center px-4 max-w-sm sm:max-w-md md:max-w-lg mx-auto pointer-events-none select-none z-10"
      >
        {/* We Are Getting Married Heading - Dignified Classic Serif in Rich Burgundy */}
        <p className="font-serif text-xs sm:text-sm md:text-base tracking-[0.22em] uppercase text-[#7c2635] font-semibold mb-1.5 sm:mb-2">
          We Are Getting Married
        </p>

        {/* Authentic Couple Names - Exact PDF Font, Equal Size & Baseline Aligned */}
        <div className="h-10 sm:h-14 md:h-16 flex items-center justify-center my-1.5 sm:my-2.5 px-2 max-w-full">
          <img
            src={MEDIA.pdfCouplePerfect}
            alt={`${WEDDING_CONFIG.couple_name_1} & ${WEDDING_CONFIG.couple_name_2}`}
            className="h-full w-auto max-w-[88vw] object-contain select-none"
          />
        </div>

        {/* High-Visibility Wedding Dates - Clearly Visible Size & Contrast */}
        <p className="font-serif text-sm sm:text-base md:text-lg tracking-[0.22em] uppercase text-[#7c2635] font-semibold mt-2 sm:mt-3 whitespace-nowrap">
          DEC | <span className="font-digit font-bold">03</span>RD | <span className="font-digit font-bold">05</span>TH | <span className="font-digit font-bold">2026</span>
        </p>
      </div>
    </section>
  );
}
