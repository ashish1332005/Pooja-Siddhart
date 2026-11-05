import React from "react";
import { WEDDING_CONFIG } from "../data/weddingConfig";
import { IntroHero } from "../components/IntroHero";
import { CountdownSection } from "../components/CountdownSection";
import { WelcomeSection } from "../components/WelcomeSection";
import { WeddingEventsSection } from "../components/WeddingEventsSection";
import { TimelineSection } from "../components/TimelineSection";
import { RecoveryDaySection } from "../components/RecoveryDaySection";
import { FamilySection } from "../components/FamilySection";
import { RsvpSection } from "../components/RsvpSection";
import { FooterSection } from "../components/FooterSection";

export function Index() {
  return (
    <main className="bg-background overflow-x-hidden">
      {/* 1. Gate Opening Interactive Video (with Original Monogram, Couple Names, Date & Scroll Down) */}
      <IntroHero
        coupleName1={WEDDING_CONFIG.couple_name_1}
        coupleName2={WEDDING_CONFIG.couple_name_2}
        weddingDate={WEDDING_CONFIG.wedding_date}
      />

      {/* 2. Live Countdown Medallions */}
      <CountdownSection targetDate={WEDDING_CONFIG.wedding_date} />

      {/* 3. Welcome & Parents Details */}
      <WelcomeSection />

      {/* 4. Interactive Timeline with Scroll Pearl */}
      <TimelineSection />

      {/* 5. Venue 1: Pre-Wedding Rituals (Bhilwara Venue) */}
      <RecoveryDaySection />

      {/* 6. Venue 2: Main Wedding Venue (Udaipur Venue & Swinging Garland) */}
      <WeddingEventsSection />

      {/* 7. Family Lineage, Compliments & Sweet Request */}
      <FamilySection />

      {/* 8. RSVP Envelope & Form (Connected to WhatsApp) */}
      <RsvpSection />

      {/* 9. Footer Chateau */}
      <FooterSection
        name1={WEDDING_CONFIG.couple_name_1}
        name2={WEDDING_CONFIG.couple_name_2}
        date={WEDDING_CONFIG.wedding_date}
      />
    </main>
  );
}
