"use client";

import { motion } from "framer-motion";
import Section from "@/components/ui/Section";
import SectionHeader from "@/components/ui/SectionHeader";
import { BadgeCheck, Users, Bot, Trophy, Clock, Target } from "lucide-react";

const features = [
  {
    icon: Users,
    title: "1:1 Mentorship",
    description: "Get personalized guidance from industry professionals. Real experts bringing real-world experience.",
    highlight: "Personal Coach",
  },
  {
    icon: Bot,
    title: "AI-Powered Learning",
    description: "Our adaptive AI tailors the curriculum to your pace and learning style.",
    highlight: "Smart Learning",
  },
  {
    icon: Target,
    title: "Career Support",
    description: "Tools and guidance to help you navigate your job search and prepare for interviews.",
    highlight: "Job Search Help",
  },
  {
    icon: Clock,
    title: "Flexible Learning",
    description: "Study at your own pace with lifetime access to all materials. Work while you learn.",
    highlight: "Your Schedule",
  },
  {
    icon: Trophy,
    title: "Project-Based",
    description: "Build real projects that demonstrate your skills to potential employers.",
    highlight: "Hands-On",
  },
  {
    icon: BadgeCheck,
    title: "Comprehensive Curriculum",
    description: "Our programs cover everything you need to start a career in tech.",
    highlight: "Complete",
  },
];

export default function WhatMakesUsDifferent() {
  return (
    <Section background="gradient">
      <SectionHeader
        title="What Makes Us Different"
        subtitle="Our approach to education focuses on practical skills and personalized learning."
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
