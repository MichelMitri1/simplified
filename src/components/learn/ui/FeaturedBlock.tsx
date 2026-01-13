import Image from "next/image";
import Link from "next/link";
import type { LearnItem } from "../learn.data";
import LearnCard from "./LearnCard";

export default function FeaturedBlock({
  featured,
  secondary,
}: {
  featured: LearnItem;
  secondary: LearnItem[];
}) {
  return (
    <div className="space-y-6">
      {/* Featured row */}
      <div className="relative">
        <div className="relative overflow-hidden">
          <div className="relative h-[210px] w-full sm:h-[450px] max-w-[1000px] ">
            <Image
              src={featured.image}
              alt={featured.title}
              fill
              className="object-cover rounded-xl"
              priority
            />
          </div>
        </div>

        {/* Floating card (right) */}
        <div className="mt-4 sm:absolute sm:right-0 sm:top-1/2 sm:mt-0 sm:w-[320px] sm:-translate-y-1/2">
          <div className="rounded-xl border border-slate-200 bg-white p-8 shadow-sm h-[150px] sm:h-[350px] flex flex-col justify-center">
            <div className="text-[14px] font-semibold tracking-[0.12em] text-slate-500">
              {featured.badge ?? "FEATURED"}
            </div>
            <Link
              href={featured.href}
              className="mt-2 block text-2xl font-semibold leading-7 text-slate-900 hover:underline"
            >
              {featured.title}
            </Link>
            {featured.meta ? (
              <div className="mt-2 text-xs text-slate-500">{featured.meta}</div>
            ) : null}
          </div>
        </div>
      </div>

      {/* Two secondary cards */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        {secondary.map((item) => (
          <LearnCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}
