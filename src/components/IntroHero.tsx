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
      // Show text once doors swing open
      const textTimer = setTimeout(() => {
        setShowText(true);
      }, 2400);

      // Auto-unlock page scroll and finalize view after 5.5s
      const finishTimer = setTimeout(() => {
        setStatus("done");
        setShowText(true);
      }, 5500);

      return () => {
        clearTimeout(textTimer);
        clearTimeout(finishTimer);
      };
    }
  }, [status]);

  const handleTimeUpdate = () => {
    const vid = videoRef.current;
    if (!vid) return;
    if (vid.currentTime >= 2.2) {
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
          className="absolute inset-x-0 top-[26%] h-[26%] flex flex-col items-center justify-center text-center px-6 pointer-events-none select-none z-10"
        >
          {/* Pure Metallic Gold P S Monogram Logo */}
          <motion.img
            src={MEDIA.coupleMonogram}
            alt="Pooja & Siddhart monogram"
            className="h-[8vh] max-h-[85px] w-auto object-contain mb-1 drop-shadow-sm select-none"
            animate={showText ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 12, scale: 0.95 }}
            transition={{ duration: 0.6 }}
          />

          {/* Authentic Groom & Bride Names from PDF */}
          <motion.div
            className="flex flex-col items-center justify-center gap-0.5"
            animate={showText ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <img
              src={MEDIA.pdfSiddhart}
              alt={coupleName1}
              className="h-[3.8vh] max-h-[44px] w-auto object-contain select-none"
            />
            <p className="text-[min(1.1rem,2vh)] font-display text-dusty-rose my-0 leading-tight font-light">&amp;</p>
            <img
              src={MEDIA.pdfPooja}
              alt={coupleName2}
              className="h-[3.8vh] max-h-[44px] w-auto object-contain select-none"
            />
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
