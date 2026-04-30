import dynamic from "next/dynamic";
import Hero from "@/components/new-landing-page/sections/Hero";
import Navbar from "@/components/new-landing-page/Navbar";
import ContainerRevealObserver from "@/components/new-landing-page/ui/ContainerRevealObserver";

const HowItWorks = dynamic(
  () => import("@/components/new-landing-page/sections/HowItWorks"),
);
const StudentOutcomes = dynamic(
  () => import("@/components/new-landing-page/sections/StudentOutcomes"),
);
const CareerTracks = dynamic(
  () => import("@/components/new-landing-page/sections/CareerTracks"),
);
const GuaranteeSection = dynamic(
  () => import("@/components/new-landing-page/sections/GuaranteeSection"),
);
const StoriesCarouselSection = dynamic(
  () => import("@/components/new-landing-page/sections/StoriesCarouselSection"),
);
const MentorsSection = dynamic(
  () => import("@/components/new-landing-page/sections/MentorsSection"),
);
const RatingsSection = dynamic(
  () => import("@/components/new-landing-page/sections/RatingsSection"),
);
const FeaturedInSection = dynamic(
  () => import("@/components/new-landing-page/sections/FeaturedInSection"),
);
const FAQSection = dynamic(
  () => import("@/components/new-landing-page/sections/FAQSection"),
);
const AdviceSection = dynamic(
  () => import("@/components/new-landing-page/sections/AdviceSection"),
);
const FinalCTA = dynamic(
  () => import("@/components/new-landing-page/sections/FinalCTA"),
);
const Footer = dynamic(
  () => import("@/components/new-landing-page/sections/Footer"),
);

export default function NewLandingPage() {
  return (
    <main className="min-h-screen">
      <ContainerRevealObserver />
      <Navbar />
      <Hero />
      <HowItWorks />
      <StudentOutcomes />
      <CareerTracks />
      <GuaranteeSection />
      <StoriesCarouselSection />
      <MentorsSection />
      <RatingsSection />
      <FeaturedInSection />
      <FAQSection />
      <AdviceSection />
      <FinalCTA />
      <Footer />
    </main>
  );
}
