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
        className="absolute left-1/2 -translate-x-1/2 top-[36.5%] h-[31.5%] w-[82%] max-w-xl flex flex-col items-center justify-center text-center pointer-events-none select-none z-10 px-2"
      >
        {/* 1. WE ARE GETTING MARRIED - Single Line with Natural Letter Spacing */}
        <h2
          className="font-serif tracking-[0.14em] uppercase text-[#7c2635] font-semibold my-0 whitespace-nowrap"
          style={{ fontSize: "clamp(15px, 4.3vw, 26px)" }}
        >
          WE ARE GETTING MARRIED
        </h2>

        {/* 2. Golden Interlocking Wedding Rings Divider with Lateral Lines */}
        <div className="flex items-center justify-center gap-2 w-40 sm:w-52 my-1 sm:my-2 text-[#b88e44]">
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
          className="font-serif tracking-[0.06em] text-[#a3702c] font-medium my-0.5 sm:my-1"
          style={{ fontSize: "clamp(13px, 3.8vw, 22px)" }}
        >
          With The Blessings Of
        </p>

        {/* 4. Elders Names - Large, Bold & Prominent */}
        <p
          className="font-serif text-[#1e3a2f] font-bold leading-[1.28] my-1 sm:my-1.5"
          style={{ fontSize: "clamp(16px, 4.8vw, 28px)" }}
        >
          Late Shri Bankatlal Ji -<br />
          Late Smt. Vidhyadevi Malani
        </p>

        {/* 5. Golden Ornate Flourish Divider */}
        <div className="flex items-center justify-center gap-2 w-32 sm:w-44 my-1 sm:my-1.5 text-[#b88e44]/80">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent to-[#b88e44]/75" />
          <span className="text-[11px] sm:text-xs leading-none">&#10022;</span>
          <div className="h-px flex-1 bg-gradient-to-l from-transparent to-[#b88e44]/75" />
        </div>

        {/* 6. Invite you to share their joy... (Classic Italic Serif) */}
        <p
          className="font-serif italic text-[#1e3a2f] leading-[1.38] max-w-sm sm:max-w-md mx-auto font-medium"
          style={{ fontSize: "clamp(12.5px, 3.6vw, 21px)" }}
        >
          Invite you to share their joy at the wedding<br />
          celebrations of their great grandson
        </p>
      </div>
    </section>
  );
}
