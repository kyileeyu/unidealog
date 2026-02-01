import Image from "next/image";

export function HeaderSection() {
  return (
    <div className="flex items-start justify-between">
      <div className="flex flex-col gap-[12px]">
        <h1 className="text-[24px] font-semibold leading-tight">
          유승현 <span className="font-normal">(Seunghyun Kyilee Yu)</span>
        </h1>
        <div className="flex items-center gap-[32px] text-[13px]">
          <span>kyileeeyu@gmail.com</span>
          <span>010-5772-5514</span>
          <a
            href="https://linkedin.com/in/seunghyun-yu"
            className="underline"
          >
            LinkedIn
          </a>
          <a href="https://github.com/kyileeyu" className="underline">
            GitHub
          </a>
        </div>
      </div>
      <div className="w-[120px] h-[120px] rounded-full overflow-hidden shrink-0">
        <Image
          src="/images/profile.png"
          alt="프로필 사진"
          width={120}
          height={120}
          className="object-cover w-full h-full"
        />
      </div>
    </div>
  );
}
