"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  onClick?: () => void;
  href?: string;
  className?: string;
}

export default function Button({
  children,
  variant = "primary",
  size = "md",
  onClick,
  href,
  className = "",
}: ButtonProps) {
  const baseStyles = "font-semibold rounded-full transition-all duration-300 inline-flex items-center justify-center cursor-pointer";
  
  const variants = {
    primary: "bg-brand text-white hover:bg-brand-dark shadow-lg hover:shadow-xl",
    secondary: "bg-black text-white hover:bg-gray-900 shadow-lg hover:shadow-xl",
    outline: "border-2 border-black text-black hover:bg-black hover:text-white",
  };
  
  const sizes = {
    sm: "px-6 py-2 text-sm",
    md: "px-8 py-3 text-base",
    lg: "px-10 py-4 text-lg",
  };
  
  const Component = href ? "a" : "button";
  
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="inline-block"
    >
      <Component
        onClick={onClick}
        href={href}
        className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      >
        {children}
      </Component>
    </motion.div>
  );
}
