import { ResumeSection } from "./ResumeSection";

export function CareerSection() {
  return (
    <ResumeSection title="경력">
      <div className="flex flex-col gap-[6px]">
        <h3 className="text-[17px] font-bold tracking-[-0.02em]">
          이마고웍스 (Imagoworks)
        </h3>
        <div className="flex flex-col gap-[2px]">
          <p className="text-[13px] font-medium text-resume-foreground">
            Frontend Engineer | &nbsp;2022.07 ~ 재직중 (3년 7개월)
          </p>
          <p className="text-[13px] font-medium text-resume-foreground">
            Frontend Intern | &nbsp;2022.03 ~ 2022.06 (4개월)
          </p>
        </div>
        <p className="text-[13px] text-resume-muted-foreground leading-[1.6]">
          AI 기반 치과용 웹 CAD 솔루션(Dentbird)을 개발하는 누적투자 360억원의
          시리즈 C 스타트업.
          <br /> 브라우저에서 보철물 디자인을 AI로 자동화하며, 110여 개국
          14,000명 이상의 치과 전문가가 실제 임상에 사용 중.
        </p>
      </div>
    </ResumeSection>
  );
}
