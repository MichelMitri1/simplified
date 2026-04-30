"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
        {/* Main Footer Content */}
        <div className="py-20 grid grid-cols-2 md:grid-cols-6 gap-10">
          {/* Brand Column */}
          <div className="col-span-2">
            <div className="mb-6">
              <h3 className="text-2xl font-semibold text-white mb-3">
                Simplified.org
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed max-w-sm">
                An education platform designed to help people build real-world
                tech skills.
              </p>
            </div>
          </div>

          {/* Explore Links */}
          <div className="col-span-2 md:col-span-4 text-sm">
            <p className="font-medium text-white mb-4">Explore</p>
            <ul className="flex flex-col space-y-2 md:flex-row md:flex-wrap md:gap-x-6 md:gap-y-2 md:space-y-0">
              <li>
                <a
                  href="#how-it-works"
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                >
                  How it works
                </a>
              </li>
              <li>
                <a
                  href="#programs"
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                >
                  Programs
                </a>
              </li>
              <li>
                <a
                  href="#why-us"
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                >
                  Why we&apos;re different
                </a>
              </li>
              <li>
                <a
                  href="#testimonials"
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                >
                  Testimonials
                </a>
              </li>
              <li>
                <a
                  href="#waitlist"
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                >
                  Join waitlist
                </a>
              </li>
              {/* <li>
                <Link
                  href="/learn"
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                >
                  Learn
                </Link>
              </li> */}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-gray-800 flex justify-center">
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} Simplified.org. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
