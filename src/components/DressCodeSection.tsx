import React from "react";
import { motion } from "framer-motion";
import { MEDIA } from "../data/weddingConfig";

export function DressCodeSection() {
  return (
    <section id="dress-code" className="relative bg-ivory overflow-hidden">
      <div className="relative px-6 md:px-10 lg:px-16 pt-24 md:pt-40 pb-16 md:pb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-center max-w-xl mx-auto"
        >
          <h2 className="section-heading">Dress Code</h2>
          <span className="section-rule" />
          <p className="font-subtitle text-[1.75rem] md:text-[2.5rem] text-sage-dark tracking-[0.02em] mt-4">
            Festive Indian &amp; Black Tie
          </p>
          <p className="font-body italic text-sage-dark/70 text-sm md:text-base leading-relaxed max-w-md mx-auto mt-4">
            Pastel festive blooms for daytime ceremonies; glittering royal formals for evening galas.
          </p>
          <img
            src={MEDIA.dressCodeIllustration}
            alt="Dress code illustration"
            className="w-full max-w-2xl mx-auto mt-8"
          />
        </motion.div>
      </div>
    </section>
  );
}
