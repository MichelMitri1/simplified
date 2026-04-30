"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import type { Variants } from "framer-motion";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowRight,
  BarChart3,
  BookOpen,
  BriefcaseBusiness,
  Calendar,
  CalendarCheck,
  ChevronLeft,
  ChevronRight,
  FileMinus,
  Fullscreen,
  ListChecks,
  Maximize2,
  MessageSquare,
  Megaphone,
  MessageSquareQuote,
  Sparkles,
  SquarePen,
  Users,
  X,
} from "lucide-react";
import dashboard from "@/assets/dashboard.svg";
import mentorshipModal from "@/assets/mentorshipModal.svg";
import duckyModal from "@/assets/duckyModal.svg";
import typingLaptop from "@/assets/typingLaptop.gif";
import readCvLogo from "@/assets/readCvLogo.svg";
import chats from "@/assets/Chats.svg";
import briefcase from "@/assets/Briefcase.svg";
import cursor from "@/assets/cursor.svg";
import studentPost from "@/assets/studentPost.svg";
import davidMeeting from "@/assets/davidMeeting.png";
import groupWorkshop from "@/assets/groupWorkshop.svg";
import {
  ChartScatterIcon,
  ChatCenteredDotsIcon,
  CheckSquareOffsetIcon,
  HeadsetIcon,
  HourglassHighIcon,
  LightningIcon,
  ListChecksIcon,
  PencilSimpleIcon,
  VideoCameraIcon,
} from "@/components/new-landing-page/icons/how-it-works";

const processCards = [
  {
    title: "Designed to easily fit into your full-time schedule",
    variant: "dark",
  },
  {
    title: "1:1 mentorship anytime, anywhere",
    variant: "primary",
  },
  {
    title: "Graduate with experience already on your CV",
    variant: "image",
  },
  {
    title: "Connect with students on the same path as you.",
    variant: "light",
  },
] as const;

const experiencePills = [
  { label: "Paid internship placement", icon: readCvLogo },
  { label: "Collaboration with a team", icon: chats },
  { label: "Get a competitive portfolio", icon: briefcase },
  { label: "Ready for job applications", icon: cursor },
] as const;

const eventPills = [
  { label: "Announcements", icon: Megaphone },
  { label: "Discussions", icon: MessageSquareQuote },
  { label: "Events", icon: Calendar },
  { label: "Resources", icon: FileMinus },
] as const;

const expandedHighlights = [
  { label: "Adaptive AI learning", icon: Sparkles },
  { label: "Self-paced", icon: BookOpen },
  { label: "Essential skills", icon: ListChecks },
  { label: "Instant feedback", icon: MessageSquare },
  { label: "Flexible schedule", icon: CalendarCheck },
  { label: "Job-ready focus", icon: Fullscreen },
  { label: "Portfolio-building projects", icon: BriefcaseBusiness },
] as const;

const primaryInstructorHighlights = [
  { label: "Project reviews", icon: CheckSquareOffsetIcon },
  { label: "Portfolio creation", icon: PencilSimpleIcon },
  { label: "Interview prep", icon: ListChecksIcon },
  { label: "24/7 assistance", icon: HourglassHighIcon },
  { label: "Video and IAM correspondence", icon: VideoCameraIcon },
  { label: "Answers in 3 mins or less", icon: ChatCenteredDotsIcon },
  { label: "Support and inspiration", icon: HeadsetIcon },
] as const;

const primaryDuckyHighlights = [
  { label: "Adaptive AI learning", icon: ChartScatterIcon },
  { label: "Instant feedback", icon: LightningIcon },
  { label: "24/7 assistance", icon: HourglassHighIcon },
] as const;

const rightPanelMotion: Variants = {
  initial: { opacity: 0, x: 28, filter: "blur(6px)" },
  animate: {
    opacity: 1,
    x: 0,
    filter: "blur(0px)",
    transition: {
      delay: 0.18,
      duration: 0.42,
      ease: "easeOut",
      staggerChildren: 0.045,
      delayChildren: 0.08,
    },
  },
  exit: {
    opacity: 0,
    x: 12,
    filter: "blur(4px)",
    transition: { duration: 0.16, ease: "easeOut" },
  },
};

