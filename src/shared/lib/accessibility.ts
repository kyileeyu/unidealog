// 접근성 유틸리티
import React from 'react';

export interface A11yConfig {
  skipLinkText?: string;
  landmarks?: boolean;
  ariaLabels?: boolean;
  colorContrast?: boolean;
  keyboardNavigation?: boolean;
}

// Skip to content 링크 생성
export function createSkipLink(targetId: string = 'main-content', text: string = '본문으로 바로가기') {
  return {
    href: `#${targetId}`,
    className: 'sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-primary text-primary-foreground px-4 py-2 rounded-md z-50',
    children: text,
  };
}

// 스크린 리더용 텍스트 생성
export function createScreenReaderText(text: string) {
  return {
    className: 'sr-only',
    children: text,
  };
}

// ARIA 레이블 생성 헬퍼
export function createAriaLabel(base: string, additional?: string) {
  return additional ? `${base}, ${additional}` : base;
}

// 키보드 네비게이션 핸들러
export function handleKeyboardNavigation(
  event: React.KeyboardEvent,
  options: {
    onEnter?: () => void;
    onSpace?: () => void;
    onEscape?: () => void;
    onArrowUp?: () => void;
    onArrowDown?: () => void;
    onArrowLeft?: () => void;
    onArrowRight?: () => void;
  }
) {
  const { onEnter, onSpace, onEscape, onArrowUp, onArrowDown, onArrowLeft, onArrowRight } = options;

  switch (event.key) {
    case 'Enter':
      onEnter?.();
      break;
    case ' ':
    case 'Space':
      event.preventDefault();
      onSpace?.();
      break;
    case 'Escape':
      onEscape?.();
      break;
    case 'ArrowUp':
      event.preventDefault();
      onArrowUp?.();
      break;
    case 'ArrowDown':
      event.preventDefault();
      onArrowDown?.();
      break;
    case 'ArrowLeft':
      onArrowLeft?.();
      break;
    case 'ArrowRight':
      onArrowRight?.();
      break;
  }
}

// 색상 대비 검사 (개발용)
export function checkColorContrast(foreground: string, background: string): number {
  // 간단한 대비율 계산 (실제로는 더 복잡한 알고리즘 필요)
  const getLuminance = (color: string) => {
    // RGB 값을 추출하고 상대 밝기 계산
    // 이는 간단한 구현이며, 실제로는 WCAG 공식을 사용해야 함
    const rgb = color.match(/\d+/g);
    if (!rgb) return 0;
    
    const [r, g, b] = rgb.map(x => {
      const val = parseInt(x) / 255;
      return val <= 0.03928 ? val / 12.92 : Math.pow((val + 0.055) / 1.055, 2.4);
    });
    
    return 0.2126 * r + 0.7152 * g + 0.0722 * b;
  };

  const l1 = getLuminance(foreground);
  const l2 = getLuminance(background);
  const lighter = Math.max(l1, l2);
  const darker = Math.min(l1, l2);
  
  return (lighter + 0.05) / (darker + 0.05);
}

// 포커스 트랩 구현
export function useFocusTrap(containerRef: React.RefObject<HTMLElement>, isActive: boolean) {
  React.useEffect(() => {
    if (!isActive || !containerRef.current) return;

    const container = containerRef.current;
    const focusableElements = container.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    
    const firstElement = focusableElements[0] as HTMLElement;
    const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key !== 'Tab') return;

      if (event.shiftKey) {
        if (document.activeElement === firstElement) {
          event.preventDefault();
          lastElement?.focus();
        }
      } else {
        if (document.activeElement === lastElement) {
          event.preventDefault();
          firstElement?.focus();
        }
      }
    };

    container.addEventListener('keydown', handleKeyDown);
    firstElement?.focus();

    return () => {
      container.removeEventListener('keydown', handleKeyDown);
    };
  }, [isActive, containerRef]);
}

// 동적 제목 업데이트 (SPA용)
export function updatePageTitle(title: string, siteName: string = 'Unidealog') {
  if (typeof document !== 'undefined') {
    document.title = title ? `${title} | ${siteName}` : siteName;
  }
}

// 라이브 리전 알림
export function announceToScreenReader(message: string, priority: 'polite' | 'assertive' = 'polite') {
  if (typeof document === 'undefined') return;

  const announcement = document.createElement('div');
  announcement.setAttribute('aria-live', priority);
  announcement.setAttribute('aria-atomic', 'true');
  announcement.className = 'sr-only';
  announcement.textContent = message;

  document.body.appendChild(announcement);

  setTimeout(() => {
    document.body.removeChild(announcement);
  }, 1000);
}

// 미디어 쿼리 접근성 설정
export function useReducedMotion() {
  const [prefersReducedMotion, setPrefersReducedMotion] = React.useState(false);

  React.useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);

    const handleChange = (event: MediaQueryListEvent) => {
      setPrefersReducedMotion(event.matches);
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  return prefersReducedMotion;
}

// React import 추가
