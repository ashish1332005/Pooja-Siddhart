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

        {/* Monogram and Authentic Calligraphy - Strictly in Blank Linen Canvas */}
        <div
          className="absolute inset-x-0 top-[25.5%] h-[27%] flex flex-col items-center justify-center text-center px-4 pointer-events-none select-none z-10"
        >
          {/* Pure Metallic Gold P S Monogram Logo */}
          <motion.img
            src={MEDIA.coupleMonogram}
            alt="Pooja & Siddhart monogram"
            className="h-[6.5vh] max-h-[72px] sm:max-h-[82px] w-auto object-contain mb-1 drop-shadow-sm select-none"
            animate={showText ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 12, scale: 0.95 }}
            transition={{ duration: 0.6 }}
          />

          {/* Groom & Bride Names - Pixel-Perfect Equal Size & Matching Sample */}
          <motion.div
            className="flex flex-col items-center justify-center w-full max-w-xs sm:max-w-sm"
            animate={showText ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            {/* Siddhart */}
            <h1 className="font-couple text-[#7c2635] text-2xl sm:text-3xl md:text-4xl font-normal leading-tight tracking-wide drop-shadow-sm my-0">
              {coupleName1}
            </h1>

            {/* Gold Ampersand with Subtle Lateral Divider Lines */}
            <div className="flex items-center justify-center w-full max-w-[160px] sm:max-w-[190px] my-0.5">
              <div className="h-px flex-1 bg-gradient-to-r from-transparent via-[#b88e44]/70 to-[#b88e44]/90" />
              <span className="font-display text-[#b88e44] text-sm sm:text-base md:text-lg font-light px-2.5 leading-none">
                &amp;
              </span>
              <div className="h-px flex-1 bg-gradient-to-l from-transparent via-[#b88e44]/70 to-[#b88e44]/90" />
            </div>

            {/* Pooja */}
            <h1 className="font-couple text-[#7c2635] text-2xl sm:text-3xl md:text-4xl font-normal leading-tight tracking-wide drop-shadow-sm my-0">
              {coupleName2}
            </h1>

            {/* Subtle Floral Flourish below Pooja */}
            <div className="flex items-center justify-center gap-1.5 mt-1 opacity-70">
              <span className="h-px w-6 bg-gradient-to-r from-transparent to-[#b88e44]" />
              <span className="w-1.5 h-1.5 rotate-45 border border-[#b88e44] bg-[#b88e44]/30" />
              <span className="h-px w-6 bg-gradient-to-l from-transparent to-[#b88e44]" />
            </div>
          </motion.div>
        </div>

        {/* Scroll hint once done */}
        {status === "done" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: [0.4, 0.85, 0.4] }}
            transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
            className="absolute inset-x-0 bottom-6 text-center pointer-events-none select-none z-10"
          >
            <p className="font-body text-[10px] md:text-xs tracking-[0.35em] uppercase text-sage-dark font-medium">
              Scroll to explore ↓
            </p>
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
