import type { ReactNode } from "react";

export default function Container({ children }: { children: ReactNode }) {
  return (
    <div className="mx-auto w-full max-w-[1300px] px-6 pb-10">
      {children}
    </div>
  );
}
