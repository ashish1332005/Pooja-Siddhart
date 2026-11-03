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

  const handleTimeUpdate = () => {
    const vid = videoRef.current;
    if (!vid) return;
    const duration = vid.duration || 0;
    const currentTime = vid.currentTime || 0;
    if (duration > 3 && currentTime >= duration - 3) {
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

  const handleEnded = () => {
    setStatus("done");
    setShowText(true);
  };

  return (
    <>
      <section className="relative w-full min-h-screen bg-ivory overflow-hidden">
        <video
          ref={videoRef}
          src={MEDIA.introDoorsVideo}
          poster={MEDIA.introDoorsPoster}
          muted
          playsInline
          preload="auto"
          onTimeUpdate={handleTimeUpdate}
          onEnded={handleEnded}
          onError={() => {
            setStatus("done");
            setShowText(true);
          }}
          className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-300 ${
            status === "idle" ? "opacity-0" : "opacity-100"
          }`}
        />
        <div
          className="absolute inset-0 flex flex-col items-center text-center px-8 pt-[24vh]"
          style={{ mixBlendMode: "multiply" }}
        >
          <motion.p
            className="font-hindi text-xs sm:text-sm tracking-[0.2em] mb-1 font-bold text-gold-dark"
            animate={showText ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
            transition={{ duration: 0.7 }}
          >
            {WEDDING_CONFIG.ganesh_mantra}
          </motion.p>
          <motion.div
            className="font-couple text-[2.75rem] sm:text-[3.75rem] md:text-[4.75rem] leading-[1.1] text-sage-dark font-normal"
            animate={showText ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <p>{coupleName1}</p>
            <p className="text-xl sm:text-2xl font-serif italic text-dusty-rose my-0.5">&amp;</p>
            <p>{coupleName2}</p>
          </motion.div>
          <motion.p
            className="mt-3 sm:mt-4 font-display text-xs sm:text-sm md:text-base tracking-[0.25em] uppercase font-bold text-sage-dark"
            animate={showText ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            DEC | <span className="font-digit text-sm sm:text-base">03</span>RD - <span className="font-digit text-sm sm:text-base">05</span>TH | <span className="font-digit text-sm sm:text-base">2026</span>
          </motion.p>
        </div>
      </section>

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
