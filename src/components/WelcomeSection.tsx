import React from "react";
import { motion } from "framer-motion";
import { WEDDING_CONFIG } from "../data/weddingConfig";

function formatLineagePair(text: string) {
  if (text.includes(" - ")) {
    const [first, second] = text.split(" - ");
    return (
      <>
        <span className="inline-block whitespace-nowrap">{first}</span>
        <span className="mx-1 text-[#b88e44]/70">-</span>
        <span className="inline-block whitespace-nowrap">{second}</span>
      </>
    );
  }
  return <span className="inline-block whitespace-nowrap">{text}</span>;
}

export function WelcomeSection() {
  return (
    <section
      id="welcome"
      className="section-padding bg-ivory pt-10 md:pt-16 relative pb-16 md:pb-24 overflow-hidden"
    >
      <div className="max-w-3xl w-full mx-auto text-center relative z-10 px-4 sm:px-6">
        {/* Framed Invitation Card Matching Sample Image 2 */}
        <div className="relative rounded-2xl border border-[#c8a96e]/60 bg-[#fffdfa]/90 shadow-sm p-6 sm:p-10 md:p-12 backdrop-blur-sm">
          {/* Decorative Corner Accents */}
          <div className="absolute top-2 left-2 w-4 h-4 border-t-2 border-l-2 border-[#b88e44]/70 rounded-tl pointer-events-none" />
          <div className="absolute top-2 right-2 w-4 h-4 border-t-2 border-r-2 border-[#b88e44]/70 rounded-tr pointer-events-none" />
          <div className="absolute bottom-2 left-2 w-4 h-4 border-b-2 border-l-2 border-[#b88e44]/70 rounded-bl pointer-events-none" />
          <div className="absolute bottom-2 right-2 w-4 h-4 border-b-2 border-r-2 border-[#b88e44]/70 rounded-br pointer-events-none" />

          {/* Divine Invocation & Quote */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="space-y-3"
          >
            <p className="font-serif text-sm sm:text-base md:text-lg tracking-[0.25em] text-[#b88e44] font-bold uppercase">
              {WEDDING_CONFIG.ramji_mantra}
            </p>
            <p className="font-serif italic text-sage-dark text-base sm:text-lg md:text-xl max-w-xl mx-auto leading-relaxed">
              {WEDDING_CONFIG.quote}
            </p>

            {/* Subtle Gold Divider */}
            <div className="flex items-center justify-center gap-2 max-w-[140px] mx-auto py-1">
              <span className="h-px flex-1 bg-gradient-to-r from-transparent to-[#b88e44]/80" />
              <span className="w-1.5 h-1.5 rotate-45 border border-[#b88e44] bg-[#b88e44]" />
              <span className="h-px flex-1 bg-gradient-to-l from-transparent to-[#b88e44]/80" />
            </div>

            <p className="font-serif text-xs sm:text-sm tracking-[0.2em] uppercase text-[#b88e44] font-semibold">
              With The Blessings Of
            </p>
            <p className="font-serif font-bold text-sage-dark text-sm sm:text-base md:text-lg">
              {formatLineagePair(WEDDING_CONFIG.blessings_of)}
            </p>
            <p className="font-serif text-xs sm:text-sm md:text-base text-sage-dark/90 max-w-lg mx-auto leading-relaxed pt-0.5">
              Invite You To Share Their Joy At The Wedding Celebrations Of Their Great Grand Son
            </p>
          </motion.div>

          {/* 2-Column Couple Lineage Presentation */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-8 md:mt-10 pt-6 border-t border-[#c8a96e]/30 relative"
          >
            <div className="relative grid grid-cols-2 gap-4 sm:gap-8 items-start">
              {/* Center Vertical Gold Divider Line with Diamond */}
              <div
                className="absolute left-1/2 top-2 bottom-2 w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-[#b88e44]/60 to-transparent pointer-events-none"
                aria-hidden="true"
              >
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 rotate-45 border border-[#b88e44] bg-[#fffdfa]" />
              </div>

              {/* Groom Column */}
              <div className="flex flex-col items-center text-center px-1 sm:px-4 space-y-2.5">
                {/* Groom Name in Runethia Script */}
                <h3 className="font-couple text-[#7c2635] text-2xl sm:text-3xl md:text-4xl font-normal leading-tight drop-shadow-sm my-0">
                  {WEDDING_CONFIG.couple_name_1}
                </h3>
                <span className="font-serif text-[10px] sm:text-xs tracking-[0.25em] uppercase text-[#b88e44] font-semibold">
                  G R O O M
                </span>

                <div className="space-y-3 pt-1 w-full">
                  <div>
                    <span className="font-serif text-[9.5px] sm:text-[11px] tracking-[0.2em] uppercase text-[#b88e44] font-medium block">
                      S / O
                    </span>
                    <p className="font-serif text-xs sm:text-sm text-sage-dark font-medium mt-0.5 leading-snug">
                      {formatLineagePair(WEDDING_CONFIG.groom_parents)}
                    </p>
                  </div>

                  <div>
                    <span className="font-serif text-[9.5px] sm:text-[11px] tracking-[0.2em] uppercase text-[#b88e44] font-medium block">
                      G S / O
                    </span>
                    <p className="font-serif text-xs sm:text-sm text-sage-dark font-medium mt-0.5 leading-snug">
                      {formatLineagePair(WEDDING_CONFIG.groom_grand_parents)}
                    </p>
                  </div>
                </div>
              </div>

              {/* Bride Column */}
              <div className="flex flex-col items-center text-center px-1 sm:px-4 space-y-2.5">
                {/* Bride Name in Runethia Script - Identical Font Size */}
                <h3 className="font-couple text-[#7c2635] text-2xl sm:text-3xl md:text-4xl font-normal leading-tight drop-shadow-sm my-0">
                  {WEDDING_CONFIG.couple_name_2}
                </h3>
                <span className="font-serif text-[10px] sm:text-xs tracking-[0.25em] uppercase text-[#b88e44] font-semibold">
                  B R I D E
                </span>

                <div className="space-y-3 pt-1 w-full">
                  <div>
                    <span className="font-serif text-[9.5px] sm:text-[11px] tracking-[0.2em] uppercase text-[#b88e44] font-medium block">
                      D / O
                    </span>
                    <p className="font-serif text-xs sm:text-sm text-sage-dark font-medium mt-0.5 leading-snug">
                      {formatLineagePair(WEDDING_CONFIG.bride_parents)}
                    </p>
                  </div>

                  <div>
                    <span className="font-serif text-[9.5px] sm:text-[11px] tracking-[0.2em] uppercase text-[#b88e44] font-medium block">
                      G D / O
                    </span>
                    <p className="font-serif text-xs sm:text-sm text-sage-dark font-medium mt-0.5 leading-snug">
                      {formatLineagePair(WEDDING_CONFIG.bride_grand_parents)}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Invitation Closing, Dates & Venue */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-8 pt-6 border-t border-[#c8a96e]/30 space-y-3"
          >
            <p className="font-serif text-xs sm:text-sm md:text-base text-sage-dark font-medium max-w-lg mx-auto leading-relaxed">
              Cordially invite you to grace the auspicious occasion of the wedding of their children
            </p>

            {/* Date Block with Vertical Separators */}
            <div className="flex items-center justify-center gap-3 pt-1 font-serif text-xs sm:text-sm md:text-base text-sage-dark font-semibold">
              <span>03<sup className="text-[10px] font-normal align-super">RD</sup></span>
              <span className="text-[#b88e44]/80">|</span>
              <span>05<sup className="text-[10px] font-normal align-super">TH</sup></span>
              <span className="text-[#b88e44]/80">|</span>
              <span className="tracking-wider">DECEMBER 2026</span>
            </div>

            {/* Venue with Lateral Horizontal Dashes */}
            <div className="flex items-center justify-center gap-2 pt-1 font-serif text-[10px] sm:text-xs md:text-sm tracking-[0.22em] uppercase text-[#b88e44] font-semibold">
              <span className="h-px w-6 sm:w-10 bg-[#b88e44]/60" />
              <span>{WEDDING_CONFIG.main_venue_name} · Udaipur</span>
              <span className="h-px w-6 sm:w-10 bg-[#b88e44]/60" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
