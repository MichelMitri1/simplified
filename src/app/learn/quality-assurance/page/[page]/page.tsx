import ArchivePage, { type ArchivePageConfig } from "@/components/learn/ArchivePage";
import { archiveConfigs } from "@/components/learn/learn.data";
import { notFound } from "next/navigation";

export const revalidate = 3600;

type PageProps = {
  params: Promise<{ page: string }>;
};

export default async function Page({ params }: PageProps) {
  const { page } = await params;
  const pageNumber = Number(page);

  if (Number.isNaN(pageNumber) || pageNumber < 1) {
    notFound();
  }

  const config = archiveConfigs["quality-assurance"] as ArchivePageConfig;
  return <ArchivePage page={pageNumber} config={config} />;
}
