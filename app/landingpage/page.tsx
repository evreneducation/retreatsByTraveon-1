import ContactCTASectionLanding from "@/components/landing/ContactCTASectionLanding";
import FooterLanding from "@/components/landing/FooterLanding";
import HeaderLanding from "@/components/landing/HeaderLanding";
import HeroLanding from "@/components/landing/HeroLanding";
import HolisticHealingSectionLanding from "@/components/landing/HolisticHealingSectionLanding";
import RetreatSectionLanding from "@/components/landing/RetreatSectionLanding";
import WellnessProgramsLanding from "@/components/landing/WellnessProgramsLanding";
export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white">
      <HeaderLanding />
      <HeroLanding />
      <WellnessProgramsLanding />
      <HolisticHealingSectionLanding />
      <RetreatSectionLanding />
      <ContactCTASectionLanding />
      <FooterLanding />
    </div>
  );
}
