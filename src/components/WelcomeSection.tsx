import React from "react";
import { motion } from "framer-motion";
import { WEDDING_CONFIG } from "../data/weddingConfig";

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

        {/* Family & Couple Details - Unified Single-Screen Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-8 md:mt-12 p-5 sm:p-8 rounded-3xl bg-white/95 border border-gold/40 shadow-sm max-w-3xl mx-auto"
        >
          {/* Couple Names */}
          <div className="text-center mb-5 sm:mb-6">
            <h3 className="font-couple text-3xl sm:text-4xl md:text-5xl text-sage-dark font-normal leading-tight">
              {WEDDING_CONFIG.couple_name_1}{" "}
              <span className="font-display text-dusty-rose text-2xl sm:text-3xl">&amp;</span>{" "}
              {WEDDING_CONFIG.couple_name_2}
            </h3>
            <div className="w-12 h-px bg-gold/60 mx-auto mt-3" />
          </div>

          {/* 2-Column Side-by-Side Lineage (Together on Single Screen) */}
          <div className="grid grid-cols-2 gap-2 sm:gap-6 text-center divide-x divide-gold/30">
            {/* Groom's Lineage */}
            <div className="px-1 sm:px-3 space-y-3">
              <span className="font-display text-xs sm:text-sm font-semibold tracking-wider uppercase text-gold-dark block pb-1 border-b border-gold/25">
                Groom
              </span>
              <div>
                <span className="font-body text-[10px] sm:text-xs tracking-wider uppercase text-gold-dark font-medium block">
                  Grandson of
                </span>
                <p className="font-body text-[11px] sm:text-sm text-sage-dark font-medium mt-0.5 leading-snug">
                  {formatLineagePair(WEDDING_CONFIG.groom_grand_parents)}
                </p>
              </div>
              <div className="pt-0.5">
                <span className="font-body text-[10px] sm:text-xs tracking-wider uppercase text-gold-dark font-medium block">
                  Son of
                </span>
                <p className="font-body text-[11px] sm:text-sm text-sage-dark font-medium mt-0.5 leading-snug">
                  {formatLineagePair(WEDDING_CONFIG.groom_parents)}
                </p>
              </div>
            </div>

            {/* Bride's Lineage */}
            <div className="px-1 sm:px-3 space-y-3">
              <span className="font-display text-xs sm:text-sm font-semibold tracking-wider uppercase text-gold-dark block pb-1 border-b border-gold/25">
                Bride
              </span>
              <div>
                <span className="font-body text-[10px] sm:text-xs tracking-wider uppercase text-gold-dark font-medium block">
                  Granddaughter of
                </span>
                <p className="font-body text-[11px] sm:text-sm text-sage-dark font-medium mt-0.5 leading-snug">
                  {formatLineagePair(WEDDING_CONFIG.bride_grand_parents)}
                </p>
              </div>
              <div className="pt-0.5">
                <span className="font-body text-[10px] sm:text-xs tracking-wider uppercase text-gold-dark font-medium block">
                  Daughter of
                </span>
                <p className="font-body text-[11px] sm:text-sm text-sage-dark font-medium mt-0.5 leading-snug">
                  {formatLineagePair(WEDDING_CONFIG.bride_parents)}
                </p>
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
