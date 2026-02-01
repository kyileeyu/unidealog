import Image from "next/image";

export function HeaderSection() {
  return (
    <div className="flex items-start justify-between">
      <div className="flex flex-col gap-[16px]">
        <div className="flex flex-col gap-[4px]">
          <h1 className="text-[26px] font-bold tracking-[-0.03em] leading-none">
            유승현
          </h1>
          <p className="text-[14px] text-resume-muted-foreground font-medium tracking-[-0.01em]">
            Seunghyun Kyilee Yu
          </p>
        </div>

        <div className="grid grid-cols-2 gap-x-[32px] gap-y-[6px] text-[13px]">
          <span className="text-resume-muted-foreground">
            kyileeeyu@gmail.com
          </span>
          <span className="text-resume-muted-foreground">010-5772-5514</span>
          <a
            href="https://linkedin.com/in/seunghyun-yu"
            className="text-resume-muted-foreground underline underline-offset-2 decoration-gray-400"
          >
            linkedin.com/in/seunghyun-yu
          </a>
          <a
            href="https://github.com/kyileeyu"
            className="text-resume-muted-foreground underline underline-offset-2 decoration-gray-400"
          >
            github.com/kyileeyu
          </a>
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
