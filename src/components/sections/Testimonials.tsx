"use client";

import { motion } from "framer-motion";
import Section from "@/components/ui/Section";
import SectionHeader from "@/components/ui/SectionHeader";
import Card from "@/components/ui/Card";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Chen",
    role: "Frontend Developer at Google",
    image: "SC", // Placeholder - replace with actual image
    quote: "Simplified.org helped me transition into tech. I went from retail to frontend development at Google in 8 months. The mentorship was excellent.",
    rating: 5,
    program: "Frontend Development",
  },
  {
    name: "Marcus Johnson",
    role: "Backend Engineer at Meta",
    image: "MJ", // Placeholder - replace with actual image
    quote: "The structured learning path gave me confidence. Within months of graduating, I had interviews at several companies. Now I'm building systems at Meta.",
    rating: 5,
    program: "Backend Engineering",
  },
  {
    name: "Priya Patel",
    role: "ML Engineer at Amazon",
    image: "PP", // Placeholder - replace with actual image
    quote: "The AI & ML program is comprehensive. My mentor brought expertise from OpenAI and the projects I built helped me get interviews at leading companies.",
    rating: 5,
    program: "AI & Machine Learning",
  },
  {
    name: "Alex Rivera",
    role: "Security Engineer at Microsoft",
    image: "AR", // Placeholder - replace with actual image
    quote: "I was skeptical about bootcamps, but Simplified.org delivered. The curriculum is practical, the mentors are knowledgeable, and the support is solid.",
    rating: 5,
    program: "Cybersecurity",
  },
];

export default function Testimonials() {
  return (
    <Section id="testimonials" background="white">
      <SectionHeader
        title="Success Stories"
        subtitle="Hear from students who built their careers in tech."
      />
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
          >
            <Card className="p-8 h-full relative">
              {/* Quote icon */}
              <div className="absolute top-6 right-6 opacity-10">
                <Quote className="w-16 h-16 text-brand" />
              </div>
              
              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              
              {/* Quote */}
              <p className="text-gray-700 text-lg leading-relaxed mb-6 relative z-10">
                &quot;{testimonial.quote}&quot;
              </p>
              
              {/* Author */}
              <div className="flex items-center gap-4 pt-6 border-t border-gray-100">
                {/* Avatar placeholder */}
                <div className="w-14 h-14 rounded-full bg-brand flex items-center justify-center text-white font-bold text-lg">
                  {testimonial.image}
                </div>
                
                <div className="flex-1">
                  <div className="font-bold text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-gray-600">{testimonial.role}</div>
                  <div className="text-xs text-gray-500 mt-1">{testimonial.program}</div>
                </div>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
      
      {/* More student stories CTA removed per request */}
    </Section>
  );
}
