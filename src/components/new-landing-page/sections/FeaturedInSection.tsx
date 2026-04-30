"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import forbesLogo from "@/assets/featuredLogos/forbes.svg";
import newYorkWeeklyLogo from "@/assets/featuredLogos/newYorkWeekly.svg";
import techTimesLogo from "@/assets/featuredLogos/techTimes.svg";
import forbesFeature from "@/assets/featuredIn/forbesFeature.png";
import newYorkWeeklyFeature from "@/assets/featuredIn/newYorkWeeklyFeature.png";
import techTimesFeature from "@/assets/featuredIn/techTimesFeature.png";

const featured = [
  {
    logo: forbesLogo,
    logoAlt: "Forbes",
    logoClassName: "h-8",
    href: "https://www.forbes.com.au/brand-voice/uncategorized/david-bragg-founder-of-fes-institute-reveals-tech-hiring-secrets-companies-dont-want-you-to-know/",
    image: forbesFeature,
    title:
      "David Bragg, Founder of FES Institute Reveals Tech Hiring Secrets Companies Don't Want You To Know",
  },
  {
    logo: newYorkWeeklyLogo,
    logoAlt: "New York Weekly",
    logoClassName: "h-30 transform translate-y-[-8px]",
    href: "https://nyweekly.com/tech/david-braggs-journey-revolutionizing-tech-education-with-fes-institute/",
    image: newYorkWeeklyFeature,
    title:
      "David Bragg's Journey: Revolutionizing Tech Education with FES Institute",
  },
  {
    logo: techTimesLogo,
    logoAlt: "Tech Times",
    logoClassName: "h-10",
    href: "https://www.techtimes.com/articles/303186/20240402/no-degree-no-problem-david-braggs-success-story-with-fes-institute.htm",
    image: techTimesFeature,
    title:
      "'No Degree, No Problem': David Bragg's Success Story with FES Institute",
  },
];

export default function FeaturedInSection() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    containScroll: "trimSnaps",
    dragFree: true,
    loop: false,
  });

  useEffect(() => {
    if (!emblaApi) return;

    const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap());
    const onInit = () => setScrollSnaps(emblaApi.scrollSnapList());

    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onInit);
    onInit();
    onSelect();

    return () => {
      emblaApi.off("select", onSelect);
      emblaApi.off("reInit", onInit);
    };
  }, [emblaApi]);

  return (
    <section className="bg-white py-16 md:py-24">
      <div className="mx-auto w-full max-w-7xl px-4 md:px-6 lg:px-8">
        <h2 className="text-[34px] font-medium leading-[1.2] text-[#111] md:text-[40px]">
          We were featured in
        </h2>

        <div className="mt-8 overflow-hidden" ref={emblaRef}>
          <div className="flex gap-6">
            {featured.map((item) => (
              <article
                key={item.title}
                className="flex min-w-0 shrink-0 basis-[94%] flex-col sm:basis-[62%] lg:basis-[calc(33.333%-16px)]"
              >
                <div className="flex h-10 items-center">
                  <Image
                    src={item.logo}
                    alt={item.logoAlt}
                    className={`w-auto object-contain ${item.logoClassName}`}
                  />
                </div>

                <hr className="mt-4 border-black/10" />

                <a
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Read ${item.title}`}
                  className="mt-[18px] block h-[264px] overflow-hidden rounded-[8px] focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                >
                  <Image
                    src={item.image}
                    alt={item.title}
                    sizes="(max-width: 639px) 94vw, (max-width: 1023px) 62vw, 33vw"
                    className="h-full w-full object-cover object-top transition duration-300 hover:scale-[1.03]"
                  />
                </a>

                <p className="mt-[18px] min-h-[81px] pb-4 text-[18px] font-semibold leading-[1.5] text-[#111]">
                  {item.title}
                </p>

                <hr className="mt-auto border-black/10" />
              </article>
            ))}
          </div>
        </div>

        {/* Mobile nav: large buttons + dots justified between */}
        <div className="mt-6 flex items-center justify-between md:hidden">
          <button
            type="button"
            onClick={() => emblaApi?.scrollPrev()}
            className="flex h-14 w-14 items-center justify-center rounded-[12px] border border-black/35 text-[#111] transition active:bg-primary-bg"
            aria-label="Previous article"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>

          <div className="flex items-center gap-1.5">
            {scrollSnaps.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => emblaApi?.scrollTo(i)}
                aria-label={`Go to article ${i + 1}`}
                className={`h-2 rounded-full transition-all duration-300 ${
                  i === selectedIndex ? "w-4 bg-[#111]" : "w-2 bg-[#111]/20"
                }`}
              />
            ))}
          </div>

          <button
            type="button"
            onClick={() => emblaApi?.scrollNext()}
            className="flex h-14 w-14 items-center justify-center rounded-[12px] border border-[#1a1a1a] text-[#111] transition active:bg-primary-bg"
            aria-label="Next article"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        </div>

        {/* Desktop nav: small arrows */}
        <div className="mt-8 hidden items-center gap-2 md:flex">
          <button
            type="button"
            onClick={() => emblaApi?.scrollPrev()}
            className="inline-flex h-10 w-10 items-center justify-center rounded-[8px] border border-black/35 text-[#111] transition hover:bg-primary-bg"
            aria-label="Previous article"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            type="button"
            onClick={() => emblaApi?.scrollNext()}
            className="inline-flex h-10 w-10 items-center justify-center rounded-[8px] border border-[#1a1a1a] text-[#111] transition hover:bg-primary-bg"
            aria-label="Next article"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
