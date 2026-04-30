"use client";

import { motion } from "framer-motion";
import Section from "@/components/ui/Section";
import SectionHeader from "@/components/ui/SectionHeader";
import { BadgeCheck, Users, Bot, Trophy, Clock, Target } from "lucide-react";

const features = [
  {
    icon: Users,
    title: "1:1 Mentorship",
    description: "Get personalized guidance from industry professionals who serve as your dedicated career coach. Our mentors are real software engineers and senior developers at leading tech companies. They provide code reviews, career advice, and technical guidance as you learn. You'll never feel lost or stuck—you always have an expert to help.",
    highlight: "Personal Coach",
  },
  {
    icon: Bot,
    title: "AI-Powered Learning",
    description: "Our adaptive AI tailors the curriculum to your pace and learning style. The system analyzes your progress and identifies areas where you need more practice. It automatically adjusts difficulty to keep you in the optimal learning zone. Spend more time on challenging concepts and move quickly through what you grasp easily.",
    highlight: "Smart Learning",
  },
  {
    icon: Target,
    title: "Career Support",
    description: "Get expert guidance to navigate your job search and prepare for interviews. We help with resume optimization, LinkedIn enhancement, and portfolio reviews. Practice with mock interviews and get detailed feedback. Access our network of hiring partners and get ongoing support even after graduation.",
    highlight: "Job Search Help",
  },
  {
    icon: Clock,
    title: "Flexible Learning",
    description: "Study at your own pace with lifetime access to all materials. Our flexible model works for busy professionals who can't quit their job. Learn during evenings, weekends, or whenever fits your schedule. No rigid deadlines or time limits. Take the time you need to master each concept.",
    highlight: "Your Schedule",
  },
  {
    icon: Trophy,
    title: "Project-Based",
    description: "Build real projects that demonstrate your skills to employers. Each project mirrors actual work challenges that developers face. You'll build full-featured applications from scratch using industry best practices. These portfolio pieces prove your capabilities during interviews and set you apart from candidates with only theoretical knowledge.",
    highlight: "Hands-On",
  },
  {
    icon: BadgeCheck,
    title: "Comprehensive Curriculum",
    description: "Our programs cover everything you need to start a career in tech. Learn fundamental concepts through advanced frameworks and deployment strategies. No critical knowledge gaps. The curriculum is updated regularly to reflect the latest technologies and tools used by top tech companies.",
    highlight: "Complete",
  },
];

export default function WhatMakesUsDifferent() {
  return (
    <Section id="why-us" background="gradient">
      <SectionHeader
        title="What Makes Us Different"
        subtitle="We focus on practical skills and personalized learning that adapts to you. Unlike traditional programs, we combine comprehensive curriculum, AI-powered technology, human mentorship, and career support. Everything is designed to maximize your learning and career success."
      />
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="relative group"
          >
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 h-full hover:shadow-2xl transition-shadow duration-300">
              {/* Highlight badge */}
              <div className="absolute -top-3 -right-3">
                <div className="bg-brand text-white text-xs font-bold px-4 py-2 rounded-full shadow-lg">
                  {feature.highlight}
                </div>
              </div>
              
              {/* Icon */}
              <div className="mb-6">
                <div className="w-14 h-14 rounded-xl bg-brand/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-7 h-7 text-brand" />
                </div>
              </div>
              
              {/* Content */}
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
