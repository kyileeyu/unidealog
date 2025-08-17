# 📝 Unidealog - Modern Blog with MDX & TDD

## 🎯 프로젝트 개요

기존 Gatsby 블로그(bloggg)의 구조와 기능을 참고하여 Next.js 13+ App Router와 shadcn/ui로 구현하는 현대적인 블로그입니다.

### 🛠️ 기술 스택

- **Frontend**: Next.js 13+ (App Router), TypeScript
- **Styling**: Tailwind CSS, shadcn/ui
- **Typography**: Pretendard (CDN)
- **Content**: MDX (Markdown + JSX)
- **Content Processing**: gray-matter, reading-time, next-mdx-remote
- **Code Highlighting**: highlight.js
- **MDX Plugins**: rehype-highlight, rehype-slug, rehype-autolink-headings
- **Testing**: Jest, React Testing Library
- **Deployment**: Vercel

## 🚀 최근 업데이트 (2025-08-16)

### ✅ MDX 블로그 시스템 구축 완료!

1. **실제 MDX 콘텐츠 파일 생성** - `content/posts/`에 샘플 포스트 추가
2. **MDX 파싱 시스템 구현** - `/shared/lib/mdx.ts`로 완전한 파일 처리 유틸리티 구축
3. **전체 라우팅 완성** - `/posts`, `/posts/[slug]` 페이지 구현
4. **Hydration 에러 해결** - ThemeProvider 마운팅 최적화로 안정성 확보
5. **라우터 구조 최적화** - RESTful한 URL 구조로 개선 (`/post/[slug]` → `/posts/[slug]`)

### 🔧 현재 수정 중인 이슈들

#### 🐛 발견된 문제점들

1. **PostContent 마크다운 렌더링 이슈**

   - 현재 상태: raw 마크다운이 그대로 표시됨
   - 원인: `@tailwindcss/typography` 미설치 + MDX 파서 부재
   - 해결 예정: next-mdx-remote 또는 @next/mdx 도입

2. **PostNavigation 렌더링 실패**

   - 현재 상태: 네비게이션이 화면에 나타나지 않음
   - 원인: 데이터 구조 불일치 + 이전/다음 포스트 로직 누락
   - 해결 예정: Post 타입 정의 수정 + 네비게이션 데이터 전달 로직 구현

3. **MDX 처리 파이프라인 불완전**
   - 누락: 코드 하이라이팅, 수식 처리, 커스텀 컴포넌트 지원
   - 해결 예정: 완전한 MDX 생태계 구축

### 🎯 긴급 수정 계획

#### Phase A: PostContent 마크다운 렌더링 수정

- [x] `@tailwindcss/typography` 플러그인 설치
- [x] `next-mdx-remote` 및 rehype 플러그인들 설치 및 설정
- [x] `PostContent` 컴포넌트 MDX 렌더링으로 변경
- [x] 코드 하이라이팅 (highlight.js) 추가
- [x] MDX 커스텀 컴포넌트 시스템 구축

#### Phase B: PostNavigation 기능 복구

- [x] `Post` 인터페이스 `wordCount` 속성 추가
- [x] 포스트 상세 페이지에서 이전/다음 포스트 데이터 로직 구현
- [x] `getPostNavigation` 함수와 연동
- [x] PostNavigation 컴포넌트 데이터 바인딩 수정

#### ✅ 최근 완료된 수정사항 (2025-08-16)

1. **MDX 렌더링 시스템 완전 구축**

   - `next-mdx-remote` 기반 MDX 프로세서 구현
   - rehype-highlight, rehype-slug, rehype-autolink-headings 플러그인 추가
   - 커스텀 MDX 컴포넌트 시스템 구축 (헤딩, 코드블록, 링크 등)
   - PostContent 컴포넌트를 MDX 렌더링으로 전환

2. **코드 하이라이팅 시스템 추가**

   - highlight.js 통합
   - GitHub Dark 테마 적용
   - 자동 언어 감지 기능

3. **PostNavigation 기능 복구**

   - Post 타입에 wordCount 속성 추가
   - 포스트 상세 페이지에서 네비게이션 데이터 계산 로직 구현
   - 이전/다음 포스트 연결 완료

4. **타입 안전성 개선**
   - MDX 프로세서 타입 정의 개선
   - 전체 시스템 타입 호환성 확보

#### Phase C: MDX 고급 기능 추가

- [ ] 커스텀 MDX 컴포넌트 지원
- [ ] 수식 렌더링 (KaTeX 또는 MathJax)
- [ ] 이미지 최적화 및 갤러리 기능
- [ ] 목차(TOC) 자동 생성

### 🎉 현재 동작하는 기능들

