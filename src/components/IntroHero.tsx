import React, { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { MEDIA, WEDDING_CONFIG } from "../data/weddingConfig";

interface IntroHeroProps {
  coupleName1?: string;
  coupleName2?: string;
  weddingDate?: string;
}

export function IntroHero({
  coupleName1 = WEDDING_CONFIG.couple_name_1,
  coupleName2 = WEDDING_CONFIG.couple_name_2,
}: IntroHeroProps) {
  const [status, setStatus] = useState<"idle" | "playing" | "done">("idle");
  const [showText, setShowText] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const touchStartY = useRef<number | null>(null);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartY.current = e.touches[0].clientY;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartY.current === null) return;
    const diff = touchStartY.current - e.changedTouches[0].clientY;
    // Swiped up by > 40px
    if (diff > 40) {
      setStatus("done");
      setShowText(true);
      document.getElementById("swans-welcome")?.scrollIntoView({ behavior: "smooth" });
    }
    touchStartY.current = null;
  };

  useEffect(() => {
    if (status === "done") {
      document.body.style.overflow = "";
      return;
    }
    document.body.style.overflow = "hidden";
    window.scrollTo(0, 0);
    return () => {
      document.body.style.overflow = "";
    };
  }, [status]);

  useEffect(() => {
    if (status === "playing") {
      // Show text ONLY after curtains have fully opened (at ~6.8s)
      const textTimer = setTimeout(() => {
        setShowText(true);
      }, 6800);

      // Auto-unlock page scroll and finalize view after video ends
      const finishTimer = setTimeout(() => {
        setStatus("done");
        setShowText(true);
      }, 9800);

      return () => {
        clearTimeout(textTimer);
        clearTimeout(finishTimer);
      };
    }
  }, [status]);

  const handleTimeUpdate = () => {
    const vid = videoRef.current;
    if (!vid) return;
    // Curtains fully part at 6.5 seconds
    if (vid.currentTime >= 6.5) {
      setShowText(true);
    }
  };

  const handleOpen = () => {
    if (status === "idle") {
      setStatus("playing");
      videoRef.current?.play().catch(() => {
        setStatus("done");
        setShowText(true);
      });
    }
  };

  const handleSkip = () => {
    setStatus("done");
    setShowText(true);
  };

  return (
    <>
      <section
        className="relative w-full min-h-screen bg-ivory overflow-hidden cursor-pointer"
        onClick={status === "playing" ? handleSkip : undefined}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        {/* Permanent Fallback & High-Res Finished Frame */}
        <img
          src={MEDIA.introDoorsFinalFrame}
          alt="Palace Villa & Garden"
          className="absolute inset-0 h-full w-full object-cover select-none"
        />

        {/* Gate Opening Video */}
        {status !== "done" && (
          <video
            ref={videoRef}
            src={MEDIA.introDoorsVideo}
            poster={MEDIA.introDoorsPoster}
            muted
            playsInline
            preload="auto"
            onTimeUpdate={handleTimeUpdate}
            onEnded={handleSkip}
            onError={handleSkip}
            className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-300 ${
              status === "idle" ? "opacity-0" : "opacity-100"
            }`}
          />
        )}

        {/* Monogram, Couple Names & Wedding Date - Strictly in Blank Linen Canvas */}
        <div
          className="absolute inset-x-0 top-[17.5%] h-[38%] flex flex-col items-center justify-center text-center px-4 pointer-events-none select-none z-10"
        >
          {/* Original P S Monogram Logo */}
          <motion.img
            src={MEDIA.coupleMonogram}
            alt="Pooja & Siddhart monogram"
            className="h-[9vh] sm:h-[10.5vh] max-h-[90px] sm:max-h-[115px] w-auto object-contain mb-1 sm:mb-1.5 drop-shadow-sm select-none"
            animate={showText ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 12, scale: 0.95 }}
            transition={{ duration: 0.6 }}
          />

          {/* Groom & Bride Names + Wedding Date */}
          <motion.div
            className="flex flex-col items-center justify-center w-full max-w-sm sm:max-w-md"
            animate={showText ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            {/* Siddhart */}
            <h1 className="font-couple text-[#7c2635] text-4xl sm:text-5xl md:text-6xl font-normal leading-[1.08] tracking-wide drop-shadow-sm my-0">
              {coupleName1}
            </h1>

            {/* Gold Ampersand with Lateral Divider Lines */}
            <div className="flex items-center justify-center w-40 sm:w-52 md:w-60 my-0.5 sm:my-1">
              <div className="h-px flex-1 bg-gradient-to-r from-transparent via-[#b88e44]/75 to-[#b88e44]" />
              <span className="font-display text-[#b88e44] text-base sm:text-lg md:text-xl font-light px-2.5 leading-none">
                &amp;
              </span>
              <div className="h-px flex-1 bg-gradient-to-l from-transparent via-[#b88e44]/75 to-[#b88e44]" />
            </div>

            {/* Pooja */}
            <h1 className="font-couple text-[#7c2635] text-4xl sm:text-5xl md:text-6xl font-normal leading-[1.08] tracking-wide drop-shadow-sm my-0">
              {coupleName2}
            </h1>

            {/* Wedding Date directly on 1st Page */}
            <p className="font-serif text-[11px] sm:text-xs md:text-sm tracking-[0.22em] uppercase text-[#7c2635] font-semibold mt-2 sm:mt-2.5">
              03<sup className="text-[8px] sm:text-[9px] font-normal align-super ml-0.5">RD</sup> &ndash; 05<sup className="text-[8px] sm:text-[9px] font-normal align-super ml-0.5">TH</sup> DECEMBER 2026
            </p>
          </motion.div>
        </div>

        {/* Prominent Interactive Swipe Up Indicator - Exact Reference Design */}
        {(showText || status === "done") && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="absolute inset-x-0 bottom-4 sm:bottom-6 flex justify-center z-20 pointer-events-auto"
          >
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                setStatus("done");
                setShowText(true);
                setTimeout(() => {
                  document.getElementById("swans-welcome")?.scrollIntoView({ behavior: "smooth" });
                }, 50);
              }}
              className="group flex flex-col items-center gap-1 px-4 py-2 bg-transparent cursor-pointer select-none transition-transform active:scale-95"
              aria-label="Swipe up to explore invitation"
            >
              {/* Stacked Double Chevron Up Arrow */}
              <motion.div
                animate={{ y: [0, -6, 0], opacity: [0.75, 1, 0.75] }}
                transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
                className="flex flex-col items-center -space-y-1.5 text-[#544d2e] drop-shadow-sm"
              >
                <svg
                  className="w-5 h-5 sm:w-6 sm:h-6"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M18 15l-6-6-6 6" />
                </svg>
                <svg
                  className="w-5 h-5 sm:w-6 sm:h-6"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M18 15l-6-6-6 6" />
                </svg>
              </motion.div>

              {/* SWIPE UP Serif Text */}
              <span className="font-serif text-[11px] sm:text-xs tracking-[0.38em] uppercase text-[#34301d] font-bold drop-shadow-sm mt-0.5">
                SWIPE UP
              </span>
            </button>
          </motion.div>
        )}
      </section>

      {/* Tap to open overlay */}
      <AnimatePresence>
        {status === "idle" && (
          <motion.div
            key="intro"
            className="fixed inset-0 z-50 h-screen w-screen cursor-pointer overflow-hidden bg-ivory"
            onClick={handleOpen}
            role="button"
            aria-label="Tap to open the invitation"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
          >
            <img
              src={MEDIA.introDoorsPoster}
              alt=""
              aria-hidden="true"
              className="absolute inset-0 h-full w-full object-cover select-none"
            />
            <motion.p
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute inset-x-0 bottom-16 text-center font-body text-[0.7rem] md:text-xs tracking-[0.5em] uppercase text-white/90 drop-shadow-[0_1px_4px_rgba(0,0,0,0.4)] pointer-events-none"
            >
              Tap to open
            </motion.p>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
