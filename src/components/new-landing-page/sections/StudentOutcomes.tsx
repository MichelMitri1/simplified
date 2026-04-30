"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import {
  ChevronLeft,
  ChevronRight,
  CirclePercent,
  Coins,
  HandHeart,
  PiggyBank,
} from "lucide-react";
import {
  BriefcaseIcon,
  CalendarStarIcon,
  CodeBlockIcon,
  ClipboardTextIcon,
  CrossHairIcon,
  CursorIcon,
  FileTextIcon,
  GlobeSimpleIcon,
  ListChecksIcon,
  ListStarIcon,
  MoneyWavyIcon,
  ReadCvLogoIcon,
  SectionBriefcaseIcon,
  SectionMoneyWavyIcon,
  SealCheckIcon,
  ShieldCheckIcon,
  SparkleIcon,
  UserChecksIcon,
  UsersIcon,
  VideoCameraIcon,
} from "@/components/new-landing-page/icons/student-outcomes";
import guyWithLaptop from "@/assets/guyWithLaptop.png";
import guyWithLaptopLaughing from "@/assets/guyWithLaptopLaughing.png";
import michael from "@/assets/michaelIgnat.png";
import giannisProject from "@/assets/projects/giannisProject.png";
import chrisProject from "@/assets/projects/chrisProject.png";
import kareemProject from "@/assets/projects/kareemProject.png";
import cryptoProject from "@/assets/projects/cryptoProject.png";
import chrisProjectMobile from "@/assets/projects/chrisProjectMobile.png";
import performanceProject from "@/assets/projects/performanceProject.png";
import bethProject from "@/assets/projects/bethProject.png";

const rolePrep = [
  {
    title: "Dedicated Mentorship",
    bullets: [
      { text: "Live portfolio reviews", Icon: FileTextIcon },
      { text: "Applications & CV reviews", Icon: ReadCvLogoIcon },
      { text: "Goal tracking & accountability", Icon: UsersIcon },
      { text: "Weekly career catch-ups", Icon: CalendarStarIcon },
    ],
  },
  {
    title: "Internship Placement",
    bullets: [
      { text: "AI resume builder", Icon: SparkleIcon },
      { text: "Personalised job search plan", Icon: ClipboardTextIcon },
      { text: "Take-home project assistance", Icon: CodeBlockIcon },
      { text: "Mentor application tracking", Icon: CursorIcon },
    ],
  },
  {
    title: "Land a job",
    bullets: [
      { text: "Mock interviews with experts", Icon: VideoCameraIcon },
      { text: "Proven career application strategy", Icon: CrossHairIcon },
      { text: "1:1 career coaching", Icon: ListStarIcon },
      { text: "Salary negotiation guidance", Icon: MoneyWavyIcon },
    ],
  },
];

const portfolioBullets = [
  { text: "5+ real projects built during the program", Icon: CodeBlockIcon },
  { text: "Case study written for each project", Icon: BriefcaseIcon },
  { text: "Personal site or shareable profile", Icon: GlobeSimpleIcon },
  { text: "Mentor-reviewed before you graduate", Icon: UserChecksIcon },
];

const salaryBenefits = [
  { Icon: CirclePercent, label: "Paying off debt" },
  { Icon: PiggyBank, label: "Buying a home" },
  { Icon: HandHeart, label: "Supporting family" },
  { Icon: Coins, label: "Greater financial freedom" },
];

const portfolioImages = [
  chrisProject,
  giannisProject,
  kareemProject,
  cryptoProject,
  chrisProjectMobile,
  performanceProject,
  bethProject,
];

const sidebarItems = [
  { id: "career-prep", label: "Career Prep", Icon: ListChecksIcon },
  { id: "portfolio", label: "Portfolio", Icon: SectionBriefcaseIcon },
  { id: "salary", label: "Salary", Icon: SectionMoneyWavyIcon },
  { id: "life-change", label: "Life-Change", Icon: ShieldCheckIcon },
] as const;

