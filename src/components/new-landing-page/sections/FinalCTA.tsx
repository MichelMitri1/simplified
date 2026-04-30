"use client";

import { FormEvent, useEffect, useState } from "react";
import { ArrowRight, CheckCircle } from "lucide-react";
import ScribbleUnderline from "@/components/new-landing-page/ui/ScribbleUnderline";

const benefits = [
  "1:1 mentorship from industry experts",
  "AI-powered learning platform",
  "Access to cutting-edge learning material",
  "Career support and guidance",
  "Flexible, self-paced learning",
  "Start learning anytime",
];

const BOOK_CALL_STORAGE_KEY = "simplified-book-call-submitted";

type Booking = {
  name: string;
  email: string;
};

export default function FinalCTA() {
  const [booking, setBooking] = useState<Booking | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  useEffect(() => {
    const storedBooking = window.localStorage.getItem(BOOK_CALL_STORAGE_KEY);
    if (!storedBooking) return;

    try {
      setBooking(JSON.parse(storedBooking) as Booking);
    } catch {
      setBooking({ name: "there", email: "" });
    }
  }, []);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (isSubmitting || booking) return;

    const formData = new FormData(event.currentTarget);
    const name = String(formData.get("fullName") ?? "").trim();
    const email = String(formData.get("email") ?? "").trim();
    const message = String(formData.get("message") ?? "").trim();
    const form = event.currentTarget;
    const submittedBooking = {
      name: name || "there",
      email,
    };

    setIsSubmitting(true);
    setSubmitError(null);

    try {
      const response = await fetch("/api/book-call", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          fullName: name,
          email,
          message,
        }),
      });

      if (!response.ok) {
        throw new Error("Unable to send booking");
      }

      window.localStorage.setItem(
        BOOK_CALL_STORAGE_KEY,
        JSON.stringify(submittedBooking),
      );
      setBooking(submittedBooking);
      form.reset();
    } catch {
      setSubmitError(
        "Something went wrong while sending this. Please try again.",
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="waitlist"
      className="relative overflow-hidden bg-white py-16 md:py-24"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-[-92px] h-[260px] md:hidden"
      >
        <div className="mobile-ending-animation">
          <div className="mobile-ending-blob mobile-ending-blob-purple" />
          <div className="mobile-ending-blob mobile-ending-blob-peach" />
        </div>
      </div>

      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-[-120px] right-[-120px] hidden h-[420px] w-[760px] md:block"
      >
        <div className="mentors-ending-blob mentors-ending-blob-purple" />
        <div className="mentors-ending-blob mentors-ending-blob-peach" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 md:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:items-start">
          {/* Left */}
          <div className="flex flex-col gap-6 pt-2">
            <div className="flex flex-col gap-5 sm:gap-8">
              <h2 className="max-w-[420px] text-[40px] font-medium leading-[1.08] tracking-[-0.03em] text-[#111] sm:text-[48px] md:text-[56px] md:leading-[1.2]">
                Ready to take the{" "}
                <span className="relative inline-block">
                  next step?
                  <ScribbleUnderline className="pointer-events-none absolute -bottom-2 left-0 hidden w-full sm:block" />
                </span>
              </h2>
              <p className="text-[20px] leading-[1.45] text-[#111]/70 sm:text-[22px] md:text-[24px] md:leading-[1.5]">
                Start your journey to success with us today.
              </p>
            </div>

            <ul className="flex flex-col gap-2.5">
              {benefits.map((benefit) => (
                <li
                  key={benefit}
                  className="flex items-start gap-2 text-[16px] leading-[1.45] text-[#111]/70 sm:text-[18px] md:text-[20px] md:leading-[1.5]"
                >
                  <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-primary md:h-6 md:w-6" />
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right — form card */}
          <article className="rounded-[24px] border border-[#111]/[0.12] bg-white p-6">
            {booking ? (
              <div className="flex min-h-[430px] flex-col justify-center gap-5">
                <div className="flex flex-col gap-5 items-center">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <CheckCircle className="h-7 w-7" />
                  </span>
                  <div className="flex flex-col gap-3 items-center">
                    <h3 className="text-[28px] font-medium leading-tight text-[#111]">
                      You&apos;re booked, {booking.name}.
                    </h3>
                    <p className="text-[18px] leading-[1.5] text-[#111]/70 text-center">
                      Thanks for reaching out! We&apos;ll sending the next steps shortly.
                    </p>
                  </div>
                </div>
              </div>
            ) : (
              <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="fullName"
                    className="text-[16px] leading-[1.5] text-[#1e1e1e]"
                  >
                    Full name
                  </label>
                  <input
                    id="fullName"
                    name="fullName"
                    type="text"
                    required
                    disabled={isSubmitting}
                    placeholder="Enter your full name"
                    className="w-full rounded-[8px] border border-[#d9d9d9] bg-white px-4 py-3 text-[18px] leading-[1.5] text-[#1e1e1e] outline-none transition placeholder:text-[#b3b3b3] focus:border-[#111]/30 disabled:cursor-not-allowed disabled:opacity-60"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="email"
                    className="text-[16px] leading-[1.5] text-[#1e1e1e]"
                  >
                    Email address
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    disabled={isSubmitting}
                    placeholder="your@example.com"
                    className="w-full rounded-[8px] border border-[#d9d9d9] bg-white px-4 py-3 text-[18px] leading-[1.5] text-[#1e1e1e] outline-none transition placeholder:text-[#b3b3b3] focus:border-[#111]/30 disabled:cursor-not-allowed disabled:opacity-60"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="message"
                    className="text-[16px] leading-[1.5] text-[#1e1e1e]"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={7}
                    disabled={isSubmitting}
                    placeholder="Write something down"
                    className="w-full resize-none rounded-[8px] border border-[#d9d9d9] bg-white px-4 py-3 text-[18px] leading-[1.5] text-[#1e1e1e] outline-none transition placeholder:text-[#b3b3b3] focus:border-[#111]/30 disabled:cursor-not-allowed disabled:opacity-60"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="inline-flex h-[51px] w-full items-center justify-center gap-3.5 rounded-full bg-primary pl-4 pr-3 text-[18px] font-semibold text-white transition hover:brightness-95 disabled:cursor-wait disabled:opacity-75"
                >
                  {isSubmitting ? (
                    <>
                      Sending
                      <span className="h-5 w-5 animate-spin rounded-full border-2 border-white/35 border-t-white" />
                    </>
                  ) : (
                    <>
                      Book a call
                      <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-[linear-gradient(90deg,_#E95E32_3.12%,_#BD4F2C_70.19%)]">
                        <ArrowRight className="h-3.5 w-3.5 text-white" />
                      </span>
                    </>
                  )}
                </button>
                {submitError && (
                  <p className="text-center text-[14px] font-medium text-red-600">
                    {submitError}
                  </p>
                )}
              </form>
            )}
          </article>
        </div>
      </div>
    </section>
  );
}
