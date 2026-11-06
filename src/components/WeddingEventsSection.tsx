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
      className="relative z-10 bg-ivory overflow-visible pt-6 md:pt-12 pb-0"
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

            {/* Details strictly inside the boundary - Natural Royal Spacing Without Artificial White Boxes */}
            <div className="absolute inset-x-[12%] sm:inset-x-[16%] top-[20%] sm:top-[22%] bottom-[18%] sm:bottom-[16%] flex flex-col items-center justify-center text-center px-2 select-none space-y-2.5 sm:space-y-3.5">
              {/* Grand Venue Heading */}
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#7c2635] tracking-wide leading-tight font-normal">
                Venue
              </h2>

              {/* Golden Flourish Divider */}
              <div className="flex items-center justify-center gap-2 w-32 sm:w-44 text-[#b88e44]/85 py-0.5">
                <div className="h-px flex-1 bg-gradient-to-r from-transparent to-[#b88e44]" />
                <span className="text-xs sm:text-sm leading-none">&#10022;</span>
                <div className="h-px flex-1 bg-gradient-to-l from-transparent to-[#b88e44]" />
              </div>

              {/* Resort Name - Large, Prominent & Dignified */}
              <h3 className="font-serif text-2xl sm:text-3xl md:text-4xl text-[#1e3a2f] font-bold tracking-wide leading-snug">
                {WEDDING_CONFIG.main_venue_name}
              </h3>

              {/* Address in Warm Gold */}
              <p className="font-serif text-xs sm:text-sm tracking-[0.2em] uppercase text-[#a3702c] font-semibold">
                NH 8, Udaipur (Rajasthan)
              </p>

              {/* Wedding Celebrations Date - Pure Typography Directly on Linen */}
              <p className="font-serif text-xs sm:text-sm md:text-base text-[#7c2635] font-semibold tracking-[0.16em] uppercase whitespace-nowrap pt-0.5">
                03RD &ndash; 05TH DECEMBER 2026
              </p>

              {/* Maps & Calendar Actions - Transparent Elegant Badges Without White Fill */}
              <div className="flex flex-row items-center justify-center gap-3 sm:gap-4 pt-2">
                <ActionMenu
                  icon={<MapPin className="w-3.5 h-3.5 text-[#b88e44]" />}
                  label="OPEN IN MAPS"
                  className="inline-flex items-center justify-center gap-1.5 px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-full border border-[#b88e44]/60 bg-transparent text-[10.5px] sm:text-xs font-serif tracking-[0.18em] text-[#1e3a2f] uppercase hover:bg-[#b88e44]/15 hover:text-[#7c2635] transition-all font-semibold"
                  items={[
                    { label: "Google Maps", href: buildGoogleMapsUrl(address) },
                    { label: "Apple Maps", href: buildAppleMapsUrl(address) },
                  ]}
                />
                <ActionMenu
                  icon={<Calendar className="w-3.5 h-3.5 text-[#b88e44]" />}
                  label="ADD TO CALENDAR"
                  className="inline-flex items-center justify-center gap-1.5 px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-full border border-[#b88e44]/60 bg-transparent text-[10.5px] sm:text-xs font-serif tracking-[0.18em] text-[#1e3a2f] uppercase hover:bg-[#b88e44]/15 hover:text-[#7c2635] transition-all font-semibold"
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
            className="relative -mt-[18%] sm:-mt-[20%] w-full mx-auto pointer-events-none select-none z-20"
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
