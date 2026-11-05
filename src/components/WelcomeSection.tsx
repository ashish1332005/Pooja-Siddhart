import React from "react";
import { motion } from "framer-motion";
import { WEDDING_CONFIG } from "../data/weddingConfig";

function formatLineageColumn(text: string) {
  if (text.includes(" - ")) {
    const [first, second] = text.split(" - ");
    return (
      <div className="flex flex-col items-center leading-[1.45]">
        <span className="whitespace-nowrap">{first} &ndash;</span>
        <span className="whitespace-nowrap">{second}</span>
      </div>
    );
  }
  return <span className="whitespace-nowrap leading-[1.45]">{text}</span>;
}

export function WelcomeSection() {
  return (
    <section
      id="welcome"
      className="section-padding bg-ivory pt-10 md:pt-16 relative pb-14 md:pb-20 overflow-hidden"
    >
      <div className="max-w-2xl w-full mx-auto text-center relative z-10 px-2 sm:px-6">
        {/* Divine Invocation & Quote - Exact Typography Matching Reference */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="space-y-3 sm:space-y-4"
        >
          <p className="font-serif text-sm sm:text-base md:text-lg tracking-[0.22em] text-[#a3702c] font-normal">
            || Shree Ramji ||
          </p>

          <p className="font-serif text-base sm:text-xl md:text-2xl text-[#1e3a2f] max-w-md sm:max-w-lg mx-auto leading-[1.45] font-medium px-2">
            &ldquo;No Measure Of Time With You Will Be<br />
            Long Enough, But Let&rsquo;s Start With<br />
            Forever&rdquo;
          </p>

          {/* Gold Diamond Divider */}
          <div className="flex items-center justify-center gap-2.5 max-w-[220px] sm:max-w-[280px] mx-auto py-1">
            <span className="h-px flex-1 bg-gradient-to-r from-transparent to-[#a3702c]/80" />
            <span className="w-2 h-2 rotate-45 bg-[#a3702c]" />
            <span className="h-px flex-1 bg-gradient-to-l from-transparent to-[#a3702c]/80" />
          </div>

          <p className="font-serif text-sm sm:text-base md:text-lg tracking-[0.06em] text-[#a3702c] font-normal">
            With The Blessings Of
          </p>

          <p className="font-serif text-base sm:text-xl md:text-2xl text-[#1e3a2f] font-medium leading-[1.4]">
            Late Shri Bankatlal Ji -<br />
            Late Smt. Vidhyadevi Malani
          </p>

          <p className="font-serif text-xs sm:text-sm md:text-base text-[#1e3a2f] max-w-md mx-auto leading-[1.5] pt-0.5 px-2 font-medium">
            Invite You To Share Their Joy At The Wedding<br />
            Celebrations Of Their Great Grand Son
          </p>
        </motion.div>

        {/* 2-Column Couple Lineage Presentation - Open on Ivory BG */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="mt-8 md:mt-10 pt-2 relative"
        >
          <div className="relative grid grid-cols-2 gap-2 sm:gap-6 md:gap-8 items-start max-w-xl mx-auto">
            {/* Center Vertical Gold Divider Line with Hollow Diamond */}
            <div
              className="absolute left-1/2 top-2 bottom-2 w-px -translate-x-1/2 bg-[#a3702c]/60 pointer-events-none"
              aria-hidden="true"
            >
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 rotate-45 border border-[#a3702c] bg-ivory" />
            </div>

            {/* Groom Column */}
            <div className="flex flex-col items-center text-center px-0.5 sm:px-3 space-y-1.5">
              <div className="h-12 sm:h-16 md:h-20 flex items-center justify-center">
                <h3 className="font-couple text-[#6e1d2a] text-4xl sm:text-5xl md:text-6xl font-normal leading-none tracking-normal select-none my-0">
                  {WEDDING_CONFIG.couple_name_1}
                </h3>
              </div>
              <span className="font-serif text-[11px] sm:text-xs md:text-sm tracking-[0.28em] uppercase text-[#a3702c] font-medium">
                G R O O M
              </span>

              <div className="space-y-3.5 pt-2 w-full">
                <div>
                  <span className="font-serif text-[10px] sm:text-xs tracking-[0.2em] uppercase text-[#a3702c] font-medium block mb-0.5">
                    S / O
                  </span>
                  <div className="font-serif text-[11px] sm:text-sm md:text-base text-[#1e3a2f] font-medium">
                    {formatLineageColumn(WEDDING_CONFIG.groom_parents)}
                  </div>
                </div>

                <div>
                  <span className="font-serif text-[10px] sm:text-xs tracking-[0.2em] uppercase text-[#a3702c] font-medium block mb-0.5">
                    G S / O
                  </span>
                  <div className="font-serif text-[11px] sm:text-sm md:text-base text-[#1e3a2f] font-medium">
                    {formatLineageColumn(WEDDING_CONFIG.groom_grand_parents)}
                  </div>
                </div>
              </div>
            </div>

            {/* Bride Column */}
            <div className="flex flex-col items-center text-center px-0.5 sm:px-3 space-y-1.5">
              <div className="h-12 sm:h-16 md:h-20 flex items-center justify-center">
                <h3 className="font-couple text-[#6e1d2a] text-4xl sm:text-5xl md:text-6xl font-normal leading-none tracking-normal select-none my-0 translate-y-[2px]">
                  {WEDDING_CONFIG.couple_name_2}
                </h3>
              </div>
              <span className="font-serif text-[11px] sm:text-xs md:text-sm tracking-[0.28em] uppercase text-[#a3702c] font-medium">
                B R I D E
              </span>

              <div className="space-y-3.5 pt-2 w-full">
                <div>
                  <span className="font-serif text-[10px] sm:text-xs tracking-[0.2em] uppercase text-[#a3702c] font-medium block mb-0.5">
                    D / O
                  </span>
                  <div className="font-serif text-[11px] sm:text-sm md:text-base text-[#1e3a2f] font-medium">
                    {formatLineageColumn(WEDDING_CONFIG.bride_parents)}
                  </div>
                </div>

                <div>
                  <span className="font-serif text-[10px] sm:text-xs tracking-[0.2em] uppercase text-[#a3702c] font-medium block mb-0.5">
                    G D / O
                  </span>
                  <div className="font-serif text-[11px] sm:text-sm md:text-base text-[#1e3a2f] font-medium">
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
          className="mt-8 md:mt-10 pt-3 space-y-3.5"
        >
          <p className="font-serif text-sm sm:text-base md:text-lg text-[#1e3a2f] font-medium max-w-md mx-auto leading-[1.45] px-2">
            Cordially invite you to grace the auspicious<br />
            occasion of the wedding of their children
          </p>

          {/* Date Block with Vertical Separators */}
          <div className="flex items-center justify-center gap-3 sm:gap-4 pt-1 font-serif text-base sm:text-lg md:text-xl text-[#1e3a2f] font-medium">
            <span>03<sup className="text-[10px] sm:text-xs font-normal align-super ml-0.5">RD</sup></span>
            <span className="h-5 sm:h-6 w-px bg-[#a3702c]/70" />
            <span>05<sup className="text-[10px] sm:text-xs font-normal align-super ml-0.5">TH</sup></span>
            <span className="h-5 sm:h-6 w-px bg-[#a3702c]/70" />
            <span className="tracking-[0.06em]">DECEMBER 2026</span>
          </div>

          {/* Venue with Lateral Horizontal Rules on Single Line */}
          <div className="flex items-center justify-center gap-2.5 sm:gap-4 pt-1 font-serif text-[10px] sm:text-xs md:text-sm tracking-[0.18em] uppercase text-[#a3702c] font-medium whitespace-nowrap">
            <span className="h-px w-8 sm:w-12 bg-[#a3702c]/75" />
            <span>{WEDDING_CONFIG.main_venue_name} &middot; Udaipur</span>
            <span className="h-px w-8 sm:w-12 bg-[#a3702c]/75" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
