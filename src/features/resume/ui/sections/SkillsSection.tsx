import { ResumeSection } from "./ResumeSection";

export function SkillsSection() {
  return (
    <ResumeSection title="스킬" divider>
      <div className="flex gap-[48px] text-[13px]">
        <div className="flex flex-col gap-[4px]">
          <p className="font-semibold">Frontend</p>
          <p>
            JavaScript, TypeScript, React, Jest, Playwright. npm, pnpm,
            Webpack, Vite
          </p>
        </div>
        <div className="flex flex-col gap-[4px]">
          <p className="font-semibold">Collaboration</p>
          <p>Git, Jira, Bitbucket, Azure DevOps, Teams</p>
        </div>
      </div>
    </ResumeSection>
  );
}
