"use client";

import Button from "@/components/ui/Button";
import simplifiedLogo from "@/assets/simplified-logo.svg";

export default function Navbar() {
  const scrollToSection = (id: string) => {
    if (typeof document === "undefined") return;
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b border-gray-100">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
        <div className="flex items-center justify-between h-16 md:h-20">
          <div className="flex items-center gap-2 md:gap-3">
            <img src={simplifiedLogo.src} alt="Simplified Logo" className="h-8 md:h-10"/>
            <span className="text-sm md:text-xl font-bold text-gray-900">Simplified.org</span>
          </div>
          <Button
            size="sm"
            variant="primary"
            className="rounded-full text-xs md:text-base"
            onClick={() => scrollToSection("waitlist")}
          >
            <span className="hidden sm:inline">Join Waitlist</span>
            <span className="sm:hidden">Join</span>
          </Button>
        </div>
      </div>
    </header>
  );
}
