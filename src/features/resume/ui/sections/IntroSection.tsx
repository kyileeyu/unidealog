import { ResumeSection } from "./ResumeSection";

export function IntroSection() {
  return (
    <ResumeSection title="자기 소개">
      <div className="text-[14px] leading-[1.8] text-resume-foreground tracking-[-0.01em]">
        <p>
          인턴부터 4년동안 하나의 프로덕트를 성장시켜온 4년차 프론트엔드
          개발자입니다. 전사 Auth SDK 통합, 상태관리 전환, E2E 테스트 구축 등 팀
          전체의 개발 경험을 개선하는 작업을 해왔으며, 현재 AI 치과용 웹 CAD
          솔루션에서 웹 플랫폼 전반을 개발하고 있습니다. 신규 입사자 멘토링 및
          온보딩, 사내 스터디 운영 등 팀 내 학습 문화와 함께 성장하는 환경을
          지향합니다.
        </p>
      </div>
    </ResumeSection>
  );
}
