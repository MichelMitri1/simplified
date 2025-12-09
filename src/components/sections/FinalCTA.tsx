"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Loader } from "lucide-react";
import { useEffect, useState } from "react";

const benefits = [
  "1:1 mentorship from industry experts",
  "AI-powered learning platform",
  "Lifetime access to all materials",
  "Career support and guidance",
  "Flexible, self-paced learning",
  "Start learning anytime",
];

const generateUniqueId = () => {
  return `user_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
};

export default function FinalCTA() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [userId, setUserId] = useState<string | null>(null);

  // Check if user already submitted on mount
  useEffect(() => {
    if (typeof window !== "undefined") {
      const savedUserId = localStorage.getItem("waitlistUserId");
      const hasSubmitted = localStorage.getItem("waitlistHasSubmitted");

      if (savedUserId && hasSubmitted === "true") {
        setUserId(savedUserId);
        setIsSubmitted(true);
      } else if (!savedUserId) {
        // Generate new unique ID for this user/device
        const newId = generateUniqueId();
        setUserId(newId);
        localStorage.setItem("waitlistUserId", newId);
        localStorage.setItem("waitlistHasSubmitted", "false");
      }
    }
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.message) {
      alert("Please fill in all fields");
      return;
    }

    setIsLoading(true);
    
    // Simulate 2 second loading
    await new Promise((resolve) => setTimeout(resolve, 2000));
    
    // Save to localStorage
    if (typeof window !== "undefined" && userId) {
      localStorage.setItem("waitlistHasSubmitted", "true");
      localStorage.setItem(`waitlistData_${userId}`, JSON.stringify(formData));
    }
    
    setIsLoading(false);
    setIsSubmitted(true);
  };
  return (
    <section id="waitlist" className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-brand" />
      
      {/* Animated geometric shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            rotate: [0, 360],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute -top-40 -right-40 w-96 h-96 bg-white/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            rotate: [360, 0],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute -bottom-40 -left-40 w-96 h-96 bg-white/10 rounded-full blur-3xl"
        />
      </div>
      
      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-5xl relative z-10">
        <div className="text-center text-white">
          {/* Main CTA Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-balance">
              Start Learning Today
            </h2>
            <p className="text-xl md:text-2xl mb-12 opacity-90 text-balance max-w-3xl mx-auto">
              Join thousands of students building careers in technology with Simplified.org.
            </p>
          </motion.div>
          
          {/* Benefits Grid */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12 max-w-2xl mx-auto"
          >
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center gap-3 text-left">
                <CheckCircle2 className="w-6 h-6 flex-shrink-0" />
                <span className="text-lg">{benefit}</span>
              </div>
            ))}
          </motion.div>
          
          {/* CTA Form or Success Message */}
          {!isSubmitted ? (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="max-w-2xl mx-auto bg-white rounded-2xl p-8 md:p-12 shadow-2xl"
            >
              <h3 className="text-3xl font-bold text-black mb-8">Join the Waitlist</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name and Email Row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-left text-sm font-semibold text-black mb-3">Full Name *</label>
                    <input
                      type="text"
                      name="name"
                      placeholder="Your full name"
                      value={formData.name}
                      onChange={handleChange}
                      disabled={isLoading}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg text-black placeholder-gray-400 font-medium focus:outline-none focus:border-brand transition-colors disabled:opacity-50 bg-white"
                    />
                  </div>
                  <div>
                    <label className="block text-left text-sm font-semibold text-black mb-3">Email Address *</label>
                    <input
                      type="email"
                      name="email"
                      placeholder="your@email.com"
                      value={formData.email}
                      onChange={handleChange}
                      disabled={isLoading}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg text-black placeholder-gray-400 font-medium focus:outline-none focus:border-brand transition-colors disabled:opacity-50 bg-white"
                    />
                  </div>
                </div>

                {/* Message Textarea */}
                <div>
                  <label className="block text-left text-sm font-semibold text-black mb-3">Message</label>
                  <textarea
                    name="message"
                    placeholder="Write something down"
                    value={formData.message}
                    onChange={handleChange}
                    disabled={isLoading}
                    rows={5}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg text-black placeholder-gray-400 font-medium focus:outline-none focus:border-brand transition-colors disabled:opacity-50 bg-white resize-none"
                  />
                </div>

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  disabled={isLoading}
                  whileHover={{ scale: isLoading ? 1 : 1.01 }}
                  whileTap={{ scale: isLoading ? 1 : 0.98 }}
                  className="w-full bg-brand text-white font-bold py-4 rounded-lg text-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-75 cursor-pointer"
                >
                  {isLoading ? (
                    <>
                      <Loader className="w-5 h-5 animate-spin" />
                      Joining Waitlist...
                    </>
                  ) : (
                    "Join Waitlist"
                  )}
                </motion.button>
              </form>
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="max-w-2xl mx-auto bg-white rounded-2xl p-8 md:p-12 text-center shadow-2xl"
            >
              <div className="mb-4 flex justify-center">
                <CheckCircle2 className="w-16 h-16 text-brand" />
              </div>
              <h3 className="text-3xl font-bold text-black mb-3">You&apos;re on the Waitlist!</h3>
              <p className="text-lg text-gray-600">
                Thanks for joining! We&apos;ll be in touch soon with more details about Simplified.org.
              </p>
            </motion.div>
          )}
          
          {/* Trust indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-12 text-sm opacity-75"
          >
            <p>✓ No credit card required • ✓ Start anytime • ✓ Flexible learning</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
