import Image from "next/image";
import Link from "next/link";
import type { LearnItem } from "../learn.data";

export default function LearnCardBig({ item }: { item: LearnItem }) {
  return (
    <article className="group">
      <Link href={item.href} className="block">
        <div className="relative overflow-hidden rounded-xl bg-slate-100">
          <div className="relative h-[170px] w-full sm:h-[300px]">
            <Image
              src={item.image}
              alt={item.title}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-[1.02]"
            />
          </div>
        </div>

        <div className="mt-2">
          <div className="line-clamp-2 text-base font-semibold leading-6 text-slate-900 group-hover:underline">
            {item.title}
          </div>
        </div>
      </Link>
    </article>
  );
}
