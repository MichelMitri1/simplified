"use client";

import { motion } from "framer-motion";
import Section from "@/components/ui/Section";
import SectionHeader from "@/components/ui/SectionHeader";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import { Code2, Server, Brain, Shield, ArrowRight } from "lucide-react";

const programs = [
  {
    icon: Code2,
    title: "Frontend Development",
    duration: "6 months",
    description: "Master React, Next.js, TypeScript, and modern UI/UX design. Build web applications users love.",
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "UI/UX"],
    color: "bg-brand",
  },
  {
    icon: Server,
    title: "Backend Engineering",
    duration: "6 months",
    description: "Learn Node.js, databases, APIs, and cloud infrastructure. Build scalable systems.",
    skills: ["Node.js", "PostgreSQL", "AWS", "Docker", "REST APIs"],
    color: "bg-black",
  },
  {
    icon: Brain,
    title: "AI & Machine Learning",
    duration: "8 months",
    description: "Dive into Python, ML algorithms, and AI frameworks. Build intelligent systems.",
    skills: ["Python", "TensorFlow", "PyTorch", "NLP", "Computer Vision"],
    color: "bg-brand",
  },
  {
    icon: Shield,
    title: "Cybersecurity",
    duration: "7 months",
    description: "Learn ethical hacking, network security, and threat analysis. Protect organizations.",
    skills: ["Penetration Testing", "Network Security", "Security Auditing", "SIEM", "Cloud Security"],
    color: "bg-black",
  },
];

export default function Programs() {
  return (
    <Section background="white">
      <SectionHeader
        title="Programs to Build Your Skills"
        subtitle="Choose your path in tech. All programs include 1:1 mentorship and lifetime access."
      />
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {programs.map((program, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
          >
            <Card className="p-8 h-full flex flex-col">
              {/* Icon */}
              <div className="mb-6">
                <div className={`w-16 h-16 rounded-2xl ${program.color} flex items-center justify-center shadow-lg`}>
                  <program.icon className="w-8 h-8 text-white" />
                </div>
              </div>
              
              {/* Header */}
              <div className="mb-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-2xl font-bold">{program.title}</h3>
                  <span className="text-sm font-semibold text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                    {program.duration}
                  </span>
                </div>
                <p className="text-gray-600 leading-relaxed">{program.description}</p>
              </div>
              
              {/* Skills */}
              <div className="mb-6">
                <h4 className="text-sm font-semibold text-gray-700 mb-3">You&apos;ll Learn:</h4>
                <div className="flex flex-wrap gap-2">
                  {program.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="text-xs font-medium bg-gray-100 text-gray-700 px-3 py-1 rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              
              {/* CTA removed per request */}
            </Card>
          </motion.div>
        ))}
      </div>
      
      {/* Bottom note */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="mt-12 text-center"
      >
        <p className="text-gray-600">
          All programs include 1:1 mentorship and career support.
        </p>
      </motion.div>
    </Section>
  );
}