- ✅ 홈페이지에서 실제 MDX 포스트 목록 표시
- ✅ 포스트 클릭 시 상세 페이지 이동 (`/posts/[slug]`)
- ✅ 전체 포스트 목록 페이지 (`/posts`) - 카테고리 필터 포함
- ✅ URL 쿼리를 통한 카테고리 필터링 (`/posts?category=development`)
- ✅ 자동 SEO 메타데이터 생성 및 읽기 시간 계산
- ✅ **MDX 콘텐츠 렌더링** - 마크다운이 올바르게 HTML로 변환되어 표시
- ✅ **코드 하이라이팅** - 코드 블록 syntax highlighting 지원
- ✅ **포스트 네비게이션** - 이전/다음 포스트 이동 기능
- ✅ **커스텀 MDX 컴포넌트** - 헤딩, 코드, 링크, 테이블 등 스타일링

### 📝 포스트 작성 방법

이제 `content/posts/` 폴더에 `.mdx` 파일을 생성하면 자동으로 블로그에 나타납니다!

```markdown
---
emoji: "🎯"
title: "새로운 포스트 제목"
date: "2024-01-16"
author: "Your Name"
tags: ["nextjs", "blog"]
categories: ["development"]
description: "포스트 설명"
---

# 포스트 내용

여기에 마크다운으로 글을 작성하세요!
```

## 🏗️ 프로젝트 구조 (FSD - Feature-Sliced Design)

```
src/
├── app/                    # Next.js 13+ App Router
│   ├── posts/
│   │   ├── [slug]/        # 개별 포스트 페이지
│   │   └── page.tsx       # 전체 포스트 목록
│   ├── about/
│   ├── favicon.ico
│   ├── globals.css
│   ├── layout.tsx
│   ├── manifest.ts
│   ├── not-found.tsx
│   ├── page.tsx
│   └── sitemap.ts
├── shared/                 # 공유 자원 (FSD Layer 1)
│   ├── ui/                # shadcn/ui 기본 컴포넌트
│   │   ├── button/
│   │   ├── card/
│   │   ├── badge/
│   │   └── ...
│   ├── lib/               # 유틸리티 함수
│   │   ├── utils.ts
│   │   ├── mdx.ts
│   │   └── constants.ts
│   ├── api/               # API 관련 함수
│   ├── types/             # 공통 TypeScript 타입
│   └── config/            # 설정 파일
├── entities/              # 비즈니스 엔티티 (FSD Layer 2)
│   ├── post/              # 포스트 엔티티
│   │   ├── model/         # 포스트 모델, 타입
│   │   ├── api/           # 포스트 관련 API
│   │   └── lib/           # 포스트 유틸리티
│   ├── category/          # 카테고리 엔티티
│   │   ├── model/
│   │   └── lib/
│   └── user/              # 사용자/프로필 엔티티
│       ├── model/
│       └── ui/            # Bio 컴포넌트
├── features/              # 기능 단위 (FSD Layer 3)
│   ├── post-search/       # 포스트 검색 기능
│   │   ├── ui/            # 검색 UI 컴포넌트
│   │   ├── model/         # 검색 상태 관리
│   │   └── lib/           # 검색 로직
│   ├── theme-switch/      # 테마 변경 기능
│   │   ├── ui/
│   │   ├── model/
│   │   └── lib/
│   ├── post-navigation/   # 포스트 네비게이션
│   │   └── ui/
│   └── comments/          # 댓글 시스템 (utterances)
│       └── ui/
├── widgets/               # 복합 UI 블록 (FSD Layer 4)
│   ├── page-header/       # 페이지 헤더
│   │   ├── ui/
│   │   └── model/
│   ├── page-footer/       # 페이지 푸터
│   │   └── ui/
│   ├── post-card/         # 포스트 카드
│   │   ├── ui/
│   │   └── lib/
│   ├── post-list/         # 포스트 목록
│   │   └── ui/
│   ├── post-content/      # 포스트 내용
│   │   └── ui/
│   └── layout/            # 메인 레이아웃
│       └── ui/
├── pages/                 # 페이지 컴포넌트 (FSD Layer 5)
│   ├── home/              # 홈페이지
│   ├── about/             # 소개 페이지
│   ├── post-detail/       # 포스트 상세
│   ├── posts/             # 포스트 목록 (카테고리 필터 포함)
│   └── not-found/         # 404 페이지
└── content/               # MDX 블로그 포스트
    ├── posts/
    └── pages/
```

### FSD 레이어 설명

- **shared**: 재사용 가능한 공통 컴포넌트, 유틸리티
- **entities**: 비즈니스 엔티티 (Post, Category, User)
- **features**: 사용자 상호작용이 있는 기능들
- **widgets**: 여러 entities와 features를 조합한 복합 UI
- **pages**: 라우팅되는 페이지들

