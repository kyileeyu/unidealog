"use client";

import { useTheme } from "next-themes";
import { useEffect, useRef } from "react";

export interface GiscusProps {
  repo: string;
  repoId: string;
  category: string;
  categoryId: string;
  mapping?: string;
  strict?: string;
  reactionsEnabled?: string;
  emitMetadata?: string;
  inputPosition?: "top" | "bottom";
  lang?: string;
  loading?: "lazy" | "eager";
  className?: string;
}

export function GiscusComments({
  repo,
  repoId,
  category,
  categoryId,
  mapping = "pathname",
  strict = "0",
  reactionsEnabled = "1",
  emitMetadata = "0",
  inputPosition = "bottom",
  lang = "ko",
  loading = "lazy",
  className,
}: GiscusProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { resolvedTheme } = useTheme();

  useEffect(() => {
    if (!containerRef.current) return;

    // 기존 giscus 제거
    const existingScript = containerRef.current.querySelector(".giscus");
    if (existingScript) {
      existingScript.remove();
    }

    // giscus 스크립트 생성
    const script = document.createElement("script");
    script.src = "https://giscus.app/client.js";
    script.setAttribute("data-repo", repo);
    script.setAttribute("data-repo-id", repoId);
    script.setAttribute("data-category", category);
    script.setAttribute("data-category-id", categoryId);
    script.setAttribute("data-mapping", mapping);
    script.setAttribute("data-strict", strict);
    script.setAttribute("data-reactions-enabled", reactionsEnabled);
    script.setAttribute("data-emit-metadata", emitMetadata);
    script.setAttribute("data-input-position", inputPosition);
    script.setAttribute(
      "data-theme",
      resolvedTheme === "dark" ? "dark" : "light"
    );
    script.setAttribute("data-lang", lang);
    script.setAttribute("data-loading", loading);
    script.setAttribute("crossorigin", "anonymous");
    script.async = true;

    containerRef.current.appendChild(script);
  }, [
    repo,
    repoId,
    category,
    categoryId,
    mapping,
    strict,
    reactionsEnabled,
    emitMetadata,
    inputPosition,
    lang,
    loading,
    resolvedTheme,
  ]);

  return (
    <div ref={containerRef} className={`giscus-container ${className || ""}`} />
  );
}

// 설정 가능한 Comments 컴포넌트
export interface CommentsProps {
  className?: string;
}

export function Comments({ className }: CommentsProps) {
  // Giscus 설정 - 실제 값으로 변경 필요
  const config = {
    repo: "kyileeyu/unidealog", // GitHub 저장소
    repoId: "R_kgDOPe2rzw", // 저장소 ID (giscus.app에서 생성)
    category: "General", // Discussion 카테고리
    categoryId: "DIC_kwDOPe2rz84CuQh8", // 카테고리 ID (giscus.app에서 생성)
  };

  return (
    <div className={`comments-section ${className || ""}`}>
      <div className="border-t pt-8">
        <GiscusComments
          repo={config.repo}
          repoId={config.repoId}
          category={config.category}
          categoryId={config.categoryId}
          mapping="pathname"
          reactionsEnabled="1"
          emitMetadata="0"
          inputPosition="bottom"
          lang="ko"
        />
      </div>
    </div>
  );
}
