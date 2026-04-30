"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import { ArrowRight, ChevronLeft, ChevronRight, Play, X } from "lucide-react";
import manish from "@/assets/testimonialThumbnails/manish.png";
import donell from "@/assets/testimonialThumbnails/donell.png";
import ryan from "@/assets/testimonialThumbnails/ryan.png";
import ethan from "@/assets/testimonialThumbnails/ethan.png";
import deana from "@/assets/testimonialThumbnails/deana.png";
import mohammad from "@/assets/testimonialThumbnails/mohammad.png";
import michael from "@/assets/testimonialThumbnails/michael.png";
import ibrakhim from "@/assets/testimonialThumbnails/ibrakhim.png";

const stories = [
  {
    name: "Manish Manwani",
    subtitle: "How he got hired by TikTok",
    quote:
      "Manish finished Frontend Simplified and landed an internship within six weeks. He has recently received a job offer from TikTok with an annual salary of $160,000.",
    image: manish,
    videoUrl: "https://player.vimeo.com/video/1151828093",
  },
  {
    name: "Donell Torres",
    subtitle: "Bought a house without a degree",
    quote:
      "Donell went from being homeless to making $120,000 per year after finishing Frontend Simplified.",
    image: donell,
    videoUrl: "https://player.vimeo.com/video/814175145?h=d2e4e63e38",
  },
  {
    name: "Ryan Rahman",
    subtitle: "Amazon was begging to hire me",
    quote:
      "Ryan landed a $80,000 junior role after just 6 weeks of finishing Frontend Simplified. He then went on to land six-figure engineering jobs at Amazon and Meta without a college degree.",
    image: ryan,
    videoUrl: "https://player.vimeo.com/video/833635291?h=2f16764120",
  },
  {
    name: "Ethan Salonga",
    subtitle: "Just 1-2 hours a day built my career",
    quote:
      "Ethan completed Frontend Simplified while working full time and landed a frontend job in just 10 weeks.",
    image: ethan,
    videoUrl: "https://player.vimeo.com/video/668633271?h=9a85a58bfe",
  },
  {
    name: "Deana El Madi",
    subtitle: "Course helped me to land 150k+ job",
    quote:
      "Deana finished Frontend Simplified and landed a $44/hour frontend developer job at Atlassian at age 19.",
    image: deana,
    videoUrl: "https://player.vimeo.com/video/814176032?h=d6f8847e3c",
  },
  {
    name: "Mohammad Totonchy",
    subtitle: "I tried it and I never look back",
    quote:
      "Mohammad finished Frontend Simplified and landed a $65,000 frontend developer job after struggling at university.",
    image: mohammad,
    videoUrl: "https://player.vimeo.com/video/814501321?h=e9165eaba9",
  },
  {
    name: "Michael Ignat",
    subtitle: "Important things other courses skip",
    quote:
      "Michael finished Frontend Simplified and landed a frontend developer job in just two months. He now makes $120,000 per year at Australia's largest bank.",
    image: michael,
    videoUrl: "https://player.vimeo.com/video/668634342?h=6e39f89eaf",
  },
  {
    name: "Ibrakhim Ustelbay",
    subtitle: "I landed internship after 2 weeks",
    quote:
      "Ibrahim finished Frontend Simplified and landed an internship at Microsoft at 19 years old.",
    image: ibrakhim,
    videoUrl: "https://player.vimeo.com/video/814175069?h=ee20ea6dd6",
  },
];

