import Hero from "@/components/sections/Hero";
import SocialProof from "@/components/sections/SocialProof";
import HowItWorks from "@/components/sections/HowItWorks";
import Programs from "@/components/sections/Programs";
import WhatMakesUsDifferent from "@/components/sections/WhatMakesUsDifferent";
import Testimonials from "@/components/sections/Testimonials";
import FinalCTA from "@/components/sections/FinalCTA";
import Footer from "@/components/sections/Footer";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <SocialProof />
      <HowItWorks />
      <Programs />
      <WhatMakesUsDifferent />
      <Testimonials />
      <FinalCTA />
      <Footer />
    </main>
  );
}
