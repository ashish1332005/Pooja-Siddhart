import React, { useEffect, useState } from "react";
import { calculateCountdown } from "../utils/calendarAndMaps";
import { MEDIA } from "../data/weddingConfig";

interface CountdownSectionProps {
  targetDate: string;
}

export function CountdownSection({ targetDate }: CountdownSectionProps) {
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
    { value: timeLeft.days, label: "DAYS" },
    { value: timeLeft.hours, label: "HOURS" },
    { value: timeLeft.minutes, label: "MINUTES" },
  ];

  return (
    <section
      id="countdown"
      className="relative w-full bg-ivory overflow-hidden"
      aria-label="Wedding Countdown"
    >
      {/* Authentic Embroidered Floral Garland & Pearl Sash Frame */}
      <img
        src={MEDIA.countdownFrame}
        alt="Countdown embroidery frame"
        className="block h-auto w-full select-none pointer-events-none"
      />

      {/* Countdown Content - Large Prominent Medallions Matching Reference Sample */}
      <div className="absolute inset-x-0 top-[29%] h-[38%] flex flex-col items-center justify-center text-center px-2 sm:px-6 max-w-sm sm:max-w-lg md:max-w-2xl mx-auto pointer-events-none select-none z-10">
        <h2 className="mb-4 sm:mb-6 md:mb-8 text-center font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal tracking-wide text-sage-dark">
          Countdown
        </h2>

        {/* 3 Large Pearl Medallions - Spanning Broad Width with Big Numbers */}
        <div className="flex w-full items-center justify-center gap-3 sm:gap-6 md:gap-8 px-2">
          {items.map((item) => (
            <div key={item.label} className="flex flex-col items-center flex-1 max-w-[110px] sm:max-w-[145px] md:max-w-[175px]">
              <div className="relative aspect-square w-full flex items-center justify-center drop-shadow-md">
                <img
                  src={MEDIA.countdownPearlMedallion}
                  alt=""
                  aria-hidden="true"
                  className="absolute inset-0 h-full w-full object-contain pointer-events-none select-none scale-105"
                />
                <div className="relative z-10 flex items-center justify-center">
                  <span className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal leading-none text-sage-dark drop-shadow-sm">
                    {String(item.value).padStart(2, "0")}
                  </span>
                </div>
              </div>
              <span className="mt-2.5 sm:mt-3 font-serif font-medium text-[10px] sm:text-xs md:text-sm uppercase tracking-[0.22em] text-sage-dark/85">
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
