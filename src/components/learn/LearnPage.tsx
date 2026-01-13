"use client";

import Container from "./ui/Container";
import FeaturedBlock from "./ui/FeaturedBlock";
import Section from "./ui/Section";
import { learnData } from "./learn.data";
import Navbar from "@/components/Navbar";
import Footer from "@/components/sections/Footer";

export default function LearnPage() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navbar />
      <Container>
        {/* Header */}
        <div className="pt-10">
          <h1 className="text-[48px] font-semibold tracking-tight">Learn</h1>
          <p className="mt-2 max-w-[780px] text-sm leading-6 text-slate-500">
            Tutorials, tips, and resources to help you create designs, market
            faster, and ship ideas with less pain.
          </p>
        </div>

        {/* Featured area */}
        <div className="mt-6">
          <FeaturedBlock
            featured={learnData.featured}
            secondary={learnData.secondary}
          />
        </div>

        {/* Sections */}
        <div className="mt-10 space-y-14 pb-14">
          <Section
            title="Engineering & Data"
            seeAllHref="/learn/engineering-and-data"
            layout="grid4"
            items={learnData.engineering.slice(0, 4)}
          />
          <Section
            title="Quality Assurance"
            seeAllHref="/learn/quality-assurance"
            layout="grid3"
            items={learnData.qualityAssurance}
          />
          <Section
            title="UX/UI Design"
            seeAllHref=""
            layout="grid2"
            items={learnData.uxDesign}
            bigCards
          />
          <Section
            title="Career Advice"
            seeAllHref="/learn/career-advice"
            layout="grid3"
            items={learnData.careerAdvice}
          />
          <Section
            title="Career Path & Resources"
            seeAllHref="/learn/career-path"
            layout="grid3"
            items={learnData.careerPath}
          />
        </div>

      </Container>
      <Footer />
    </div>
  );
}
