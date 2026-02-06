import type { ReactNode } from "react";

interface WorkExperienceDetails {
  role?: ReactNode;
  process?: ReactNode;
  result?: ReactNode;
}

interface WorkExperienceItemProps {
  title: string;
  period: string;
  techStack: string;
  details: WorkExperienceDetails;
}

function DetailSection({
  label,
  children,
}: {
  label: string;
  children: ReactNode;
}) {
  return (
    <div className="grid grid-cols-[32px_1fr]">
      <span className="font-semibold text-resume-foreground">{label}</span>
      <ul className="list-disc pl-[16px] flex flex-col gap-[2px]">
        {children}
      </ul>
    </div>
  );
}

export function WorkExperienceItem({
  title,
  period,
  techStack,
  details,
}: WorkExperienceItemProps) {
  return (
    <div className="flex gap-[16px]">
      {/* 좌측 컬럼 */}
      <div className="w-[220px] shrink-0 flex flex-col gap-[6px]">
        <p className="text-[12px] text-resume-muted-foreground leading-[1.5]">
          {period}
        </p>
        <p className="text-[14.5px] font-bold tracking-[-0.01em] leading-[1.3]">
          {title}
        </p>
        <p className="text-[12px] text-resume-muted-foreground leading-[1.5]">
          {techStack}
        </p>
      </div>

      {/* 우측 컬럼 */}
      <div className="flex-1 text-[12.5px] leading-[1.75] text-resume-foreground resume-bullets">
        <div className="flex flex-col gap-[10px]">
          {details.role && (
            <DetailSection label="역할">{details.role}</DetailSection>
          )}
          {details.process && (
            <DetailSection label="과정">{details.process}</DetailSection>
          )}
          {details.result && (
            <DetailSection label="성과">{details.result}</DetailSection>
          )}
        </div>
      </div>
    </div>
  );
}
