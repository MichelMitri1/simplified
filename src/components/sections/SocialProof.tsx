"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Section from "@/components/ui/Section";

// Company logos from public/learn/icons
const companies = [
  { name: "Google", logo: "/learn/icons/google.svg", url: "https://www.google.com" },
  { name: "Microsoft", logo: "/learn/icons/microsoft.svg", url: "https://www.microsoft.com" },
  { name: "Amazon", logo: "/learn/icons/amazon.svg", url: "https://www.amazon.com" },
  { name: "Apple", logo: "/learn/icons/apple.svg", url: "https://www.apple.com" },
  { name: "Netflix", logo: "/learn/icons/netflix.svg", url: "https://www.netflix.com" },
  { name: "Airbnb", logo: "/learn/icons/airbnb.svg", url: "https://www.airbnb.com" },
  { name: "Stripe", logo: "/learn/icons/stripe.svg", url: "https://www.stripe.com" },
  { name: "Shopify", logo: "/learn/icons/shopify.svg", url: "https://www.shopify.com" }
];

export default function SocialProof() {
  return (
    <Section id="social-proof" background="white" className="py-16">
      <div className="text-center mb-12">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-8"
        >
          Our graduates work at leading tech companies worldwide
        </motion.p>
      </div>
      
      {/* Company logos grid */}
      <div className="relative overflow-hidden">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 items-center justify-items-center mb-16"
        >
          {companies.map((company, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="flex items-center justify-center"
            >
              <a 
                href={company.url}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-75 transition-opacity duration-300 flex items-center gap-2"
              >
                <Image 
                  src={company.logo} 
                  alt={company.name}
                  width={company.name === "Apple" ? 40 : 120}
                  height={company.name === "Apple" ? 40 : 60}
                  className="object-contain"
                />
                {company.name === "Apple" && <h1 className="text-2xl font-bold text-gray-800">Apple</h1>}
              </a>
            </motion.div>
          ))}
        </motion.div>
      </div>
      
      {/* Stats Bar */}
      {/* <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mt-20 bg-brand text-white rounded-3xl p-8 md:p-12 shadow-2xl"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div>
            <div className="text-5xl md:text-6xl font-bold mb-3">15,000+</div>
            <div className="text-lg md:text-xl opacity-90">
              students learning with us
            </div>
          </div>
          <div>
            <div className="text-5xl md:text-6xl font-bold mb-3">500+</div>
            <div className="text-lg md:text-xl opacity-90">
              company partnerships
            </div>
          </div>
          <div>
            <div className="text-5xl md:text-6xl font-bold mb-3">50+</div>
            <div className="text-lg md:text-xl opacity-90">
              expert instructors
            </div>
          </div>
        </div>
      </motion.div> */}
    </Section>
  );
}