export default function StudentOutcomes() {
  const [activeSection, setActiveSection] =
    useState<(typeof sidebarItems)[number]["id"]>("career-prep");
  const [showMobileNav, setShowMobileNav] = useState(false);
  const mobileNavRef = useRef<HTMLDivElement>(null);
  const lockedActiveSectionRef = useRef<
    (typeof sidebarItems)[number]["id"] | null
  >(null);
  const unlockActiveSectionTimerRef = useRef<number | null>(null);

  useEffect(() => {
    const updateActiveSection = () => {
      const bandTop = window.innerHeight * 0.2;
      const bandBottom = window.innerHeight * 0.75;
      const lockedActiveSection = lockedActiveSectionRef.current;

      if (lockedActiveSection) {
        const target = document.getElementById(lockedActiveSection);
        const targetTop = target?.getBoundingClientRect().top ?? 0;

        setActiveSection(lockedActiveSection);

        if (target && Math.abs(targetTop - bandTop) < 28) {
          lockedActiveSectionRef.current = null;
          if (unlockActiveSectionTimerRef.current) {
            window.clearTimeout(unlockActiveSectionTimerRef.current);
            unlockActiveSectionTimerRef.current = null;
          }
        }
      }

      const currentSection = sidebarItems.reduce<{
        id: (typeof sidebarItems)[number]["id"];
        overlap: number;
      }>(
        (current, item) => {
          const element = document.getElementById(item.id);
          if (!element) return current;

          const rect = element.getBoundingClientRect();
          const overlap = Math.max(
            0,
            Math.min(rect.bottom, bandBottom) - Math.max(rect.top, bandTop),
          );

          return overlap >= current.overlap
            ? { id: item.id, overlap }
            : current;
        },
        { id: sidebarItems[0].id, overlap: 0 },
      );

      if (!lockedActiveSectionRef.current) {
        setActiveSection(currentSection.id);
      }

      const firstSection = document.getElementById(sidebarItems[0].id);
      const lastSection = document.getElementById(
        sidebarItems[sidebarItems.length - 1].id,
      );

      if (firstSection && lastSection) {
        const top = firstSection.getBoundingClientRect().top;
        const bottom = lastSection.getBoundingClientRect().bottom;
        setShowMobileNav(top < window.innerHeight * 0.72 && bottom > 96);
      }
    };

    updateActiveSection();
    window.addEventListener("scroll", updateActiveSection, { passive: true });
    window.addEventListener("resize", updateActiveSection);

    return () => {
      window.removeEventListener("scroll", updateActiveSection);
      window.removeEventListener("resize", updateActiveSection);
      if (unlockActiveSectionTimerRef.current) {
        window.clearTimeout(unlockActiveSectionTimerRef.current);
      }
    };
  }, []);

  useEffect(() => {
    const activeTab = document.getElementById(
      `student-outcomes-mobile-tab-${activeSection}`,
    );

    activeTab?.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "center",
    });
  }, [activeSection]);

  const scrollToSection = (id: (typeof sidebarItems)[number]["id"]) => {
    const target = document.getElementById(id);
    if (!target) return;
    lockedActiveSectionRef.current = id;
    if (unlockActiveSectionTimerRef.current) {
      window.clearTimeout(unlockActiveSectionTimerRef.current);
    }
    unlockActiveSectionTimerRef.current = window.setTimeout(() => {
      lockedActiveSectionRef.current = null;
      unlockActiveSectionTimerRef.current = null;
    }, 1100);
    setActiveSection(id);
    const top =
      target.getBoundingClientRect().top +
      window.scrollY -
      window.innerHeight * 0.2;
    window.scrollTo({ top, behavior: "smooth" });
  };

  const scrollMobileNav = (direction: "prev" | "next") => {
    mobileNavRef.current?.scrollBy({
      left: direction === "prev" ? -160 : 160,
      behavior: "smooth",
    });
  };

  return (
    <section className="py-16">
      <div className="mx-auto w-full max-w-8xl px-4 md:px-6 lg:px-8">
        <h2 className="text-[44px] font-semibold leading-[1.06] tracking-[-0.03em] text-[#1b1d22] sm:text-[52px]">
          How our students land their{" "}
          <span className="text-primary">dream roles</span>
        </h2>

        <div className="mt-7 grid grid-cols-1 gap-4 lg:grid-cols-[180px_1fr]">
          <div
            className={`fixed inset-x-4 bottom-4 z-50 rounded-[8px] border border-[#dcdcdc] bg-white px-2 py-2 shadow-[0_1px_4px_rgba(16,24,40,0.14)] transition-all duration-300 ease-out lg:hidden ${
              showMobileNav
                ? "translate-y-0 opacity-100"
                : "pointer-events-none translate-y-6 opacity-0"
            }`}
          >
            <div className="flex items-center gap-1">
              <button
                type="button"
                onClick={() => scrollMobileNav("prev")}
                aria-label="Previous outcome section"
                className="flex h-9 w-8 shrink-0 items-center justify-center text-[#111]"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>

              <div
                ref={mobileNavRef}
                className="min-w-0 flex-1 snap-x overflow-x-auto [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
              >
                <div className="mx-auto flex w-max items-center gap-6">
                  {sidebarItems.map(({ Icon, ...item }) => {
                    const isActive = activeSection === item.id;

                    return (
                      <button
                        id={`student-outcomes-mobile-tab-${item.id}`}
                        key={item.id}
                        type="button"
                        onClick={() => scrollToSection(item.id)}
                        className={`flex shrink-0 snap-center flex-col items-center gap-1 text-[16px] font-semibold leading-tight transition-colors ${
                          isActive ? "text-primary" : "text-[#1f2229]"
                        }`}
                      >
                        <Icon className="h-5 w-5 shrink-0" />
                        <span>{item.label}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              <button
                type="button"
                onClick={() => scrollMobileNav("next")}
                aria-label="Next outcome section"
                className="flex h-9 w-8 shrink-0 items-center justify-center text-[#111]"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          </div>

          <aside className="hidden self-stretch rounded-2xl bg-primary-bg px-4 py-4 text-sm lg:sticky lg:top-24 lg:block lg:self-start">
            <ul className="space-y-4 text-[#1f2229]">
              {sidebarItems.map(({ Icon, ...item }) => (
                <li key={item.id}>
                  <button
                    type="button"
                    onClick={() => scrollToSection(item.id)}
                    className={`flex items-center gap-2 text-left text-[16px] font-semibold transition-colors ${
                      activeSection === item.id
                        ? "text-primary"
                        : "text-[#1f2229]"
                    }`}
                  >
                    <Icon className="h-6 w-6 shrink-0" />
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </aside>

          <div className="min-w-0 space-y-4">
            <div id="career-prep" className="scroll-mt-28 space-y-4">
              <div className="rounded-2xl bg-white p-4 md:p-7">
                <h3 className="text-[24px] font-semibold leading-tight text-[#1a1c22] md:text-[40px] md:font-medium">
                  By the time you graduate, you&apos;ll be really good.
                </h3>
                <p className="mt-3 max-w-3xl text-[18px] leading-7 text-[#666971] md:text-[20px]">
                  Our goal is to help our students land not just one job offer,
                  but multiple - so they can choose the company that fits them
                  best. Here&apos;s how we achieve that:
                </p>

                <div className="mt-8 grid grid-cols-1 gap-8 md:mt-6 md:grid-cols-3 md:gap-5">
                  {rolePrep.map((item, index) => (
                    <article key={item.title} className="rounded-xl">
                      {/* Badge row: on mobile the title is inline; on desktop a line extends after the badge */}
                      <div className="flex items-center gap-3">
                        <span className="inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary text-[16px] font-semibold text-white md:h-10 md:w-10 md:text-[24px]">
                          {index + 1}
                        </span>
                        {/* Horizontal accent line — desktop only */}
                        <div className="hidden h-px flex-1 bg-primary/35 md:block" />
                        {/* Step title — mobile only, sits inline with badge */}
                        <h4 className="flex-1 text-[20px] font-semibold text-[#111] md:hidden">
                          {item.title}
                        </h4>
                      </div>
                      {/* Step title — desktop only, sits below badge + line */}
                      <h4 className="mt-5 hidden text-[28px] font-medium text-[#1c1f26] md:block">
                        {item.title}
                      </h4>
                      <ul className="mt-3 space-y-3 md:mt-4">
                        {item.bullets.map(({ text, Icon }) => (
                          <li
                            key={text}
                            className="flex items-center gap-2 text-[16px] font-semibold text-[#111]"
                          >
                            <Icon className="h-5 w-5 shrink-0 text-primary" />
                            <span>{text}</span>
                          </li>
                        ))}
                      </ul>
                    </article>
                  ))}
                </div>
              </div>

              {/* Desktop testimonial — dark horizontal panel */}
              <div className="hidden flex-col items-start gap-8 rounded-[24px] bg-[#111] p-10 text-white md:flex md:flex-row md:items-center">
                <p className="flex-1 text-[24px] leading-[1.5] text-white">
                  &ldquo;The tactics the team recommend are proven to work. I
                  got multiple interviews within a few days of applying&rdquo;
                </p>
                <div className="flex shrink-0 items-center gap-6 md:w-[362px]">
                  <Image
                    src={michael}
                    alt="Michael Ignat"
                    className="h-16 w-16 shrink-0 rounded-[12px] object-cover"
                  />
                  <p className="text-[20px] leading-[1.5] text-white/70">
                    Michael Ignat, Software Engineering Program
                  </p>
                </div>
              </div>
            </div>

            <div id="portfolio" className="min-w-0 scroll-mt-28">
              <div className="mt-10 flex flex-col gap-10 lg:flex-row lg:items-start lg:gap-12">
                <div className="shrink-0 lg:w-[550px]">
                  <h3 className="text-[24px] font-semibold leading-tight text-[#111] lg:text-[36px] lg:font-medium">
                    Don&apos;t just say you have job-ready skills.&nbsp;
                    Showcase them.
                  </h3>
                  <p className="mt-3 text-[18px] leading-[1.5] text-[#111]/70 md:mt-4 md:text-[20px] md:leading-7">
                    By the time you graduate, you&apos;ll have a competitive
                    portfolio of real projects - ready to share with any
                    employer from day one.
                  </p>
                </div>

                <div className="flex-1">
                  <p className="text-[18px] leading-[1.5] text-[#111]/70 md:text-[20px] md:leading-7">
                    What&apos;s in your portfolio:
                  </p>
                  <ul className="mt-3 flex flex-col space-y-3 md:mt-4">
                    {portfolioBullets.map(({ text, Icon }) => (
                      <li
                        key={text}
                        className="flex items-start gap-2 text-[16px] font-semibold text-[#111]"
                      >
                        <Icon className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                        <span>{text}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-6 h-[440px] w-full min-w-0 overflow-hidden rounded-2xl bg-[#111]">
                <div
                  className="flex h-full w-max items-center gap-5 py-[70px]"
                  style={{ animation: "portfolioMarquee 25s linear infinite" }}
                >
                  {[0, 1].map((group) => (
                    <div key={group} className="flex h-full shrink-0 gap-5">
                      {portfolioImages.map((img, i) => (
                        <Image
                          key={`${group}-${i}`}
                          src={img}
                          alt=""
                          className="h-full w-auto shrink-0 rounded-xl object-cover"
                        />
                      ))}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div id="salary" className="mt-20 scroll-mt-28">
              <h2 className="text-[36px] font-medium leading-tight tracking-[-0.03em] text-[#111] md:text-[56px]">
                The kind of life that{" "}
                <span className="text-primary">our students unlock</span>
              </h2>

              <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-[1fr_400px]">
                <article className="flex flex-col gap-10 rounded-2xl bg-white p-4 md:gap-8 md:p-10">
                  <div className="flex flex-col gap-3">
                    <h3 className="text-[24px] font-semibold leading-tight text-black md:text-[36px] md:font-medium">
                      Welcome to a new income bracket.
                    </h3>
                    <div className="text-[18px] leading-[1.5] text-black/70 md:text-[20px] md:leading-7">
                      <p>
                        Our career coaches help you target the right roles and
                        negotiate confidently so your first offer reflects what
                        you&apos;re actually worth.
                      </p>
                      <p className="mt-5">
                        Across digital careers, entry-level salaries range from{" "}
                        <strong className="font-bold text-black">
                          $50K&ndash;$85K.
                        </strong>{" "}
                        The kind of jump that turns &apos;getting by&apos; into
                        actually getting ahead.
                      </p>
                      <p className="mt-5">More money means you&apos;re:</p>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2.5">
                    {salaryBenefits.map(({ Icon, label }) => (
                      <span
                        key={label}
                        className="flex items-center gap-2 rounded-full bg-primary/10 px-2 py-1 text-[14px] font-semibold text-[#321207] md:gap-2.5 md:px-6 md:py-2.5 md:text-[18px]"
                      >
                        <Icon className="h-5 w-5 shrink-0 text-primary md:h-6 md:w-6" />
                        <span className="leading-snug">{label}</span>
                      </span>
                    ))}
                  </div>
                </article>

                {/* Desktop-only image — hidden on mobile per Figma */}
                <div className="hidden overflow-hidden rounded-2xl bg-white md:block">
                  <Image
                    src={guyWithLaptop}
                    alt="Student success"
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>

              <div className="mt-4 flex flex-col gap-4 rounded-2xl bg-[#111] p-4 text-white md:p-10">
                <p className="text-[40px] font-medium leading-tight tracking-[-0.03em] md:text-[72px]">
                  15-25%
                </p>
                <p className="text-[18px] leading-[1.5] text-white md:text-[24px] md:leading-7">
                  is the expected salary increase for career-switchers moving
                  into a high-demand digital industry.
                </p>
                <p className="text-[14px] text-white/70">
                  Source: Investopedia, 2025
                </p>
              </div>
            </div>

            <div id="life-change" className="mt-10 scroll-mt-28 space-y-3">
              <article className="rounded-2xl bg-white p-4 md:p-7 lg:p-10">
                <h3 className="text-[24px] font-semibold leading-tight text-black md:text-[36px] md:font-medium">
                  A career switch is life changing.
                </h3>
                <p className="mt-4 max-w-3xl text-[18px] leading-[1.5] text-[#111]/70 md:text-[20px] md:leading-7">
                  If the job that pays your bills is also costing you your
                  evenings, your weekends, and your body &mdash; you&apos;re not
                  alone.
                </p>
                <p className="mt-4 text-[18px] font-semibold leading-[1.5] text-[#111] md:text-[20px] md:font-bold md:leading-7">
                  More than half the people who enrol with us say the same
                  thing:
                </p>
              </article>

              <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
                <article className="relative h-[312px] overflow-hidden rounded-2xl bg-white md:h-auto">
                  <Image
                    src={guyWithLaptopLaughing}
                    alt="Student portrait"
                    className="h-full max-h-[400px] w-full object-cover object-top"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  <div className="absolute bottom-4 left-4 text-white md:bottom-7 md:left-8">
                    <p className="text-[56px] font-medium leading-tight tracking-[-0.03em]">
                      1,667
                    </p>
                    <p className="mt-2 max-w-[350px] text-[16px] leading-6 text-white/90">
                      Students enrolled primarily to change how their life feels
                      — more time, more flexibility, more presence
                    </p>
                  </div>
                </article>

                <article className="flex flex-col gap-6 rounded-2xl bg-white p-4 md:justify-around md:gap-0 md:p-7">
                  <div className="flex flex-col gap-3">
                    <p className="leading-tight text-[#111]">
                      <span className="text-[28px] font-medium md:text-[36px]">
                        2,517
                      </span>
                      <span className="text-[28px] font-medium"> students</span>
                    </p>
                    <p className="text-[16px] leading-6 text-[#111]/70">
                      specifically mentioned family — being more present and
                      having more time at home
                    </p>
                  </div>
                  <hr className="border-[#e5e5e5]" />
                  <div className="flex flex-col gap-3">
                    <p className="leading-tight text-[#111]">
                      <span className="text-[28px] font-medium md:text-[36px]">
                        1,038
                      </span>
                      <span className="text-[28px] font-medium"> students</span>
                    </p>
                    <p className="text-[16px] leading-6 text-[#111]/70">
                      are leaving physically demanding roles
                    </p>
                  </div>
                </article>
              </div>

              <article className="rounded-2xl bg-white p-4 md:px-7 md:py-6 lg:px-10">
                <ul className="space-y-3">
                  <li className="flex items-start gap-2 text-[20px] text-[#111] md:items-center md:gap-3 md:text-[24px]">
                    <SealCheckIcon className="mt-0.5 h-6 w-6 shrink-0 md:mt-0 md:h-7 md:w-7" />
                    <span>
                      Our programs offer careers in the most remote-friendly
                      industries in the world.
                    </span>
                  </li>
                  <li className="flex items-start gap-2 text-[20px] text-[#111] md:items-center md:gap-3 md:text-[24px]">
                    <SealCheckIcon className="mt-0.5 h-6 w-6 shrink-0 md:mt-0 md:h-7 md:w-7" />
                    <span>
                      You&apos;ll start a career that works around your life,
                      not the other way around.
                    </span>
                  </li>
                </ul>
              </article>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
