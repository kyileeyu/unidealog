import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // 이미지 최적화 설정
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    domains: [],
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },

  // 성능 최적화
  experimental: {
    optimizePackageImports: ['@heroicons/react'],
  },

  // 압축 설정
  compress: true,

  // 정적 파일 캐시 설정
  poweredByHeader: false,

  // MDX 지원 (향후 추가 예정)
  pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],

  // 환경변수 설정
  env: {
    CUSTOM_KEY: 'unidealog',
  },

  // 리다이렉트 설정 (필요시)
  async redirects() {
    return [
      // 예: /blog -> /posts
      // {
      //   source: '/blog',
      //   destination: '/posts',
      //   permanent: true,
      // },
    ];
  },

  // 헤더 설정 (보안 및 성능)
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin',
          },
        ],
      },
      // 정적 자산 캐시 설정
      {
        source: '/public/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ];
  },
};

export default nextConfig;
