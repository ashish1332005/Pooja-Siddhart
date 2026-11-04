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
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl text-sage-dark font-normal tracking-wide pt-6">
            Pre-Wedding Rituals
          </h2>
          <span className="section-rule !my-2.5" />
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
          <h3 className="font-display text-xl sm:text-2xl font-normal text-sage-dark mb-0.5 tracking-wide">
            {WEDDING_CONFIG.bhilwara_venue_name}
          </h3>
          <p className="font-body text-[9.5px] sm:text-[10.5px] tracking-[0.25em] uppercase text-gold-dark font-medium mb-3">
            R.C. Vyas Colony · Bhilwara
          </p>

          <div className="space-y-2 mb-6">
            <p className="font-body italic text-xs sm:text-sm text-sage-dark/85">
              Tuesday, 01 December 2026 · From 10:15 AM
            </p>

            <div className="flex flex-col items-center gap-1 text-sage-dark font-body text-[11px] sm:text-xs">
              <span>Hathdhan · 10:15 AM (Followed by Lunch)</span>
              <span>Dine, Dance &amp; Dazzle · 07:15 PM (Followed by Dinner)</span>
            </div>

            <p className="text-sage-dark/75 font-body italic text-[10.5px] sm:text-xs pt-1">
              10-B-18, R.C. Vyas Colony, Bhilwara (Rajasthan)
            </p>
          </div>

          <div className="flex flex-col items-center gap-2 pt-1">
            <ActionMenu
              icon={<MapPin className="w-3 h-3 text-gold-dark" />}
              label="OPEN IN MAPS"
              className="text-[9.5px] sm:text-[10.5px] font-body tracking-[0.22em] text-sage-dark uppercase hover:text-gold-dark transition-colors"
              items={[
                { label: "Google Maps", href: buildGoogleMapsUrl(address) },
                { label: "Apple Maps", href: buildAppleMapsUrl(address) },
              ]}
            />
            <ActionMenu
              icon={<Calendar className="w-3 h-3 text-gold-dark" />}
              label="ADD TO CALENDAR"
              className="text-[9.5px] sm:text-[10.5px] font-body tracking-[0.22em] text-sage-dark uppercase hover:text-gold-dark transition-colors"
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
