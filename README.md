# 📝 Unidealog - Modern Blog with MDX & TDD

> 기존 Gatsby 블로그(bloggg)의 구조와 기능을 참고하여 Next.js 15+ App Router와 shadcn/ui로 구현하는 현대적인 블로그입니다.

## ✨ 주요 기능

- 📝 **MDX 기반 블로그** - Markdown + JSX로 풍부한 콘텐츠 작성
- 🎨 **다크모드 지원** - 테마 전환 기능
- 🔍 **포스트 검색** - 실시간 검색 및 카테고리 필터링
- 💬 **댓글 시스템** - Giscus (GitHub Discussions 기반)
- 📱 **반응형 디자인** - 모바일/태블릿/데스크톱 최적화
- ⚡ **고성능** - Next.js 15+ App Router, 이미지 최적화
- ♿ **접근성** - WCAG 2.1 준수
- 🎯 **SEO 최적화** - 메타데이터, Open Graph, JSON-LD

## 🛠️ 기술 스택

- **Frontend**: Next.js 15+, TypeScript, React 19
- **Styling**: Tailwind CSS 4, shadcn/ui
- **Content**: MDX, gray-matter, next-mdx-remote
- **Code Highlighting**: highlight.js
- **Testing**: Jest, React Testing Library
- **Deployment**: Vercel

## 🏗️ 프로젝트 구조 (FSD)

Feature-Sliced Design 아키텍처를 기반으로 구성되어 있습니다:

```
src/
├── app/              # Next.js App Router
├── shared/           # 공유 자원 (UI, utils, types)
├── entities/         # 비즈니스 엔티티 (post, user, category, thread)
├── features/         # 기능 단위 (search, theme, navigation, comments)
├── widgets/          # 복합 UI (header, footer, post-card, layout)
└── page-components/  # 페이지 컴포넌트

content/
├── posts/            # 블로그 포스트 (.mdx)
└── threads/          # 짧은 생각 (.md)
```

### FSD 레이어 설명

- **shared**: 재사용 가능한 공통 컴포넌트, 유틸리티
- **entities**: 비즈니스 엔티티 (Post, Category, User, Thread)
- **features**: 사용자 상호작용이 있는 기능들
- **widgets**: 여러 entities와 features를 조합한 복합 UI
- **page-components**: 라우팅되는 페이지들

## 🚀 시작하기

### 설치

```bash
npm install
```

### 개발 서버 실행

```bash
npm run dev
```

브라우저에서 [http://localhost:3000](http://localhost:3000)을 열어 확인하세요.

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
npm run start
```

## 📝 콘텐츠 작성

### 블로그 포스트 작성

`content/posts/` 폴더에 `.mdx` 파일을 생성:

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

### 스레드 작성

`content/threads/` 폴더에 `.md` 파일을 생성:

```markdown
---
id: "1"
title: "짧은 생각"
timestamp: "2025-10-03T10:00:00Z"
---

오늘의 생각을 여기에 작성하세요.
```

## 🎨 디자인 시스템

- **컬러**: Slate 기반 (shadcn/ui 기본)
- **타이포그래피**: Pretendard (한글 최적화)
- **컴포넌트**: shadcn/ui + 커스텀 컴포넌트
- **반응형**: Tailwind CSS 브레이크포인트

## 📚 문서

| 순서 | 문서 | 설명 |
|------|------|------|
| 001 | [초기 설정 및 개발 계획서](./docs/001-INITIAL_SETUP.md) | 프로젝트 전체 개발 로드맵 |
| 002 | [데이터 레이어 리팩토링](./docs/002-DATA_LAYER_REFACTOR.md) | 데이터 관리 구조 개선 |
| 003 | [스레드 스타일 About 페이지](./docs/003-THREAD_STYLE_ABOUT_PAGE_PLAN.md) | About 페이지 스레드 기능 |

## 🤝 기여하기

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 라이센스

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🔗 참고 자료

- [Next.js Documentation](https://nextjs.org/docs)
- [shadcn/ui Documentation](https://ui.shadcn.com)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [MDX Documentation](https://mdxjs.com)
