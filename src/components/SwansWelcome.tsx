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
        className="absolute inset-x-0 top-[28%] bottom-[35%] flex flex-col items-center justify-center text-center px-6 sm:px-8 max-w-sm sm:max-w-md mx-auto pointer-events-none select-none"
      >
        {/* We Are Getting Married Heading */}
        <p className="font-display text-xs sm:text-sm md:text-base tracking-[0.28em] uppercase text-sage-dark font-medium mb-1 sm:mb-2">
          We Are Getting Married
        </p>

        {/* Authentic Couple Names from PDF */}
        <div className="flex items-center justify-center gap-2 sm:gap-3 my-1.5 sm:my-2.5">
          <img
            src={MEDIA.pdfSiddhart}
            alt={WEDDING_CONFIG.couple_name_1}
            className="h-9 sm:h-12 md:h-14 w-auto object-contain select-none"
          />
          <span className="font-display text-dusty-rose text-xl sm:text-2xl font-light">&amp;</span>
          <img
            src={MEDIA.pdfPooja}
            alt={WEDDING_CONFIG.couple_name_2}
            className="h-9 sm:h-12 md:h-14 w-auto object-contain select-none"
          />
        </div>

        {/* High-Visibility Wedding Dates */}
        <p className="mt-2 sm:mt-3 font-display text-xs sm:text-sm md:text-base tracking-[0.25em] uppercase text-sage-dark font-bold">
          DEC | <span className="font-digit font-bold">03</span>RD – <span className="font-digit font-bold">05</span>TH | <span className="font-digit font-bold">2026</span>
        </p>
      </div>
    </section>
  );
}
