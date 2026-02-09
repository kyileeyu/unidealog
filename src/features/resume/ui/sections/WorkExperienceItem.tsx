import type { ReactNode } from "react";

interface WorkExperienceDetails {
  problem?: ReactNode;
  action?: ReactNode;
  result?: ReactNode;
}

interface Decision {
  title: string;
  description: string;
}

interface WorkExperienceItemProps {
  title: string;
  period: string;
  techStack: string;
  details?: WorkExperienceDetails;
  decisions?: Decision[];
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

function DecisionItem({ decision }: { decision: Decision }) {
  return (
    <div className="flex flex-col gap-[2px]">
      <p className="font-semibold text-resume-foreground">{decision.title}</p>
      <ul className="list-disc pl-[16px]">
        <li>{decision.description}</li>
      </ul>
    </div>
  );
}

export function WorkExperienceItem({
  title,
  period,
  techStack,
  details,
  decisions,
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
        {details && (
          <div className="flex flex-col gap-[10px]">
            {details.problem && (
              <DetailSection label="문제">{details.problem}</DetailSection>
            )}
            {details.action && (
              <DetailSection label="행동">{details.action}</DetailSection>
            )}
            {details.result && (
              <DetailSection label="성과">{details.result}</DetailSection>
            )}
          </div>
        )}
        {decisions && (
          <div className="flex flex-col gap-[10px]">
            {decisions.map((decision, index) => (
              <DecisionItem key={index} decision={decision} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
