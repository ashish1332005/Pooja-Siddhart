import React from "react";
import { MEDIA } from "../data/weddingConfig";

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
        className="absolute inset-x-0 top-[38.5%] h-[21%] flex flex-col items-center justify-center text-center px-4 max-w-sm sm:max-w-md mx-auto pointer-events-none select-none z-10"
      >
        {/* We Are Getting Married Heading - Deep Burgundy, Well Below Hanging Wisteria */}
        <p className="font-display text-[10.5px] sm:text-xs md:text-sm tracking-[0.28em] uppercase text-[#7c2635] font-semibold">
          We Are Getting Married
        </p>

        {/* Authentic Couple Names from PDF - Perfectly Balanced Spacing */}
        <div className="w-full flex items-center justify-center my-2 sm:my-3">
          <img
            src={MEDIA.pdfCoupleBalanced}
            alt="Siddhart & Pooja"
            className="h-8 sm:h-11 md:h-14 w-auto max-w-[85%] object-contain select-none drop-shadow-sm"
          />
        </div>

        {/* High-Visibility Wedding Dates - Burgundy Palette Matching Sample */}
        <p className="font-display text-[10px] sm:text-xs md:text-sm tracking-[0.24em] uppercase text-[#7c2635] font-bold">
          DEC | <span className="font-digit font-bold">03</span>RD | <span className="font-digit font-bold">05</span>TH | <span className="font-digit font-bold">2026</span>
        </p>
      </div>
    </section>
  );
}
