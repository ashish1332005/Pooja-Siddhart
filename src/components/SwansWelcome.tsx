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
        className="absolute left-1/2 -translate-x-1/2 top-[37%] h-[30%] w-[62%] max-w-xl flex flex-col items-center justify-center text-center pointer-events-none select-none z-10"
      >
        {/* We Are Getting Married Heading */}
        <p
          className="font-serif tracking-[0.2em] uppercase text-[#7c2635] font-semibold mb-[2.2vw] sm:mb-3"
          style={{ fontSize: "clamp(12px, 3.7vw, 24px)" }}
        >
          We Are Getting Married
        </p>

        {/* Blessings & Invitation Line */}
        <p
          className="font-serif tracking-[0.05em] text-[#a3702c] font-medium"
          style={{ fontSize: "clamp(11px, 3.3vw, 20px)" }}
        >
          With The Blessings Of
        </p>
        <p
          className="font-serif text-[#1e3a2f] font-semibold leading-[1.3] mt-[0.8vw]"
          style={{ fontSize: "clamp(13px, 4.2vw, 26px)" }}
        >
          Late Shri Bankatlal Ji -<br />
          Late Smt. Vidhyadevi Malani
        </p>
        <p
          className="font-serif text-[#1e3a2f] leading-[1.4] mt-[1.8vw] sm:mt-2 font-medium"
          style={{ fontSize: "clamp(11px, 3.4vw, 21px)" }}
        >
          Invite you to share their joy at the wedding celebrations of their great grandson
        </p>
      </div>
    </section>
  );
}
