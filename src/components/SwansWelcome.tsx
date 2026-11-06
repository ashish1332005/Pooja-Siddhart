import React from "react";
import { MEDIA } from "../data/weddingConfig";

export function SwansWelcome() {
  return (
    <section
      id="swans-welcome"
      className="relative w-full bg-background overflow-hidden"
      aria-label="Siddhart and Pooja wedding invitation"
    >
      <img
        src={MEDIA.swansHero}
        alt="Embroidered wedding invitation with floral garden and swans"
        className="block h-auto w-full select-none pointer-events-none"
      />
      <div
        className="absolute left-1/2 -translate-x-1/2 top-[29.5%] h-[36.5%] w-[84%] max-w-md flex flex-col items-center justify-between text-center pointer-events-none select-none z-10 px-2 py-0.5"
      >
        {/* 1. WE ARE GETTING MARRIED - Positioned higher right below wisteria */}
        <div className="flex flex-col items-center leading-[1.12]">
          <span
            className="font-serif tracking-[0.18em] uppercase text-[#7c2635] font-semibold"
            style={{ fontSize: "clamp(15px, 4.4vw, 25px)" }}
          >
            WE ARE GETTING
          </span>
          <span
            className="font-serif tracking-[0.24em] uppercase text-[#7c2635] font-semibold mt-1"
            style={{ fontSize: "clamp(17px, 5.2vw, 28px)" }}
          >
            MARRIED
          </span>
        </div>

        {/* 2. Golden Interlocking Wedding Rings Divider with Lateral Lines */}
        <div className="flex items-center justify-center gap-2.5 w-48 sm:w-60 text-[#b88e44]">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-[#b88e44]/80 to-[#b88e44]" />
          <svg
            className="w-6 h-4 sm:w-7 sm:h-4.5 text-[#b88e44] shrink-0"
            viewBox="0 0 32 20"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.2"
          >
            <circle cx="11" cy="10" r="6.5" />
            <circle cx="21" cy="10" r="6.5" />
          </svg>
          <div className="h-px flex-1 bg-gradient-to-l from-transparent via-[#b88e44]/80 to-[#b88e44]" />
        </div>

        {/* 3. With the blessings of - Italic Serif */}
        <p
          className="font-serif italic text-[#9c6628] font-medium"
          style={{ fontSize: "clamp(15px, 4.2vw, 23px)" }}
        >
          With the blessings of
        </p>

        {/* 4. Elders Names with & - Bold Dignified Serif */}
        <p
          className="font-serif text-[#163328] font-bold leading-[1.28]"
          style={{ fontSize: "clamp(17px, 5vw, 29px)" }}
        >
          Late Shri Bankatlal Ji &amp;<br />
          Late Smt. Vidhyadevi Malani
        </p>

        {/* 5. Golden Ornate Flourish Divider */}
        <div className="flex items-center justify-center gap-2.5 w-40 sm:w-52 text-[#b88e44]/85">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent to-[#b88e44]" />
          <span className="text-xs sm:text-sm leading-none">&#10022;</span>
          <div className="h-px flex-1 bg-gradient-to-l from-transparent to-[#b88e44]" />
        </div>

        {/* 6. Soliciting your gracious presence and blessings on the occasion of our wedding */}
        <p
          className="font-serif italic text-[#163328] leading-[1.38] max-w-[280px] sm:max-w-xs md:max-w-sm mx-auto font-medium"
          style={{ fontSize: "clamp(13px, 3.8vw, 20px)" }}
        >
          Soliciting your gracious presence and blessings<br />
          on the occasion of our wedding
        </p>
      </div>
    </section>
  );
}
