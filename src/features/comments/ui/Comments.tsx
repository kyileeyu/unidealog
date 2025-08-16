"use client";

import { useEffect, useRef } from "react";
import { useTheme } from "next-themes";

export interface UtterancesProps {
  repo: string;
  issueTerm?: string;
  label?: string;
  className?: string;
}

export function Utterances({
  repo,
  issueTerm = "pathname",
  label,
  className
}: UtterancesProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { resolvedTheme } = useTheme();

  useEffect(() => {
    if (!containerRef.current) return;

    // 기존 utterances 제거
    const existingScript = containerRef.current.querySelector('.utterances');
    if (existingScript) {
      existingScript.remove();
    }

    // utterances 스크립트 생성
    const script = document.createElement('script');
    script.src = 'https://utteranc.es/client.js';
    script.setAttribute('repo', repo);
    script.setAttribute('issue-term', issueTerm);
    script.setAttribute('theme', resolvedTheme === 'dark' ? 'github-dark' : 'github-light');
    script.setAttribute('crossorigin', 'anonymous');
    script.async = true;

    if (label) {
      script.setAttribute('label', label);
    }

    containerRef.current.appendChild(script);
  }, [repo, issueTerm, label, resolvedTheme]);

  return (
    <div 
      ref={containerRef} 
      className={`utterances-container ${className}`}
    />
  );
}

// 설정 가능한 Comments 컴포넌트
export interface CommentsProps {
  className?: string;
}

export function Comments({ className }: CommentsProps) {
  // 실제 GitHub 저장소 설정이 필요합니다
  const repo = "kyileeyu/unidealog"; // 실제 저장소로 변경 필요
  
  return (
    <div className={`comments-section ${className}`}>
      <div className="border-t pt-8">
        <h3 className="text-lg font-semibold mb-4">댓글</h3>
        <Utterances 
          repo={repo}
          issueTerm="pathname"
          label="💬 comment"
        />
      </div>
    </div>
  );
}
