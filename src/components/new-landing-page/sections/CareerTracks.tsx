"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import {
  CalendarCheckIcon,
  MoneyWavyIcon,
  SparkleIcon,
  UserChecksIcon,
} from "@/components/new-landing-page/icons/student-outcomes";
import jose from "@/assets/jose.png";
import michael from "@/assets/michael.png";
import vuvu from "@/assets/vuvu.png";

type TrackKey = "software" | "marketing" | "sales";

const tracks: Record<
  TrackKey,
  {
    tab: string;
    title: string;
    traits: string[];
    buildingLabel: string;
    building: string[];
    quote: string;
    person: string;
    program: string;
    avatar: typeof jose;
    salary: string;
    months: string;
    hired: string;
  }
> = {
  software: {
    tab: "Software Engineering",
    title: "Software Engineering",
    traits: ["Problem Solver", "Detail Orientated", "Logical by Nature"],
    buildingLabel: "What you'll be building",
    building: [
      "Interactive Websites",
      "Custom component library",
      "Real-world Applications",
      "API Integrations",
    ],
    quote:
      "The learning environment is incredibly supportive and motivating. The instructors and community members are amazing.",
    person: "Christopher Hawkins",
    program: "Software Engineering Program",
    avatar: jose,
    salary: "$78,000",
    months: "7 months",
    hired: "86%",
  },
  marketing: {
    tab: "Digital Marketing",
    title: "Digital Marketing",
    traits: ["Creative", "Audience Focused", "Data Informed"],
    buildingLabel: "What you'll be creating",
    building: [
      "Multi-channel campaigns",
      "Ad Scripts",
      "Custom Avatars",
      "SEO Strategy",
    ],
    quote:
      "I landed my first remote role after building campaigns I could actually show in interviews.",
    person: "Lana Stewart",
    program: "Digital Marketing Program",
    avatar: michael,
    salary: "$64,000",
    months: "6 months",
    hired: "82%",
  },
  sales: {
    tab: "Digital Sales",
    title: "Digital Sales",
    traits: ["People Person", "Resilient", "Competitive"],
    buildingLabel: "What you'll be mastering",
    building: [
      "Personal Sales Playbook",
      "Cold Outreach Strategy",
      "Email Pipeline Build",
      "Closing Tactics",
    ],
    quote:
      "The role-play sessions and feedback gave me confidence. I closed my first offer in under a month.",
    person: "Aaron Miles",
    program: "Digital Sales Program",
    avatar: vuvu,
    salary: "$71,000",
    months: "5 months",
    hired: "84%",
  },
};

const trackGradients: Record<TrackKey, string> = {
  software: "rgba(96,50,233,0.16)",
  marketing: "#fcf3e7",
  sales: "#e6fcea",
};

const trackAccentColors: Record<TrackKey, string> = {
  software: "#6032E9",
  marketing: "#F2B705",
  sales: "#2EB85C",
};

