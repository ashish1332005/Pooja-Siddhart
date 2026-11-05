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
        className="absolute inset-x-0 top-[38.5%] h-[22%] flex flex-col items-center justify-center text-center px-4 max-w-sm sm:max-w-md md:max-w-lg mx-auto pointer-events-none select-none z-10"
      >
        {/* We Are Getting Married Heading - Dignified Classic Serif in Rich Burgundy */}
        <p className="font-serif text-xs sm:text-sm md:text-base tracking-[0.22em] uppercase text-[#7c2635] font-medium mb-1">
          We Are Getting Married
        </p>

        {/* Authentic Couple Names - Grand, Equal Size & Baseline Aligned */}
        <div className="flex items-baseline justify-center gap-2 sm:gap-3 my-1 sm:my-2">
          <span className="font-couple text-[#7c2635] text-3xl sm:text-4xl md:text-5xl leading-none font-normal drop-shadow-sm">
            {WEDDING_CONFIG.couple_name_1}
          </span>
          <span className="font-display text-[#b88e44] text-xl sm:text-2xl md:text-3xl font-light px-1 leading-none">
            &amp;
          </span>
          <span className="font-couple text-[#7c2635] text-3xl sm:text-4xl md:text-5xl leading-none font-normal drop-shadow-sm">
            {WEDDING_CONFIG.couple_name_2}
          </span>
        </div>

        {/* High-Visibility Wedding Dates - Larger Font Size, Refined Weight (Not Overly Bold) */}
        <p className="font-serif text-xs sm:text-sm md:text-base tracking-[0.24em] uppercase text-[#7c2635] font-semibold mt-1 sm:mt-1.5">
          DEC | <span className="font-digit font-bold">03</span>RD | <span className="font-digit font-bold">05</span>TH | <span className="font-digit font-bold">2026</span>
        </p>
      </div>
    </section>
  );
}
