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
      className="relative flex min-h-[640px] md:min-h-[760px] flex-col items-center justify-center overflow-hidden bg-ivory px-4 py-20 md:py-28"
    >
      <img
        src={MEDIA.countdownFrame}
        alt=""
        aria-hidden="true"
        loading="lazy"
        className="pointer-events-none absolute inset-0 h-full w-full select-none object-fill opacity-90"
      />
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.75 }}
        className="relative z-10 flex flex-col items-center max-w-2xl mx-auto px-4"
      >
        <h2 className="mb-6 md:mb-10 text-center font-display text-3xl sm:text-4xl md:text-5xl font-medium tracking-wide text-sage-dark">
          {t("countdown.title")}
        </h2>
        <div className="flex w-full items-center justify-center gap-2 sm:gap-4 md:gap-8">
          {items.map((item) => (
            <div
              key={item.label}
              className="flex flex-col items-center"
            >
              <div className="relative aspect-square w-[25vw] max-w-[170px] sm:w-[22vw] sm:max-w-[190px] md:w-[18vw] md:max-w-[210px] flex items-center justify-center">
                <img
                  src={MEDIA.countdownPearlMedallion}
                  alt=""
                  aria-hidden="true"
                  className="absolute inset-0 h-full w-full object-contain pointer-events-none select-none"
                />
                <div className="relative z-10 flex items-center justify-center">
                  <span className="font-digit text-3xl sm:text-5xl md:text-6xl font-normal leading-none text-sage-dark pt-1">
                    {String(item.value).padStart(2, "0")}
                  </span>
                </div>
              </div>
              <span className="mt-2 font-body font-normal text-[10px] sm:text-xs md:text-sm uppercase tracking-widest text-sage-dark">
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