const revealItemMotion: Variants = {
  initial: { opacity: 0, y: 14 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.34, ease: "easeOut" },
  },
  exit: {
    opacity: 0,
    y: 8,
    transition: { duration: 0.14, ease: "easeOut" },
  },
};

const revealChipMotion: Variants = {
  initial: { opacity: 0, y: 8, scale: 0.98 },
  animate: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.28, ease: "easeOut" },
  },
  exit: {
    opacity: 0,
    y: 4,
    scale: 0.98,
    transition: { duration: 0.12, ease: "easeOut" },
  },
};

export default function HowItWorks() {
  const [expandedCardIndex, setExpandedCardIndex] = useState<number | null>(
    null,
  );
  const [collapsingCardIndex, setCollapsingCardIndex] = useState<number | null>(
    null,
  );
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);
  const mobileCloseTimerRef = useRef<number | null>(null);
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    containScroll: "trimSnaps",
    loop: false,
    dragFree: false,
    duration: 24,
  });

  useEffect(() => {
    if (!emblaApi || expandedCardIndex === null) return;

    emblaApi.reInit();
    emblaApi.scrollTo(expandedCardIndex);

    const settleTimer = window.setTimeout(() => {
      emblaApi.reInit();
      emblaApi.scrollTo(expandedCardIndex);
    }, 520);

    return () => window.clearTimeout(settleTimer);
  }, [expandedCardIndex, emblaApi]);

  useEffect(() => {
    return () => {
      if (mobileCloseTimerRef.current) {
        window.clearTimeout(mobileCloseTimerRef.current);
      }
    };
  }, []);

  const toggleCard = (index: number) => {
    const isMobile =
      typeof window !== "undefined" &&
      window.matchMedia("(max-width: 767px)").matches;

    if (expandedCardIndex === index) {
      if (isMobile) {
        setCollapsingCardIndex(index);
        if (mobileCloseTimerRef.current) {
          window.clearTimeout(mobileCloseTimerRef.current);
        }
        mobileCloseTimerRef.current = window.setTimeout(() => {
          setCollapsingCardIndex(null);
          mobileCloseTimerRef.current = null;
        }, 360);
      }

      setExpandedCardIndex(null);
      return;
    }

    if (mobileCloseTimerRef.current) {
      window.clearTimeout(mobileCloseTimerRef.current);
      mobileCloseTimerRef.current = null;
    }
    setCollapsingCardIndex(null);
    setExpandedCardIndex(index);
  };

  useEffect(() => {
    if (!emblaApi) return;

    const updateButtonState = () => {
      setCanScrollPrev(emblaApi.canScrollPrev());
      setCanScrollNext(emblaApi.canScrollNext());
    };

    updateButtonState();
    emblaApi.on("select", updateButtonState);
    emblaApi.on("reInit", updateButtonState);

    return () => {
      emblaApi.off("select", updateButtonState);
      emblaApi.off("reInit", updateButtonState);
    };
  }, [emblaApi]);

  return (
    <section id="how-it-works" className="bg-white py-14 md:py-16">
      <div className="mx-auto w-full max-w-7xl px-4 md:px-6 lg:px-8">
        <h2 className="text-[44px] font-semibold leading-[1.05] tracking-[-0.04em] text-[#1b1c20] sm:text-[56px]">
          Your Digital Career. Simplified.
        </h2>
        <p className="mt-3 text-[24px] text-[#666971]">
          Our 4 Step process has helped over 1,264 career switchers land roles
          in the digital marketplace.
        </p>
      </div>

      <div className="mt-7">
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex gap-2.5 px-4 will-change-transform [transform:translate3d(0,0,0)] md:px-6 lg:px-8">
            {processCards.map((card, index) => {
              const isDark = card.variant === "dark";
              const isPrimary = card.variant === "primary";
              const isImage = card.variant === "image";
              const isLight = card.variant === "light";
              const isExpanded = expandedCardIndex === index;
              const isCollapsing = collapsingCardIndex === index;
              const shouldUseExpandedLayout = isExpanded || isCollapsing;
              const learnMoreFadeClass = isDark
                ? "from-[#0f1118] from-[0%] via-[#0f1118]/95 via-[42%]"
                : isPrimary
                  ? "from-primary from-[0%] via-primary/95 via-[42%]"
                  : isImage
                    ? "from-black/80 from-[0%] via-black/55 via-[42%]"
                    : "from-[#f2f2f2] from-[0%] via-[#f2f2f2]/95 via-[42%]";

              return (
                <article
                  key={`${card.title}-${index}`}
                  className={`relative min-w-0 shrink-0 rounded-[12px] p-4 transition-[width,height] duration-500 ease-in-out ${
                    shouldUseExpandedLayout &&
                    (isDark || isPrimary || isImage || isLight)
                      ? `z-20 h-auto md:h-[774px] w-[calc(100vw-2rem)] md:w-[min(1120px,calc(100vw-2rem))] ${isImage ? "overflow-hidden" : "overflow-visible md:overflow-hidden"}`
                      : "h-[529px] md:h-[774px] w-[calc(100vw-2rem)] md:w-[570px] overflow-hidden"
                  } ${
                    isDark
                      ? "bg-[#0f1118] text-white"
                      : isPrimary
                        ? "bg-primary text-white"
                        : isImage
                          ? "text-white"
                          : "bg-[#f2f2f2] text-[#1f2129]"
                  } [transform:translate3d(0,0,0)]`}
                >
                  {isImage && (
                    <Image
                      src={typingLaptop}
                      alt="Hands on keyboard"
                      fill
                      sizes="(max-width: 767px) calc(100vw - 2rem), 570px"
                      className="object-cover"
                    />
                  )}
                  {isImage && <div className="absolute inset-0 bg-black/30" />}

                  <div
                    className={`relative z-10 flex h-full flex-col pb-16 md:pb-0 ${
                      isDark || isPrimary || isImage || isLight
                        ? "w-[538px] max-w-full"
                        : ""
                    }`}
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div className="w-full max-w-[250px] md:max-w-[486px]">
                        <h3 className="text-[28px] font-medium leading-[1.14] tracking-[-0.02em] sm:text-[32px] md:text-[40px] md:leading-[1.2]">
                          {card.title}
                        </h3>
                        {isPrimary && isExpanded && (
                          <motion.p
                            className="mt-3 hidden text-[18px] leading-[1.45] text-white/85 md:block"
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 8 }}
                            transition={{
                              duration: 0.26,
                              ease: "easeOut",
                              delay: 0.04,
                            }}
                          >
                            24/7 access to professionals working globally in the
                            fields you&apos;re training for. They&apos;ll guide
                            you through every learning hurdle, challenge you to
                            achieve program milestones and keep you motivated.
                          </motion.p>
                        )}
                        {isImage && isExpanded && (
                          <motion.p
                            className="mt-4 hidden text-[18px] leading-[1.45] text-white/85 md:block"
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 8 }}
                            transition={{
                              duration: 0.26,
                              ease: "easeOut",
                              delay: 0.04,
                            }}
                          >
                            We&apos;ve built internships into all our programs.
                            Real briefs. Real deadlines. Real collaboration with
                            a team. You&apos;ll know how the job actually works,
                            what employers expect, and have the portfolio to
                            prove you can deliver it.
                          </motion.p>
                        )}
                        {isLight && isExpanded && (
                          <motion.p
                            className="mt-4 hidden text-[18px] leading-[1.45] text-[#5c6068] md:block"
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 8 }}
                            transition={{
                              duration: 0.26,
                              ease: "easeOut",
                              delay: 0.04,
                            }}
                          >
                            Weekly live sessions to connect, share, and grow.
                            Compare projects, discuss ways of working, and
                            celebrate milestones with people who get it.
                          </motion.p>
                        )}
                      </div>
                    </div>

                    <div className="mt-4 md:mt-auto">
                      {isDark && (
                        <div className="grid grid-cols-1 gap-3 pt-4 md:gap-6 md:pt-6">
                          <div className="flex w-[538px] max-w-full items-end">
                            <Image
                              alt="Course dashboard preview"
                              src={dashboard}
                              className="w-[538px] max-w-full rounded-md bg-[#F3F5FC] md:translate-y-8"
                            />
                          </div>
                        </div>
                      )}

                      {isPrimary && (
                        <div className="flex flex-col items-center space-y-2 pt-4 md:mb-6 md:pt-0">
                          <Image
                            alt="fes institute dashboard"
                            src={mentorshipModal}
                            className="w-full max-w-[400px] rounded-md bg-white"
                          />
                          <Image
                            alt="fes institute dashboard"
                            src={duckyModal}
                            className="w-full max-w-[400px] rounded-md bg-white"
                          />
                        </div>
                      )}

                      {isImage && (
                        <div className="space-y-2 pl-0 pt-4 md:pb-4 md:pl-4 md:pt-0">
                          {experiencePills.map((pill) => (
                            <div
                              key={pill.label}
                              className="flex w-full max-w-[350px] items-center gap-2 rounded-md bg-white px-3 py-2 text-[18px] font-semibold text-[#1e1f24]"
                            >
                              <span className="inline-flex items-center justify-center rounded bg-[#4F46E51A] p-1">
                                <Image
                                  src={pill.icon}
                                  alt=""
                                  aria-hidden="true"
                                  width={16}
                                  height={16}
                                  className="h-4 w-4 shrink-0"
                                />
                              </span>
                              {pill.label}
                            </div>
                          ))}
                        </div>
                      )}

                      {isLight && (
                        <div className="space-y-2 pt-4 md:pt-0">
                          <div className="flex w-full flex-wrap gap-2">
                            {eventPills.map((pill) => {
                              const Icon = pill.icon;
                              return (
                                <span
                                  key={pill.label}
                                  className="flex w-auto items-center justify-center gap-1 rounded-md bg-[#1111110F] px-2 py-1 text-[14px] text-black"
                                >
                                  <Icon className="h-[16px] w-[16px] text-primary" />
                                  {pill.label}
                                </span>
                              );
                            })}
                          </div>

                          <Image
                            alt="fes institute dashboard"
                            src={studentPost}
                            className="w-full max-w-[500px] rounded-md"
                          />
                          <Image
                            alt="fes institute dashboard"
                            src={davidMeeting}
                            className="w-full max-w-[480px] rounded-md"
                          />
                          <Image
                            alt="fes institute dashboard"
                            src={groupWorkshop}
                            className="w-full max-w-[520px] rounded-md"
                          />
                        </div>
                      )}
                    </div>

                    {/* Mobile expanded content — only visible on mobile when card is open */}
                    <AnimatePresence initial={false}>
                      {isExpanded && (
                        <motion.div
                          className="overflow-hidden md:hidden"
                          initial={{ height: 0, opacity: 0, y: -6 }}
                          animate={{ height: "auto", opacity: 1, y: 0 }}
                          exit={{ height: 0, opacity: 0, y: -6 }}
                          transition={{ duration: 0.34, ease: "easeOut" }}
                        >
                          {isDark && (
                            <div className="mt-4 block md:hidden">
                              <p className="mb-3 text-[16px] text-white/80">
                                Everything in one place:
                              </p>
                              <div className="flex flex-wrap gap-2">
                                {expandedHighlights.map((item) => (
                                  <span
                                    key={item.label}
                                    className="inline-flex items-center gap-2 rounded-full bg-[#4F46E533] px-3 py-2 text-[13px] font-medium text-white"
                                  >
                                    <item.icon className="h-3.5 w-3.5" />
                                    {item.label}
                                  </span>
                                ))}
                              </div>
                              <p className="mt-4 text-[15px] leading-[1.5] text-white/80">
                                &ldquo;The self-paced approach allows me the
                                flexibility to learn and study when I have free
                                time. The iterative approach of learning
                                culminates in challenging but approachable
                                projects to utilize your new skills and expand
                                on them.&rdquo;
                              </p>
                              <p className="mt-2 text-[13px] text-white/50">
                                Steven, Software Engineering Program
                              </p>
                            </div>
                          )}

                          {isPrimary && (
                            <div className="mt-4 block md:hidden">
                              <div className="rounded-2xl bg-[#f5f5f5] p-4 text-[#2a2a2a]">
                                <p className="mb-2 text-[15px] text-[#666]">
                                  Our instructors:
                                </p>
                                <div className="flex flex-wrap gap-2">
                                  {primaryInstructorHighlights.map((item) => (
                                    <span
                                      key={item.label}
                                      className="inline-flex items-center gap-1.5 rounded-full bg-[#E95E321F] px-3 py-2 text-[13px] font-semibold text-[#321207]"
                                    >
                                      <item.icon className="h-3.5 w-3.5" />
                                      {item.label}
                                    </span>
                                  ))}
                                </div>
                              </div>

                              <div className="mt-3 rounded-2xl bg-[#f5f5f5] p-4 text-[#2a2a2a]">
                                <p className="mb-2 text-[15px] text-[#666]">
                                  DuckyAI helper:
                                </p>
                                <div className="flex flex-wrap gap-2">
                                  {primaryDuckyHighlights.map((item) => (
                                    <span
                                      key={item.label}
                                      className="inline-flex items-center gap-1.5 rounded-full bg-[#E95E321F] px-3 py-2 text-[13px] font-semibold text-[#321207]"
                                    >
                                      <item.icon className="h-3.5 w-3.5" />
                                      {item.label}
                                    </span>
                                  ))}
                                </div>
                              </div>
                              <p className="mt-4 text-[15px] leading-[1.5] text-white/85">
                                24/7 access to professionals working globally in
                                the fields you&apos;re training for.
                                They&apos;ll guide you through every learning
                                hurdle and keep you motivated.
                              </p>
                            </div>
                          )}

                          {isImage && (
                            <div className="mt-4 block md:hidden">
                              <p className="mb-3 text-[15px] leading-[1.5] text-white/85">
                                We&apos;ve built internships into all our
                                programs. Real briefs. Real deadlines. Real
                                collaboration with a team. You&apos;ll know how
                                the job actually works, what employers expect,
                                and have the portfolio to prove you can deliver
                                it.
                              </p>
                              <div className="rounded-2xl bg-white p-4 text-[#1e1f24]">
                                <p className="text-[15px] leading-[1.5]">
                                  Its nice to be applying what you learned over
                                  the entirety of the course...they show you
                                  what it will be like on a team which made it
                                  easier when I transitioned into the actual
                                  job.
                                </p>
                                <div className="mt-3 flex items-center gap-2">
                                  <span className="h-7 w-7 rounded bg-[#d9d9d9]" />
                                  <p className="text-[13px] text-[#666971]">
                                    Breven Bennett, Software Engineering Program
                                  </p>
                                </div>
                              </div>
                              <div className="mt-3 rounded-2xl bg-white p-4 text-[#1e1f24]">
                                <p className="text-[15px] text-[#666971]">
                                  Some of the businesses we work with include:
                                </p>
                                <p className="mt-3 text-[15px] text-[#8a8a8a]">
                                  &lt;Logo&gt; &lt;Logo&gt; &lt;Logo&gt;
                                </p>
                              </div>
                            </div>
                          )}

                          {isLight && (
                            <div className="mt-4 block md:hidden">
                              <p className="mb-3 text-[15px] leading-[1.5] text-[#5c6068]">
                                Weekly live sessions to connect, share, and
                                grow. Compare projects, discuss ways of working,
                                and celebrate milestones with people who get it.
                              </p>
                              <div className="flex flex-wrap gap-2">
                                {[
                                  {
                                    label: "Thriving peer community",
                                    icon: Users,
                                  },
                                  { label: "Project reviews", icon: SquarePen },
                                  {
                                    label: "Weekly live sessions",
                                    icon: CalendarCheck,
                                  },
                                  {
                                    label: "Milestone celebrations",
                                    icon: BarChart3,
                                  },
                                  { label: "Accountability", icon: ListChecks },
                                ].map((item) => (
                                  <span
                                    key={item.label}
                                    className="inline-flex items-center gap-2 rounded-full bg-[#1111110F] px-3 py-2 text-[13px] font-semibold text-[#1f2129]"
                                  >
                                    <item.icon className="h-3.5 w-3.5" />
                                    {item.label}
                                  </span>
                                ))}
                              </div>
                            </div>
                          )}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  {/* Mobile-only "Learn more" / "Show less" button */}
                  {!shouldUseExpandedLayout && (
                    <>
                      <div
                        className={`pointer-events-none absolute inset-x-0 bottom-0 z-10 h-28 bg-gradient-to-t ${learnMoreFadeClass} to-transparent to-[100%] md:hidden`}
                      />
                      <button
                        type="button"
                        aria-label={`Learn more about ${card.title}`}
                        onClick={() => toggleCard(index)}
                        className={`absolute bottom-4 left-4 right-4 z-20 flex items-center justify-between rounded-full border px-4 py-3 md:hidden ${
                          isLight
                            ? "border-black/25 text-[#1f2129]"
                            : "border-white/60 text-white"
                        }`}
                      >
                        <span className="text-[18px] font-semibold">
                          Learn more
                        </span>
                        <span
                          className={`flex h-[26px] w-[26px] items-center justify-center rounded-full ${
                            isLight ? "bg-black/10" : "bg-white/15"
                          }`}
                        >
                          <ArrowRight className="h-3.5 w-3.5" />
                        </span>
                      </button>
                    </>
                  )}

                  {shouldUseExpandedLayout && (
                    <button
                      type="button"
                      aria-label={`Collapse ${card.title}`}
                      onClick={() => toggleCard(index)}
                      className={`absolute right-4 top-4 z-50 inline-flex h-10 w-10 items-center justify-center rounded-md md:hidden ${
                        isLight
                          ? "bg-black/10 text-black"
                          : "bg-white/20 text-white"
                      }`}
                    >
                      <X className="h-4 w-4" />
                    </button>
                  )}

                  <button
                    type="button"
                    aria-label={`${isExpanded ? "Collapse" : "Expand"} ${card.title}`}
                    onClick={() => toggleCard(index)}
                    className={`absolute right-4 top-4 z-50 hidden md:inline-flex h-10 w-10 translate-y-2 cursor-pointer items-center justify-center rounded-md ${
                      isLight
                        ? "bg-black/10 text-black"
                        : "bg-white/20 text-white"
                    }`}
                  >
                    {isExpanded ? (
                      <X className="h-4 w-4" />
                    ) : (
                      <Maximize2 className="h-4 w-4" />
                    )}
                  </button>

                  {isDark && (
                    <AnimatePresence initial={false}>
                      {isExpanded && (
                        <motion.div
                          key="dark-expanded-layer"
                          className="absolute bottom-0 left-[570px] top-0 z-30 hidden w-[calc(100%-570px)] p-4 pl-6 lg:block"
                          variants={rightPanelMotion}
                          initial="initial"
                          animate="animate"
                          exit="exit"
                        >
                          <div className="flex h-full flex-col justify-end">
                            <motion.p
                              className="text-[20px] leading-[1.2] text-white"
                              variants={revealItemMotion}
                            >
                              Everything in one place:
                            </motion.p>
                            <motion.div
                              className="mt-4 flex flex-wrap gap-2.5"
                              variants={revealItemMotion}
                            >
                              {expandedHighlights.map((item) => (
                                <motion.span
                                  key={item.label}
                                  className="inline-flex items-center gap-2 rounded-full bg-[#4F46E533] px-4 py-2 text-[16px] font-medium text-white"
                                  variants={revealChipMotion}
                                >
                                  <item.icon className="h-4 w-4" />
                                  {item.label}
                                </motion.span>
                              ))}
                            </motion.div>

                            <motion.p
                              className="mt-6 text-[18px] leading-[1.4] text-white/90"
                              variants={revealItemMotion}
                            >
                              &ldquo;The self-paced approach allows me the
                              flexibility to learn and study when I have free
                              time. The iterative approach of learning
                              culminates in challenging but approachable
                              projects to utilize your new skills and expand on
                              them&rdquo;
                            </motion.p>
                            <motion.p
                              className="mt-3 text-[16px] text-white/55"
                              variants={revealItemMotion}
                            >
                              Steven, Software Engineering Program
                            </motion.p>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  )}

                  {isPrimary && (
                    <AnimatePresence initial={false}>
                      {isExpanded && (
                        <motion.div
                          key="primary-expanded-layer"
                          className="absolute bottom-0 left-[570px] top-0 z-30 hidden w-[calc(100%-570px)] p-4 pl-6 lg:block"
                          variants={rightPanelMotion}
                          initial="initial"
                          animate="animate"
                          exit="exit"
                        >
                          <div className="flex h-full flex-col">
                            <div className="mt-auto grid h-full grid-cols-1 gap-6 pt-6">
                              <motion.div
                                className="hidden"
                                initial={{ opacity: 0, y: 16 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{
                                  duration: 0.3,
                                  ease: "easeOut",
                                  delay: 0.03,
                                }}
                              >
                                <Image
                                  alt="Mentorship chat"
                                  src={mentorshipModal}
                                  className="w-full max-w-[400px] rounded-md bg-white"
                                />
                                <Image
                                  alt="Ducky helper"
                                  src={duckyModal}
                                  className="w-full max-w-[400px] rounded-md bg-white"
                                />
                              </motion.div>

                              <motion.div
                                className="flex flex-col items-center justify-end gap-3"
                                variants={revealItemMotion}
                              >
                                <motion.div
                                  className="rounded-2xl bg-[#f5f5f5] p-5 text-[#2a2a2a] w-full max-w-[500px]"
                                  variants={revealItemMotion}
                                >
                                  <p className="text-[20px] text-[#666]">
                                    Our instructors:
                                  </p>
                                  <div className="mt-3 flex flex-wrap gap-2">
                                    {primaryInstructorHighlights.map((item) => (
                                      <motion.span
                                        key={item.label}
                                        className="inline-flex items-center gap-1.5 rounded-full bg-[#E95E321F] px-3 py-2 text-[16px] font-semibold text-[#321207]"
                                        variants={revealChipMotion}
                                      >
                                        <item.icon className="h-4 w-4" />
                                        {item.label}
                                      </motion.span>
                                    ))}
                                  </div>
                                </motion.div>

                                <motion.div
                                  className="rounded-2xl bg-[#f5f5f5] p-5 text-[#2a2a2a] max-w-[500px]"
                                  variants={revealItemMotion}
                                >
                                  <p className="text-[20px] text-[#666]">
                                    DuckyAI helper:
                                  </p>
                                  <div className="mt-3 flex flex-wrap gap-2">
                                    {primaryDuckyHighlights.map((item) => (
                                      <motion.span
                                        key={item.label}
                                        className="inline-flex items-center gap-1.5 rounded-full bg-[#E95E321F] px-3 py-2 text-[16px] font-semibold text-[#321207]"
                                        variants={revealChipMotion}
                                      >
                                        <item.icon className="h-4 w-4" />
                                        {item.label}
                                      </motion.span>
                                    ))}
                                  </div>
                                </motion.div>
                              </motion.div>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  )}

                  {isImage && (
                    <AnimatePresence initial={false}>
                      {isExpanded && (
                        <motion.div
                          key="image-expanded-layer"
                          className="absolute bottom-0 left-[570px] top-0 z-30 hidden w-[calc(100%-570px)] p-4 pl-6 text-white lg:block"
                          variants={rightPanelMotion}
                          initial="initial"
                          animate="animate"
                          exit="exit"
                        >
                          <div className="flex h-full flex-col">
                            <div className="mt-auto grid h-full grid-cols-1 gap-6 pt-6">
                              <motion.div
                                className="flex flex-col items-center justify-end gap-3"
                                variants={revealItemMotion}
                              >
                                <motion.div
                                  className="w-full max-w-[480px] rounded-2xl bg-white p-6 text-[#1e1f24]"
                                  variants={revealItemMotion}
                                >
                                  <p className="text-[18px] leading-[27px]">
                                    Its nice to be applying what you learned
                                    over the entirety of the course...they show
                                    you what it will be like on a team which
                                    made it easier when I transitioned into the
                                    actual job
                                  </p>
                                  <div className="mt-4 flex items-center gap-3">
                                    <span className="h-8 w-8 rounded bg-[#d9d9d9]" />
                                    <p className="text-[16px] text-[#666971]">
                                      Breven Bennett, Software Engineering
                                      Program
                                    </p>
                                  </div>
                                </motion.div>

                                <motion.div
                                  className="w-full max-w-[480px] rounded-2xl bg-white p-6 text-[#1e1f24]"
                                  variants={revealItemMotion}
                                >
                                  <p className="text-[16px] text-[#666971]">
                                    Some of the businesses we work with include:
                                  </p>
                                  <p className="mt-4 text-[16px] text-[#8a8a8a]">
                                    &lt;Logo&gt; &lt;Logo&gt; &lt;Logo&gt;
                                  </p>
                                </motion.div>
                              </motion.div>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  )}

                  {isLight && (
                    <AnimatePresence initial={false}>
                      {isExpanded && (
                        <motion.div
                          key="light-expanded-layer"
                          className="absolute bottom-0 left-[570px] top-0 z-30 hidden w-[calc(100%-570px)] p-4 pl-6 text-[#1f2129] lg:block"
                          variants={rightPanelMotion}
                          initial="initial"
                          animate="animate"
                          exit="exit"
                        >
                          <div className="flex h-full flex-col">
                            <div className="mt-auto grid h-full grid-cols-1 gap-6 pt-4">
                              <motion.div
                                className="flex flex-col justify-end gap-4"
                                variants={revealItemMotion}
                              >
                                <motion.div
                                  className="rounded-2xl bg-white p-5 text-[#1f2129]"
                                  variants={revealItemMotion}
                                >
                                  <p className="text-[18px] leading-[1.38]">
                                    “The learning environment is incredibly
                                    supportive and motivating. The instructors
                                    and community members are always encouraging
                                    - this sense of camaraderie played a crucial
                                    role in my development.”
                                  </p>
                                  <div className="mt-4 flex items-center gap-3">
                                    <span className="h-8 w-8 rounded bg-[#ddd]" />
                                    <p className="text-[16px] text-[#666971]">
                                      Christopher Hawkins, Software Engineering
                                      Program
                                    </p>
                                  </div>
                                </motion.div>

                                <motion.div
                                  className="rounded-2xl p-1"
                                  variants={revealItemMotion}
                                >
                                  <p className="mb-3 text-[20px] text-[#585d66]">
                                    With our community, you&apos;ll benefit
                                    from:
                                  </p>
                                  <div className="flex flex-wrap gap-2">
                                    {[
                                      {
                                        label: "Thriving peer community",
                                        icon: Users,
                                      },
                                      {
                                        label: "Project reviews",
                                        icon: SquarePen,
                                      },
                                      {
                                        label: "Weekly live sessions",
                                        icon: CalendarCheck,
                                      },
                                      {
                                        label: "Milestone celebrations",
                                        icon: BarChart3,
                                      },
                                      {
                                        label: "Accountability",
                                        icon: ListChecks,
                                      },
                                    ].map((item) => (
                                      <motion.span
                                        key={item.label}
                                        className="inline-flex items-center gap-2 rounded-full bg-[#1111110F] px-4 py-2 text-[16px] font-semibold text-[#1f2129]"
                                        variants={revealChipMotion}
                                      >
                                        <item.icon className="h-4 w-4" />
                                        {item.label}
                                      </motion.span>
                                    ))}
                                  </div>
                                </motion.div>
                              </motion.div>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  )}
                </article>
              );
            })}
          </div>
        </div>
      </div>

      <div className="mx-auto mt-5 flex w-full max-w-7xl items-center gap-2 px-4 md:px-6 lg:px-8">
        <button
          type="button"
          onClick={() => emblaApi?.scrollPrev()}
          disabled={!canScrollPrev}
          className={`inline-flex h-9 w-9 items-center justify-center rounded-md border transition ${
            canScrollPrev
              ? "cursor-pointer border-black text-[#3e424b] hover:bg-white"
              : "cursor-not-allowed border-[#d3d3d3] text-[#b2b2b2]"
          }`}
          aria-label="Previous slide"
        >
          <ChevronLeft className="h-4 w-4" />
        </button>
        <button
          type="button"
          onClick={() => emblaApi?.scrollNext()}
          disabled={!canScrollNext}
          className={`inline-flex h-9 w-9 items-center justify-center rounded-md border transition ${
            canScrollNext
              ? "cursor-pointer border-black text-[#3e424b] hover:bg-white"
              : "cursor-not-allowed border-[#d3d3d3] text-[#b2b2b2]"
          }`}
          aria-label="Next slide"
        >
          <ChevronRight className="h-4 w-4" />
        </button>
      </div>
    </section>
  );
}
