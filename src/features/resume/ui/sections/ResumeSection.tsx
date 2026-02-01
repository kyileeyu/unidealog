import type { ReactNode } from "react";

interface ResumeSectionProps {
  title: string;
  divider?: boolean;
  children: ReactNode;
}

export function ResumeSection({
  title,
  divider = false,
  children,
}: ResumeSectionProps) {
  return (
    <section>
      <h2 className="text-[21px] font-bold mb-[12px]">{title}</h2>
      {divider && <hr className="border-t border-gray-200 mb-[12px]" />}
      {children}
    </section>
  );
}
