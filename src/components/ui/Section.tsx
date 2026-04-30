import { ReactNode } from "react";

const backgrounds = {
  white: "",
  gray: "",
  gradient: "",
};

interface SectionProps {
  children: ReactNode;
  className?: string;
  background?: keyof typeof backgrounds;
  id?: string;
}

export default function Section({
  children,
  className = "",
  background = "gray",
  id,
}: SectionProps) {
  return (
    <section
      id={id}
      className={`py-8 md:py-12 lg:py-16 ${backgrounds[background]} ${className}`}
    >
      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
        {children}
      </div>
    </section>
  );
}
