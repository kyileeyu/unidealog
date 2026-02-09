import Image from "next/image";

export function HeaderSection() {
  return (
    <div className="flex items-center justify-between">
      <div className="flex flex-col gap-[16px]">
        <div className="flex flex-col gap-[4px]">
          <h1 className="text-[26px] font-bold tracking-[-0.03em] leading-none">
            유승현
          </h1>
          <p className="text-[14px] text-resume-muted-foreground font-medium tracking-[-0.01em]">
            Seunghyun Kyilee Yu
          </p>
        </div>

        <div className="flex flex-col gap-[8px]">
          <div className="flex items-center gap-[8px] text-[13px] text-resume-muted-foreground">
            <span>kyileeeyu@gmail.com</span>
            <span>·</span>
            <span>010-5772-5514</span>
            <span>·</span>
            <a
              href="https://linkedin.com/in/seunghyun-yu"
              className="underline underline-offset-2 decoration-gray-400"
            >
              LinkedIn
            </a>
            <span>·</span>
            <a
              href="https://github.com/kyileeyu"
              className="underline underline-offset-2 decoration-gray-400"
            >
              GitHub
            </a>
          </div>
          <p className="text-[12px] text-resume-muted-foreground">
            JavaScript · TypeScript · React · Zustand · Redux · Jest · Playwright · Webpack · Vite
            · Git · Claude Code
          </p>
        </div>
      </div>

      <div className="w-[108px] h-[108px] rounded-full overflow-hidden shrink-0">
        <Image
          src="/images/profile.png"
          alt="프로필 사진"
          width={108}
          height={108}
          className="object-cover w-full h-full"
        />
      </div>
    </div>
  );
}
