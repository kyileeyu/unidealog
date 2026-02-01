import { ResumeSection } from "./ResumeSection";

export function OtherExperienceSection() {
  return (
    <ResumeSection title="기타 경험">
      <ul className="list-disc pl-[18px] flex flex-col gap-[7px] text-[13px] leading-[1.65] text-resume-foreground marker:text-resume-muted-foreground">
        <li>
          2026.01 ~2026.02 |Teams 책 구매요청 봇 생성 | lambda + aws를 이용하여
          playwright e2e를 통해 생성
        </li>
        <li>
          2024.09~2025.03 | 구독모델 + 워크스페이스 | Stripe 결제연동, 9개국어
          i18n 적용
        </li>
        <li>
          2022.09~2023.07 | B2B 백오피스 고도화 | E2E(cypress) 80% 커버리지
          달성, TS 마이그레이션 90% 전환
        </li>
        <li>
          2022.03~2022.06 | 랜딩페이지 리뉴얼 | Lighthouse 49→95점, 검색
          1페이지 달성
        </li>
        <li>
          2024.01 ~2024.08 | &nbsp;
          <span className="underline">사내 프론트엔드 스터디 진행</span>
        </li>
      </ul>
    </ResumeSection>
  );
}
