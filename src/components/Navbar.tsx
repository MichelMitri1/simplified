"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, Menu, X } from "lucide-react";
import { Button, buttonVariants } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

export default function Navbar({ sticky = true }: { sticky?: boolean }) {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    if (typeof document === "undefined") return;
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const scrollToSectionAndClose = (id: string) => {
    scrollToSection(id);
    setIsMobileMenuOpen(false);
  };

  const navLink = (href: string) =>
    cn(
      buttonVariants({ variant: "ghost" }),
      "h-10 rounded-full px-4 text-[16px] font-semibold text-[#111] transition-colors duration-150 hover:bg-[#f6f6f6]",
      pathname === href && "text-[#111]",
    );

  return (
    <header className={sticky ? "fixed inset-x-0 top-0 z-50" : "relative"}>
      <div className="mx-auto w-full max-w-[1400px] px-4 pt-2.5 md:px-6">
        <div className="rounded-[10px] border border-[#e7e7e7] bg-white px-4 py-2 shadow-[0_1px_2px_rgba(16,24,40,0.06),0_1px_3px_rgba(16,24,40,0.1)] md:px-5">
          <div className="flex items-center justify-between gap-3">
            <Link href="/" className="flex shrink-0 items-center">
              <Image
                src="/simplifiedLogo.svg"
                alt="simplified"
                width={91}
                height={32}
                priority
              />
            </Link>

            <nav className="hidden items-center gap-1 min-[1000px]:flex">
              <Link href="/" className={navLink("/")}>
                Home
              </Link>
              <Button
                variant="ghost"
                onClick={() => scrollToSection("career-tracks")}
                className="h-10 gap-1.5 rounded-full px-4 text-[16px] font-semibold text-[#111] transition-colors duration-150 hover:bg-[#f6f6f6]"
              >
                Programs
              </Button>
              <Button
                variant="ghost"
                onClick={() => scrollToSection("why-us")}
                className="h-10 rounded-full px-4 text-[16px] font-semibold text-[#111] transition-colors duration-150 hover:bg-[#f6f6f6]"
              >
                Why we&apos;re different
              </Button>
              <Button
                variant="ghost"
                onClick={() => scrollToSection("testimonials")}
                className="h-10 rounded-full px-4 text-[16px] font-semibold text-[#111] transition-colors duration-150 hover:bg-[#f6f6f6]"
              >
                Testimonials
              </Button>
              <Link href="/learn" className={navLink("/learn")}>
                Resources
              </Link>
            </nav>

            <div className="flex items-center gap-2">
              <Button
                variant="default"
                onClick={() => scrollToSectionAndClose("waitlist")}
                className="h-10 rounded-full bg-primary px-5 text-[16px] font-semibold text-white transition hover:brightness-95"
              >
                Book a Call
              </Button>
              <button
                type="button"
                onClick={() => setIsMobileMenuOpen((current) => !current)}
                aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
                aria-expanded={isMobileMenuOpen}
                className="inline-flex h-10 w-10 items-center justify-center text-[#111] transition hover:bg-[#f6f6f6] min-[1000px]:hidden"
              >
                {isMobileMenuOpen ? (
                  <X className="h-5 w-5" />
                ) : (
                  <Menu className="h-5 w-5" />
                )}
              </button>
            </div>
          </div>

          <div
            className={`grid transition-all duration-300 ease-out min-[1000px]:hidden ${
              isMobileMenuOpen
                ? "mt-3 grid-rows-[1fr] opacity-100"
                : "grid-rows-[0fr] opacity-0"
            }`}
          >
            <nav className="overflow-hidden border-t border-[#ededed]">
              <div className="flex flex-col gap-1 pt-3">
                <Link
                  href="/"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="rounded-lg px-3 py-2 text-[16px] font-semibold text-[#111] transition hover:bg-[#f6f6f6]"
                >
                  Home
                </Link>
                <button
                  type="button"
                  onClick={() => scrollToSectionAndClose("career-tracks")}
                  className="flex items-center justify-between rounded-lg px-3 py-2 text-left text-[16px] font-semibold text-[#111] transition hover:bg-[#f6f6f6]"
                >
                  Programs
                  <ChevronDown className="h-3.5 w-3.5" />
                </button>
                <button
                  type="button"
                  onClick={() => scrollToSectionAndClose("why-us")}
                  className="rounded-lg px-3 py-2 text-left text-[16px] font-semibold text-[#111] transition hover:bg-[#f6f6f6]"
                >
                  Why we&apos;re different
                </button>
                <button
                  type="button"
                  onClick={() => scrollToSectionAndClose("testimonials")}
                  className="rounded-lg px-3 py-2 text-left text-[16px] font-semibold text-[#111] transition hover:bg-[#f6f6f6]"
                >
                  Testimonials
                </button>
                {/* <Link
                  href="/learn"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="rounded-lg px-3 py-2 text-[16px] font-semibold text-[#111] transition hover:bg-[#f6f6f6]"
                >
                  Resources
                </Link> */}
              </div>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}
