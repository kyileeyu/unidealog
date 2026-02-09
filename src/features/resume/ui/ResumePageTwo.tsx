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
          title="구독 시스템 개발 및 로그인 성능 최적화"
          period="2024.09 ~ 2025.03 (6개월)"
          techStack="React, TypeScript, msw, Jest, TanStack-Query, React-i18next"
          details={{
            problem: (
              <>
                <li>
                  글로벌 SaaS 전환을 위한 <strong>구독 결제 시스템</strong> 신규
                  구축 필요 (Stripe 연동, 9개국어 지원)
                </li>
                <li>
                  기획 확정 전 개발 착수 → 프로젝트 기간 내{" "}
                  <strong>빈번한 요구사항 변경</strong> 예상
                </li>
              </>
            ),
            action: (
              <>
                <li>
                  변경에 유연한 구조 필요 → <strong>FSD 아키텍처</strong>로
                  도메인 분리, compound-component로 조합 가능한 UI 설계
                </li>
                <li>
                  첫 화면 로딩 병목 분석 → 디자인 시스템 번들이 3MB로 과대,
                  Lazy-Loading과 트리쉐이킹으로 최적화
                </li>
              </>
            ),
            result: (
              <>
                <li>
                  요구사항 변경에 <strong>안정적 대응</strong>, 주요 시나리오
                  TDD 커버리지 확보
                </li>
                <li>
                  로그인 페이지 로딩 <strong>57% 개선</strong>(469 → 202ms),
                  디자인 시스템 번들 <strong>83% 감소</strong>(3MB → 517KB)
                </li>
              </>
            ),
          }}
        />

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
          title="프론트엔드 옵저버빌리티 시스템 구축"
          period="2026.01 ~ 2026.02 (2개월)"
          techStack="Grafana Faro SDK, OpenTelemetry, React, TypeScript, AWS NLB, K8s"
          details={{
            problem: (
              <>
                <li>
                  프로덕션 에러 추적 체계 부재 → 장애 발생 시{" "}
                  <strong>원인 파악에 수 시간</strong> 소요
                </li>
                <li>
                  25개 앱 모노레포에서 어떤 앱에서 에러가 발생했는지 파악 어려움
                </li>
              </>
            ),
            action: (
              <>
                <li>
                  Sentry vs 셀프호스팅 검토 → 기존 Grafana 인프라 활용 + 비용
                  절감을 위해 <strong>Faro 선택</strong>
                </li>
                <li>
                  Gateway 네임스페이스 제약 발견 → AWS NLB로 아키텍처 재설계,
                  OpenTelemetry로 프론트-백엔드 트레이스 연결
                </li>
              </>
            ),
            result: (
              <>
                <li>
                  에러 발생 시 <strong>즉시 알림 + 트레이스 추적</strong> 가능,
                  장애 대응 시간 단축
                </li>
                <li>
                  Sentry 대비 <strong>연간 $300+ 비용 절감</strong>, Core Web
                  Vitals 자동 수집 대시보드 구축
                </li>
              </>
            ),
          }}
        />
      </div>

      <OtherExperienceSection />
      <EducationSection />
    </div>
  );
}
