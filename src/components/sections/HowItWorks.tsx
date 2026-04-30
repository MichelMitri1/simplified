"use client";

import { motion } from "framer-motion";
import Section from "@/components/ui/Section";
import SectionHeader from "@/components/ui/SectionHeader";
import { BookOpen, Users, Briefcase, TrendingUp } from "lucide-react";

const steps = [
  {
    icon: BookOpen,
    title: "Choose Your Path",
    description: "Select from one of our bootcamps: Frontend Development, Backend Engineering, AI & Machine Learning or Digital Marketing. Each path is designed for hands-on learning with real-world projects to fit job requirements.",
    color: "bg-brand",
  },
  {
    icon: Users,
    title: "Learn with Mentors",
    description: "Get personalized 1:1 guidance from industry professionals. They'll review your projects, answer your questions, and share practical insights from real-world experience.",
    color: "bg-black",
  },
  {
    icon: Briefcase,
    title: "Build Your Portfolio",
    description: "Work on real-world projects that showcase your skills to potential employers. Build a portfolio with clean code, responsive design, and production-ready applications.",
    color: "bg-brand",
  },
  {
    icon: TrendingUp,
    title: "Start Your Career",
    description: "Get career support to land your first role. We'll help with everything you need from a personalized resume, 1:1 mock interviews, and show you the proven methods to break into the industry.",
    color: "bg-black",
  },
];

export default function HowItWorks() {
  return (
    <Section id="how-it-works" background="gray">
      <SectionHeader
        title="How Simplified.org Works"
        subtitle="A proven approach to transitioning into your dream high-paying career. Our four-step approach helped train thousands of professionals. Each step builds on the previous one, giving you confidence until you ultimately land your dream job."
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
          Join 1k+ students learning with Simplified.org
        </p>
      </motion.div>
    </Section>
  );
}
