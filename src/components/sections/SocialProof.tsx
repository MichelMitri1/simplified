"use client";

import { motion } from "framer-motion";
import Section from "@/components/ui/Section";

// Company logos (using placeholder text - in production, replace with actual logo images)
const companies = [
  { name: "Google", url: "https://www.google.com" },
  { name: "Meta", url: "https://www.meta.com" },
  { name: "Amazon", url: "https://www.amazon.com" },
  { name: "Microsoft", url: "https://www.microsoft.com" },
  { name: "Apple", url: "https://www.apple.com" },
  { name: "Netflix", url: "https://www.netflix.com" },
  { name: "Uber", url: "https://www.uber.com" },
  { name: "Airbnb", url: "https://www.airbnb.com" },
  { name: "Stripe", url: "https://www.stripe.com" },
  { name: "Shopify", url: "https://www.shopify.com" },
  { name: "Tesla", url: "https://www.tesla.com" },
  { name: "Adobe", url: "https://www.adobe.com" },
  { name: "Salesforce", url: "https://www.salesforce.com" },
  { name: "Oracle", url: "https://www.oracle.com" },
  { name: "IBM", url: "https://www.ibm.com" }
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
          className="grid grid-cols-3 md:grid-cols-5 gap-8 md:gap-12 items-center justify-items-center mb-16"
        >
          {companies.slice(0, 10).map((company, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="flex items-center justify-center"
            >
              {/* Placeholder for company logos - replace with actual <Image> components */}
              <a 
                href={company.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl font-bold text-gray-400 hover:text-gray-700 transition-colors duration-300"
              >
                {company.name}
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