export default function CareerTracks() {
  const [active, setActive] = useState<TrackKey>("software");
  const data = tracks[active];
  const gradientColor = trackGradients[active];
  const accentColor = trackAccentColors[active];
  const scrollToWaitlist = () => {
    document
      .getElementById("waitlist")
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section
      id="career-tracks"
      className="scroll-mt-28 bg-white py-16 md:py-24"
    >
      <div className="mx-auto w-full max-w-7xl px-4 md:px-6 lg:px-8">
        <h2 className="text-center text-[44px] font-medium leading-tight tracking-[-0.03em] text-[#111] sm:text-[56px]">
          Digital Careers are for everyone.
        </h2>

        <div className="mt-8 rounded-[32px] bg-primary-bg p-2">
          {/* ── Tabs ── */}
          {/* Mobile: vertical stacked list. Desktop: horizontal row of tab handles. */}
          <div className="flex flex-col gap-0 md:flex-row md:items-end md:justify-center md:px-1 md:pt-1">
            {(Object.keys(tracks) as TrackKey[]).map((key) => (
              <button
                key={key}
                type="button"
                onClick={() => setActive(key)}
                className={`h-14 w-full cursor-pointer px-4 text-center text-[20px] font-medium transition-colors whitespace-nowrap md:w-auto md:px-7 ${
                  active === key
                    ? "rounded-[16px] bg-white text-primary md:rounded-b-none md:rounded-t-[16px]"
                    : "text-[#111] hover:text-primary/70"
                }`}
              >
                {tracks[key].tab}
              </button>
            ))}
          </div>

          {/* ── Content panel ── */}
          <div
            className="rounded-[24px] bg-white p-4 md:p-7 lg:p-10"
            style={{
              backgroundImage: `linear-gradient(to bottom, white 48%, ${gradientColor} 100%)`,
            }}
          >
            {/* Top grid: traits | building | quote(desktop only) */}
            <div className="grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-8">
              {/* Col 1 — Title + Traits */}
              <div className="flex flex-col gap-4 md:gap-6">
                <h3 className="text-[28px] font-medium leading-tight text-[#111] md:text-[40px]">
                  {data.title}
                </h3>
                <ul className="flex flex-col gap-2">
                  {data.traits.map((trait) => (
                    <li
                      key={trait}
                      className="flex items-center gap-2 text-[16px] text-[rgba(17,17,17,0.7)] md:text-[20px] md:text-[#111]"
                    >
                      <SparkleIcon
                        className="h-5 w-5 shrink-0 md:h-6 md:w-6"
                        style={{ color: accentColor }}
                      />
                      <span>{trait}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Col 2 — What you'll be building */}
              <div className="flex flex-col gap-3">
                <p className="text-[16px] text-[rgba(17,17,17,0.7)] md:text-[20px] md:text-[#111111]">
                  {data.buildingLabel}
                </p>
                <div className="flex flex-wrap gap-2">
                  {data.building.map((item) => (
                    <span
                      key={item}
                      className="inline-flex h-9 items-center rounded-full bg-black/[0.04] px-3 text-[14px] font-semibold text-black/90 md:h-10 md:px-5 md:text-[18px]"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              {/* Col 3 — Quote card: desktop only (mobile version rendered after stats) */}
              <div className="hidden flex-col justify-between gap-6 rounded-[16px] bg-white p-6 shadow-sm ring-1 ring-black/[0.06] md:flex">
                <p className="text-[18px] leading-7 text-[#111]">
                  &ldquo;{data.quote}&rdquo;
                </p>
                <div className="flex items-center gap-3">
                  <Image
                    src={data.avatar}
                    alt={data.person}
                    className="h-9 w-9 rounded-[4px] object-cover"
                  />
                  <p className="text-[16px] leading-5 text-[#111]/60">
                    {data.person},
                    <br />
                    {data.program}
                  </p>
                </div>
              </div>
            </div>

            {/* Divider */}
            <hr className="my-4 border-[#e5e5e5] md:my-6" />

            {/* Stats */}
            {/* Mobile: salary full-width, months + hired side-by-side.
                Desktop: three equal columns (existing sm:grid-cols-3 layout). */}
            <div className="flex flex-col gap-4 md:grid md:grid-cols-3 md:gap-6">
              {/* Salary — always its own row on mobile */}
              <div className="flex flex-col gap-2 md:gap-2.5">
                <p className="text-[28px] font-medium leading-tight text-[#111] md:text-[40px]">
                  {data.salary}
                </p>
                <p className="flex items-center gap-1.5 text-[14px] text-[#111] md:gap-2 md:text-[20px]">
                  <MoneyWavyIcon className="h-[18px] w-[18px] shrink-0 text-[#111]/70 md:h-6 md:w-6" />
                  Average starting salary
                </p>
              </div>

              {/* Months + Hired: flex row on mobile (side-by-side), display:contents on
                  desktop so each child becomes its own grid cell. */}
              <div className="flex gap-6 md:contents">
                <div className="flex flex-1 flex-col gap-2 md:gap-2.5">
                  <p className="text-[28px] font-medium leading-tight text-[#111] md:text-[40px]">
                    {data.months}
                  </p>
                  <p className="flex items-center gap-1.5 text-[14px] text-[#111] md:gap-2 md:text-[20px]">
                    <CalendarCheckIcon className="h-[18px] w-[18px] shrink-0 text-[#111]/70 md:h-6 md:w-6" />
                    To job-ready
                  </p>
                </div>
                <div className="flex flex-1 flex-col gap-2 md:gap-2.5">
                  <p className="text-[28px] font-medium leading-tight text-[#111] md:text-[40px]">
                    {data.hired}
                  </p>
                  <p className="flex items-center gap-1.5 text-[14px] text-[#111] md:gap-2 md:text-[20px]">
                    <UserChecksIcon className="h-[18px] w-[18px] shrink-0 text-[#111]/70 md:h-6 md:w-6" />
                    Graduates hired
                  </p>
                </div>
              </div>
            </div>

            {/* Quote — mobile only, appears after stats */}
            <div className="block md:hidden">
              <hr className="my-4 border-[#e5e5e5]" />
              <div className="flex flex-col gap-6">
                <p className="text-[18px] leading-[1.5] text-[#111]">
                  &ldquo;{data.quote}&rdquo;
                </p>
                <div className="flex items-center gap-3">
                  <Image
                    src={data.avatar}
                    alt={data.person}
                    className="h-9 w-9 rounded-[4px] object-cover"
                  />
                  <p className="text-[14px] leading-5 text-[#111]/60">
                    {data.person},
                    <br />
                    {data.program}
                  </p>
                </div>
              </div>
            </div>

            {/* Divider before CTAs */}
            <hr className="my-4 border-[#e5e5e5] md:my-6" />

            {/* CTAs */}
            {/* Mobile: stacked full-width, Book a call first.
                Desktop: horizontal row, Learn more first (existing order). */}
            <div className="flex flex-col gap-2.5 md:flex-row md:flex-wrap">
              {/* Book a call — first on mobile, second on desktop */}
              <button
                type="button"
                onClick={scrollToWaitlist}
                className="inline-flex h-12 w-full items-center justify-center gap-3 rounded-full bg-primary pl-5 pr-3 text-[18px] font-semibold text-white transition hover:brightness-95 md:order-2 md:w-auto md:justify-start"
              >
                Book a call
                <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-[linear-gradient(90deg,_#E95E32_3.12%,_#BD4F2C_70.19%)]">
                  <ArrowRight className="h-3.5 w-3.5 text-white" />
                </span>
              </button>
              {/* Learn more — second on mobile, first on desktop */}
              <button
                type="button"
                className="h-12 w-full rounded-full bg-white px-5 text-[18px] font-semibold text-[#111] transition hover:bg-[#f5f5f5] md:order-1 md:w-auto"
              >
                Learn more
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
