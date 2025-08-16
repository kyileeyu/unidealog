// 성능 측정 유틸리티

export interface PerformanceMetrics {
  name: string;
  value: number;
  rating: 'good' | 'needs-improvement' | 'poor';
}

export interface WebVitalMetric {
  name: 'CLS' | 'FID' | 'FCP' | 'LCP' | 'TTFB' | 'INP';
  value: number;
  id: string;
  delta?: number;
  entries?: PerformanceEntry[];
}

// Core Web Vitals 임계값
const THRESHOLDS = {
  CLS: { good: 0.1, poor: 0.25 },
  FID: { good: 100, poor: 300 },
  FCP: { good: 1800, poor: 3000 },
  LCP: { good: 2500, poor: 4000 },
  TTFB: { good: 800, poor: 1800 },
  INP: { good: 200, poor: 500 },
};

function getRating(value: number, thresholds: { good: number; poor: number }): 'good' | 'needs-improvement' | 'poor' {
  if (value <= thresholds.good) return 'good';
  if (value <= thresholds.poor) return 'needs-improvement';
  return 'poor';
}

export function reportWebVitals(metric: WebVitalMetric) {
  const { name, value, id } = metric;
  
  // 성능 메트릭 계산
  const performanceMetric: PerformanceMetrics = {
    name,
    value,
    rating: 'good', // 기본값
  };

  // 각 메트릭별 등급 계산
  switch (name) {
    case 'CLS':
      performanceMetric.rating = getRating(value, THRESHOLDS.CLS);
      break;
    case 'FID':
      performanceMetric.rating = getRating(value, THRESHOLDS.FID);
      break;
    case 'FCP':
      performanceMetric.rating = getRating(value, THRESHOLDS.FCP);
      break;
    case 'LCP':
      performanceMetric.rating = getRating(value, THRESHOLDS.LCP);
      break;
    case 'TTFB':
      performanceMetric.rating = getRating(value, THRESHOLDS.TTFB);
      break;
  }

  // 개발 모드에서 콘솔에 로그
  if (process.env.NODE_ENV === 'development') {
    console.log(`[Web Vitals] ${name}:`, {
      value: Math.round(value),
      rating: performanceMetric.rating,
      id,
    });
  }

  // Google Analytics로 전송 (GA ID가 있는 경우)
  if (typeof window !== 'undefined' && window.gtag && process.env.GOOGLE_ANALYTICS_ID) {
    window.gtag('event', name, {
      event_category: 'Web Vitals',
      event_label: id,
      value: Math.round(value),
      non_interaction: true,
      custom_map: { metric_rating: performanceMetric.rating },
    });
  }

  // 커스텀 분석 서비스로 전송 (필요시)
  sendToAnalytics(performanceMetric);
}

function sendToAnalytics(metric: PerformanceMetrics) {
  // 여기에 커스텀 분석 서비스로 데이터를 전송하는 로직 추가
  // 예: fetch('/api/analytics', { method: 'POST', body: JSON.stringify(metric) })
  
  // 현재는 개발 모드에서만 로그
  if (process.env.NODE_ENV === 'development') {
    console.log('[Analytics]', metric);
  }
}

// 페이지 로드 시간 측정
export function measurePageLoadTime(pageName: string) {
  if (typeof window === 'undefined') return;

  const navigationEntry = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
  
  if (navigationEntry) {
    const loadTime = navigationEntry.loadEventEnd - navigationEntry.loadEventStart;
    const domContentLoadedTime = navigationEntry.domContentLoadedEventEnd - navigationEntry.domContentLoadedEventStart;
    
    console.log(`[Page Load] ${pageName}:`, {
      loadTime: Math.round(loadTime),
      domContentLoadedTime: Math.round(domContentLoadedTime),
      totalTime: Math.round(navigationEntry.loadEventEnd - navigationEntry.fetchStart),
    });
  }
}

// 이미지 로딩 성능 측정
export function measureImageLoading(imageSrc: string) {
  if (typeof window === 'undefined') return;

  const startTime = performance.now();
  const img = new Image();
  
  img.onload = () => {
    const loadTime = performance.now() - startTime;
    console.log(`[Image Load] ${imageSrc}: ${Math.round(loadTime)}ms`);
  };
  
  img.onerror = () => {
    console.error(`[Image Error] Failed to load: ${imageSrc}`);
  };
  
  img.src = imageSrc;
}

// 타입 확장 (gtag용)
declare global {
  interface Window {
    gtag?: (
      command: 'config' | 'event' | 'js' | 'consent',
      targetId: string,
      config?: Record<string, unknown>
    ) => void;
  }
}
