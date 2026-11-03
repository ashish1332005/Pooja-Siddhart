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
            {/* Calligraphy Title in Runethia */}
            <h2 className="font-couple text-5xl sm:text-6xl md:text-7xl text-sage-dark leading-none mb-2 sm:mb-3">
              Gifts
            </h2>

            {/* Delicate Golden Accent Divider */}
            <span className="block w-10 sm:w-14 h-px bg-gold/45 mx-auto mb-3 sm:mb-5" />

            {/* Graceful Poetic Lines with ample clearance */}
            <div className="space-y-2 sm:space-y-3 px-2">
              <p className="font-body font-normal text-xs sm:text-sm md:text-base text-sage-dark/90 leading-relaxed italic">
                Your presence and blessings at our wedding are the greatest gift of all.
              </p>
              <p className="font-body font-normal text-[11px] sm:text-xs md:text-sm text-sage-dark/75 leading-relaxed italic">
                Should you wish to celebrate with a gift, a wishing well will be available at the reception.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
