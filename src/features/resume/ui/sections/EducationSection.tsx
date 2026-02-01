import { ResumeSection } from "./ResumeSection";

export function EducationSection() {
  return (
    <ResumeSection title="학력">
      <div className="flex gap-[16px] items-baseline">
        <p className="text-[17px] font-bold tracking-[-0.02em] shrink-0">
          가톨릭대학교
        </p>
        <div className="flex flex-col gap-[3px]">
          <p className="text-[13px] text-resume-foreground">
            컴퓨터정보공학, 빅데이터 인문경영 복수전공
          </p>
          <p className="text-[12px] text-resume-muted-foreground">2017.03 ~ 2022.08</p>
        </div>
      </div>
    </ResumeSection>
  );
}
