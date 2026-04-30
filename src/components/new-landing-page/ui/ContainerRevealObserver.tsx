"use client";

import { useEffect } from "react";

const CONTAINER_SELECTOR = [
  "main section article",
  "main section aside",
  'main section [class*="rounded-xl"]',
  'main section [class*="rounded-2xl"]',
  'main section [class*="rounded-[16px]"]',
  'main section [class*="rounded-[20px]"]',
  'main section [class*="rounded-[24px]"]',
  'main section [class*="rounded-[12px]"]',
].join(",");

const SKIPPED_TAGS = new Set([
  "A",
  "BUTTON",
  "IMG",
  "PICTURE",
  "SOURCE",
  "SPAN",
  "SVG",
]);

function shouldReveal(element: Element): element is HTMLElement {
  if (!(element instanceof HTMLElement)) return false;
  if (SKIPPED_TAGS.has(element.tagName)) return false;
  if (element.closest("[data-no-scroll-reveal]")) return false;

  const styles = window.getComputedStyle(element);
  if (styles.position === "fixed" || styles.position === "absolute") {
    return false;
  }

  const rect = element.getBoundingClientRect();
  return rect.width >= 160 && rect.height >= 70;
}

export default function ContainerRevealObserver() {
  useEffect(() => {
    const containers = Array.from(
      document.querySelectorAll(CONTAINER_SELECTOR),
    ).filter(shouldReveal);

    if (containers.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;

          entry.target.classList.add("scroll-reveal-visible");
          observer.unobserve(entry.target);
        });
      },
      {
        rootMargin: "0px 0px -10% 0px",
        threshold: 0.08,
      },
    );

    const sectionCounts = new Map<HTMLElement, number>();

    containers.forEach((container) => {
      const section = container.closest("section") as HTMLElement | null;
      const count = section ? sectionCounts.get(section) ?? 0 : 0;

      if (section) sectionCounts.set(section, count + 1);
      container.style.setProperty(
        "--scroll-reveal-delay",
        `${Math.min(count * 55, 165)}ms`,
      );
      container.classList.add("scroll-reveal");
      observer.observe(container);
    });

    return () => {
      containers.forEach((container) => {
        container.classList.remove("scroll-reveal", "scroll-reveal-visible");
        container.style.removeProperty("--scroll-reveal-delay");
      });
      observer.disconnect();
    };
  }, []);

  return null;
}
