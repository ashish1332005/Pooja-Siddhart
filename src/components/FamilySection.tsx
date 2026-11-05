import React from "react";
import { motion } from "framer-motion";
import { FAMILY_DETAILS, MEDIA } from "../data/weddingConfig";

function renderNonBreakingNames(names: string[], separator: string = "·") {
  return names.map((item, idx) => {
    const safeName = item.replace(/-/g, "\u2011");
    return (
      <React.Fragment key={idx}>
        {idx > 0 && <span className="mx-1.5 text-gold-dark/60">{separator}</span>}
        <span className="inline-block whitespace-nowrap">{safeName}</span>
      </React.Fragment>
    );
  });
}

export function FamilySection() {
  return (
    <section id="family-blessings" className="bg-ivory pt-8 sm:pt-12 pb-16 md:pb-24 relative z-10 overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 md:mb-14"
        >
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl text-sage-dark font-normal tracking-wide">
            With Love &amp; Blessings
          </h2>
          <span className="section-rule !my-2.5" />
          <p className="section-eyebrow">Our Families &amp; Well Wishers</p>
        </motion.div>

        {/* 1. Sweet Request from Misshkaa Dad */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-md mx-auto mb-14 text-center p-6 md:p-8 rounded-3xl bg-white/95 border border-gold/40 shadow-sm relative"
        >
          <span className="font-couple text-2xl md:text-3xl text-dusty-rose block mb-1 font-bold">
            {FAMILY_DETAILS.sweet_request.tagline}
          </span>
          <p className="font-body font-semibold text-lg md:text-xl text-sage-dark my-2 leading-relaxed">
            "{FAMILY_DETAILS.sweet_request.note}"
          </p>
          <p className="font-display font-bold text-gold-dark text-xs sm:text-sm tracking-wider uppercase mt-3">
            {FAMILY_DETAILS.sweet_request.by}
          </p>
        </motion.div>

        {/* Grid for Family Compliments & Welcome */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 mb-12">
          {/* With Best Compliments */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="p-6 md:p-8 rounded-2xl bg-white/95 border border-gold/40 shadow-sm text-center"
          >
            <h3 className="font-display text-lg sm:text-xl md:text-2xl text-sage-dark mb-2 text-center tracking-wide font-normal">
              With Best Compliments
            </h3>
            <div className="w-8 h-px bg-gold/60 mx-auto mb-4" />
            <p className="font-body text-sm md:text-base text-sage-dark/90 leading-relaxed">
              {renderNonBreakingNames(FAMILY_DETAILS.compliments)}
            </p>
          </motion.div>

          {/* Welcome By */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="p-6 md:p-8 rounded-2xl bg-white/95 border border-gold/40 shadow-sm text-center"
          >
            <h3 className="font-display text-lg sm:text-xl md:text-2xl text-sage-dark mb-2 text-center tracking-wide font-normal">
              Welcome By
            </h3>
            <div className="w-8 h-px bg-gold/60 mx-auto mb-4" />
            <p className="font-body text-sm md:text-base text-sage-dark/90 leading-relaxed">
              {renderNonBreakingNames(FAMILY_DETAILS.welcome_by)}
            </p>
          </motion.div>
        </div>

        {/* Sharing The Joy & Warm Regards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 mb-12">
          {/* Sharing The Joy */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="p-6 rounded-2xl bg-white/95 border border-gold/40 shadow-sm text-center"
          >
            <h3 className="font-display text-base sm:text-lg md:text-xl text-sage-dark mb-2 tracking-wide font-normal">
              Sharing The Joy
            </h3>
            <div className="w-8 h-px bg-gold/60 mx-auto mb-3" />
            <p className="font-body text-sm md:text-base text-sage-dark/90 leading-relaxed">
              {renderNonBreakingNames(FAMILY_DETAILS.sharing_the_joy)}
            </p>
          </motion.div>

          {/* Warm Regards */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="p-6 rounded-2xl bg-white/95 border border-gold/40 shadow-sm text-center"
          >
            <h3 className="font-display text-base sm:text-lg md:text-xl text-sage-dark mb-2 tracking-wide font-normal">
              Warm Regards
            </h3>
            <div className="w-8 h-px bg-gold/60 mx-auto mb-3" />
            <p className="font-body text-sm md:text-base text-sage-dark/90 leading-relaxed">
              {renderNonBreakingNames(FAMILY_DETAILS.warm_regards, ",")}
            </p>
          </motion.div>
        </div>

        {/* Maternal Side & Samdhi Pravar */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 mb-12">
          {/* Maternal Side */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="p-6 rounded-2xl bg-white/95 border border-gold/40 shadow-sm text-center"
          >
            <h3 className="font-display text-base sm:text-lg md:text-xl text-sage-dark mb-1 tracking-wide font-normal">
              Maternal Side (Nanihal)
            </h3>
            <div className="w-8 h-px bg-gold/60 mx-auto mb-3" />
            <p className="font-body font-medium text-sm text-gold-dark mb-1">
              <span className="inline-block whitespace-nowrap">
                {FAMILY_DETAILS.maternal_side.elders.replace(/-/g, "\u2011")}
              </span>
            </p>
            <p className="font-body text-sm md:text-base text-sage-dark/90 leading-relaxed">
              {FAMILY_DETAILS.maternal_side.family}
            </p>
            <p className="font-body text-xs sm:text-sm text-sage-dark/80 mt-2">
              {renderNonBreakingNames(FAMILY_DETAILS.maternal_side.others)}
            </p>
          </motion.div>

          {/* Samdhi Pravar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="p-6 rounded-2xl bg-white/95 border border-gold/40 shadow-sm text-center flex flex-col justify-center"
          >
            <h3 className="font-display text-base sm:text-lg md:text-xl text-sage-dark mb-1 tracking-wide font-normal">
              Samdhi Pravar
            </h3>
            <div className="w-8 h-px bg-gold/60 mx-auto mb-3" />
            <p className="font-body text-sm md:text-base text-sage-dark/90 leading-relaxed">
              {FAMILY_DETAILS.samdhi_pravar}
            </p>
          </motion.div>
        </div>

        {/* Business Concerns */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="p-6 md:p-8 rounded-2xl bg-white/95 border border-gold/40 shadow-sm text-center"
        >
          <h3 className="font-display text-base sm:text-lg md:text-xl text-sage-dark mb-1 tracking-wide font-normal">
            Business Concerns
          </h3>
          <div className="w-8 h-px bg-gold/60 mx-auto mb-4" />
          <p className="font-body text-xs sm:text-sm text-sage-dark/90 leading-relaxed">
            {renderNonBreakingNames(FAMILY_DETAILS.business_concerns)}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
