"use client";

import { useState } from "react";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import adrian from "@/assets/mentors/Adrian.png";
import batool from "@/assets/mentors/Batool.png";
import frank from "@/assets/mentors/Frank.png";
import jose from "@/assets/mentors/Jose.png";
import kat from "@/assets/mentors/Kat.png";
import khosro from "@/assets/mentors/Khosro.png";
import matthew from "@/assets/mentors/Matthew.png";
import ray from "@/assets/mentors/Ray.png";
import victor from "@/assets/mentors/Victor.png";
import wandag from "@/assets/mentors/Wandag.png";
import ximena from "@/assets/mentors/Ximena.png";
import zreika from "@/assets/mentors/Zreika.png";

const mentors = [
  {
    role: "Head of Customer Success",
    name: "Mohamed Zreika",
    desc: "Leads the team supporting students from onboarding to graduation, specializing in building scalable systems and coaching teams to deliver fast, high-quality support.",
    image: zreika,
    bg: "#d0d4c7",
  },
  {
    role: "Mentor Manager",
    name: "Kat Kowalska",
    desc: "Full Stack Developer with over four years of experience, Kat transitioned from chemical engineering and has delivered development solutions for major governmental clients. She now leads and trains teams as a Mentor Manager.",
    image: kat,
    bg: "#d4c7d0",
  },
  {
    role: "Mentor",
    name: "Khosro Shariatzadeh",
    desc: "Frontend Developer passionate about helping students overcome roadblocks.",
    image: khosro,
    bg: "#c8d4c7",
  },
  {
    role: "Mentor",
    name: "Batool Al Salman",
    desc: "Data student at UTS with Frontend Experience at KPMG and beyond.",
    image: batool,
    bg: "#c7ced4",
  },
  {
    role: "Mentor",
    name: "Adrian Garbowski",
    desc: "Self-taught Full Stack Developer since age 10, now studying Computer Science.",
    image: adrian,
    bg: "#c7c7d4",
  },
  {
    role: "Mentor",
    name: "Victor Vasconcelos",
    desc: "Frontend Developer specializing in React, TypeScript, and core UI systems.",
    image: victor,
    bg: "#c7d3d4",
  },
  {
    role: "Mentor",
    name: "Jose Hernandez",
    desc: "Self-taught Full Stack Developer for 4+ years with production experience.",
    image: jose,
    bg: "#d4d0c7",
  },
  {
    role: "Mentor",
    name: "Jonathan Wandag",
    desc: "Simplified.org alum who pivoted to code from 15+ years in the trades.",
    image: wandag,
    bg: "#d4c7cb",
  },
  {
    role: "Mentor",
    name: "Ray Li",
    desc: "Full Stack Developer who has trained 500+ students to become job-ready.",
    image: ray,
    bg: "#c7d4c8",
  },
  {
    role: "Mentor",
    name: "Franklin Riera",
    desc: "Full Stack Developer with professional experience at Cal.com and startups.",
    image: frank,
    bg: "#c7cfd4",
  },
  {
    role: "Mentor Leader",
    name: "Matthew Secondi",
    desc: "Full Stack Developer & UX Designer focused on clarity and student outcomes.",
    image: matthew,
    bg: "#d0d4c7",
  },
  {
    role: "Mentor",
    name: "Ximena",
    desc: "Ensures every student has a seamless onboarding experience with clear guidance.",
    image: ximena,
    bg: "#d4c7d0",
  },
];

