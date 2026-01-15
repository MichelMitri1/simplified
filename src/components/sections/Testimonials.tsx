"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Section from "@/components/ui/Section";
import SectionHeader from "@/components/ui/SectionHeader";
import Card from "@/components/ui/Card";
import { Star, Quote } from "lucide-react";

import DestinImg from "@/assets/destin-strong.jpg";
import ThanyaImg from "@/assets/thanya.jpg";
import KhosroImg from "@/assets/khosro.jpeg";
import ManishImg from "@/assets/manish.png";
import EthanImg from "@/assets/ethan.png";
import MohammadImg from "@/assets/michael.png";
import MichaelImg from "@/assets/michael.png";
import JoseImg from "@/assets/jose.png";
import DarylImg from "@/assets/daryl.png";
import HatemImg from "@/assets/hatem.png";
import VuImg from "@/assets/vuvu.png";

const testimonials = [
  {
    name: "Destin Strong",
    image: DestinImg,
    quote: "I think the greatest thing about this program is the access to the support team 24/7. They are always there ready to help you however you need. They always check up on you to see if you need anything. There are also so many useful resources available on the site that you can pretty much find anything you're looking for. The structure of the program is easy to follow and as a beginner who had no previous coding experience, this is exactly what I needed as a roadmap. There's not really anything negative I can say about Simplified because they have literally been there every step of my journey to help get me where I want to be.",
    rating: 5,
  },
  {
    name: "Thanya",
    image: ThanyaImg,
    quote: "I'm excited to say that I'm in the process of applying for jobs and feel confident with the skills I developed here at Simplified. The mentors are amazing in being informative and providing support in difficult times. Whenever I felt stuck, I would reach out to the mentors, and someone was always there when I needed them, and it's nice learning from someone experienced! It's been quite a journey for me, but I don't regret a single moment because I learned so much about myself and what I'm capable of creating. The skills I learned with Simplified are forever, and I've gained a great understanding of problem-solving, building, and being creative when building these websites. I recommend Simplified for those who are dedicated to learning, willing to put in the work, and don't mind adapting to change.",
    rating: 5,
  },
  {
    name: "Khosro Shariatzadeh",
    image: KhosroImg,
    quote: "I can tell Simplified Bootcamp is one of the best experiences l've had in learning online. I have no experience or knowledge in coding or even computer science, but the way they explain all the topics in coding from the beginning makes it so simple to understand and all the projects that you are going to do along the course help you be more confident in coding. Besides all of those benefits, you'll have 24/7 access to help from professional mentors from reviewing your codes, and projects to help you find the solutions if you get stuck in any step. They support you from the beginning to practice interviews, building a resume and applying for a job.",
    rating: 5,
  },
  {
    name: "Mat Grahame",
    image: null,
    quote: "Simplified has been a great tool to learn how to do frontend development. The lessons they provide are direct and teach you the best way to learn that is also easy to understand. They also do 1 on 1 and a weekly Q&A to help you even further. Could not recommend it enough",
    rating: 5,
  },
  {
    name: "Manish Manwani",
    image: ManishImg,
    quote: "Simplified completely changed my life. I landed a top tech internship after a month of Simplified",
    rating: 5,
  },
  {
    name: "Ethan Salonga",
    image: EthanImg,
    quote: "Even if you only have one or two hours a day to do Simplified, you will succeed, just like I did.",
    rating: 5,
  },
  {
    name: "Mohammad Totonchy",
    image: MohammadImg,
    quote: "The content is well structured and mapped compared to all the courses I have done.",
    rating: 5,
  },
  {
    name: "Michael Ignat",
    image: MichaelImg,
    quote: "I got multiple interviews within a few days of applying. David really just focuses on the things that matter.",
    rating: 5,
  },
  {
    name: "Jose Hernandez",
    image: JoseImg,
    quote: "I would also love for you guys to end up successful same as I did.",
    rating: 5,
  },
  {
    name: "Daryl Deogracias",
    image: DarylImg,
    quote: "The frontend skills and best practises I learned at Simplified, really made me shine.",
    rating: 5,
  },
  {
    name: "Hatem Soliman",
    image: HatemImg,
    quote: "Within 2 weeks I was able to get my first freelance project with a client.",
    rating: 5,
  },
  {
    name: "Vu Vu",
    image: VuImg,
    quote: "The course is very structured and easy to follow along, which made the experience learning much faster.",
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <Section id="testimonials" background="white">
      <SectionHeader
        title="Success Stories"
        subtitle="Hear from real students who built careers in tech through our programs. These testimonials show the impact of structured learning, mentorship, and hands-on projects. Each graduate shares their journey and how they landed roles at leading companies."
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
                {testimonial.image ? (
                  <Image
                    src={testimonial.image}
                    alt={`${testimonial.name} photo`}
                    width={56}
                    height={56}
                    className="w-14 h-14 rounded-full object-cover border border-gray-200"
                  />
                ) : (
                  <div className="w-14 h-14 rounded-full bg-brand flex items-center justify-center text-white font-bold text-lg">
                    {testimonial.name
                      .split(" ")
                      .map((n) => n[0])
                      .slice(0, 2)
                      .join("")
                      .toUpperCase()}
                  </div>
                )}

                <div className="flex-1">
                  <div className="font-bold text-gray-900">{testimonial.name}</div>
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
