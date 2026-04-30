"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import oldWomanOnLaptop from "@/assets/advice/oldWomanOnLaptop.png";
import piggyBank from "@/assets/advice/piggyBank.png";
import twoGirlsOnDevices from "@/assets/advice/twoGirlsOnDevices.png";

const items = [
  {
    title:
      "Best Sales Intelligence platforms in 2026: 8 platforms scored across 231 features",
    image: oldWomanOnLaptop,
  },
  {
    title: "Made for you: Custom API Signals, AI call transcripts, and more",
    image: piggyBank,
  },
  {
    title:
      "Best B2B contact databases in 2026: 8 platforms scored across 231 features",
    image: twoGirlsOnDevices,
  },
  {
    title:
      "Best cold email software in 2026: 9 platforms scored across 231 features",
    image: piggyBank,
  },
];

export default function AdviceSection() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    dragFree: true,
    containScroll: "trimSnaps",
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

  const showComingSoon = () => {
    window.alert("articles coming soon!");
  };

  return (
    <section className="bg-primary-bg py-16 md:py-20">
      <div className="mx-auto w-full max-w-7xl px-4 md:px-6 lg:px-8">
        <h2 className="text-[32px] font-medium leading-[1.15] text-[#111] sm:text-[36px] md:text-[40px] md:leading-[1.2]">
          Advice and guidance for career-switchers
        </h2>

        <div className="mt-8 overflow-hidden" ref={emblaRef}>
          <div className="flex items-start gap-5">
            {items.map((item) => (
              <button
                key={item.title}
                type="button"
                onClick={showComingSoon}
                aria-label={`Open ${item.title}`}
                className="min-w-0 shrink-0 basis-[88%] text-left focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 sm:basis-[47%] lg:basis-[calc(25%-15px)]"
              >
                <div className="aspect-[261/158] overflow-hidden rounded-[12px]">
                  <Image
                    src={item.image}
                    alt={item.title}
                    sizes="(max-width: 639px) 88vw, (max-width: 1023px) 47vw, 25vw"
                    className="h-full w-full object-cover transition duration-300 hover:scale-[1.03]"
                  />
                </div>
                <p className="mt-4 pl-1 text-[16px] font-semibold leading-[1.5] text-[#111]">
                  {item.title}
                </p>
              </button>
            ))}
          </div>
        </div>

        <div className="mt-6 flex items-center justify-between md:hidden">
          <button
            type="button"
            onClick={() => emblaApi?.scrollPrev()}
            className="flex h-14 w-14 items-center justify-center rounded-[12px] border border-black/35 text-[#111] transition active:bg-white"
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
            className="flex h-14 w-14 items-center justify-center rounded-[12px] border border-[#1a1a1a] text-[#111] transition active:bg-white"
            aria-label="Next article"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        </div>

        <div className="mt-8 hidden items-center gap-2 md:flex">
          <button
            type="button"
            onClick={() => emblaApi?.scrollPrev()}
            className="inline-flex h-10 w-10 items-center justify-center rounded-[8px] border border-black/35 text-[#111] transition hover:bg-white"
            aria-label="Previous article"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            type="button"
            onClick={() => emblaApi?.scrollNext()}
            className="inline-flex h-10 w-10 items-center justify-center rounded-[8px] border border-[#1a1a1a] text-[#111] transition hover:bg-white"
            aria-label="Next article"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
