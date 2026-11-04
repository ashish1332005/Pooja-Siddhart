import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useLanguage } from "../i18n/LanguageContext";
import { calculateCountdown } from "../utils/calendarAndMaps";
import { MEDIA } from "../data/weddingConfig";

interface CountdownSectionProps {
  targetDate: string;
}

export function CountdownSection({ targetDate }: CountdownSectionProps) {
  const { t } = useLanguage();
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const update = () => {
      setTimeLeft(calculateCountdown(targetDate));
    };
    update();
    const timer = setInterval(update, 1000);
    return () => clearInterval(timer);
  }, [targetDate]);

  const items = [
    { value: timeLeft.days, label: t("countdown.days") },
    { value: timeLeft.hours, label: t("countdown.hours") },
    { value: timeLeft.minutes, label: t("countdown.minutes") },
  ];

  return (
    <section
      id="countdown"
      className="relative flex min-h-[580px] md:min-h-[680px] flex-col items-center justify-center overflow-hidden bg-ivory px-4 py-16 md:py-24"
    >
      <img
        src={MEDIA.countdownFrame}
        alt=""
        aria-hidden="true"
        loading="lazy"
        className="pointer-events-none absolute inset-0 h-full w-full select-none object-fill opacity-95"
      />
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.75 }}
        className="relative z-10 flex flex-col items-center max-w-xl mx-auto px-4 my-auto"
      >
        <h2 className="mb-6 sm:mb-8 md:mb-10 text-center font-display text-2xl sm:text-3xl md:text-4xl font-normal tracking-wide text-sage-dark">
          {t("countdown.title")}
        </h2>
        <div className="flex w-full items-center justify-center gap-3 sm:gap-6 md:gap-8">
          {items.map((item) => (
            <div
              key={item.label}
              className="flex flex-col items-center"
            >
              <div className="relative aspect-square w-20 sm:w-24 md:w-28 flex items-center justify-center">
                <img
                  src={MEDIA.countdownPearlMedallion}
                  alt=""
                  aria-hidden="true"
                  className="absolute inset-0 h-full w-full object-contain pointer-events-none select-none"
                />
                <div className="relative z-10 flex items-center justify-center">
                  <span className="font-digit text-2xl sm:text-3xl md:text-4xl font-normal leading-none text-sage-dark">
                    {String(item.value).padStart(2, "0")}
                  </span>
                </div>
              </div>
              <span className="mt-2 font-body font-normal text-[9px] sm:text-[10px] md:text-xs uppercase tracking-[0.25em] text-sage-dark/80">
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
