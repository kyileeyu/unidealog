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
            role: (
              <>
                <li>구독 및 관리 페이지, 워크 스페이스 구조 구축 및 개발</li>
                <li>Stripe 결제 연동 및 크로스 도메인 인증 처리</li>
                <li>
                  Lokalize 기반 국제화(i18n) 툴 세팅 및 9개국어 다국어 적용
                </li>
              </>
            ),
            process: (
              <>
                <li>
                  프로젝트 확장에 대응하기 위해 <strong>FSD 아키텍처</strong>를
                  도입해 도메인 간 관심사 분리
                </li>
                <li>
                  render-props 및 compound-component 디자인 패턴을 사용해
                  재사용성과 응집도 개선
                </li>
              </>
            ),
            result: (
              <>
                <li>주요 테스트 시나리오에 대한 TDD 커버리지 확보</li>
                <li>
                  render-props와 compound-component 패턴 기반의 유연한 설계로
                  프로젝트 기간 내 빈번한 요구사항 변경에 안정적 대응
                </li>
                <li>
                  첫 화면인 로그인 페이지 로딩 속도가 느린 문제를 해결하기 위해,
                  Lazy-Loading과 Dynamic-Import를 적용해 이미지 및 리소스를 동적
                  로딩하고 초기 렌더 성능을 개선
                </li>
                <li>
                  어드민 프로젝트(Account)의 초기 로딩속도{" "}
                  <strong>57% 개선</strong>(469ms → 202ms), 번들 사이즈{" "}
                  <strong>47% 감소</strong>(3mb → 1.6mb)
                </li>
                <li>
                  디자인 시스템 패키지 사이즈를 <strong>3mb → 517kb</strong>로
                  줄여 전체 번들 크기 감소에 기여
                </li>
              </>
            ),
          }}
        />

        <WorkExperienceItem
          title="프론트엔드 옵저버빌리티 시스템 구축"
          period="2026.01 ~ 2026.02 (2개월)"
          techStack="Grafana Faro SDK, OpenTelemetry, React, TypeScript, AWS NLB, K8s"
          details={{
            role: (
              <>
                <li>
                  25개 앱 모노레포 대상 에러 추적 및 성능 모니터링 시스템 단독
                  설계/구현
                </li>
                <li>
                  Grafana Alloy + Faro Receiver 기반 데이터 수집 인프라 구축
                </li>
                <li>React ErrorBoundary 연동 및 분산 트레이싱 SDK 통합</li>
              </>
            ),
            process: (
              <>
                <li>
                  HTTPRoute 방식의 Gateway 네임스페이스 제약 발견 →{" "}
                  <strong>AWS NLB Service</strong> 아키텍처로 재설계
                </li>
                <li>
                  Faro Receiver와 Exporter 간 타입 불일치 문제를{" "}
                  <strong>loki.write</strong>로 변경하여 해결
                </li>
                <li>
                  OpenTelemetry 기반 <strong>End-to-End 분산 트레이싱</strong>{" "}
                  구현으로 프론트엔드-백엔드 트레이스 연결
                </li>
              </>
            ),
            result: (
              <>
                <li>
                  프론트엔드 에러/성능 데이터 <strong>실시간 수집 체계</strong>{" "}
                  구축
                </li>
                <li>
                  Sentry 대비 <strong>월 $26+ 비용 절감</strong> (셀프호스팅)
                </li>
                <li>Core Web Vitals(LCP, FID, CLS) 자동 수집 대시보드 구축</li>
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
