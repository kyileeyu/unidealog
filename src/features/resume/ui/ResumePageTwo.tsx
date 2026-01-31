export function ResumePageTwo() {
  return (
    <div className="w-[210mm] min-h-[297mm] bg-white text-black px-[32px] py-[14px] print:shadow-none">
      {/* 업무 경험 (계속) */}
      <section>
        <h2 className="text-[21px] font-semibold mb-[8px]">업무 경험</h2>

        {/* 업무 경험 #2 — Auth SDK 모노레포 전환 */}
        <div className="flex gap-[16px] mb-[16px]">
          {/* 좌측 컬럼 */}
          <div className="w-[211px] shrink-0">
            <p className="text-[13px] font-medium text-gray-700">
              비즈 플랫폼 팀 | 2025.02 ~ 2025.04 (3개월)
            </p>
            <p className="text-[18px] font-semibold mt-[2px]">
              Auth SDK 모노레포 전환
            </p>
            <p className="text-[12px] mt-[4px]">
              2024 | Pnpm, TypeScript, React, Changesets
            </p>
            <div className="mt-[4px]">
              <p className="text-[10px] text-gray-600 leading-[1.5]">
                <span className="font-semibold">기술스택: </span>
                Pnpm, TypeScript, React, Changesets
              </p>
            </div>
          </div>

          {/* 우측 컬럼 */}
          <div className="flex-1">
            <div className="mb-[6px]">
              <p className="text-[12px] font-semibold mb-[2px]">역할</p>
              <p className="text-[12px] leading-[1.6]">
                1인 개발로 프로젝트 셋업부터 배포까지 전 과정 주도
              </p>
            </div>
            <div className="mb-[6px]">
              <p className="text-[12px] font-semibold mb-[2px]">문제해결</p>
              <ul className="text-[12px] leading-[1.6] list-disc pl-[16px]">
                <li>
                  기존 Auth SDK는 Axios에 의존적 → 인증 로직을 클래스 기반으로
                  분리하여 fetch, ky 등 다양한 HTTP Client 대응 가능하도록 개선
                </li>
                <li>
                  Error Dialog가 React Context에 종속 → Event Emitter 도입해
                  Context 없이도 에러 알림 가능하도록 구조 변경
                </li>
              </ul>
            </div>
            <div>
              <p className="text-[12px] font-semibold mb-[2px]">성과</p>
              <ul className="text-[12px] leading-[1.6] list-disc pl-[16px]">
                <li>다양한 HTTP Client를 지원하는 범용 SDK로 전환</li>
                <li>
                  example 패키지를 추가하여 동료 개발자들의 적용 시간 단축 및 DX
                  향상
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* 업무 경험 #3 — 구독 모델 + 워크스페이스 구조 도입 */}
        <div className="flex gap-[16px]">
          {/* 좌측 컬럼 */}
          <div className="w-[211px] shrink-0">
            <p className="text-[13px] font-medium text-gray-700">
              비즈 플랫폼 팀 | 2024.09 ~ 2025.03 (6개월)
            </p>
            <p className="text-[18px] font-semibold mt-[2px]">
              구독 모델 + 워크스페이스 구조 도입
            </p>
            <p className="text-[12px] mt-[4px] text-gray-800">
              크레딧 방식을 구독 결제 방식으로 전환. 멤버-워크스페이스 등의 기능
              추가
            </p>
            <div className="mt-[4px]">
              <p className="text-[10px] text-gray-600 leading-[1.5]">
                <span className="font-semibold">기술스택: </span>
                React, TypeScript, msw, Jest, TanStack-Query, React-i18next
              </p>
            </div>
          </div>

          {/* 우측 컬럼 */}
          <div className="flex-1">
            <div className="mb-[6px]">
              <p className="text-[12px] font-semibold mb-[2px]">역할</p>
              <ul className="text-[12px] leading-[1.6] list-disc pl-[16px]">
                <li>
                  구독 및 관리 페이지, 워크 스페이스 구조 구축 및 개발
                </li>
                <li>Stripe 결제 연동 및 크로스 도메인 인증 처리</li>
                <li>
                  Lokalize 기반 국제화(i18n) 툴 세팅 및 9개국어 다국어 적용
                </li>
              </ul>
            </div>
            <div className="mb-[6px]">
              <p className="text-[12px] font-semibold mb-[2px]">문제해결</p>
              <ul className="text-[12px] leading-[1.6] list-disc pl-[16px]">
                <li>FSD 아키텍처 도입해 도메인 간 관심사 분리</li>
                <li>
                  render-props 및 compound-component 디자인 패턴 사용해
                  재사용성과 응집도 개선
                </li>
              </ul>
            </div>
            <div>
              <p className="text-[12px] font-semibold mb-[2px]">성과</p>
              <ul className="text-[12px] leading-[1.6] list-disc pl-[16px]">
                <li>주요 테스트 시나리오에 대한 TDD 커버리지 확보</li>
                <li>
                  render-props와 compound-component 패턴으로 빈번한 요구사항
                  변경에 안정적 대응
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 기타 경험 */}
      <hr className="border-t border-gray-200 my-[12px]" />
      <section>
        <h2 className="text-[21px] font-semibold mb-[8px]">기타 경험</h2>
        <div className="space-y-[6px] text-[12px]">
          <div className="flex gap-[8px]">
            <span className="text-gray-600 shrink-0">2026.01 ~ 2026.02</span>
            <span className="font-semibold">Teams 책 구매요청 봇 생성</span>
            <span className="text-gray-700">
              | lambda + aws를 이용하여 playwright e2e를 통해 생성
            </span>
          </div>
          <div className="flex gap-[8px]">
            <span className="text-gray-600 shrink-0">2024.09 ~ 2025.03</span>
            <span className="font-semibold">구독모델 + 워크스페이스</span>
            <span className="text-gray-700">
              | Stripe 결제연동, 9개국어 i18n 적용
            </span>
          </div>
          <div className="flex gap-[8px]">
            <span className="text-gray-600 shrink-0">2022.09 ~ 2023.07</span>
            <span className="font-semibold">B2B 백오피스 고도화</span>
            <span className="text-gray-700">
              | E2E(cypress) 80% 커버리지 달성, TS 마이그레이션 90% 전환
            </span>
          </div>
          <div className="flex gap-[8px]">
            <span className="text-gray-600 shrink-0">2022.03 ~ 2022.06</span>
            <span className="font-semibold">랜딩페이지 리뉴얼</span>
            <span className="text-gray-700">
              | Lighthouse 49→95점, 검색 1페이지 달성
            </span>
          </div>
          <div className="flex gap-[8px]">
            <span className="text-gray-600 shrink-0">2024.01 ~ 2024.08</span>
            <span className="font-semibold">사내 프론트엔드 스터디 진행</span>
          </div>
        </div>
      </section>

      {/* 학력 */}
      <hr className="border-t border-gray-200 my-[12px]" />
      <section>
        <h2 className="text-[21px] font-semibold mb-[8px]">학력</h2>
        <div className="flex gap-[16px]">
          <p className="text-[18px] font-semibold">가톨릭대학교</p>
          <div>
            <p className="text-[13px]">
              컴퓨터정보공학, 빅데이터 인문경영 복수전공
            </p>
            <p className="text-[12px] text-gray-600">2017.03 ~ 2022.08</p>
          </div>
        </div>
      </section>
    </div>
  );
}
