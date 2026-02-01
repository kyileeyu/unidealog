import type { ReactNode } from "react";

interface ResumeSectionProps {
  title: string;
  children: ReactNode;
}

export function ResumeSection({
  title,
  children,
}: ResumeSectionProps) {
  return (
    <section>
      <div className="flex items-center gap-[8px] mb-[14px]">
        <div className="w-[3px] h-[20px] bg-resume-foreground rounded-full shrink-0" />
        <h2 className="text-[20px] font-bold tracking-[-0.02em]">{title}</h2>
      </div>
      {children}
    </section>
  );
}
