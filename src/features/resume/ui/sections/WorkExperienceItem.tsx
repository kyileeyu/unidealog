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
    <div className="flex gap-[16px]">
      {/* 좌측 컬럼 */}
      <div className="w-[220px] shrink-0 flex flex-col gap-[4px]">
        {team && <p className="text-[12px] text-gray-700">{team}</p>}
        <p className="text-[15px] font-bold">{title}</p>
        <p className="text-[12px]">{yearTech}</p>
        {description && <p className="text-[12px] mt-[2px]">{description}</p>}
        {techStack && (
          <div className="flex flex-col gap-[2px] mt-[4px]">
            <p className="text-[12px] font-semibold">기술 스택</p>
            <p className="text-[12px]">{techStack}</p>
          </div>
        )}
      </div>

      {/* 우측 컬럼 */}
      <div className="flex-1 text-[12px] leading-[1.7]">{details}</div>
    </div>
  );
}
