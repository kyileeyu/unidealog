import type { ReactNode } from "react";

interface WorkExperienceItemProps {
  team?: string;
  title: string;
  yearTech: ReactNode;
  description?: string;
  techStack?: string;
  details: ReactNode;
}

export function WorkExperienceItem({
  team,
  title,
  yearTech,
  description,
  techStack,
  details,
}: WorkExperienceItemProps) {
  return (
    <div className="flex gap-[20px]">
      {/* 좌측 컬럼 */}
      <div className="w-[200px] shrink-0 flex flex-col gap-[6px] ">
        {team && (
          <p className="text-[11.5px] text-resume-muted-foreground font-medium leading-[1.4]">
            {team}
          </p>
        )}
        <p className="text-[14.5px] font-bold tracking-[-0.01em] leading-[1.3]">
          {title}
        </p>
        <p className="text-[12px] text-resume-muted-foreground leading-[1.5]">{yearTech}</p>
        {description && (
          <p className="text-[12px] text-resume-muted-foreground mt-[2px] leading-[1.5]">
            {description}
          </p>
        )}
        {techStack && (
          <div className="flex flex-col gap-[2px] mt-[4px]">
            <p className="text-[11.5px] font-semibold text-resume-muted-foreground">
              기술 스택
            </p>
            <p className="text-[11.5px] text-resume-muted-foreground leading-[1.5]">
              {techStack}
            </p>
          </div>
        )}
      </div>

      {/* 우측 컬럼 */}
      <div className="flex-1 text-[12.5px] leading-[1.75] text-resume-foreground">
        {details}
      </div>
    </div>
  );
}
