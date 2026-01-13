import { notFound } from "next/navigation";
import Container from "./ui/Container";
import LearnCard from "./ui/LearnCard";
import Navbar from "../Navbar";
import Footer from "../sections/Footer";
import type { LearnItem } from "./learn.data";

export interface ArchivePageConfig {
  title: string;
  description: string;
  basePath: string;
  pages: LearnItem[][];
}

export default function ArchivePage({
  page,
  config,
}: {
  page: number;
  config: ArchivePageConfig;
}) {
  const pageIndex = page - 1;
  const totalPages = config.pages.length;

  if (pageIndex < 0 || pageIndex >= totalPages) {
    notFound();
  }

  const items = config.pages[pageIndex];

  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navbar />
      <Container>
        <div className="pt-10 pb-12">
          <h1 className="mt-2 text-[36px] font-semibold tracking-tight sm:text-[44px]">
            {config.title}
          </h1>
          <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-500">
            {config.description}
          </p>
        </div>

        <div className="grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => (
            <LearnCard key={item.id} item={item} />
          ))}
        </div>
      </Container>
      <Footer />
    </div>
  );
}
