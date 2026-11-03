import React from "react";
import { motion } from "framer-motion";
import { FAMILY_DETAILS, MEDIA } from "../data/weddingConfig";

export function FamilySection() {
  return (
    <section id="family-blessings" className="bg-ivory py-16 md:py-24 relative overflow-hidden">
      {/* Decorative divider at top */}
      <img
        src={MEDIA.recoveryDayDivider}
        alt=""
        aria-hidden="true"
        className="w-full h-auto block mb-12 opacity-80 select-none pointer-events-none"
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="section-heading">With Love &amp; Blessings</h2>
          <span className="section-rule" />
          <p className="section-eyebrow">Our Families &amp; Well Wishers</p>
        </motion.div>

        {/* 1. Sweet Request from Misshkaa Dad */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-md mx-auto mb-14 text-center p-6 md:p-8 rounded-3xl bg-white/60 border border-gold/30 shadow-sm relative"
        >
          <span className="font-couple text-2xl md:text-3xl text-dusty-rose block mb-1">
            {FAMILY_DETAILS.sweet_request.tagline}
          </span>
          <p className="font-body font-normal text-base md:text-lg text-sage-dark italic my-2">
            "{FAMILY_DETAILS.sweet_request.note}"
          </p>
          <p className="font-display font-medium text-gold-dark text-xs sm:text-sm tracking-wider uppercase mt-3">
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
            className="p-6 md:p-8 rounded-2xl bg-white/45 border border-gold/20 shadow-sm"
          >
            <h3 className="font-display text-lg sm:text-xl md:text-2xl text-sage-dark mb-2 text-center tracking-wide font-medium">
              With Best Compliments
            </h3>
            <div className="w-8 h-px bg-gold/40 mx-auto mb-4" />
            <div className="flex flex-wrap justify-center gap-2 text-xs md:text-sm text-sage-dark/85 font-body font-normal leading-relaxed text-center">
              {FAMILY_DETAILS.compliments.map((item, idx) => (
                <span
                  key={idx}
                  className="inline-block px-3 py-1 rounded-full bg-ivory/80 border border-gold/20 text-sage-dark"
                >
                  {item}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Welcome By */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="p-6 md:p-8 rounded-2xl bg-white/45 border border-gold/20 shadow-sm"
          >
            <h3 className="font-display text-lg sm:text-xl md:text-2xl text-sage-dark mb-2 text-center tracking-wide font-medium">
              Welcome By
            </h3>
            <div className="w-8 h-px bg-gold/40 mx-auto mb-4" />
            <div className="flex flex-wrap justify-center gap-2 text-xs md:text-sm text-sage-dark/85 font-body font-normal leading-relaxed text-center">
              {FAMILY_DETAILS.welcome_by.map((item, idx) => (
                <span
                  key={idx}
                  className="inline-block px-3 py-1 rounded-full bg-ivory/80 border border-gold/20 text-sage-dark"
                >
                  {item}
                </span>
              ))}
            </div>
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
            className="p-6 rounded-2xl bg-white/45 border border-gold/20 shadow-sm text-center"
          >
            <h3 className="font-display text-base sm:text-lg md:text-xl text-sage-dark mb-2 tracking-wide font-medium">
              Sharing The Joy
            </h3>
            <div className="w-8 h-px bg-gold/40 mx-auto mb-3" />
            <p className="font-body font-normal text-xs md:text-sm text-sage-dark/85 leading-relaxed">
              {FAMILY_DETAILS.sharing_the_joy.join(" · ")}
            </p>
          </motion.div>

          {/* Warm Regards */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="p-6 rounded-2xl bg-white/45 border border-gold/20 shadow-sm text-center"
          >
            <h3 className="font-display text-base sm:text-lg md:text-xl text-sage-dark mb-2 tracking-wide font-medium">
              Warm Regards
            </h3>
            <div className="w-8 h-px bg-gold/40 mx-auto mb-3" />
            <p className="font-body font-normal text-xs md:text-sm text-sage-dark/85 leading-relaxed">
              {FAMILY_DETAILS.warm_regards.join(", ")}
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
            className="p-6 rounded-2xl bg-white/45 border border-gold/20 shadow-sm text-center"
          >
            <h3 className="font-display text-base sm:text-lg md:text-xl text-sage-dark mb-1 tracking-wide font-medium">
              Maternal Side (Nanihal)
            </h3>
            <div className="w-8 h-px bg-gold/40 mx-auto mb-3" />
            <p className="font-body font-medium text-xs text-gold-dark mb-1">
              {FAMILY_DETAILS.maternal_side.elders}
            </p>
            <p className="font-body font-normal text-xs md:text-sm text-sage-dark/85 leading-relaxed">
              {FAMILY_DETAILS.maternal_side.family}
            </p>
            <p className="font-body font-normal text-xs text-sage-dark/70 mt-2">
              {FAMILY_DETAILS.maternal_side.others.join(" · ")}
            </p>
          </motion.div>

          {/* Samdhi Pravar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="p-6 rounded-2xl bg-white/45 border border-gold/20 shadow-sm text-center flex flex-col justify-center"
          >
            <h3 className="font-display text-base sm:text-lg md:text-xl text-sage-dark mb-1 tracking-wide font-medium">
              Samdhi Pravar
            </h3>
            <div className="w-8 h-px bg-gold/40 mx-auto mb-3" />
            <p className="font-body font-normal text-xs md:text-sm text-sage-dark/85 leading-relaxed">
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
          className="p-6 md:p-8 rounded-2xl bg-white/45 border border-gold/20 shadow-sm text-center"
        >
          <h3 className="font-display text-base sm:text-lg md:text-xl text-sage-dark mb-1 tracking-wide font-medium">
            Business Concerns
          </h3>
          <div className="w-8 h-px bg-gold/40 mx-auto mb-4" />
          <div className="flex flex-wrap justify-center gap-2">
            {FAMILY_DETAILS.business_concerns.map((concern, idx) => (
              <span
                key={idx}
                className="inline-block text-xs md:text-sm px-3 py-1 rounded-md bg-ivory/60 border border-gold/15 text-sage-dark/85 font-body font-normal"
              >
                {concern}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
