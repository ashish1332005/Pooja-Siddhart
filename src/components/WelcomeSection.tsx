import React from "react";
import { motion } from "framer-motion";
import { WEDDING_CONFIG } from "../data/weddingConfig";

function formatLineageColumn(text: string) {
  if (text.includes(" - ")) {
    const [first, second] = text.split(" - ");
    return (
      <div className="flex flex-col items-center leading-snug">
        <span className="break-words">{first}</span>
        <span className="text-[#b88e44]/80 text-[10px] my-0.5 leading-none">-</span>
        <span className="break-words">{second}</span>
      </div>
    );
  }
  return <span className="break-words leading-snug">{text}</span>;
}

export function WelcomeSection() {
  return (
    <section
      id="welcome"
      className="section-padding bg-ivory pt-10 md:pt-16 relative pb-14 md:pb-20 overflow-hidden"
    >
      <div className="max-w-3xl w-full mx-auto text-center relative z-10 px-4 sm:px-6">
        {/* Divine Invocation & Quote - Open Natural Layout */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="space-y-2.5"
        >
          <p className="font-serif text-xs sm:text-sm md:text-base tracking-[0.25em] text-[#b88e44] font-bold uppercase">
            {WEDDING_CONFIG.ramji_mantra}
          </p>
          <p className="font-serif italic text-sage-dark text-sm sm:text-base md:text-lg max-w-lg mx-auto leading-relaxed px-2">
            {WEDDING_CONFIG.quote}
          </p>

          {/* Subtle Gold Divider */}
          <div className="flex items-center justify-center gap-2 max-w-[120px] mx-auto py-1">
            <span className="h-px flex-1 bg-gradient-to-r from-transparent to-[#b88e44]/70" />
            <span className="w-1.5 h-1.5 rotate-45 border border-[#b88e44] bg-[#b88e44]" />
            <span className="h-px flex-1 bg-gradient-to-l from-transparent to-[#b88e44]/70" />
          </div>

          <p className="font-serif text-[11px] sm:text-xs tracking-[0.2em] uppercase text-[#b88e44] font-semibold">
            With The Blessings Of
          </p>
          <p className="font-serif font-bold text-sage-dark text-xs sm:text-sm md:text-base">
            {WEDDING_CONFIG.blessings_of}
          </p>
          <p className="font-serif text-[11px] sm:text-xs md:text-sm text-sage-dark/90 max-w-md mx-auto leading-relaxed pt-0.5 px-2">
            Invite You To Share Their Joy At The Wedding Celebrations Of Their Great Grand Son
          </p>
        </motion.div>

        {/* 2-Column Couple Lineage Presentation - Completely Open on Ivory BG */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="mt-8 md:mt-12 pt-6 relative"
        >
          <div className="relative grid grid-cols-2 gap-3 sm:gap-6 md:gap-8 items-start max-w-2xl mx-auto">
            {/* Center Vertical Gold Divider Line with Diamond */}
            <div
              className="absolute left-1/2 top-1 bottom-1 w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-[#b88e44]/50 to-transparent pointer-events-none"
              aria-hidden="true"
            >
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1.5 h-1.5 rotate-45 border border-[#b88e44] bg-ivory" />
            </div>

            {/* Groom Column */}
            <div className="flex flex-col items-center text-center px-1 sm:px-3 space-y-2">
              <h3 className="font-couple text-[#7c2635] text-2xl sm:text-3xl md:text-4xl font-normal leading-tight drop-shadow-sm my-0">
                {WEDDING_CONFIG.couple_name_1}
              </h3>
              <span className="font-serif text-[9.5px] sm:text-[11px] tracking-[0.25em] uppercase text-[#b88e44] font-semibold">
                G R O O M
              </span>

              <div className="space-y-3 pt-1 w-full">
                <div>
                  <span className="font-serif text-[9px] sm:text-[10px] tracking-[0.2em] uppercase text-[#b88e44] font-medium block">
                    S / O
                  </span>
                  <div className="font-serif text-[11px] sm:text-xs md:text-sm text-sage-dark font-medium mt-0.5">
                    {formatLineageColumn(WEDDING_CONFIG.groom_parents)}
                  </div>
                </div>

                <div>
                  <span className="font-serif text-[9px] sm:text-[10px] tracking-[0.2em] uppercase text-[#b88e44] font-medium block">
                    G S / O
                  </span>
                  <div className="font-serif text-[11px] sm:text-xs md:text-sm text-sage-dark font-medium mt-0.5">
                    {formatLineageColumn(WEDDING_CONFIG.groom_grand_parents)}
                  </div>
                </div>
              </div>
            </div>

            {/* Bride Column */}
            <div className="flex flex-col items-center text-center px-1 sm:px-3 space-y-2">
              <h3 className="font-couple text-[#7c2635] text-2xl sm:text-3xl md:text-4xl font-normal leading-tight drop-shadow-sm my-0">
                {WEDDING_CONFIG.couple_name_2}
              </h3>
              <span className="font-serif text-[9.5px] sm:text-[11px] tracking-[0.25em] uppercase text-[#b88e44] font-semibold">
                B R I D E
              </span>

              <div className="space-y-3 pt-1 w-full">
                <div>
                  <span className="font-serif text-[9px] sm:text-[10px] tracking-[0.2em] uppercase text-[#b88e44] font-medium block">
                    D / O
                  </span>
                  <div className="font-serif text-[11px] sm:text-xs md:text-sm text-sage-dark font-medium mt-0.5">
                    {formatLineageColumn(WEDDING_CONFIG.bride_parents)}
                  </div>
                </div>

                <div>
                  <span className="font-serif text-[9px] sm:text-[10px] tracking-[0.2em] uppercase text-[#b88e44] font-medium block">
                    G D / O
                  </span>
                  <div className="font-serif text-[11px] sm:text-xs md:text-sm text-sage-dark font-medium mt-0.5">
                    {formatLineageColumn(WEDDING_CONFIG.bride_grand_parents)}
                  </div>
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
          transition={{ duration: 0.7, delay: 0.25 }}
          className="mt-8 md:mt-12 pt-4 space-y-2.5"
        >
          <p className="font-serif text-xs sm:text-sm md:text-base text-sage-dark font-medium max-w-md mx-auto leading-relaxed px-2">
            Cordially invite you to grace the auspicious occasion of the wedding of their children
          </p>

          {/* Date Block with Vertical Separators */}
          <div className="flex items-center justify-center gap-2.5 sm:gap-3 pt-0.5 font-serif text-xs sm:text-sm md:text-base text-sage-dark font-semibold">
            <span>03<sup className="text-[9px] sm:text-[10px] font-normal align-super">RD</sup></span>
            <span className="text-[#b88e44]/80">|</span>
            <span>05<sup className="text-[9px] sm:text-[10px] font-normal align-super">TH</sup></span>
            <span className="text-[#b88e44]/80">|</span>
            <span className="tracking-wider">DECEMBER 2026</span>
          </div>

          {/* Venue with Lateral Horizontal Dashes */}
          <div className="flex items-center justify-center gap-2 pt-0.5 font-serif text-[9.5px] sm:text-xs md:text-sm tracking-[0.22em] uppercase text-[#b88e44] font-semibold">
            <span className="h-px w-5 sm:w-8 bg-[#b88e44]/60" />
            <span>{WEDDING_CONFIG.main_venue_name} · Udaipur</span>
            <span className="h-px w-5 sm:w-8 bg-[#b88e44]/60" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
