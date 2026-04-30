"use client";

import Image from "next/image";
import Link from "next/link";

const simplifiedLogo = "/simplifiedLogo.svg";

function InstagramIcon() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M7.99688 2.3999C4.90968 2.3999 2.39844 4.91347 2.39844 8.00146V16.0015C2.39844 19.0887 4.912 21.5999 8 21.5999H16C19.0872 21.5999 21.5984 19.0863 21.5984 15.9983V7.99834C21.5984 4.91114 19.0849 2.3999 15.9969 2.3999H7.99688ZM17.5984 5.5999C18.04 5.5999 18.3984 5.9583 18.3984 6.3999C18.3984 6.8415 18.04 7.1999 17.5984 7.1999C17.1568 7.1999 16.7984 6.8415 16.7984 6.3999C16.7984 5.9583 17.1568 5.5999 17.5984 5.5999ZM11.9984 7.1999C14.6456 7.1999 16.7984 9.3527 16.7984 11.9999C16.7984 14.6471 14.6456 16.7999 11.9984 16.7999C9.35124 16.7999 7.19844 14.6471 7.19844 11.9999C7.19844 9.3527 9.35124 7.1999 11.9984 7.1999ZM11.9984 8.7999C11.1497 8.7999 10.3358 9.13704 9.7357 9.73716C9.13558 10.3373 8.79844 11.1512 8.79844 11.9999C8.79844 12.8486 9.13558 13.6625 9.7357 14.2626C10.3358 14.8628 11.1497 15.1999 11.9984 15.1999C12.8471 15.1999 13.6611 14.8628 14.2612 14.2626C14.8613 13.6625 15.1984 12.8486 15.1984 11.9999C15.1984 11.1512 14.8613 10.3373 14.2612 9.73716C13.6611 9.13704 12.8471 8.7999 11.9984 8.7999Z"
        fill="white"
      />
    </svg>
  );
}

function YouTubeIcon() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M18.3132 4.35742H5.68526C3.20769 4.35742 1.19922 6.36589 1.19922 8.84346V15.1561C1.19922 17.6337 3.20769 19.6421 5.68526 19.6421H18.3132C20.7908 19.6421 22.7992 17.6337 22.7992 15.1561V8.84346C22.7992 6.36589 20.7908 4.35742 18.3132 4.35742ZM15.2793 12.3069L9.37281 15.1239C9.21543 15.199 9.03363 15.0843 9.03363 14.9099V9.09976C9.03363 8.92293 9.2202 8.80832 9.37792 8.88826L15.2844 11.8814C15.46 11.9704 15.457 12.2222 15.2793 12.3069Z"
        fill="white"
      />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M19.9157 2.75H4.08431C3.34778 2.75 2.75 3.34778 2.75 4.08431V19.9157C2.75 20.6522 3.34778 21.25 4.08431 21.25H19.9157C20.6522 21.25 21.25 20.6522 21.25 19.9157V4.08431C21.25 3.34778 20.6522 2.75 19.9157 2.75ZM9.31287 16.7337H7.05819V9.95575H9.31287V16.7337ZM8.18437 9.03075H8.16934C7.41431 9.03075 6.92522 8.51044 6.92522 7.85947C6.92522 7.19462 7.42934 6.68819 8.19941 6.68819C8.97063 6.68819 9.44469 7.19462 9.45972 7.85947C9.45972 8.51044 8.97062 9.03075 8.18437 9.03075ZM17.4344 16.7337H15.182V13.1077C15.182 12.1966 14.8548 11.5745 14.0396 11.5745C13.4176 11.5745 13.0476 11.9942 12.8834 12.3989C12.8256 12.5434 12.8105 12.7458 12.8105 12.9481V16.7337H10.5582C10.5582 16.7337 10.5871 10.5917 10.5582 9.95575H12.8105V10.9154C13.11 10.4529 13.6453 9.79734 14.8409 9.79734C16.3221 9.79734 17.4344 10.7651 17.4344 12.8475V16.7337Z"
        fill="#F2F1EE"
      />
    </svg>
  );
}

const programs = [
  { label: "Software Engineering", href: "#career-tracks" },
  { label: "Digital Marketing", href: "#career-tracks" },
  { label: "Digital Sales", href: "#career-tracks" },
];

const exploreLinks = [
  { label: "How it works", href: "#how-it-works" },
  { label: "Why we're different", href: "#why-us" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Join waitlist", href: "#waitlist" },
];

export default function Footer() {
  return (
    <footer className="bg-[#111] text-white">
      <div className="mx-auto w-full max-w-7xl px-4 md:px-6 lg:px-8">
        <div className="flex flex-col gap-10 py-16 md:flex-row md:items-start md:gap-6">
          {/* Logo + tagline + socials */}
          <div className="flex shrink-0 flex-col gap-4 md:w-[320px]">
            <div className="flex flex-col gap-2">
              <Link href="/" className="inline-flex">
                <Image
                  src={simplifiedLogo}
                  alt="simplified"
                  width={102}
                  height={34}
                />
              </Link>
              <p className="text-[16px] leading-[1.5] text-white/40">
                An education platform designed to help people build real-world
                tech skills.
              </p>
            </div>
            <div className="flex items-center gap-4">
              <a
                href="https://www.instagram.com/frontendsimplifiedcom/"
                aria-label="Instagram"
                className="text-white/60 transition hover:text-white"
              >
                <InstagramIcon />
              </a>
              <a
                href="https://youtube.com/@FESInstitute"
                aria-label="YouTube"
                className="text-white/60 transition hover:text-white"
              >
                <YouTubeIcon />
              </a>
              <a
                href="https://www.linkedin.com/company/frontend-simplified/"
                aria-label="LinkedIn"
                className="text-white/60 transition hover:text-white"
              >
                <LinkedInIcon />
              </a>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-10 md:flex md:gap-6">
            {/* Programs */}
            <div className="flex flex-col gap-[15px]">
              <h3 className="text-[20px] font-semibold leading-[1.5] text-white">
                Programs
              </h3>
              <ul className="flex flex-col gap-3">
                {programs.map((item) => (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      className="text-[16px] leading-[1.5] text-white/40 transition hover:text-white/70"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Explore */}
            <div className="flex flex-col gap-[15px]">
              <h3 className="text-[20px] font-semibold leading-[1.5] text-white">
                Explore
              </h3>
              <ul className="flex flex-col gap-3 md:flex-row md:flex-wrap md:gap-x-8 md:gap-y-3">
                {exploreLinks.map((item) => (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      className="text-[16px] leading-[1.5] text-white/40 transition hover:text-white/70"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between border-t border-white/10 py-5 text-[14px] leading-[1.5] text-white/40">
          <p>© 2026 Simplified.org</p>
          <p>All rights reserved</p>
        </div>
      </div>
    </footer>
  );
}
