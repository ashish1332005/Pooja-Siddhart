import React, { useEffect, useRef, useState } from "react";
import { Volume2, VolumeX, Music } from "lucide-react";

export function MusicPlayer() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const startPlaying = () => {
    if (!audioRef.current) return;
    audioRef.current
      .play()
      .then(() => {
        setIsPlaying(true);
      })
      .catch((err) => {
        console.log("Audio play deferred or blocked by browser:", err);
      });
  };

  const togglePlay = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      startPlaying();
    }
  };

  useEffect(() => {
    const handleCustomPlay = () => {
      startPlaying();
    };

    // First user gesture anywhere on page starts audio if not yet started
    const handleFirstGesture = () => {
      startPlaying();
      window.removeEventListener("pointerdown", handleFirstGesture);
      window.removeEventListener("keydown", handleFirstGesture);
    };

    window.addEventListener("play-wedding-music", handleCustomPlay);
    window.addEventListener("pointerdown", handleFirstGesture, { once: true });
    window.addEventListener("keydown", handleFirstGesture, { once: true });

    return () => {
      window.removeEventListener("play-wedding-music", handleCustomPlay);
      window.removeEventListener("pointerdown", handleFirstGesture);
      window.removeEventListener("keydown", handleFirstGesture);
    };
  }, []);

  return (
    <>
      <audio
        ref={audioRef}
        src="/media/jashn-e-bahaaraa.mp3"
        loop
        preload="auto"
      />

      {/* Floating Royal Music Toggle Button */}
      <button
        type="button"
        onClick={togglePlay}
        aria-label={isPlaying ? "Mute wedding music" : "Play wedding music"}
        className="fixed top-4 right-4 z-40 flex items-center justify-center w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-[#fbf9f4]/90 border border-[#b88e44]/80 shadow-[0_4px_16px_rgba(0,0,0,0.14)] backdrop-blur-xs text-[#7c2635] hover:bg-[#b88e44] hover:text-white transition-all active:scale-95 cursor-pointer"
        title={isPlaying ? "Mute Music (Jashn-E-Bahaaraa)" : "Play Music"}
      >
        {isPlaying ? (
          <div className="relative flex items-center justify-center animate-[spin_6s_linear_infinite]">
            <Music className="w-4 h-4 sm:w-5 sm:h-5 text-[#7c2635]" />
          </div>
        ) : (
          <VolumeX className="w-4 h-4 sm:w-5 sm:h-5 text-[#7c2635]/80" />
        )}
      </button>
    </>
  );
}
