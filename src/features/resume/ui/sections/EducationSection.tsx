import { ResumeSection } from "./ResumeSection";

export function EducationSection() {
  return (
    <ResumeSection title="학력" divider>
      <div className="flex gap-[16px] items-baseline">
        <p className="text-[18px] font-bold shrink-0">가톨릭대학교</p>
        <div className="flex flex-col gap-[2px]">
          <p className="text-[13px]">
            컴퓨터정보공학, 빅데이터 인문경영 복수전공
          </p>
          <p className="text-[12px] text-gray-600">2017.03 ~ 2022.08</p>
        </div>
      </div>
    </ResumeSection>
  );
}
