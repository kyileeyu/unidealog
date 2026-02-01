import { ResumeSection } from "./ResumeSection";

export function CareerSection() {
  return (
    <ResumeSection title="경력">
      <div className="flex flex-col gap-[4px]">
        <h3 className="text-[18px] font-semibold">이마고웍스 (Imagoworks)</h3>
        <p className="text-[13px] font-medium mt-[2px]">
          Frontend Engineer | &nbsp;2022.07 ~ 재직중 (3년 7개월)
        </p>
        <p className="text-[13px] font-medium">
          Frontend Intern | &nbsp;2022.03 ~ 2022.06 (4개월)
        </p>
        <p className="text-[13px] mt-[4px]">
          치과 CAD/CAM 솔루션을 제공하는 B2B, B2C SaaS 시리즈 C 스타트업.
          13개국에 서비스 중.
        </p>
      </div>
    </ResumeSection>
  );
}
