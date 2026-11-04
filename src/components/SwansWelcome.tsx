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
        className="absolute inset-x-0 top-[28%] bottom-[32%] flex flex-col items-center justify-center text-center px-6 sm:px-10 max-w-lg mx-auto"
        style={{ mixBlendMode: "multiply" }}
      >
        {/* Golden Ganesh Ji Logo from PDF */}
        <img
          src={MEDIA.ganeshLogo}
          alt="Shree Ganesh Ji"
          className="w-8 sm:w-10 md:w-12 h-auto mx-auto mb-2 object-contain select-none"
        />

        {/* Authentic Shubh Vivah Calligraphy Artwork */}
        <img
          src={MEDIA.shubhVivahCalligraphy}
          alt="शुभ विवाह"
          className="w-40 sm:w-52 md:w-60 max-w-[70%] h-auto mx-auto my-2 object-contain select-none"
        />

        {/* Couple Names in Runethia Font */}
        <h2 className="font-couple text-3xl sm:text-4xl md:text-5xl text-sage-dark tracking-normal mt-2 leading-snug font-normal">
          {WEDDING_CONFIG.couple_name_1}{" "}
          <span className="font-display text-dusty-rose text-2xl sm:text-3xl">&amp;</span>{" "}
          {WEDDING_CONFIG.couple_name_2}
        </h2>
      </div>
    </section>
  );
}
