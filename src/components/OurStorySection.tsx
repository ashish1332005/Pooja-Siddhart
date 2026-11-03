import React from "react";
import { motion } from "framer-motion";
import { MEDIA } from "../data/weddingConfig";

export function OurStorySection() {
  return (
    <section id="our-story" className="relative bg-ivory overflow-hidden py-16 md:py-24">
      <div className="relative max-w-5xl mx-auto px-2 sm:px-4">
        <motion.img
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          src={MEDIA.storyFrame}
          alt=""
          className="w-full h-auto select-none pointer-events-none"
        />
        <div className="absolute inset-0 flex items-center justify-center px-8 py-20">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-center max-w-[16rem] sm:max-w-[18rem] md:max-w-[22rem]"
          >
            <h2 className="section-heading text-[1.75rem] md:text-4xl leading-tight">
              Our Story
            </h2>
            <span className="section-rule" />
            <p className="font-body italic text-sage-dark/80 text-sm md:text-base leading-relaxed">
              Two hearts, two families, and a lifetime of love. We warmly invite you to grace this sacred union with your blessings as we begin the rest of our lives together.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
