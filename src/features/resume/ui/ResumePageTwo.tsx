import {
  WorkExperienceItem,
  OtherExperienceSection,
  EducationSection,
} from "./sections";

export function ResumePageTwo() {
  return (
    <div className="w-[210mm] h-[297mm] bg-white text-resume-foreground px-[48px] py-[44px] print:shadow-none flex flex-col gap-[32px] overflow-hidden">
      <div className="flex flex-col gap-[28px]">
        <WorkExperienceItem
          title="구독 시스템 아키텍처 설계 및 Stripe 결제 연동"
          period="2024.09 ~ 2025.03 (6개월)"
          techStack="React 18, TypeScript, TanStack-Query, Stripe, Context API"
          decisions={[
            {
              title: "FSD 아키텍처 도입 및 도메인 분리",
              description:
                "타입별 폴더 구조의 확장성 한계를 해결하기 위해 Feature-Sliced Design을 도입하여 7개 독립 모듈로 분리하고, 신규 feature 개발 시간 30% 단축 및 코드 리뷰 효율성을 향상시켰습니다.",
            },
            {
              title: "Compound Component 패턴 기반 UI 설계",
              description:
                "복잡한 구독 UI의 props drilling 문제를 해결하기 위해 Compound Component + Context 패턴을 도입하여, 기획 변경 대응 시간 50% 단축 및 컴포넌트 조합만으로 유연한 페이지 구성이 가능해졌습니다.",
            },
            {
              title: "Stripe 결제 연동 및 에러 처리 표준화",
              description:
                "7개 Stripe 에러 타입을 i18n 키로 매핑하고 MSW로 결제 플로우를 모킹하여, 결제 관련 고객 문의 40% 감소 및 QA 테스트 시간 60% 단축을 달성했습니다.",
            },
          ]}
        />
        <WorkExperienceItem
          title="글로벌 서비스 구축 및 성능 최적화"
          period="2024.09 ~ 2025.03 (6개월)"
          techStack="React-i18next, Lokalise, MSW, Jest, Webpack, Lazy Loading"
          decisions={[
            {
              title: "11개 언어 국제화(i18n) 시스템 구축",
              description:
                "i18next + Lokalise 연동 워크플로우를 구축하고 ICU MessageFormat을 적용하여 11개 언어 400+ 번역 키를 지원하고, 번역가/PM이 직접 수정 가능하게 하여 개발자 병목을 제거했습니다.",
            },
            {
              title: "초기 로딩 성능 57% 개선",
              description:
                "Lazy Loading, Code Splitting, Tree Shaking을 적용하여 초기 로딩 469ms → 202ms(57% 개선), 번들 3MB → 1.6MB(47% 감소), 디자인 시스템 3MB → 517KB(83% 감소)를 달성했습니다.",
            },
            {
              title: "MSW 기반 TDD 테스트 환경 구축",
              description:
                "MSW로 API 모킹 환경을 구축하고 feature별 __mocks__ 디렉토리로 테스트 데이터를 관리하여, 39개 테스트 파일로 주요 시나리오 커버리지를 확보하고 배포 전 버그를 조기 발견했습니다.",
            },
          ]}
        />
      </div>

      <OtherExperienceSection />
      <EducationSection />
    </div>
  );
}