export default function MentorsSection() {
  const [expandedMobileMentor, setExpandedMobileMentor] = useState<
    string | null
  >(null);
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    dragFree: true,
    containScroll: "trimSnaps",
  });

  return (
    <section>
      <div className="relative overflow-hidden bg-primary-bg py-16 md:py-24">
        <div className="relative z-10 mx-auto w-full max-w-7xl pl-4 md:px-6 lg:px-8">
          <div className="flex flex-col gap-6 md:flex-row md:items-start md:gap-8">
            <h2 className="flex-1 text-[36px] font-medium leading-tight tracking-[-0.03em] text-[#111] sm:text-[48px] md:text-[50px]">
              Our team believes everyone deserves a career that fits their life.
            </h2>
            <div className="flex-1 md:pt-2">
              <p className="text-[20px] leading-7 text-[#111]/70 md:text-[24px] md:leading-8">
                Our team is committed to transforming the lives of our students,
                fostering their growth from day one, to their first day in their
                new career.
              </p>
              <p className="mt-1 text-[20px] leading-7 text-[#111]/70 md:text-[24px]">
                Meet our mentors:
              </p>
            </div>
          </div>

          {/* Mobile: horizontal embla carousel */}
          <div className="mt-8 md:hidden">
            <div className="overflow-hidden" ref={emblaRef}>
              <div className="-ml-[14px] flex">
                {mentors.map((mentor) => {
                  const isExpanded = expandedMobileMentor === mentor.name;
                  const hasLongDescription = mentor.desc.length > 78;

                  return (
                    <article
                      key={mentor.name}
                      className="relative ml-[14px] flex h-[416px] w-[282px] shrink-0 justify-center overflow-hidden rounded-[24px]"
                      style={{ backgroundColor: mentor.bg }}
                    >
                      <Image
                        src={mentor.image}
                        alt={mentor.name}
                        sizes="282px"
                        className="h-auto w-auto object-contain object-top translate-y-6"
                      />
                      <div className="absolute bottom-1 left-1 right-1 rounded-[20px] bg-white p-3 transition-all duration-300 ease-out">
                        <p className="text-[16px] font-semibold leading-tight text-[#111]/70">
                          {mentor.role}
                        </p>
                        <p className="mt-0.5 text-[20px] font-semibold leading-tight text-[#111]">
                          {mentor.name}
                        </p>
                        <hr className="my-2 border-[#e5e5e5]" />
                        <p
                          className={`text-[16px] leading-6 text-[#111]/70 ${
                            isExpanded ? "" : "line-clamp-2"
                          }`}
                        >
                          {mentor.desc}
                        </p>
                        {hasLongDescription && (
                          <button
                            type="button"
                            onClick={() =>
                              setExpandedMobileMentor((current) =>
                                current === mentor.name ? null : mentor.name,
                              )
                            }
                            className="mt-1 text-[14px] font-semibold leading-5 text-primary"
                            aria-expanded={isExpanded}
                          >
                            {isExpanded ? "See less" : "See more"}
                          </button>
                        )}
                      </div>
                    </article>
                  );
                })}
              </div>
            </div>

            {/* Prev / Next arrows */}
            <div className="mt-6 flex items-center justify-between pr-4">
              <button
                type="button"
                onClick={() => emblaApi?.scrollPrev()}
                aria-label="Previous mentor"
                className="flex h-14 w-14 items-center justify-center rounded-[12px] border border-black/35 text-[#111] transition active:bg-white/60"
              >
                <ChevronLeft className="h-6 w-6" />
              </button>
              <button
                type="button"
                onClick={() => emblaApi?.scrollNext()}
                aria-label="Next mentor"
                className="flex h-14 w-14 items-center justify-center rounded-[12px] border border-[#1a1a1a] text-[#111] transition active:bg-white/60"
              >
                <ChevronRight className="h-6 w-6" />
              </button>
            </div>
          </div>

          {/* Desktop: existing grid */}
          <div className="mt-8 hidden grid-cols-3 gap-[14px] md:grid lg:grid-cols-4">
            {mentors.map((mentor) => (
              <article
                key={mentor.name}
                className="group relative flex h-[416px] justify-center overflow-hidden rounded-[24px]"
                style={{ backgroundColor: mentor.bg }}
              >
                <Image
                  src={mentor.image}
                  alt={mentor.name}
                  sizes="(max-width: 1023px) 33vw, 25vw"
                  className="h-auto w-56 object-contain object-top transform translate-y-2"
                />
                <div className="absolute bottom-1 left-1 right-1 rounded-[20px] bg-white p-3 transition-all duration-300 ease-out group-hover:shadow-lg group-focus-within:shadow-lg">
                  <p className="text-[16px] font-semibold leading-tight text-[#111]/70">
                    {mentor.role}
                  </p>
                  <p className="mt-0.5 text-[20px] font-semibold leading-tight text-[#111]">
                    {mentor.name}
                  </p>
                  <hr className="my-2 border-[#e5e5e5]" />
                  <p className="max-h-12 overflow-hidden text-[16px] leading-6 text-[#111]/70 transition-[max-height] duration-300 ease-out group-hover:max-h-64 group-focus-within:max-h-32">
                    {mentor.desc}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 bottom-[-86px] z-0 h-[260px] md:hidden"
        >
          <div className="mobile-ending-animation">
            <div className="mobile-ending-blob mobile-ending-blob-purple" />
            <div className="mobile-ending-blob mobile-ending-blob-peach" />
          </div>
        </div>

        <div
          aria-hidden="true"
          className="pointer-events-none absolute bottom-[-72px] left-1/2 z-0 hidden h-[300px] w-full max-w-7xl -translate-x-1/2 overflow-hidden md:bottom-[-96px] md:block md:h-[420px]"
        >
          <div className="mentors-ending-blob mentors-ending-blob-purple" />
          <div className="mentors-ending-blob mentors-ending-blob-peach" />
        </div>
      </div>
    </section>
  );
}
