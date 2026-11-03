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
      className="relative bg-ivory overflow-x-clip bg-[length:100%_auto] bg-top bg-no-repeat"
      style={{ backgroundImage: `url(${MEDIA.ceremonyReceptionBg})` }}
    >
      <div className="relative w-full mx-auto px-4 pt-28 pb-28 md:pt-48 md:pb-40">
        <div className="w-full flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative text-center px-4 sm:px-6 w-full max-w-[280px] sm:max-w-[340px]"
          >
            <h2 className="font-display text-2xl sm:text-3xl text-sage-dark tracking-wide mb-1 leading-tight font-bold">
              Ceremony &amp; Reception
            </h2>
            <span className="block w-8 h-px bg-gold mx-auto my-2" />
            <p className="font-display text-xs tracking-[0.32em] uppercase text-gold-dark font-bold mb-3 sm:mb-4">
              Where We Celebrate
            </p>

            {/* Venue from PDF */}
            <h3 className="font-display text-lg sm:text-xl md:text-2xl text-sage-dark mb-1 tracking-wide font-bold leading-snug">
              {WEDDING_CONFIG.main_venue_name}
            </h3>
            <p className="font-display text-xs tracking-[0.25em] uppercase text-gold-dark font-bold mb-3">
              NH 8, Udaipur (Rajasthan)
            </p>

            <div className="space-y-2 mb-4">
              <p className="font-body font-semibold text-sm sm:text-base text-sage-dark">
                Saturday, <span className="font-digit font-bold">05</span> December <span className="font-digit font-bold">2026</span>
              </p>
              <div className="w-8 h-px bg-gold/70 mx-auto" />
              <div className="flex flex-col items-center gap-1.5 text-sage-dark font-body font-semibold text-xs sm:text-sm leading-relaxed">
                <span>
                  Mangal Phere · Santorini Garden · <span className="font-digit font-bold">11:15</span> AM
                </span>
                <span>
                  The Wedding Gala · Aravali Garden · <span className="font-digit font-bold">07:15</span> PM
                </span>
              </div>
              <div className="w-8 h-px bg-gold/70 mx-auto" />
            </div>

            {/* Maps & Calendar Actions */}
            <div className="flex flex-col items-center gap-2 pt-1">
              <ActionMenu
                icon={<MapPin className="w-3.5 h-3.5" />}
                label="Udaipur Venue Map"
                className="text-xs font-display font-bold tracking-[0.14em] text-sage-dark"
                items={[
                  { label: "Google Maps", href: buildGoogleMapsUrl(address) },
                  { label: "Apple Maps", href: buildAppleMapsUrl(address) },
                ]}
              />
              <ActionMenu
                icon={<Calendar className="w-3.5 h-3.5" />}
                label="Add to Calendar"
                className="text-xs font-display font-bold tracking-[0.14em] text-sage-dark"
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
          </motion.div>
        </div>
      </div>
    </section>
  );
}
