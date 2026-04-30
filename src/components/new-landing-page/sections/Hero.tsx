"use client";

import Image from "next/image";
import { useEffect } from "react";
import { ArrowRight } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";
import AutoScroll from "embla-carousel-auto-scroll";
import ScribbleUnderline from "@/components/new-landing-page/ui/ScribbleUnderline";
import michaelIgnat from "@/assets/michaelIgnat.png";
import manish from "@/assets/testimonialThumbnails/manish.png";
import donell from "@/assets/testimonialThumbnails/donell.png";
import ryan from "@/assets/testimonialThumbnails/ryan.png";
import ethanThumb from "@/assets/testimonialThumbnails/ethan.png";
import mohammad from "@/assets/testimonialThumbnails/mohammad.png";
import softwareEngineer from "@/assets/softwareEngineer.svg";
import trustpilotStar from "@/assets/trustpilotStar.svg";
import courseReport from "@/assets/courseReport.svg";
import careerKarma from "@/assets/careerKarma.svg";
import switchup from "@/assets/switchup.svg";

export default function Hero() {
  const [salaryEmblaRef, salaryEmblaApi] = useEmblaCarousel(
    {
      loop: true,
      align: "start",
      dragFree: true,
    },
    [
      AutoScroll({
        speed: 1,
        startDelay: 0,
        direction: "forward",
        stopOnInteraction: false,
        playOnInit: false,
      }),
    ],
  );

  useEffect(() => {
    const autoScroll = salaryEmblaApi?.plugins().autoScroll;
    if (!autoScroll) return;

    const playTimer = window.setTimeout(() => {
      autoScroll.play();
    }, 250);

    return () => {
      window.clearTimeout(playTimer);
      autoScroll.stop();
    };
  }, [salaryEmblaApi]);

  const scrollToSection = (id: string) => {
    if (typeof document === "undefined") return;
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const salaryCards = [
    { salary: "$120,000/year", name: "Michael Ignat", image: michaelIgnat },
    { salary: "$160,000/year", name: "Manish Manwani", image: manish },
    { salary: "$120,000/year", name: "Donell Torres", image: donell },
    { salary: "$200,000/year", name: "Ryan Rahman", image: ryan },
    { salary: "$70,000/year", name: "Ethan Salonga", image: ethanThumb },
    { salary: "$65,000/year", name: "Mohammad Totonchy", image: mohammad },
  ];

  const companyLogos = [
    {
      src: "/learn/icons/bankOfAmerica.svg",
      alt: "Bank of America",
      width: 175,
      height: 24,
    },
    { src: "/learn/icons/amazon.svg", alt: "Amazon", width: 104, height: 30 },
    { src: "/learn/icons/canva.svg", alt: "Canva", width: 98, height: 32 },
    {
      src: "/learn/icons/capitalOne.svg",
      alt: "Capital One",
      width: 132,
      height: 30,
    },
    {
      src: "/learn/icons/coinbase.svg",
      alt: "Coinbase",
      width: 137,
      height: 30,
    },
    { src: "/learn/icons/tiktok.svg", alt: "TikTok", width: 96, height: 28 },
  ];

  return (
    <section
      data-no-scroll-reveal
      className="relative min-h-screen overflow-hidden border-b border-[#e8e8e8] bg-[#F6F5F3] pb-16 pt-8 md:pb-10 md:pt-10"
    >
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="mobile-ending-animation md:hidden">
          <div className="mobile-ending-blob mobile-ending-blob-purple" />
          <div className="mobile-ending-blob mobile-ending-blob-peach" />
        </div>
        <div className="mentors-ending-blob mentors-ending-blob-purple !bottom-auto !left-auto !right-[-455px] !top-[-260px] hidden md:block" />
        <div className="mentors-ending-blob mentors-ending-blob-peach !bottom-auto !left-auto !right-[-300px] !top-[-220px] hidden md:block" />
      </div>
      <div className="container mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <div className="flex min-h-[62vh] items-center justify-center pt-12 md:pt-30">
          <div className="relative z-10 mx-auto max-w-[760px] text-center">
            <h1 className="text-balance text-[40px] font-medium leading-[1.2] tracking-[-0.04em] text-[#111] sm:text-[64px] sm:font-semibold sm:leading-[1.06] sm:tracking-[-0.04em] sm:text-[#131419]">
              Zero experience today.{" "}
              <span className="relative inline-block">
                Remote career tomorrow.
                <ScribbleUnderline className="pointer-events-none absolute -bottom-3 -right-55 hidden w-[100%] min-[769px]:block" />
              </span>
            </h1>

            <p className="mx-auto mt-6 max-w-[640px] text-[20px] leading-[1.5] text-[#111]/70 sm:mt-8 sm:text-[24px] sm:leading-[1.45] sm:text-[#5f6064]">
              We help career switchers land fulfilling, high-paying remote roles
              in months, not years.
            </p>

            <div className="mt-6 flex w-full flex-col gap-[10px] sm:mt-10 sm:w-auto sm:flex-row sm:flex-wrap sm:items-center sm:justify-center sm:gap-3">
              <button
                type="button"
                onClick={() => scrollToSection("career-tracks")}
                className="inline-flex w-full items-center justify-center gap-3 rounded-full bg-primary px-4 py-3 text-[18px] font-semibold text-white transition hover:brightness-95 sm:w-auto sm:text-[18px]"
              >
                Find your program
                <span className="inline-flex h-[26px] w-[26px] items-center justify-center rounded-full bg-[linear-gradient(90deg,_#E95E32_3.12%,_#BD4F2C_70.19%)]">
                  <ArrowRight className="h-3.5 w-3.5" />
                </span>
              </button>
              <button
                type="button"
                onClick={() => scrollToSection("waitlist")}
                className="w-full rounded-full bg-white px-4 py-3 text-[18px] font-semibold text-[#1b1d22] transition hover:bg-[#f3f3f3] sm:w-auto"
              >
                Book a call
              </button>
            </div>

            <div className="mx-auto mt-10 w-full rounded-[10px] bg-[#EFEEEC] px-3 py-[10px] text-[16px] font-medium sm:w-fit sm:rounded-xl sm:px-5 sm:py-3">
              <div className="flex items-center justify-center gap-2 sm:whitespace-nowrap">
                <span className="font-semibold text-black">
                  1,288+{" "}
                  <span className="font-normal text-[rgba(17,17,17,0.70)]">
                    happy students
                  </span>
                </span>
                <span
                  className="h-4 w-px bg-[#111] opacity-24"
                  aria-hidden="true"
                />
                <span className="font-semibold text-[#23252d]">4.7/5</span>
                <span className="inline-flex items-center gap-1 text-[#4a4d54]">
                  <Image alt="trustpilot star" src={trustpilotStar} />
                  <Image alt="trustpilot star" src={courseReport} />
                  <Image alt="trustpilot star" src={careerKarma} />
                  <Image alt="trustpilot star" src={switchup} />
                </span>
                <span
                  className="hidden h-4 w-px bg-[#111] opacity-24 sm:inline-block"
                  aria-hidden="true"
                />
                <span className="hidden font-semibold text-[#23252d] sm:inline">
                  5+ years{" "}
                  <span className="font-normal text-[rgba(17,17,17,0.70)]">
                    of proven results
                  </span>
                </span>
              </div>
              <hr className="my-2 border-[#111]/10 sm:hidden" />
              <div className="flex items-center justify-center sm:hidden">
                <span className="font-semibold text-[#23252d]">
                  5+ years{" "}
                  <span className="font-normal text-[rgba(17,17,17,0.70)]">
                    of proven results
                  </span>
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="relative left-1/2 mt-8 w-screen -translate-x-1/2 md:mt-12">
          <div className="overflow-hidden" ref={salaryEmblaRef}>
            <div className="-ml-3 flex">
              {[...salaryCards, ...salaryCards].map((card, index) => (
                <div
                  key={`salary-${index}`}
                  className="min-w-0 shrink-0 w-full max-w-[380px] pl-3"
                >
                  <div className="rounded-xl bg-white px-5 py-4">
                    <div className="flex items-center gap-3">
                      <Image
                        src={card.image}
                        alt={card.name}
                        className="h-12 w-12 rounded-full object-cover"
                      />
                      <div>
                        <p className="text-[16px] font-semibold leading-tight text-[#1f2127]">
                          {card.salary}
                        </p>
                        <p className="text-[14px] text-[#666a72]">
                          {card.name}
                        </p>
                      </div>
                    </div>
                    <p className="mt-4 text-[#4f535a] sm:text-[16px]">
                      Graduate from{" "}
                      <Image
                        alt=""
                        src={softwareEngineer}
                        width={20}
                        height={20}
                        className="mx-1 inline-block align-[-3px]"
                      />
                      <span className="text-[#1f2127]">
                        Software Engineering
                      </span>
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-10 text-center sm:mt-14">
          <p className="text-[16px] text-[#60636a] sm:text-[20px]">
            Graduates landing roles at top companies
          </p>
          <div className="-mx-4 mt-5 overflow-x-auto px-4 [-ms-overflow-style:none] [scrollbar-width:none] sm:mx-auto sm:max-w-[1100px] sm:overflow-visible sm:px-0 [&::-webkit-scrollbar]:hidden">
            <div className="flex w-max items-center gap-8 sm:w-full sm:flex-wrap sm:justify-center sm:gap-x-6 sm:gap-y-6 lg:flex-nowrap">
              {companyLogos.map((logo) => (
                <div
                  key={logo.alt}
                  className="flex h-10 shrink-0 items-center justify-center"
                  style={{ width: logo.width }}
                >
                  <Image
                    src={logo.src}
                    alt={logo.alt}
                    width={logo.width}
                    height={logo.height}
                    unoptimized
                    className="block object-contain"
                    style={{
                      width: logo.width,
                      height: "auto",
                      maxHeight: logo.height,
                    }}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
