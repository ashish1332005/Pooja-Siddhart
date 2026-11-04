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
          className="absolute inset-x-0 top-[25%] bottom-[48%] flex flex-col items-center justify-center text-center px-6 pointer-events-none select-none z-10"
          style={{ mixBlendMode: "multiply" }}
        >
          <motion.div
            className="font-couple text-[2.6rem] sm:text-5xl md:text-6xl leading-[1.15] text-sage-dark font-normal"
            animate={showText ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <p>{coupleName1}</p>
            <p className="text-2xl sm:text-3xl font-display text-dusty-rose my-0.5">&amp;</p>
            <p>{coupleName2}</p>
          </motion.div>
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
