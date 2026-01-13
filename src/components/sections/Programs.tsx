"use client";

import { motion } from "framer-motion";
import Section from "@/components/ui/Section";
import SectionHeader from "@/components/ui/SectionHeader";
import Card from "@/components/ui/Card";
import { Code2, Server, Brain, Megaphone } from "lucide-react";

const programs = [
  {
    icon: Code2,
    title: "Frontend Development",
    duration: "6 months",
    description: "Master front end development with React, Next.js, TypeScript, and modern UI/UX design. Build responsive, accessible web applications that users love. Cover everything from HTML and CSS basics to advanced React patterns, state management, and deployment. Learn component architecture, performance optimization, and modern build tools used by professional engineers.",
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "UI/UX"],
    color: "bg-brand",
  },
  {
    icon: Server,
    title: "Backend Engineering",
    duration: "6 months",
    description: "Learn server-side development with Node.js, database design, REST and GraphQL APIs, and cloud deployment. Build scalable, secure systems that handle real-world traffic. Cover server architecture, authentication, database optimization, Docker, CI/CD pipelines, and cloud platforms. Gain skills to build and maintain production-grade backend systems.",
    skills: ["Node.js", "PostgreSQL", "AWS", "Docker", "REST APIs"],
    color: "bg-black",
  },
  {
    icon: Brain,
    title: "AI & Machine Learning",
    duration: "8 months",
    description: "Master AI and machine learning with Python, TensorFlow, and PyTorch. Cover generative AI, deep learning, natural language processing, and computer vision. Learn data preprocessing, model training, neural networks, and deployment. Build and deploy intelligent systems that solve real-world problems.",
    skills: ["Python", "TensorFlow", "PyTorch", "NLP", "Computer Vision"],
    color: "bg-brand",
  },
  {
    icon: Megaphone,
    title: "Digital Marketing",
    duration: "4 months",
    description: "Learn the fundamentals of digital marketing including SEO, content marketing, social media strategy, and analytics. Master Google Ads, email marketing, conversion optimization, and marketing automation. Build campaigns that drive traffic, engagement, and sales. Understand data-driven decision making and marketing funnels.",
    skills: ["SEO", "Content Marketing", "Google Ads", "Analytics", "Social Media"],
    color: "bg-blue-600",
  },
];

export default function Programs() {
  return (
    <Section id="programs" background="white">
      <SectionHeader
        title="Programs to Build Your Skills"
        subtitle="Choose your path to work in tech and launch your career. Our coding bootcamps cover full stack web development and AI. All programs include 1:1 mentorship, hands-on projects, career support, and lifetime access. Go from beginner to job-ready, no matter your background."
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
          All our stack web development courses include 1:1 mentorship, career coaching, and career support.
        </p>
      </motion.div>
    </Section>
  );
}
