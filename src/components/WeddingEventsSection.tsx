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
            className="relative text-center px-4 sm:px-6 w-full max-w-[270px] sm:max-w-[320px]"
          >
            <h2 className="font-display text-2xl sm:text-3xl text-sage-dark tracking-wide mb-1 leading-tight font-medium">
              Ceremony &amp; Reception
            </h2>
            <span className="block w-8 h-px bg-gold/40 mx-auto my-2" />
            <p className="font-display text-[9px] sm:text-[10px] tracking-[0.32em] uppercase text-gold-dark/85 mb-3 sm:mb-4">
              Where We Celebrate
            </p>

            {/* Venue from PDF */}
            <h3 className="font-display text-lg sm:text-xl md:text-2xl text-sage-dark mb-1 tracking-wide font-medium leading-snug">
              {WEDDING_CONFIG.main_venue_name}
            </h3>
            <p className="font-display text-[10px] sm:text-[11px] tracking-[0.25em] uppercase text-gold-dark/80 mb-3">
              NH 8, Udaipur (Rajasthan)
            </p>

            <div className="space-y-2 mb-4">
              <p className="font-body font-normal text-xs sm:text-sm italic text-sage-dark/80">
                Saturday, <span className="font-digit not-italic font-medium">05</span> December <span className="font-digit not-italic font-medium">2026</span>
              </p>
              <div className="w-8 h-px bg-gold/30 mx-auto" />
              <div className="flex flex-col items-center gap-1 text-sage-dark font-body font-normal text-xs sm:text-xs leading-relaxed">
                <span>
                  Mangal Phere · Santorini Garden · <span className="font-digit">11:15</span> AM
                </span>
                <span>
                  The Wedding Gala · Aravali Garden · <span className="font-digit">07:15</span> PM
                </span>
              </div>
              <div className="w-8 h-px bg-gold/30 mx-auto" />
            </div>

            {/* Maps & Calendar Actions */}
            <div className="flex flex-col items-center gap-2 pt-1">
              <ActionMenu
                icon={<MapPin className="w-2.5 h-2.5" />}
                label="Udaipur Venue Map"
                className="text-[9px] font-display font-medium tracking-[0.14em]"
                items={[
                  { label: "Google Maps", href: buildGoogleMapsUrl(address) },
                  { label: "Apple Maps", href: buildAppleMapsUrl(address) },
                ]}
              />
              <ActionMenu
                icon={<Calendar className="w-2.5 h-2.5" />}
                label="Add to Calendar"
                className="text-[9px] font-display font-medium tracking-[0.14em]"
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
