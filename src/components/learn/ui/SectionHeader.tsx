import Link from "next/link";

export default function SectionHeader({
  title,
  seeAllHref,
}: {
  title: string;
  seeAllHref: string;
}) {
  return (
    <div className="mb-4 flex items-center justify-between">
      <h2 className="text-2xl font-semibold text-slate-900">{title}</h2>
      {seeAllHref && (
        <Link
          href={seeAllHref}
          className="text-xs font-medium text-slate-500 hover:text-slate-700"
        >
          See all
        </Link>
      )}
    </div>
  );
}
