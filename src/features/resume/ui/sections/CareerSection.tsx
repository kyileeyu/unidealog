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
          <p className="text-[13px] font-medium text-resume-muted-foreground">
            Frontend Intern | &nbsp;2022.03 ~ 2022.06 (4개월)
          </p>
        </div>
        <p className="text-[13px] text-resume-muted-foreground leading-[1.6]">
          치과 CAD/CAM 솔루션을 제공하는 B2B, B2C SaaS 시리즈 C 스타트업.
          13개국에 서비스 중.
        </p>
      </div>
    </ResumeSection>
  );
}
