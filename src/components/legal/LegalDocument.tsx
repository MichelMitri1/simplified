import { ReactNode } from "react";
import Navbar from "@/components/Navbar";

type LegalDocumentProps = {
  title: string;
  children: ReactNode;
};

export default function LegalDocument({ title, children }: LegalDocumentProps) {
  return (
    <main className="min-h-screen bg-primary-bg text-[#111]">
      <Navbar />

      <section className="relative overflow-hidden px-4 pb-16 pt-28 md:px-6 md:pb-24 md:pt-36 lg:px-8">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute right-[-220px] top-[-190px] hidden h-[420px] w-[760px] md:block"
        >
          <div className="mentors-ending-blob mentors-ending-blob-purple" />
          <div className="mentors-ending-blob mentors-ending-blob-peach" />
        </div>

        <div className="relative z-10 mx-auto w-full max-w-[800px] text-[16px] leading-[1.6] text-[#111] md:text-[18px]">
          <h1 className="text-[40px] font-bold leading-tight text-primary md:text-[42px]">
            {title}
          </h1>

          <hr className="mt-2 border-[#e8e8e8]" />

          <div className="legal-document mt-6">{children}</div>
        </div>
      </section>
    </main>
  );
}
