import type { ReactNode } from "react";

interface WorkExperienceItemProps {
  title: string;
  yearTech: ReactNode;
  details: ReactNode;
}

export function WorkExperienceItem({
  title,
  yearTech,
  details,
}: WorkExperienceItemProps) {
  return (
    <div className="flex gap-[20px]">
      {/* 좌측 컬럼 */}
      <div className="w-[200px] shrink-0 flex flex-col gap-[6px]">
        <p className="text-[14.5px] font-bold tracking-[-0.01em] leading-[1.3]">
          {title}
        </p>
        <p className="text-[12px] text-resume-muted-foreground leading-[1.5]">{yearTech}</p>
      </div>

      {/* 우측 컬럼 */}
      <div className="flex-1 text-[12.5px] leading-[1.75] text-resume-foreground resume-bullets">
        {details}
      </div>
    </div>
  );
}
