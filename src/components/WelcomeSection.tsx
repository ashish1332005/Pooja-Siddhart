import React from "react";
import { motion } from "framer-motion";
import { MEDIA, WEDDING_CONFIG } from "../data/weddingConfig";

function formatLineagePair(text: string) {
  if (text.includes(" - ")) {
    const [first, second] = text.split(" - ");
    return (
      <>
        <span className="inline-block whitespace-nowrap">{first}</span>
        <span className="mx-1 text-gold-dark/70">-</span>
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
      className="section-padding bg-ivory pt-8 md:pt-14 relative pb-14 md:pb-20 overflow-hidden"
    >
      <div className="max-w-4xl w-full mx-auto text-center relative z-10 px-4 sm:px-6">
        {/* Divine Invocation & Quote */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="space-y-3"
        >
          <p className="font-hindi text-base md:text-lg tracking-[0.25em] text-gold-dark font-bold">
            {WEDDING_CONFIG.ramji_mantra}
          </p>
          <p className="font-body font-semibold text-sage-dark text-base md:text-lg max-w-xl mx-auto leading-relaxed">
            {WEDDING_CONFIG.quote}
          </p>
          <div className="w-12 h-px bg-gold/80 mx-auto my-3" />
          <p className="font-body font-bold text-sm md:text-base text-gold-dark tracking-wide">
            With The Blessings Of
            <br />
            <span className="font-display font-bold text-sage-dark text-base md:text-lg mt-0.5 block">
              {formatLineagePair(WEDDING_CONFIG.blessings_of)}
            </span>
          </p>
          <p className="font-body font-semibold text-sm md:text-base text-sage-dark pt-1">
            Invite You To Share Their Joy At The Wedding Celebrations Of Their Great Grand Son
          </p>
        </motion.div>

        {/* Family & Couple Details - Elegant Open Layout Matching Sample */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-8 md:mt-12 max-w-2xl mx-auto"
        >
          {/* 2-Column Side-by-Side Presentation with Center Divider */}
          <div className="relative grid grid-cols-2 gap-4 sm:gap-8 items-start">
            {/* Center Vertical Gold Divider Line */}
            <div
              className="absolute left-1/2 top-4 bottom-4 w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-gold/60 to-transparent pointer-events-none"
              aria-hidden="true"
            >
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 rotate-45 border border-gold/70 bg-ivory" />
            </div>

            {/* Groom Column */}
            <div className="flex flex-col items-center text-center px-1 sm:px-4 space-y-3">
              {/* Authentic Groom Calligraphy from PDF */}
              <img
                src={MEDIA.pdfSiddhart}
                alt={WEDDING_CONFIG.couple_name_1}
                className="h-9 sm:h-12 md:h-14 w-auto object-contain select-none"
              />
              <span className="font-body text-[10px] sm:text-xs tracking-[0.25em] uppercase text-gold-dark font-semibold">
                G R O O M
              </span>

              <div className="space-y-3 pt-1 w-full">
                <div>
                  <span className="font-body text-[9.5px] sm:text-[11px] tracking-[0.2em] uppercase text-gold-dark font-medium block">
                    S / O
                  </span>
                  <p className="font-body text-xs sm:text-sm text-sage-dark font-medium mt-0.5 leading-snug">
                    {formatLineagePair(WEDDING_CONFIG.groom_parents)}
                  </p>
                </div>

                <div>
                  <span className="font-body text-[9.5px] sm:text-[11px] tracking-[0.2em] uppercase text-gold-dark font-medium block">
                    G S / O
                  </span>
                  <p className="font-body text-xs sm:text-sm text-sage-dark font-medium mt-0.5 leading-snug">
                    {formatLineagePair(WEDDING_CONFIG.groom_grand_parents)}
                  </p>
                </div>
              </div>
            </div>

            {/* Bride Column */}
            <div className="flex flex-col items-center text-center px-1 sm:px-4 space-y-3">
              {/* Authentic Bride Calligraphy from PDF */}
              <img
                src={MEDIA.pdfPooja}
                alt={WEDDING_CONFIG.couple_name_2}
                className="h-9 sm:h-12 md:h-14 w-auto object-contain select-none"
              />
              <span className="font-body text-[10px] sm:text-xs tracking-[0.25em] uppercase text-gold-dark font-semibold">
                B R I D E
              </span>

              <div className="space-y-3 pt-1 w-full">
                <div>
                  <span className="font-body text-[9.5px] sm:text-[11px] tracking-[0.2em] uppercase text-gold-dark font-medium block">
                    D / O
                  </span>
                  <p className="font-body text-xs sm:text-sm text-sage-dark font-medium mt-0.5 leading-snug">
                    {formatLineagePair(WEDDING_CONFIG.bride_parents)}
                  </p>
                </div>

                <div>
                  <span className="font-body text-[9.5px] sm:text-[11px] tracking-[0.2em] uppercase text-gold-dark font-medium block">
                    G D / O
                  </span>
                  <p className="font-body text-xs sm:text-sm text-sage-dark font-medium mt-0.5 leading-snug">
                    {formatLineagePair(WEDDING_CONFIG.bride_grand_parents)}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Invitation Message & Date */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-10 md:mt-14 max-w-lg mx-auto space-y-4"
        >
          <p className="font-body font-semibold text-base md:text-xl text-sage-dark leading-relaxed">
            Cordially invite you to grace the auspicious occasion of the wedding of their children
          </p>
          <div className="pt-2 flex flex-col items-center gap-1.5">
            <p className="font-display text-sm sm:text-base md:text-lg text-sage-dark tracking-wider font-normal">
              03<sup className="text-[10px] sm:text-xs font-normal align-super mr-1">RD</sup> – 05<sup className="text-[10px] sm:text-xs font-normal align-super mr-1">TH</sup> DECEMBER 2026
            </p>
            <p className="font-body text-[10px] sm:text-xs tracking-[0.25em] uppercase text-gold-dark font-medium">
              {WEDDING_CONFIG.main_venue_name} · Udaipur
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