### ✅ Phase 0: 프로젝트 초기 설정

- [x] Next.js 프로젝트 생성
- [x] TypeScript, Tailwind CSS 설정
- [x] shadcn/ui 기본 설정 및 초기화
- [x] 테스트 환경 설정 (Jest, React Testing Library)

### ✅ Phase 1: Shared Layer - 기본 컴포넌트 및 유틸리티

- [x] shadcn/ui 기본 컴포넌트 설치 (Button, Badge, Tabs, Input, Separator, Switch)
- [x] 공통 유틸리티 함수 구현 (기존 utils.ts 활용)
- [x] 타입 정의 및 설정 파일 (shared/types, shared/config)
- [x] 테마 시스템 구축 (ThemeProvider, ThemeToggle)

### ✅ Phase 2: Entities Layer - 비즈니스 엔티티

- [x] **Post Entity**: 포스트 모델 및 타입 정의
- [x] **Category Entity**: 카테고리 모델
- [x] **User Entity**: 사용자/프로필 모델 및 Bio 컴포넌트
- [x] MDX 파싱 및 콘텐츠 관리

### ✅ Phase 3: Features Layer - 핵심 기능

- [x] **Post Search**: 포스트 검색 기능 (검색 로직, 상태 관리 구현)
- [x] **Theme Switch**: 다크/라이트 테마 토글
- [x] **Post Navigation**: 이전/다음 포스트 네비게이션
- [x] **Comments**: 댓글 시스템 (Giscus - GitHub Discussions 기반, 완전 무료)

### ✅ Phase 4: Widgets Layer - 복합 UI 컴포넌트

- [x] **Page Header**: 네비게이션이 포함된 헤더
- [x] **Page Footer**: 푸터 컴포넌트
- [x] **Post Card**: 포스트 카드 위젯
- [x] **Post List**: 포스트 목록 위젯
- [x] **Post Content**: 포스트 내용 렌더링 위젯
- [x] **Layout**: 메인 레이아웃 위젯

### ✅ Phase 5: Pages Layer - 페이지 구성

- [x] **Home Page**: 메인 페이지
- [x] **Post Detail Page**: 개별 포스트 페이지
- [x] **Posts Page**: 전체 포스트 목록 + 카테고리 필터링
- [x] **About Page**: 소개 페이지
- [x] **404 Page**: Not Found 페이지

### ✅ Phase 6: 고급 기능 및 최적화

- [x] **SEO 최적화**: 메타데이터, Open Graph, JSON-LD 구조화 데이터
- [x] **이미지 최적화**: Next.js Image 컴포넌트 설정 및 최적화
- [x] **성능 최적화**: Core Web Vitals 측정 및 최적화
- [x] **접근성 개선**: A11y 유틸리티, 키보드 네비게이션, 스크린 리더 지원
- [x] **Vercel 배포 설정**: 환경변수, 사이트맵, robots.txt, manifest

## 🎨 디자인 시스템

### 컬러 팔레트

- **Primary**: Slate 기반 (shadcn/ui 기본)
- **Background**: White/Dark
- **Text**: Gray-900/Gray-100

### 타이포그래피

- **Font Family**: Pretendard (CDN), -apple-system, BlinkMacSystemFont, system-ui, sans-serif
- **Headings**: Bold, 다양한 크기
- **Body**: Regular, 읽기 좋은 line-height
- **Korean Support**: Pretendard로 한글 최적화

### 컴포넌트

- **Base**: shadcn/ui 컴포넌트
- **Custom**: 블로그 특화 컴포넌트
- **Responsive**: Tailwind CSS 브레이크포인트

## 🚦 시작하기

### 개발 서버 실행

```bash
npm run dev
```

### 테스트 실행

```bash
# 유닛 테스트
npm run test

# 테스트 watch 모드
npm run test:watch

# 커버리지 확인
npm run test:coverage
```

### 빌드

```bash
npm run build
```

### 배포

```bash
npm run start
```

## 🧪 개발 워크플로우

### FSD 레이어별 개발 순서

1. **Shared** → **Entities** → **Features** → **Widgets** → **Pages**
2. 각 레이어는 하위 레이어만 참조 가능
3. 테스트 우선 개발로 안정성 확보

### 컴포넌트 개발 프로세스

```bash
# 1. 테스트 파일 생성
touch src/shared/ui/button/__tests__/Button.test.tsx

# 2. 컴포넌트 구현
touch src/shared/ui/button/Button.tsx

# 3. 테스트 실행 및 검증
npm run test -- --watch
```

## 📝 참고 자료

- [Next.js Documentation](https://nextjs.org/docs)
- [shadcn/ui Documentation](https://ui.shadcn.com)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [MDX Documentation](https://mdxjs.com)

## 🤝 기여하기

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 라이센스

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
