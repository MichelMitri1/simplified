"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Section from "@/components/ui/Section";

// Company logos from public/learn/icons
const companies = [
  { name: "Microsoft", logo: "/learn/icons/microsoft.svg", url: "https://www.microsoft.com" },
  { name: "Amazon", logo: "/learn/icons/amazon.svg", url: "https://www.amazon.com" },
  { name: "Atlassian", logo: "/learn/icons/atlassian.svg", url: "https://www.atlassian.com" },
  { name: "Bank of America", logo: "/learn/icons/bankOfAmerica.svg", url: "https://www.bankofamerica.com" },
  { name: "Canva", logo: "/learn/icons/canva.svg", url: "https://www.canva.com" },
  { name: "Capital One", logo: "/learn/icons/capitalOne.svg", url: "https://www.capitalone.com" },
  { name: "Coinbase", logo: "/learn/icons/coinbase.svg", url: "https://www.coinbase.com" },
  { name: "TikTok", logo: "/learn/icons/tiktok.svg", url: "https://www.tiktok.com" }
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
                  width={company.name === "Bank of America" ? 200 : 120}
                  height={company.name === "Bank of America" ? 120 : 60}
                  className="object-contain"
                />
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
