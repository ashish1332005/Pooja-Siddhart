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
          <div className="absolute inset-x-[16%] top-[20%] bottom-[20%] sm:inset-x-[18%] flex flex-col items-center justify-center text-center px-2 sm:px-4">
            <h2 className="font-display text-xl sm:text-2xl md:text-3xl text-sage-dark tracking-wide mb-1 leading-tight font-semibold">
              Ceremony &amp; Reception
            </h2>
            <span className="block w-8 sm:w-10 h-px bg-gold mx-auto my-1.5 sm:my-2" />
            <p className="font-display text-[10px] sm:text-xs tracking-[0.28em] uppercase text-gold-dark font-semibold mb-2 sm:mb-3">
              Where We Celebrate
            </p>

            {/* Venue from PDF */}
            <h3 className="font-display text-base sm:text-xl md:text-2xl text-sage-dark mb-0.5 sm:mb-1 tracking-wide font-semibold leading-snug">
              {WEDDING_CONFIG.main_venue_name}
            </h3>
            <p className="font-display text-[10px] sm:text-xs tracking-[0.22em] uppercase text-gold-dark font-semibold mb-2 sm:mb-3">
              NH 8, Udaipur (Rajasthan)
            </p>

            <div className="space-y-1.5 sm:space-y-2 mb-3 sm:mb-4">
              <p className="font-body font-semibold text-xs sm:text-sm md:text-base text-sage-dark">
                Saturday, <span className="font-digit font-semibold">05</span> December <span className="font-digit font-semibold">2026</span>
              </p>
              <div className="w-8 h-px bg-gold/70 mx-auto" />
              <div className="flex flex-col items-center gap-1 sm:gap-1.5 text-sage-dark font-body font-semibold text-[11px] sm:text-xs md:text-sm leading-relaxed">
                <span>
                  Mangal Phere · Santorini Garden · <span className="font-digit font-semibold">11:15 AM</span>
                </span>
                <span>
                  The Wedding Gala · Aravali Garden · <span className="font-digit font-semibold">07:15 PM</span>
                </span>
              </div>
              <div className="w-8 h-px bg-gold/70 mx-auto" />
            </div>

            {/* Maps & Calendar Actions */}
            <div className="flex flex-col items-center gap-1.5 sm:gap-2 pt-0.5">
              <ActionMenu
                icon={<MapPin className="w-3 h-3 sm:w-3.5 sm:h-3.5" />}
                label="Udaipur Venue Map"
                className="text-[10px] sm:text-xs font-display font-semibold tracking-[0.14em] text-sage-dark"
                items={[
                  { label: "Google Maps", href: buildGoogleMapsUrl(address) },
                  { label: "Apple Maps", href: buildAppleMapsUrl(address) },
                ]}
              />
              <ActionMenu
                icon={<Calendar className="w-3 h-3 sm:w-3.5 sm:h-3.5" />}
                label="Add to Calendar"
                className="text-[10px] sm:text-xs font-display font-semibold tracking-[0.14em] text-sage-dark"
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
