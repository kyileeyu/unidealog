import {
  HeaderSection,
  IntroSection,
  CareerSection,
  SkillsSection,
  ResumeSection,
  WorkExperienceItem,
} from "./sections";

export function ResumePageOne() {
  return (
    <div className="w-[210mm] min-h-[297mm] bg-white text-black px-[48px] py-[48px] print:shadow-none flex flex-col gap-[28px]">
      <HeaderSection />
      <IntroSection />
      <CareerSection />
      <SkillsSection />

      <ResumeSection title="업무 경험" divider>
        <WorkExperienceItem
          title="상태관리 아키텍처 재설계"
          yearTech={
            <>
              2025 | React, TypeScript, Zustand,
              <br />
              TanStack Query, Jest
            </>
          }
          details={
            <ul className="list-disc pl-[16px] flex flex-col gap-[6px]">
              <li>
                역할 :
                <ul className="list-disc pl-[20px] mt-[4px] flex flex-col gap-[2px]">
                  <li>
                    기존 백오피스 기능에 Cypress 기반{" "}
                    <strong>E2E 테스트</strong> 도입 및 주요 버그 리포트/픽스
                  </li>
                  <li>
                    JS 기반 Minimals UI 백오피스를{" "}
                    <strong>TypeScript로 점진적 마이그레이션</strong>
                  </li>
                  <li>쿠폰, 기프트카드 발급/관리 페이지 신규 구현</li>
                  <li>
                    계정별 사용자 정보를 불러오는 Tenant 시스템 설계 및 반영
                  </li>
                  <li>
                    UTC → Timezone 변환 메서드 및 기간별 데이터 Export 기능 구현
                  </li>
                </ul>
              </li>
              <li>
                문제 해결 과정 :
                <ul className="list-disc pl-[20px] mt-[4px] flex flex-col gap-[2px]">
                  <li>
                    Cypress 기반의 테스트 자동화 적용 중, JS 환경의 유지보수
                    이슈를 체감하며 TypeScript 도입 필요성 제안 → 점진적
                    마이그레이션 주도
                  </li>
                </ul>
              </li>
              <li>
                성과 :
                <ul className="list-disc pl-[20px] mt-[4px] flex flex-col gap-[2px]">
                  <li>
                    E2E <strong>테스트 커버리지 80%</strong> 이상 확보, 3개월
                    내에 전체 백오피스의 <strong>90%</strong>를 TypeScript로
                    변환하여 코드 품질 및 가독성 향상
                  </li>
                </ul>
              </li>
            </ul>
          }
        />
      </ResumeSection>
    </div>
  );
}
