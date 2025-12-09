"use client";

import { motion } from "framer-motion";
import Section from "@/components/ui/Section";
import SectionHeader from "@/components/ui/SectionHeader";
import { BookOpen, Users, Briefcase, TrendingUp } from "lucide-react";

const steps = [
  {
    icon: BookOpen,
    title: "Choose Your Path",
    description: "Select from our programs in Frontend, Backend, AI, or Cybersecurity. Each path is designed for practical learning.",
    color: "bg-brand",
  },
  {
    icon: Users,
    title: "Learn with Mentors",
    description: "Get 1:1 guidance from industry professionals. Our mentors bring real-world experience to your learning.",
    color: "bg-black",
  },
  {
    icon: Briefcase,
    title: "Build Your Portfolio",
    description: "Work on real projects. Build a portfolio that showcases your abilities.",
    color: "bg-brand",
  },
  {
    icon: TrendingUp,
    title: "Start Your Career",
    description: "Our career services team helps you prepare for interviews and connect with companies.",
    color: "bg-black",
  },
];

export default function HowItWorks() {
  return (
    <Section background="gray">
      <SectionHeader
        title="How Simplified.org Works"
        subtitle="A structured approach to learning tech skills."
      />
      
      <div className="relative">
        {/* Connecting line (desktop) */}
        <div className="hidden md:block absolute top-24 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-gray-300 to-transparent" />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative"
            >
              {/* Step number badge */}
              <div className="flex justify-center mb-6">
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className={`w-16 h-16 rounded-2xl ${step.color} flex items-center justify-center shadow-lg relative z-10`}
                >
                  <step.icon className="w-8 h-8 text-white" />
                </motion.div>
              </div>
              
              {/* Content */}
              <div className="text-center">
                <div className="inline-block bg-white rounded-full px-4 py-1 text-sm font-bold text-gray-400 mb-4">
                  Step {index + 1}
                </div>
                <h3 className="text-2xl font-bold mb-4">{step.title}</h3>
                <p className="text-gray-600 leading-relaxed">{step.description}</p>
              </div>
              
              {/* Arrow connector (mobile) */}
              {index < steps.length - 1 && (
                <div className="md:hidden flex justify-center my-6">
                  <svg
                    className="w-6 h-6 text-gray-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 14l-7 7m0 0l-7-7m7 7V3"
                    />
                  </svg>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
      
      {/* Bottom CTA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="text-center mt-16"
      >
        <p className="text-lg text-gray-600 mb-6">
          Join 15,000+ students learning with Simplified.org
        </p>
      </motion.div>
    </Section>
  );
}
