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
        className="absolute inset-x-0 top-[26%] bottom-[33%] flex flex-col items-center justify-center text-center px-6 sm:px-10 max-w-lg mx-auto"
        style={{ mixBlendMode: "multiply" }}
      >
        {/* Golden Ganesh Ji Logo from PDF */}
        <img
          src={MEDIA.ganeshLogo}
          alt="Shree Ganesh Ji"
          className="w-7 sm:w-9 md:w-11 h-auto mx-auto mb-1 object-contain select-none"
        />

        {/* Shree Ganeshay Namah in Hindi Font */}
        <p className="font-hindi text-[11px] sm:text-xs md:text-sm tracking-[0.2em] font-medium text-gold-dark/95 mb-1">
          {WEDDING_CONFIG.ganesh_mantra}
        </p>

        {/* Authentic Shubh Vivah Calligraphy Artwork */}
        <img
          src={MEDIA.shubhVivahCalligraphy}
          alt="शुभ विवाह"
          className="w-36 sm:w-48 md:w-56 max-w-[65%] h-auto mx-auto my-1 object-contain select-none"
        />

        {/* Couple Names in Runethia Font */}
        <h2 className="font-couple text-2xl sm:text-3xl md:text-4xl text-sage-dark tracking-normal mt-1 leading-snug">
          {WEDDING_CONFIG.couple_name_1} <span className="font-serif italic text-dusty-rose text-xl sm:text-2xl">&amp;</span> {WEDDING_CONFIG.couple_name_2}
        </h2>

        {/* Dates in Mustica Pro */}
        <p className="mt-2 font-display text-[10px] sm:text-xs md:text-sm tracking-[0.25em] uppercase text-gold-dark font-medium">
          DEC | 03RD - 05TH | 2026
        </p>
      </div>
    </section>
  );
}
