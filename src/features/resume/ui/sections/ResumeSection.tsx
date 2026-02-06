import type { ReactNode } from "react";

interface ResumeSectionProps {
  title: string;
  children: ReactNode;
}

export function ResumeSection({ title, children }: ResumeSectionProps) {
  return (
    <section>
      <div className="flex items-center gap-[8px] mb-[16px]">
        <h2 className="text-[20px] font-bold tracking-[-0.02em]">{title}</h2>
      </div>
      <div className="flex flex-col gap-[32px]">{children}</div>
    </section>
  );
}
