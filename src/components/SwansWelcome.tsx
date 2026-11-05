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
        className="absolute left-1/2 -translate-x-1/2 top-[34.5%] h-[33.5%] w-[80%] max-w-lg flex flex-col items-center justify-center text-center pointer-events-none select-none z-10 px-2"
      >
        {/* 1. WE ARE GETTING MARRIED (2 Lines with Natural, Clean Letter Spacing - No Overlap) */}
        <div className="flex flex-col items-center leading-[1.12] mb-1">
          <span
            className="font-serif tracking-[0.18em] uppercase text-[#7c2635] font-semibold"
            style={{ fontSize: "clamp(13px, 3.8vw, 22px)" }}
          >
            WE ARE GETTING
          </span>
          <span
            className="font-serif tracking-[0.24em] uppercase text-[#7c2635] font-semibold mt-0.5"
            style={{ fontSize: "clamp(14px, 4.2vw, 24px)" }}
          >
            MARRIED
          </span>
        </div>

        {/* 2. Golden Interlocking Wedding Rings Divider with Lateral Lines */}
        <div className="flex items-center justify-center gap-2 w-36 sm:w-48 my-1 text-[#b88e44]">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-[#b88e44]/75 to-[#b88e44]" />
          <svg
            className="w-5 h-3.5 sm:w-6 sm:h-4 text-[#b88e44] shrink-0"
            viewBox="0 0 32 20"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.2"
          >
            <circle cx="11" cy="10" r="6.5" />
            <circle cx="21" cy="10" r="6.5" />
          </svg>
          <div className="h-px flex-1 bg-gradient-to-l from-transparent via-[#b88e44]/75 to-[#b88e44]" />
        </div>

        {/* 3. With The Blessings Of */}
        <p
          className="font-serif tracking-[0.06em] text-[#a3702c] font-medium my-0.5"
          style={{ fontSize: "clamp(12.5px, 3.6vw, 20px)" }}
        >
          With The Blessings Of
        </p>

        {/* 4. Elders Names - Large, Bold & Prominent */}
        <p
          className="font-serif text-[#1e3a2f] font-bold leading-[1.28] my-1"
          style={{ fontSize: "clamp(15px, 4.5vw, 26px)" }}
        >
          Late Shri Bankatlal Ji -<br />
          Late Smt. Vidhyadevi Malani
        </p>

        {/* 5. Golden Ornate Flourish Divider */}
        <div className="flex items-center justify-center gap-2 w-28 sm:w-40 my-1 text-[#b88e44]/80">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent to-[#b88e44]/75" />
          <span className="text-[10px] sm:text-xs leading-none">&#10022;</span>
          <div className="h-px flex-1 bg-gradient-to-l from-transparent to-[#b88e44]/75" />
        </div>

        {/* 6. Invite you to share their joy... (Classic Italic Serif) */}
        <p
          className="font-serif italic text-[#1e3a2f] leading-[1.36] max-w-sm sm:max-w-md mx-auto font-medium"
          style={{ fontSize: "clamp(12px, 3.4vw, 19px)" }}
        >
          Invite you to share their joy at the wedding<br />
          celebrations of their great grandson
        </p>
      </div>
    </section>
  );
}
