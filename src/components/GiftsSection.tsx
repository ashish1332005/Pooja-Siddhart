import React from "react";
import { motion } from "framer-motion";
import { MEDIA } from "../data/weddingConfig";

interface GiftsSectionProps {
  enabled?: boolean;
}

export function GiftsSection({ enabled = true }: GiftsSectionProps) {
  if (enabled === false) return null;

  return (
    <section id="gifts" className="relative overflow-hidden bg-ivory py-10 md:py-20">
      <div className="relative z-10 max-w-lg mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative w-full"
        >
          {/* Embroidered Gift Frame Banner */}
          <img
            src={MEDIA.giftFrame}
            alt=""
            aria-hidden="true"
            className="w-full h-auto block select-none pointer-events-none"
          />

          {/* Perfectly Centered Content Safe from all borders & roses */}
          <div className="absolute inset-x-[18%] top-[24%] bottom-[22%] sm:inset-x-[22%] flex flex-col items-center justify-center text-center">
            {/* Title in Novantique Serif Display matching demo */}
            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl text-sage-dark font-normal leading-tight mb-2 sm:mb-3">
              Gifts
            </h2>

            {/* Graceful Poetic Lines with ample clearance */}
            <div className="space-y-2 sm:space-y-3 px-3 max-w-xs sm:max-w-sm">
              <p className="font-body italic text-xs sm:text-[13px] md:text-sm text-sage-dark/85 leading-relaxed">
                Your presence at our wedding is the greatest gift of all. Should you wish to celebrate with a gift, a wishing well will be available at the reception.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
