"use client";

import { motion } from "framer-motion";
import Section from "@/components/ui/Section";
import SectionHeader from "@/components/ui/SectionHeader";
import { TrendingUp } from "lucide-react";

const transformations = [
  {
    name: "David Kim",
    initials: "DK",
    before: {
      title: "Barista",
    },
    after: {
      title: "Software Engineer at Stripe",
    },
    timeframe: "7 months",
  },
  {
    name: "Emily Santos",
    initials: "ES",
    before: {
      title: "Teacher",
    },
    after: {
      title: "Frontend Dev at Airbnb",
    },
    timeframe: "6 months",
  },
  {
    name: "James Wilson",
    initials: "JW",
    before: {
      title: "Warehouse Worker",
    },
    after: {
      title: "Backend Engineer at Netflix",
    },
    timeframe: "8 months",
  },
  {
    name: "Lisa Zhang",
    initials: "LZ",
    before: {
      title: "Retail Manager",
    },
    after: {
      title: "ML Engineer at Tesla",
    },
    timeframe: "9 months",
  },
  {
    name: "Carlos Martinez",
    initials: "CM",
    before: {
      title: "Sales Associate",
    },
    after: {
      title: "Security Engineer at Apple",
    },
    timeframe: "7 months",
  },
  {
    name: "Rachel Foster",
    initials: "RF",
    before: {
      title: "Administrative Assistant",
    },
    after: {
      title: "Full Stack Dev at Uber",
    },
    timeframe: "6 months",
  },
];

export default function StudentTransformations() {
  return (
    <Section background="gray">
      <SectionHeader
        title="Student Career Changes"
        subtitle="Students from different backgrounds building careers in tech."
      />
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {transformations.map((transformation, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-2xl transition-shadow duration-300"
          >
            {/* Header */}
            <div className="bg-brand p-6 text-white relative">
              {/* Avatar */}
              <div className="w-20 h-20 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-2xl font-bold mb-4">
                {transformation.initials}
              </div>
              
              <div className="font-bold text-xl mb-1">{transformation.name}</div>
              <div className="text-sm opacity-90">{transformation.timeframe} program</div>
            </div>
            
            {/* Before/After Content */}
            <div className="p-6">
              {/* Before */}
              <div className="mb-6">
                <div className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">
                  Before
                </div>
                <div className="text-gray-700 font-medium">
                  {transformation.before.title}
                </div>
              </div>
              
              {/* Arrow */}
              <div className="flex items-center justify-center my-4">
                <TrendingUp className="w-6 h-6 text-brand" />
              </div>
              
              {/* After */}
              <div>
                <div className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">
                  After
                </div>
                <div className="text-gray-900 font-semibold">
                  {transformation.after.title}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
