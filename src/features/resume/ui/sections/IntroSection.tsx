import { ResumeSection } from "./ResumeSection";

export function IntroSection() {
  return (
    <ResumeSection title="자기 소개">
      <div className="flex flex-col gap-[4px] text-[14px] leading-[1.8] text-resume-foreground tracking-[-0.01em]">
        <p>3년간 하나의 프로덕트를 성장시켜온 4년차 프론트엔드 개발자입니다.</p>
        <p>
          신입으로 입사해 현재 11개국 수십 곳의 기업이 실제로 사용하는 B2B2C
          SaaS 제품을 만들어왔습니다. 사용 과정에서 발생한 문제들을 직접
          해결하고, 성능 병목을 찾아 개선하며, 프로덕션 환경에서 안정적으로
          동작하는 시스템을 구축한 경험이 있습니다.
        </p>
      </div>
    </ResumeSection>
  );
}
