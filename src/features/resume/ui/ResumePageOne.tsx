import {
  HeaderSection,
  IntroSection,
  CareerSection,
  ResumeSection,
  WorkExperienceItem,
} from "./sections";

export function ResumePageOne() {
  return (
    <div className="w-[210mm] h-[297mm] bg-white text-resume-foreground px-[48px] py-[44px] print:shadow-none flex flex-col gap-[32px] overflow-hidden">
      <HeaderSection />
      <IntroSection />
      <CareerSection />

      <ResumeSection title="업무 경험">
        <WorkExperienceItem
          title="디자인 시스템 모노레포 전환 및 자동화"
          period="2024.06 ~ 2024.12 (7개월)"
          techStack="React, TypeScript, MUI v7, Turborepo, Figma API, Style Dictionary"
          decisions={[
            {
              title: "외부 npm → 모노레포 마이그레이션",
              description:
                "14개 프로젝트에서 빌드 실패가 빈번하고 수정-배포 사이클이 2일 걸리는 문제를 해결하여, 변경사항 즉시 반영과 버전 일관성을 확보했습니다.",
            },
            {
              title: "Figma 연동 토큰 자동화",
              description:
                "수동 반영으로 인한 디자인-코드 불일치와 4,000 LOC 중복 문제를 Style Dictionary로 자동화하여, 코드 37.5% 감소 및 설정 시간 80% 단축을 달성했습니다.",
            },
            {
              title: "MUI v7 타입 호환성 해결",
              description:
                "52개 타입 에러가 발생했으나 as 단언 금지 원칙을 지키며, 타입 가드 패턴을 도입해 타입 안전성을 확보했습니다.",
            },
          ]}
        />
        <WorkExperienceItem
          title="Auth SDK 모노레포 전환 및 인증 시스템 고도화"
          period="2024.10 ~ 2026.02 (16개월)"
          techStack="TypeScript, React, NX Monorepo, Zustand, Jest, Vitest"
          decisions={[
            {
              title: "외부 npm → 모노레포 마이그레이션",
              description:
                "외부 npm 패키지로 관리되던 Auth SDK를 모노레포에 통합하고, TDD 방식으로 리팩토링하여 12개 앱에서 단일 버전 공유 및 테스트 커버리지 0% → 80% 달성했습니다.",
            },
            {
              title: "CaseLockManager SSE → HTTP Polling 전환",
              description:
                "네트워크 불안정 환경에서 SSE 연결 끊김과 Race Condition 문제를 HTTP Polling 기반으로 전환하여 Lock 관련 버그를 월 15건에서 1~2건으로 90% 감소시켰습니다.",
            },
            {
              title: "JWT → 세션 쿠키 기반 인증 전환",
              description:
                "클라이언트 토큰 관리의 복잡성과 보안 위험을 해결하기 위해 세션 쿠키 방식으로 점진적 마이그레이션하여, HttpOnly 쿠키로 XSS 방어 및 서버 측 즉시 로그아웃을 구현했습니다.",
            },
            {
              title: "EventEmitter 기반 에러 알림 시스템",
              description:
                "React Context에 종속된 ErrorDialog를 Event-driven 구조로 전환하여 순수 JS 모듈에서도 에러 알림이 가능하게 하고, 9개 언어 i18n을 지원했습니다.",
            },
          ]}
        />
      </ResumeSection>
    </div>
  );
}
