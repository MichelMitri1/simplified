import type { LearnItem } from "../learn.data";
import LearnCard from "./LearnCard";
import LearnCardBig from "./LearnCardBig";
import SectionHeader from "./SectionHeader";

type Layout = "grid4" | "grid3" | "grid2";

const gridClass: Record<Layout, string> = {
  grid4: "grid grid-cols-2 gap-x-6 gap-y-8 sm:grid-cols-4",
  grid3: "grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-3",
  grid2: "grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-2",
};

export default function Section({
  title,
  seeAllHref,
  layout,
  items,
  bigCards = false,
}: {
  title: string;
  seeAllHref: string;
  layout: Layout;
  items: LearnItem[];
  bigCards?: boolean;
}) {
  return (
    <section>
      <SectionHeader title={title} seeAllHref={seeAllHref} />

      <div className={gridClass[layout]}>
        {items.map((item) =>
          bigCards ? (
            <LearnCardBig key={item.id} item={item} />
          ) : (
            <LearnCard key={item.id} item={item} />
          )
        )}
      </div>
    </section>
  );
}
