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
      className="relative bg-ivory overflow-visible pt-6 md:pt-12 pb-0"
    >
      <div className="relative z-10 w-full max-w-xl mx-auto px-0">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative w-full"
        >
          {/* Main Venue Frame - Edge-to-Edge on Mobile, Cropped Clean at the Bottom */}
          <div className="relative w-full overflow-hidden">
            <img
              src={MEDIA.ceremonyReceptionBg}
              alt="Ceremony and Reception Venue Frame"
              className="w-full h-auto block select-none pointer-events-none"
            />

            {/* Details strictly inside the boundary */}
            <div className="absolute inset-x-[14%] top-[21%] bottom-[9%] sm:inset-x-[16%] flex flex-col items-center justify-center text-center px-2 sm:px-4">
              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-sage-dark tracking-wide leading-[1.15] font-normal mb-2">
                Venue
              </h2>
              <span className="section-rule !my-2.5" />

              {/* Venue from PDF */}
              <h3 className="font-display text-xl sm:text-2xl md:text-3xl text-sage-dark mt-2 mb-1 tracking-wide font-normal">
                {WEDDING_CONFIG.main_venue_name}
              </h3>
              <p className="font-serif text-xs sm:text-sm tracking-[0.22em] uppercase text-[#b88e44] font-semibold mb-5 sm:mb-6">
                NH 8, Udaipur (Rajasthan)
              </p>

              {/* Maps & Calendar Actions */}
              <div className="flex flex-col items-center gap-2.5 pt-1">
                <ActionMenu
                  icon={<MapPin className="w-3.5 h-3.5 text-[#b88e44]" />}
                  label="OPEN IN MAPS"
                  className="text-[11px] sm:text-xs font-serif tracking-[0.22em] text-sage-dark uppercase hover:text-[#b88e44] transition-colors font-semibold"
                  items={[
                    { label: "Google Maps", href: buildGoogleMapsUrl(address) },
                    { label: "Apple Maps", href: buildAppleMapsUrl(address) },
                  ]}
                />
                <ActionMenu
                  icon={<Calendar className="w-3.5 h-3.5 text-[#b88e44]" />}
                  label="ADD TO CALENDAR"
                  className="text-[11px] sm:text-xs font-serif tracking-[0.22em] text-sage-dark uppercase hover:text-[#b88e44] transition-colors font-semibold"
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
          </div>

          {/* User-Uploaded Floral Hanging Garland - Seamlessly Attached to Cropped Frame Bottom */}
          <motion.div
            className="relative -mt-[13.5%] w-full mx-auto pointer-events-none select-none z-20"
            style={{ transformOrigin: "50% 0%" }}
            animate={{
              rotate: [-1.4, 1.4, -1.4],
              x: [-1, 1, -1],
            }}
            transition={{
              duration: 5.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <img
              src={MEDIA.ceremonyBottomGarland}
              alt="Floral hanging garland"
              className="w-full h-auto block drop-shadow-sm"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
