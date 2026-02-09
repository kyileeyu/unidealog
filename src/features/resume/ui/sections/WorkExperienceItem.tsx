interface Decision {
  title: string;
  description: string;
}

interface WorkExperienceItemProps {
  title: string;
  period: string;
  techStack: string;
  decisions: Decision[];
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
        <div className="flex flex-col gap-[10px]">
          {decisions.map((decision, index) => (
            <DecisionItem key={index} decision={decision} />
          ))}
        </div>
      </div>
    </div>
  );
}
