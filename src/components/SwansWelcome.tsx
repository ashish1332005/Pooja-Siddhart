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
        className="absolute inset-x-0 top-[39%] h-[20%] flex flex-col items-center justify-center text-center px-4 max-w-sm sm:max-w-md mx-auto pointer-events-none select-none z-10"
      >
        {/* We Are Getting Married Heading - Dignified Classic Serif in Rich Burgundy */}
        <p className="font-serif text-[11px] sm:text-xs md:text-sm tracking-[0.22em] uppercase text-[#7c2635] font-semibold">
          We Are Getting Married
        </p>

        {/* Authentic Couple Names - Equal Font Size & Perfect Baseline Alignment */}
        <div className="flex items-baseline justify-center gap-2 sm:gap-3 my-1.5 sm:my-2.5">
          <span className="font-couple text-[#7c2635] text-2xl sm:text-3xl md:text-4xl leading-none font-normal drop-shadow-sm">
            {WEDDING_CONFIG.couple_name_1}
          </span>
          <span className="font-display text-[#b88e44] text-lg sm:text-xl md:text-2xl font-light px-0.5 leading-none">
            &amp;
          </span>
          <span className="font-couple text-[#7c2635] text-2xl sm:text-3xl md:text-4xl leading-none font-normal drop-shadow-sm">
            {WEDDING_CONFIG.couple_name_2}
          </span>
        </div>

        {/* High-Visibility Wedding Dates */}
        <p className="font-serif text-[10px] sm:text-xs md:text-sm tracking-[0.22em] uppercase text-[#7c2635] font-bold">
          DEC | <span className="font-digit font-bold">03</span>RD | <span className="font-digit font-bold">05</span>TH | <span className="font-digit font-bold">2026</span>
        </p>
      </div>
    </section>
  );
}
