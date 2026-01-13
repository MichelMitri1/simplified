import ArchivePage, { type ArchivePageConfig } from "@/components/learn/ArchivePage";
import { archiveConfigs } from "@/components/learn/learn.data";
import type { Metadata } from "next";

export const revalidate = 3600;

export const metadata: Metadata = {
  title: {
    absolute: "Learn - Simplified Blog",
  },
};

export default function Page() {
  const config = archiveConfigs["career-advice"] as ArchivePageConfig;
  return <ArchivePage page={1} config={config} />;
}
