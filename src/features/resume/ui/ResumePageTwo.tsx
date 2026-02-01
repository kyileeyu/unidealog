import {
  ResumeSection,
  WorkExperienceItem,
  OtherExperienceSection,
  EducationSection,
} from "./sections";

export function ResumePageTwo() {
  return (
    <div className="w-[210mm] min-h-[297mm] bg-white text-black px-[48px] py-[48px] print:shadow-none flex flex-col gap-[28px]">
      <ResumeSection title="업무 경험" divider>
        <div className="flex flex-col gap-[24px]">
          {/* #2 — Auth SDK 모노레포 전환 */}
          <WorkExperienceItem
            title="Auth SDK 모노레포 전환"
            yearTech={
              <>
                2024 | Pnpm, TypeScript, React,
                <br />
                Changesets
              </>
            }
            details={
              <ul className="list-disc pl-[16px] flex flex-col gap-[6px]">
                <li>
                  역할 :
                  <ul className="list-disc pl-[20px] mt-[4px] flex flex-col gap-[2px]">
                    <li>
                      1인 개발로 프로젝트 셋업부터 배포까지 전 과정 주도
                    </li>
                  </ul>
                </li>
                <li>
                  문제 해결 과정 :
                  <ul className="list-disc pl-[20px] mt-[4px] flex flex-col gap-[2px]">
                    <li>
                      기존 Auth SDK는 Axios에 의존적이라 fetch나 ky같은 다른
                      HTTP Client에 토큰을 주입하기 어려웠음. 인증 로직을{" "}
                      <strong>클래스 기반으로 분리</strong>하여 fetch, ky 등
                      다양한 HTTP Client에서 대응 가능하도록 개선
                    </li>
                    <li>
                      Error Dialog가 React Context에 종속되어 있어, 알림 처리를
                      다른 환경에서 사용할 수 없었음.{" "}
                      <strong>Event Emitter</strong>를 도입해 Context 없이도
                      적절한 에러 알림을 내려줄 수 있도록 구조 변경
                    </li>
                  </ul>
                </li>
                <li>
                  성과 :
                  <ul className="list-disc pl-[20px] mt-[4px] flex flex-col gap-[2px]">
                    <li>다양한 HTTP Client를 지원하는 범용 SDK로 전환</li>
                    <li>
                      example 패키지를 추가하여 실제 사용 예시를 제공하여 동료
                      개발자들의 적용 시간 단축 및 DX 향상
                    </li>
                  </ul>
                </li>
              </ul>
            }
          />

          {/* #3 — 구독 모델 + 워크스페이스 구조 도입 */}
          <WorkExperienceItem
            team="비즈 플랫폼 팀 | 2024.09 ~ 2025.03 (6개월)"
            title="구독 모델 + 워크스페이스 구조 도입"
            yearTech=""
            description="크레딧 방식을 구독 결제 방식으로 전환. 멤버- 워크스페이스 등의 기능 추가"
            techStack="React, TypeScript, msw, Jest, TanStack-Query, React-i18next"
            details={
              <ul className="list-disc pl-[16px] flex flex-col gap-[6px]">
                <li>
                  역할 :
                  <ul className="list-disc pl-[20px] mt-[4px] flex flex-col gap-[2px]">
                    <li>
                      구독 및 관리 페이지, 워크 스페이스 구조 구축 및 개발
                    </li>
                    <li>Stripe 결제 연동 및 크로스 도메인 인증 처리</li>
                    <li>
                      Lokalize 기반 국제화(i18n) 툴 세팅 및 9개국어 다국어 적용
                    </li>
                  </ul>
                </li>
                <li>
                  문제 해결 과정 :
                  <ul className="list-disc pl-[20px] mt-[4px] flex flex-col gap-[2px]">
                    <li>
                      프로젝트 확장에 대응하기 위해{" "}
                      <strong>FSD 아키텍처</strong>를 도입해 도메인 간 관심사
                      분리
                    </li>
                    <li>
                      render-props 및 compound-component 디자인 패턴을 사용해
                      재사용성과 응집도 개선
                    </li>
                  </ul>
                </li>
                <li>
                  성과 :
                  <ul className="list-disc pl-[20px] mt-[4px] flex flex-col gap-[2px]">
                    <li>주요 테스트 시나리오에 대한 TDD 커버리지 확보</li>
                    <li>
                      render-props와 compound-component 패턴 기반의 유연한
                      설계로 프로젝트 기간 내 빈번한 요구사항 변경에 안정적 대응
                    </li>
                  </ul>
                </li>
              </ul>
            }
          />
        </div>
      </ResumeSection>

      <OtherExperienceSection />
      <EducationSection />
    </div>
  );
}