export default function StoriesCarouselSection() {
  const [activeStory, setActiveStory] = useState<
    (typeof stories)[number] | null
  >(null);
  const [previewStoryName, setPreviewStoryName] = useState<string | null>(null);
  const previewTimerRef = useRef<
    ReturnType<typeof window.setTimeout> | null | number
  >(null);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    dragFree: true,
    containScroll: "trimSnaps",
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

  useEffect(() => {
    if (!activeStory) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setActiveStory(null);
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [activeStory]);

  useEffect(() => {
    return () => {
      if (previewTimerRef.current) window.clearTimeout(previewTimerRef.current);
    };
  }, []);

  const activeVideoUrl = activeStory
    ? `${activeStory.videoUrl}${activeStory.videoUrl.includes("?") ? "&" : "?"}autoplay=1&title=0&byline=0&portrait=0`
    : "";

  const getPreviewVideoUrl = (videoUrl: string) =>
    `${videoUrl}${videoUrl.includes("?") ? "&" : "?"}autoplay=1&muted=0&controls=0&title=0&byline=0&portrait=0&loop=1&autopause=0`;

  const startPreviewAfterDelay = (storyName: string) => {
    if (previewTimerRef.current) window.clearTimeout(previewTimerRef.current);
    previewTimerRef.current = window.setTimeout(() => {
      setPreviewStoryName(storyName);
      previewTimerRef.current = null;
    }, 500);
  };

  const stopPreview = () => {
    if (previewTimerRef.current) {
      window.clearTimeout(previewTimerRef.current);
      previewTimerRef.current = null;
    }
    setPreviewStoryName(null);
  };

  const scrollToWaitlist = () => {
    document
      .getElementById("waitlist")
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section id="testimonials" className="scroll-mt-28 bg-white py-16 md:py-24">
      <div className="mx-auto w-full max-w-7xl px-4 md:px-6 lg:px-8">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <h2 className="text-center text-[36px] font-medium leading-tight tracking-[-0.03em] text-[#111] md:text-left md:text-[40px] lg:text-[56px]">
            They started where you are.
            <br />
            Here&apos;s where they are now.
          </h2>
          <button
            type="button"
            onClick={scrollToWaitlist}
            className="hidden h-[51px] items-center gap-3 rounded-full bg-primary pl-4 pr-3 text-[18px] font-semibold text-white transition hover:brightness-95 md:inline-flex"
          >
            Book a call
            <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-[linear-gradient(90deg,_#E95E32_3.12%,_#BD4F2C_70.19%)]">
              <ArrowRight className="h-3.5 w-3.5 text-white" />
            </span>
          </button>
        </div>
      </div>

      <div className="mt-8">
        <div className="flex items-center justify-center gap-3 px-2">
          <button
            type="button"
            onClick={() => emblaApi?.scrollPrev()}
            className="hidden h-14 w-14 shrink-0 items-center justify-center rounded-[12px] border border-black/35 text-[#111] transition hover:bg-primary-bg md:inline-flex"
            aria-label="Previous story"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>

          <div
            className="w-full max-w-[1098px] overflow-hidden px-4 md:px-0"
            ref={emblaRef}
          >
            <div className="flex gap-[18px]">
              {stories.map((story) => {
                const isPreviewing =
                  previewStoryName === story.name && !activeStory;

                return (
                  <article
                    key={story.name}
                    onMouseEnter={() => startPreviewAfterDelay(story.name)}
                    onMouseLeave={stopPreview}
                    className="min-w-0 shrink-0 basis-[92%] rounded-[16px] bg-primary-bg p-4 sm:basis-[70%] md:p-6 lg:basis-[calc(50%-9px)]"
                  >
                    <div className="relative aspect-[311/172] overflow-hidden rounded-[8px] bg-black md:aspect-auto md:h-[280px]">
                      <Image
                        src={story.image}
                        alt={story.name}
                        className={`h-full w-full object-cover transition-opacity duration-200 ${
                          isPreviewing ? "opacity-0" : "opacity-100"
                        }`}
                      />
                      {isPreviewing && (
                        <iframe
                          key={`preview-${story.videoUrl}`}
                          src={getPreviewVideoUrl(story.videoUrl)}
                          title={`${story.name} video preview`}
                          className="pointer-events-none absolute inset-0 h-full w-full scale-125"
                          allow="autoplay; fullscreen; picture-in-picture"
                          allowFullScreen
                        />
                      )}
                      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(0,0,0,0)_40%,rgba(0,0,0,0.48)_100%)]" />

                      <div className="absolute inset-x-5 bottom-4 flex items-end justify-between gap-3 text-white">
                        <div>
                          <p className="text-[16px] font-semibold leading-tight md:text-[18px]">
                            {story.name}
                          </p>
                          <p className="mt-0.5 text-[14px] text-white/90 md:text-[16px]">
                            {story.subtitle}
                          </p>
                        </div>
                        <button
                          type="button"
                          onClick={() => {
                            stopPreview();
                            setActiveStory(story);
                          }}
                          className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/24 bg-white/12 backdrop-blur-md md:h-[50px] md:w-auto md:gap-1.5 md:px-5 md:text-[14px] md:font-semibold"
                        >
                          <span className="hidden text-white md:inline">
                            Watch story
                          </span>
                          <Play className="h-4 w-4 fill-white text-white md:h-5 md:w-5" />
                        </button>
                      </div>
                    </div>

                    <p className="mt-3 text-[16px] leading-[1.5] text-[#111]/70 md:mt-6 md:text-[20px] md:leading-7">
                      &ldquo;{story.quote}&rdquo;
                    </p>
                  </article>
                );
              })}
            </div>
          </div>

          <button
            type="button"
            onClick={() => emblaApi?.scrollNext()}
            className="hidden h-14 w-14 shrink-0 items-center justify-center rounded-[12px] border border-[#1a1a1a] text-[#111] transition hover:bg-primary-bg md:inline-flex"
            aria-label="Next story"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        </div>

        {/* Mobile navigation: prev/dots/next */}
        <div className="mt-6 flex items-center justify-between px-4 md:hidden">
          <button
            type="button"
            onClick={() => emblaApi?.scrollPrev()}
            className="flex h-14 w-14 items-center justify-center rounded-[12px] border border-black/35 text-[#111] transition active:bg-primary-bg"
            aria-label="Previous story"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>

          <div className="flex items-center gap-1.5">
            {scrollSnaps.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => emblaApi?.scrollTo(i)}
                aria-label={`Go to story ${i + 1}`}
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
            aria-label="Next story"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        </div>
      </div>

      {activeStory && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 px-4 py-6 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-label={`${activeStory.name} video`}
          onMouseDown={() => setActiveStory(null)}
        >
          <div
            className="relative w-full max-w-5xl overflow-hidden rounded-[16px] bg-black shadow-2xl"
            onMouseDown={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              aria-label="Close video"
              onClick={() => setActiveStory(null)}
              className="absolute right-3 top-3 z-10 inline-flex h-10 w-10 items-center justify-center rounded-full bg-black/55 text-white backdrop-blur transition hover:bg-black/75"
            >
              <X className="h-5 w-5" />
            </button>
            <div className="aspect-video w-full">
              <iframe
                key={activeStory.videoUrl}
                src={activeVideoUrl}
                title={`${activeStory.name} testimonial video`}
                className="h-full w-full"
                allow="autoplay; fullscreen; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
