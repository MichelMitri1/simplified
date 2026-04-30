"use client";

import { useState } from "react";

type FAQ = {
  question: React.ReactNode;
  answer: React.ReactNode;
};

function FAQToggleIcon({ isOpen }: { isOpen: boolean }) {
  return (
    <span className="relative h-6 w-6 shrink-0" aria-hidden="true">
      <span className="absolute left-1/2 top-1/2 h-0.5 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#111] transition-transform duration-300 ease-out" />
      <span
        className={`absolute left-1/2 top-1/2 h-4 w-0.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#111] transition-all duration-300 ease-out ${
          isOpen ? "rotate-90 opacity-0" : "rotate-0 opacity-100"
        }`}
      />
    </span>
  );
}

const faqs: FAQ[] = [
  {
    question: "How do your programs guarantee a job?",
    answer: (
      <div className="space-y-0 text-[14px] leading-[1.5] text-[#111]/70">
        <p>
          Our job placement guarantee is built on close alignment with hiring
          partners and hands-on student support. We train students in the exact
          frontend skills companies are actively hiring for, based on real
          employer needs.
        </p>
        <p className="mt-0">
          Every student receives 1-on-1 guidance from a success coach, technical
          advisor, and career coach, covering technical mentorship, interview
          prep, and job-search strategy.
        </p>
        <p className="mt-0">
          To qualify for the job guarantee, students must be:
        </p>
        <ul className="list-disc pl-5">
          <li>Over 18</li>
          <li>Have full U.S. working rights</li>
          <li>Pass the admissions interview, and;</li>
          <li>Complete all program and job-search requirements.</li>
        </ul>
        <p>
          If an eligible graduate does not secure a qualifying role within the
          specified timeframe, we honor the guarantee as outlined in the
          enrollment agreement.
        </p>
      </div>
    ),
  },
  {
    question: "What is your student success rate?",
    answer: (
      <p className="text-[14px] leading-[1.5] text-[#111]/70">
        We track student outcomes continuously and share verified placement
        benchmarks during admissions.
      </p>
    ),
  },
  {
    question: (
      <>
        What do you <em>really</em> mean by 1-on-1 mentorship?
      </>
    ),
    answer: (
      <p className="text-[14px] leading-[1.5] text-[#111]/70">
        You get direct recurring mentor calls, async feedback, portfolio
        reviews, and interview prep tailored to your goals.
      </p>
    ),
  },
  {
    question: "What if I'm a complete beginner with no degree?",
    answer: (
      <p className="text-[14px] leading-[1.5] text-[#111]/70">
        That is exactly who this is designed for. We start from fundamentals and
        build to job-ready projects step by step.
      </p>
    ),
  },
  {
    question: "Can I complete your programs whilst doing full-time work?",
    answer: (
      <p className="text-[14px] leading-[1.5] text-[#111]/70">
        Yes. The curriculum is built for busy schedules with flexible pacing and
        mentor support.
      </p>
    ),
  },
];

export default function FAQSection() {
  const [open, setOpen] = useState<number>(-1);

  return (
    <section className="bg-white py-16 md:py-24">
      <div className="mx-auto w-full max-w-7xl px-4 md:px-6 lg:px-8">
        <h2 className="text-left text-[40px] font-medium leading-[1.08] tracking-[-0.03em] text-[#111] sm:text-[48px] md:text-center md:text-[56px] md:leading-[1.2]">
          Frequently asked questions
        </h2>

        <div className="mx-auto mt-8 flex max-w-[656px] flex-col gap-1">
          {faqs.map((item, idx) => {
            const isOpen = open === idx;
            return (
              <article
                key={idx}
                className="overflow-hidden rounded-[12px] bg-primary-bg"
              >
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? -1 : idx)}
                  className={`flex h-18 md:h-12 w-full items-center gap-2 px-5 py-3 text-left transition-colors duration-300 ${
                    isOpen ? "border-b border-black/5" : ""
                  }`}
                  aria-expanded={isOpen}
                >
                  <span
                    className={`inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-[14px] font-semibold ${
                      isOpen
                        ? "bg-[#111] text-white"
                        : "bg-[#111]/5 text-[#111]"
                    }`}
                  >
                    {idx + 1}
                  </span>
                  <span className="flex-1 text-[18px] font-medium leading-[1.2] tracking-[-0.03em] text-[#111]">
                    {item.question}
                  </span>
                  <FAQToggleIcon isOpen={isOpen} />
                </button>

                <div
                  className={`grid transition-all duration-300 ease-out ${
                    isOpen
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="px-5 pb-4 pt-4">{item.answer}</div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
