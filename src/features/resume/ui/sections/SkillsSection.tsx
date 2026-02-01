import { ResumeSection } from "./ResumeSection";

export function SkillsSection() {
  return (
    <ResumeSection title="스킬">
      <div className="flex gap-[40px] text-[13px] leading-[1.6]">
        <div className="flex flex-col gap-[4px]">
          <p className="font-semibold text-resume-foreground">Frontend</p>
          <p className="text-resume-muted-foreground">
            JavaScript, TypeScript, React, Jest, Playwright, npm, pnpm,
            Webpack, Vite
          </p>
        </div>
        <div className="flex flex-col gap-[4px]">
          <p className="font-semibold text-resume-foreground">Collaboration</p>
          <p className="text-resume-muted-foreground">Git, Jira, Bitbucket, Azure DevOps, Teams</p>
        </div>
      </div>
    </ResumeSection>
  );
}
