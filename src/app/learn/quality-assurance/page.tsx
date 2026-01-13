import ArchivePage, { type ArchivePageConfig } from "@/components/learn/ArchivePage";
import { archiveConfigs } from "@/components/learn/learn.data";

export const revalidate = 3600;

export default function Page() {
  const config = archiveConfigs["quality-assurance"] as ArchivePageConfig;
  return <ArchivePage page={1} config={config} />;
}
