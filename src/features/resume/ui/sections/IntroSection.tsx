import { ResumeSection } from "./ResumeSection";

export function IntroSection() {
  return (
    <ResumeSection title="자기 소개">
      <div className="text-[14px] leading-[1.8] text-resume-foreground tracking-[-0.01em]">
        <p>
          인턴부터 3년간 하나의 프로덕트를 성장시켜온 4년차 프론트엔드
          개발자입니다.
        </p>
        <p>
          전사 6개 프로젝트의 인증을 통합하는 Auth SDK, 디자인 시스템
          마이그레이션, 상태관리 재설계 등 공통 기반을 개선하는 작업을
          해왔습니다. 현재 AI 치과용 웹 CAD 솔루션에서 3D 엔진을 제외한 웹
          플랫폼 전반을 담당하고 있습니다.
        </p>
      </div>
    </ResumeSection>
  );
}
