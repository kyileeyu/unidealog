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
          title="상태관리 아키텍처 재설계"
          period="2025.11 ~ 2026.02 (4개월)"
          techStack="React, TypeScript, Zustand, TanStack Query, Jest"
          details={{
            problem: (
              <>
                <li>
                  페이지 진입 시 <strong>800개 API 요청</strong> 발생 → 저속
                  네트워크에서 사용자 이탈 발생
                </li>
                <li>
                  Redux 슬라이스 간 암묵적 의존성으로 수정 시{" "}
                  <strong>예측 불가능한 사이드이펙트</strong> 빈발
                </li>
              </>
            ),
            action: (
              <>
                <li>
                  전면 재작성 vs 점진적 마이그레이션 중{" "}
                  <strong>후자 선택</strong> (테스트 0개 상태에서 빅뱅은 위험,
                  서비스 중단 불가)
                </li>
                <li>
                  <strong>테스트 183개 선작성</strong>으로 안전망 확보 후, 서버
                  상태(React Query)와 클라이언트 상태(Zustand) 단계적 분리
                </li>
              </>
            ),
            result: (
              <>
                <li>
                  초기 네트워크 요청 <strong>94% 감소</strong>(800 → 50개),
                  슬라이스 50% 감소(12 → 6개)
                </li>
                <li>
                  4개월간 <strong>무중단 마이그레이션</strong> 완료, 이후 상태
                  관련 버그 리포트 0건
                </li>
              </>
            ),
          }}
        />
        <WorkExperienceItem
          title="Auth SDK 모노레포 전환"
          period="2024.03 ~ 2025.04 (7개월)"
          techStack="Pnpm, TypeScript, React, Changesets"
          details={{
            problem: (
              <>
                <li>
                  전사 <strong>6개 프로젝트</strong>가 각자 인증 로직 구현 →
                  토큰 갱신 버그 반복 발생
                </li>
                <li>
                  신규 Electron 앱에서 React Context 사용 불가 → 기존 SDK 적용
                  불가
                </li>
              </>
            ),
            action: (
              <>
                <li>
                  기존 SDK에 어댑터 추가 vs 코어 재설계 중{" "}
                  <strong>후자 선택</strong> (인증은 모든 앱의 기반, 한 번 제대로
                  만들면 장기 유지보수 유리)
                </li>
                <li>
                  HTTP Client 의존성 제거를 위해 인증 로직을 프레임워크 무관하게
                  분리, React 없는 환경 지원을 위해 Event 기반 알림 구조로 전환
                </li>
              </>
            ),
            result: (
              <>
                <li>
                  <strong>6개 프로젝트 인증 통합</strong>, 토큰 갱신 버그 근본
                  해결
                </li>
                <li>
                  신규 프로젝트 온보딩 시간 <strong>2주 → 2일</strong>로 단축
                  (example 패키지 제공)
                </li>
              </>
            ),
          }}
        />
      </ResumeSection>
    </div>
  );
}
