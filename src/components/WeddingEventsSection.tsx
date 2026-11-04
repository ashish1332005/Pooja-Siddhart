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

export function WeddingEventsSection() {
  const address = WEDDING_CONFIG.main_venue_address;
  const calendarEvent = {
    title: "Siddhart & Pooja – Shubh Vivaah Celebrations",
    location: address,
    startLocal: "20261205T111500",
    endLocal: "20261205T235900",
    timezone: "Asia/Kolkata",
  };

  return (
    <section
      id="wedding-events"
      className="relative bg-ivory overflow-hidden py-12 md:py-20"
    >
      <div className="relative z-10 max-w-md sm:max-w-lg md:max-w-xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative w-full overflow-hidden"
        >
          {/* Complete background illustration visible 100% without any clipping */}
          <img
            src={MEDIA.ceremonyReceptionBg}
            alt="Ceremony and Reception Venue Frame"
            className="w-full h-auto block select-none pointer-events-none"
          />

          {/* Complete Details strictly inside the boundary and perfectly centered */}
          <div className="absolute inset-x-[16%] top-[19%] bottom-[19%] sm:inset-x-[18%] flex flex-col items-center justify-center text-center px-2 sm:px-4">
            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl text-sage-dark tracking-normal leading-[1.15] font-normal mb-1">
              Ceremony<br />&amp; Reception
            </h2>
            <p className="font-body text-[9px] sm:text-[10.5px] tracking-[0.28em] uppercase text-gold-dark font-medium my-2 sm:my-2.5">
              Where We Celebrate
            </p>

            {/* Venue from PDF */}
            <h3 className="font-display text-base sm:text-lg md:text-xl text-sage-dark mb-0.5 tracking-wide font-normal">
              {WEDDING_CONFIG.main_venue_name}
            </h3>
            <p className="font-body text-[8.5px] sm:text-[9.5px] tracking-[0.22em] uppercase text-gold-dark/90 mb-2 sm:mb-3">
              NH 8, Udaipur (Rajasthan)
            </p>

            <div className="space-y-1.5 sm:space-y-2 mb-3 sm:mb-4">
              <p className="font-body italic text-xs sm:text-sm text-sage-dark/85">
                Saturday, 05 December 2026
              </p>
              <div className="flex flex-col items-center gap-1 text-sage-dark font-body text-[10.5px] sm:text-xs leading-relaxed">
                <span>
                  Mangal Phere · Santorini Garden · 11:15 AM
                </span>
                <span>
                  The Wedding Gala · Aravali Garden · 07:15 PM
                </span>
              </div>
            </div>

            {/* Maps & Calendar Actions - Matching Demo UI */}
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
                    download: "wedding.ics",
                  },
                ]}
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
