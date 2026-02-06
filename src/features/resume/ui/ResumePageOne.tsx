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
            role: (
              <>
                <li>
                  페이지 진입 시 <strong>200개 이상의 API 요청</strong>이 발생해
                  초기 로딩이 느린 문제 분석 및 해결
                </li>
                <li>
                  Redux에서 서버 데이터와 UI 상태가 혼재되어 있는 구조 개선
                </li>
                <li>
                  슬라이스 간 복잡한 의존성으로 인한 사이드이펙트 문제 해결
                </li>
              </>
            ),
            process: (
              <>
                <li>
                  네트워크 탭 분석으로 불필요한 요청 패턴 파악 후{" "}
                  <strong>서버 상태(React Query)</strong>와{" "}
                  <strong>클라이언트 상태(Zustand)</strong> 분리 설계
                </li>
                <li>
                  썸네일 이미지에 <strong>Intersection Observer</strong> 적용,
                  화면 내 이미지만 요청하도록 개선
                </li>
                <li>
                  React Query의 staleTime/cacheTime 전략으로 동일 데이터 재요청
                  방지
                </li>
              </>
            ),
            result: (
              <>
                <li>
                  초기 네트워크 요청 800개 → 50개로 <strong>94% 감소</strong>
                </li>
                <li>
                  Redux 슬라이스 12개 → 6개로 <strong>50% 감소</strong>
                </li>
                <li>
                  단위 테스트 0개 → <strong>183개</strong> 도입으로 리팩토링
                  안정성 확보
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
            role: (
              <>
                <li>1인 개발로 프로젝트 셋업부터 배포까지 전 과정 주도</li>
              </>
            ),
            process: (
              <>
                <li>
                  기존 Auth SDK는 Axios에 의존적이라 fetch나 ky같은 다른 HTTP
                  Client에 토큰을 주입하기 어려웠음. 인증 로직을{" "}
                  <strong>클래스 기반으로 분리</strong>하여 fetch, ky 등 다양한
                  HTTP Client에서 대응 가능하도록 개선
                </li>
                <li>
                  Error Dialog가 React Context에 종속되어 있어, 알림 처리를 다른
                  환경에서 사용할 수 없었음. <strong>Event Emitter</strong>를
                  도입해 Context 없이도 적절한 에러 알림을 내려줄 수 있도록 구조
                  변경
                </li>
              </>
            ),
            result: (
              <>
                <li>다양한 HTTP Client를 지원하는 범용 SDK로 전환</li>
                <li>
                  example 패키지를 추가하여 실제 사용 예시를 제공하여 동료
                  개발자들의 적용 시간 단축 및 DX 향상
                </li>
              </>
            ),
          }}
        />
      </ResumeSection>
    </div>
  );
}
