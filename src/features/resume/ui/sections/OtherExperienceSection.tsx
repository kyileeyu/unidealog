import { ResumeSection } from "./ResumeSection";

const experiences = [
  {
    period: "2026.01 ~ 2026.02",
    title: "Teams 책 구매요청 봇 생성",
    description: "Lambda + AWS를 이용하여 Playwright E2E를 통해 생성",
  },
  {
    period: "2024.09 ~ 2025.03",
    title: "구독모델 + 워크스페이스",
    description: "Stripe 결제연동, 9개국어 i18n 적용",
  },
  {
    period: "2022.09 ~ 2023.07",
    title: "B2B 백오피스 고도화",
    description: "E2E(Cypress) 80% 커버리지 달성, TS 마이그레이션 90% 전환",
  },
  {
    period: "2022.03 ~ 2022.06",
    title: "랜딩페이지 리뉴얼",
    description: "Lighthouse 49→95점, 검색 1페이지 달성",
  },
  {
    period: "2024.01 ~ 2024.08",
    title: "사내 프론트엔드 스터디 진행",
  },
];

export function OtherExperienceSection() {
  return (
    <ResumeSection title="기타 경험">
      <div className="flex flex-col gap-[8px] text-[13px]">
        {experiences.map((exp) => (
          <div key={exp.title} className="grid grid-cols-[120px_180px_1fr] gap-x-[12px]">
            <span className="text-resume-muted-foreground">{exp.period}</span>
            <span className="font-medium text-resume-foreground">{exp.title}</span>
            {exp.description && (
              <span className="text-resume-muted-foreground">{exp.description}</span>
            )}
          </div>
        ))}
      </div>
    </ResumeSection>
  );
}
