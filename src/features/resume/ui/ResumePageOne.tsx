import Image from 'next/image';

export function ResumePageOne() {
  return (
    <div className="w-[210mm] min-h-[297mm] bg-white text-black px-[32px] py-[14px] print:shadow-none">
      {/* 헤더 */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-[24px] font-semibold leading-tight">
            유승현{' '}
            <span className="font-normal">(Seunghyun Kyilee Yu)</span>
          </h1>
        </div>
        <div className="w-[139px] h-[139px] rounded-full overflow-hidden shrink-0">
          <Image
            src="/images/profile.png"
            alt="프로필 사진"
            width={139}
            height={139}
            className="object-cover w-full h-full"
          />
        </div>
      </div>

      {/* 연락처 */}
      <div className="flex items-center gap-[32px] mt-[8px] text-[13px]">
        <span>kyileeeyu@gmail.com</span>
        <span>010-5772-5514</span>
        <span>linkedin.com/in/seunghyun-yu</span>
        <span>github.com/kyileeyu</span>
      </div>

      {/* 자기 소개 */}
      <hr className="border-t border-gray-200 my-[12px]" />
      <section>
        <h2 className="text-[21px] font-semibold mb-[8px]">자기 소개</h2>
        <p className="text-[14px] leading-[1.6]">
          3년간 하나의 프로덕트를 성장시켜온 4년차 프론트엔드 개발자입니다.
          <br />
          신입으로 입사해 현재 11개국 수십 곳의 기업이 실제로 사용하는 B2B2C
          SaaS 제품을 만들어왔습니다. 사용 과정에서 발생한 문제들을 직접
          해결하고, 성능 병목을 찾아 개선하며, 프로덕션 환경에서 안정적으로
          동작하는 시스템을 구축한 경험이 있습니다.
        </p>
      </section>

      {/* 경력 */}
      <hr className="border-t border-gray-200 my-[12px]" />
      <section>
        <h2 className="text-[21px] font-semibold mb-[8px]">경력</h2>
        <div>
          <h3 className="text-[18px] font-semibold">
            이마고웍스 (Imagoworks)
          </h3>
          <p className="text-[13px] font-medium mt-[2px]">
            Frontend Engineer | 2022.07 ~ 재직중 (3년 7개월)
          </p>
          <p className="text-[12px] font-medium text-gray-700">
            Frontend Intern | 2022.03 ~ 2022.06 (4개월)
          </p>
          <p className="text-[13px] font-medium mt-[4px] text-gray-800">
            치과 CAD/CAM 솔루션을 제공하는 B2B, B2C SaaS 시리즈 C 스타트업.
            13개국에 서비스 중.
          </p>
        </div>
      </section>

      {/* 스킬 */}
      <hr className="border-t border-gray-200 my-[12px]" />
      <section>
        <h2 className="text-[21px] font-semibold mb-[8px]">스킬</h2>
        <div className="flex gap-[32px] text-[13px]">
          <div>
            <span className="font-semibold">Frontend: </span>
            JavaScript, TypeScript, React, Jest, Playwright. npm, pnpm,
            Webpack, Vite
          </div>
          <div>
            <span className="font-semibold">Collaboration: </span>
            Git, Jira, Bitbucket, Azure DevOps, Teams
          </div>
        </div>
      </section>

      {/* 업무 경험 #1 */}
      <hr className="border-t border-gray-200 my-[12px]" />
      <section>
        <h2 className="text-[21px] font-semibold mb-[8px]">업무 경험</h2>
        <div className="flex gap-[16px]">
          {/* 좌측 컬럼 */}
          <div className="w-[211px] shrink-0">
            <p className="text-[18px] font-semibold">
              상태관리 아키텍처 재설계
            </p>
            <p className="text-[12px] mt-[4px]">
              2025 | React, TypeScript, Zustand, TanStack Query, Jest
            </p>
            <div className="mt-[4px]">
              <p className="text-[10px] text-gray-600 leading-[1.5]">
                <span className="font-semibold">기술스택: </span>
                React, Typescript, Cypress, MUI, React-hook-form, TanStack-Query
              </p>
            </div>
          </div>

          {/* 우측 컬럼 */}
          <div className="flex-1">
            <div className="mb-[6px]">
              <p className="text-[12px] font-semibold mb-[2px]">역할</p>
              <ul className="text-[12px] leading-[1.6] list-disc pl-[16px]">
                <li>
                  기존 백오피스 기능에 Cypress 기반 E2E 테스트 도입 및 주요 버그
                  리포트/픽스
                </li>
                <li>
                  JS 기반 Minimals UI 백오피스를 TypeScript로 점진적 마이그레이션
                </li>
                <li>쿠폰, 기프트카드 발급/관리 페이지 신규 구현</li>
                <li>
                  계정별 사용자 정보를 불러오는 Tenant 시스템 설계 및 반영
                </li>
                <li>
                  UTC → Timezone 변환 메서드 및 기간별 데이터 Export 기능 구현
                </li>
              </ul>
            </div>
            <div className="mb-[6px]">
              <p className="text-[12px] font-semibold mb-[2px]">문제해결</p>
              <p className="text-[12px] leading-[1.6]">
                Cypress 기반의 테스트 자동화 적용 중, JS 환경의 유지보수 이슈를
                체감하며 TypeScript 도입 필요성 제안 → 점진적 마이그레이션 주도
              </p>
            </div>
            <div>
              <p className="text-[12px] font-semibold mb-[2px]">성과</p>
              <p className="text-[12px] leading-[1.6]">
                E2E 테스트 커버리지 80% 이상 확보, 3개월 내에 전체 백오피스의
                90%를 TypeScript로 변환하여 코드 품질 및 가독성 향상
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
