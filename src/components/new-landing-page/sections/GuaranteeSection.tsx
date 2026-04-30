"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import refundGuySmiling from "@/assets/refundGuySmiling.png";

const steps = [
  "Once you finish the program, work with your 1:1 mentor to prepare a competitive, job-ready CV and portfolio",
  "Network and apply for relevant roles consistently, keeping track of your progress",
  "If you don't land a role within 12 months, we'll issue you a full refund.",
];

export default function GuaranteeSection() {
  return (
    <section className="py-16">
      <div className="mx-auto w-full max-w-7xl px-4 md:px-6 lg:px-8">
        <div className="relative h-[760px] overflow-hidden rounded-[24px] md:h-[600px]">
          <Image
            src={refundGuySmiling}
            alt="Student success guarantee"
            className="-scale-x-100 h-full w-full object-cover object-top md:object-center"
          />

          <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent_18%,black_60%)] md:bg-[linear-gradient(to_bottom,transparent_35%,black_86%)]" />

          <div className="absolute inset-x-0 bottom-0 flex flex-col items-center gap-6 px-6 pb-8 text-center text-white md:gap-10 md:px-16 md:pb-10">
            <div className="flex flex-col items-center gap-5 md:gap-8">
              <div className="flex flex-col items-start gap-2 text-left md:items-center md:text-center">
                <h2 className="text-[28px] font-medium leading-tight md:text-[40px]">
                  Land the role, or get a <em>refund</em>.
                </h2>
                <p className="max-w-[560px] text-[16px] leading-6 text-white md:text-[20px] md:leading-7">
                  We&apos;re certain that our programs will get you from first
                  lesson to first job. All you need to do is...
                </p>
              </div>

              <div className="grid w-full max-w-4xl grid-cols-1 gap-4 md:grid-cols-3 md:gap-6">
                {steps.map((step, index) => (
                  <div
                    key={step}
                    className="flex flex-row items-start gap-3 text-left md:flex-col md:items-center md:gap-2 md:text-center"
                  >
                    <span className="inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary text-[16px] font-semibold text-white md:h-8 md:w-8 md:text-[20px]">
                      {index + 1}
                    </span>
                    <p className="text-left text-[14px] leading-5 text-white/70 md:text-center md:text-[16px] md:leading-6">
                      {step}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <Link
              href="/job-guarantee"
              className="inline-flex items-center gap-1.5 text-[16px] text-white/70 transition hover:text-white md:text-[18px] md:text-[20px]"
            >
              See how the guarantee works
              <ArrowUpRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
