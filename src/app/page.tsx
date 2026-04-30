import dynamic from "next/dynamic";
import Hero from "@/components/sections/Hero";
import Navbar from "@/components/Navbar";
import ContainerRevealObserver from "@/components/ui/ContainerRevealObserver";

const HowItWorks = dynamic(() => import("@/components/sections/HowItWorks"));
const StudentOutcomes = dynamic(
  () => import("@/components/sections/StudentOutcomes"),
);
const CareerTracks = dynamic(
  () => import("@/components/sections/CareerTracks"),
);
const GuaranteeSection = dynamic(
  () => import("@/components/sections/GuaranteeSection"),
);
const StoriesCarouselSection = dynamic(
  () => import("@/components/sections/StoriesCarouselSection"),
);
const MentorsSection = dynamic(
  () => import("@/components/sections/MentorsSection"),
);
const RatingsSection = dynamic(
  () => import("@/components/sections/RatingsSection"),
);
const FeaturedInSection = dynamic(
  () => import("@/components/sections/FeaturedInSection"),
);
const FAQSection = dynamic(() => import("@/components/sections/FAQSection"));
const AdviceSection = dynamic(
  () => import("@/components/sections/AdviceSection"),
);
const FinalCTA = dynamic(() => import("@/components/sections/FinalCTA"));
const Footer = dynamic(() => import("@/components/sections/Footer"));

export default function Home() {
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
