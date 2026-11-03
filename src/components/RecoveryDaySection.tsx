import React from "react";
import { motion } from "framer-motion";
import { Calendar, MapPin } from "lucide-react";
import { MEDIA, WEDDING_CONFIG } from "../data/weddingConfig";
import {
  buildAppleMapsUrl,
  buildGoogleCalendarUrl,
  buildGoogleMapsUrl,
  buildIcsDataUrl,
} from "../utils/calendarAndMaps";
import { ActionMenu } from "./ActionMenu";

export function RecoveryDaySection() {
  const address = WEDDING_CONFIG.bhilwara_venue_address;
  const calendarEvent = {
    title: "Siddhart & Pooja – Pre-Wedding Rituals (Hathdhan & Sangeet)",
    location: address,
    startLocal: "20261201T101500",
    endLocal: "20261201T230000",
    timezone: "Asia/Kolkata",
  };

  return (
    <section id="bhilwara-venue" className="bg-ivory relative overflow-hidden">
      <img
        src={MEDIA.recoveryDayDivider}
        alt=""
        aria-hidden="true"
        className="w-full h-auto block select-none pointer-events-none"
      />
      <div className="max-w-2xl mx-auto px-4 sm:px-6 pb-16 md:pb-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <h2 className="section-heading pt-6">Pre-Wedding Rituals</h2>
          <span className="section-rule" />
          <p className="section-eyebrow">Bhilwara Celebrations</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="relative w-full max-w-sm mx-auto mb-6 px-4"
        >
          <img
            src={MEDIA.recoveryVenue}
            alt="Venue illustration"
            className="w-full h-auto object-contain select-none pointer-events-none"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center max-w-md mx-auto"
        >
          <h3 className="font-display text-2xl sm:text-3xl font-medium text-sage-dark mb-1 tracking-wide">
            {WEDDING_CONFIG.bhilwara_venue_name}
          </h3>
          <p className="font-display text-[10px] sm:text-xs tracking-[0.3em] uppercase text-gold-dark/85 mb-4">
            R.C. Vyas Colony · Bhilwara
          </p>

          <div className="space-y-3 mb-6">
            <p className="font-body font-normal text-xs sm:text-sm italic text-sage-dark/80">
              Tuesday, <span className="font-digit not-italic font-medium">01</span> December <span className="font-digit not-italic font-medium">2026</span> · <span className="font-digit not-italic font-medium">10:15</span> AM Onwards
            </p>

            <div className="w-10 h-px bg-gold/30 mx-auto" />

            <div className="flex flex-col items-center gap-1.5 text-sage-dark font-body font-normal text-xs sm:text-sm">
              <span>Hathdhan · <span className="font-digit">10:15</span> AM (Followed by Lunch)</span>
              <span>Dine, Dance &amp; Dazzle · <span className="font-digit">07:15</span> PM (Followed by Dinner)</span>
            </div>

            <div className="w-10 h-px bg-gold/30 mx-auto" />

            <p className="text-sage-dark/75 font-body font-normal text-xs tracking-wide">
              10-B-18, R.C. Vyas Colony, Bhilwara (Rajasthan)
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6">
            <ActionMenu
              icon={<MapPin className="w-3.5 h-3.5" />}
              label="Bhilwara Map"
              className="text-xs font-display font-medium tracking-wider"
              items={[
                { label: "Google Maps", href: buildGoogleMapsUrl(address) },
                { label: "Apple Maps", href: buildAppleMapsUrl(address) },
              ]}
            />
            <ActionMenu
              icon={<Calendar className="w-3.5 h-3.5" />}
              label="Add to Calendar"
              className="text-xs font-display font-medium tracking-wider"
              items={[
                { label: "Google Calendar", href: buildGoogleCalendarUrl(calendarEvent) },
                {
                  label: "Apple Calendar",
                  href: buildIcsDataUrl(calendarEvent),
                  download: "bhilwara-rituals.ics",
                },
              ]}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
