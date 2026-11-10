import React from "react";
import { motion } from "framer-motion";
import { FAMILY_DETAILS, MEDIA } from "../data/weddingConfig";

export function FamilySection() {
  return (
    <section id="family-blessings" className="bg-ivory pt-6 sm:pt-10 pb-16 md:pb-24 relative z-0 overflow-hidden">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center space-y-10 sm:space-y-12 relative z-10">
        {/* Section Main Heading in Runiga Font */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-2 pt-2"
        >
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-[#1e3a2f] font-normal tracking-wide">
            With Love &amp; Blessings
          </h2>
          <div className="flex items-center justify-center gap-2 w-32 sm:w-44 text-[#b88e44]/80 mx-auto py-0.5">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent to-[#b88e44]" />
            <span className="text-xs leading-none">&#10022;</span>
            <div className="h-px flex-1 bg-gradient-to-l from-transparent to-[#b88e44]" />
          </div>
          <p className="font-serif text-xs sm:text-sm tracking-[0.24em] uppercase text-[#a3702c] font-medium">
            Our Families &amp; Well Wishers
          </p>
        </motion.div>

        {/* 1. We Look Forward To Welcoming You (Compliments) */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-3"
        >
          <h3 className="font-display text-2xl sm:text-3xl md:text-4xl text-[#7d6736] tracking-wide font-normal">
            We Look Forward To Welcoming You
          </h3>
          <div className="space-y-1 sm:space-y-1.5 font-serif text-sm sm:text-base md:text-lg text-[#7c2635] font-medium leading-relaxed">
            {FAMILY_DETAILS.compliments.map((item, idx) => (
              <p key={idx}>{item.replace(/-/g, " \u2013 ")}</p>
            ))}
          </div>
        </motion.div>

        {/* 2. Awaiting the joy of your Presence (Welcome By) */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-3"
        >
          <h3 className="font-display text-2xl sm:text-3xl md:text-4xl text-[#7d6736] tracking-wide font-normal">
            Awaiting the joy of your Presence
          </h3>
          <div className="space-y-1 sm:space-y-1.5 font-serif text-sm sm:text-base md:text-lg text-[#7c2635] font-medium leading-relaxed">
            {FAMILY_DETAILS.welcome_by.map((item, idx) => (
              <p key={idx}>{item.replace(/-/g, " \u2013 ")}</p>
            ))}
          </div>
        </motion.div>

        {/* 3. The Maternal Family (Nanihal) */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-2.5 max-w-lg mx-auto"
        >
          <h3 className="font-display text-2xl sm:text-3xl md:text-4xl text-[#7d6736] tracking-wide font-normal">
            The Maternal Family
          </h3>
          <div className="font-serif text-sm sm:text-base md:text-lg text-[#7c2635] font-medium leading-relaxed space-y-1">
            <p className="font-semibold text-[#7c2635]">
              {FAMILY_DETAILS.maternal_side.elders.replace(/-/g, " \u2013 ")}
            </p>
            <p>{FAMILY_DETAILS.maternal_side.family}</p>
            <p className="text-xs sm:text-sm text-[#7c2635]/85 pt-0.5">
              {FAMILY_DETAILS.maternal_side.others.join("  \u2022  ")}
            </p>
          </div>
        </motion.div>

        {/* 4. Samdhi Family */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-2.5 max-w-xl mx-auto"
        >
          <h3 className="font-display text-2xl sm:text-3xl md:text-4xl text-[#7d6736] tracking-wide font-normal">
            Samdhi Family
          </h3>
          <p className="font-serif text-sm sm:text-base md:text-lg text-[#7c2635] font-medium leading-relaxed">
            {FAMILY_DETAILS.samdhi_pravar}
          </p>
        </motion.div>

        {/* 5. Sharing The Joy */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-2 max-w-lg mx-auto"
        >
          <h3 className="font-display text-2xl sm:text-3xl md:text-4xl text-[#7d6736] tracking-wide font-normal">
            Sharing The Joy
          </h3>
          <p className="font-serif text-sm sm:text-base md:text-lg text-[#7c2635] font-medium leading-relaxed">
            {FAMILY_DETAILS.sharing_the_joy.join("  \u2022  ")}
          </p>
        </motion.div>

        {/* 6. Warm Regards */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-2 max-w-lg mx-auto"
        >
          <h3 className="font-display text-2xl sm:text-3xl md:text-4xl text-[#7d6736] tracking-wide font-normal">
            Warm Regards
          </h3>
          <p className="font-serif text-sm sm:text-base md:text-lg text-[#7c2635] font-medium leading-relaxed">
            {FAMILY_DETAILS.warm_regards.join(", ")}
          </p>
        </motion.div>

        {/* 7. Sweet Request from Misshkaa Dad */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="pt-2 pb-1"
        >
          <span className="font-couple text-3xl sm:text-4xl text-[#7c2635] block mb-1">
            {FAMILY_DETAILS.sweet_request.tagline}
          </span>
          <p className="font-serif italic text-base sm:text-lg md:text-xl text-[#1e3a2f] my-1 leading-relaxed">
            &ldquo;{FAMILY_DETAILS.sweet_request.note}&rdquo;
          </p>
          <p className="font-serif font-semibold text-[#a3702c] text-xs sm:text-sm tracking-wider uppercase mt-2">
            {FAMILY_DETAILS.sweet_request.by}
          </p>
        </motion.div>

        {/* 8. Business Concerns - Exclusively Encased in Royal Gift Frame */}
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative w-full max-w-md sm:max-w-lg mx-auto pt-4"
        >
          {/* Frame Backdrop */}
          <img
            src={MEDIA.giftFrame}
            alt="Business Concerns Embroidered Frame"
            className="w-full h-auto block select-none pointer-events-none drop-shadow-md"
          />

          {/* Business Concerns Text Nested Inside the Linen Canvas */}
          <div className="absolute inset-x-[15%] top-[19%] bottom-[16%] flex flex-col items-center justify-center text-center px-2 select-none">
            <h3 className="font-display text-2xl sm:text-3xl md:text-4xl text-[#7d6736] tracking-wide font-normal mb-1">
              Business Concerns
            </h3>

            <div className="flex items-center justify-center gap-2 w-32 sm:w-44 text-[#b88e44]/80 mb-3 sm:mb-4">
              <div className="h-px flex-1 bg-gradient-to-r from-transparent to-[#b88e44]" />
              <span className="text-[10px] leading-none">&#10022;</span>
              <div className="h-px flex-1 bg-gradient-to-l from-transparent to-[#b88e44]" />
            </div>

            <div className="space-y-1.5 sm:space-y-2.5 font-serif text-xs sm:text-sm md:text-base text-[#1e3a2f] font-bold leading-snug">
              {FAMILY_DETAILS.business_concerns.map((name, i) => (
                <p key={i} className="whitespace-nowrap tracking-wide">
                  {name}
                </p>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
