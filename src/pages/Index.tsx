import React from "react";
import { WEDDING_CONFIG } from "../data/weddingConfig";
import { IntroHero } from "../components/IntroHero";
import { SwansWelcome } from "../components/SwansWelcome";
import { CountdownSection } from "../components/CountdownSection";
import { WelcomeSection } from "../components/WelcomeSection";
import { WeddingEventsSection } from "../components/WeddingEventsSection";
import { TimelineSection } from "../components/TimelineSection";
import { RecoveryDaySection } from "../components/RecoveryDaySection";
import { FamilySection } from "../components/FamilySection";
import { GiftsSection } from "../components/GiftsSection";
import { RsvpSection } from "../components/RsvpSection";
import { FooterSection } from "../components/FooterSection";

export function Index() {
  return (
    <main className="bg-background overflow-x-hidden">
      {/* 1. Gate Opening Interactive Video */}
      <IntroHero
        coupleName1={WEDDING_CONFIG.couple_name_1}
        coupleName2={WEDDING_CONFIG.couple_name_2}
        weddingDate={WEDDING_CONFIG.wedding_date}
      />

      {/* 2. Embroidered Swans Welcome */}
      <SwansWelcome />

      {/* 3. Live Countdown Medallions */}
      <CountdownSection targetDate={WEDDING_CONFIG.wedding_date} />

      {/* 4. Welcome & Parents Details */}
      <WelcomeSection />

      {/* 5. Ceremony & Reception (Udaipur Venue & Swinging Ivy) */}
      <WeddingEventsSection />

      {/* 6. Interactive Timeline with Scroll Pearl */}
      <TimelineSection />

      {/* 8. Pre-Wedding Rituals (Bhilwara Venue) */}
      <RecoveryDaySection />

      {/* 9. Family Lineage, Compliments & Sweet Request */}
      <FamilySection />

      {/* 10. Gifts / Wishing Well Frame */}
      <GiftsSection />

      {/* 10. RSVP Envelope & Form */}
      <RsvpSection />

      {/* 11. Footer Chateau */}
      <FooterSection
        name1={WEDDING_CONFIG.couple_name_1}
        name2={WEDDING_CONFIG.couple_name_2}
        date={WEDDING_CONFIG.wedding_date}
      />
    </main>
  );
}
