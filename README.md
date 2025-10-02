# 📝 Unidealog

> 코드는 AI가 짜줬지만 글은 사람이 씁니다.

> 클로드 코드를 이용해 개발한 개인 개발 블로그

## 🤖 AI-Powered Development

이 프로젝트는 **Claude Code**를 활용하여 다음과 같은 방식으로 개발되었습니다:

- **📋 TDD 기반 개발**: 테스트 코드 우선 작성 후 구현 (Claude Code 지원)
- **🏗️ FSD 아키텍처**: Feature-Sliced Design 체계적 적용
- **📐 체계적인 문서화**: Phase별 개발 계획 및 실행 기록 ([docs](./docs) 참고)
- **♻️ 지속적인 리팩토링**: Props Drilling 제거, 데이터 레이어 개선
- **🔍 코드 품질 관리**: `.clauderules`를 통한 일관된 코드 스타일 유지

## ✨ 주요 기능

- 📝 **MDX 기반 블로그** - Markdown + JSX로 풍부한 콘텐츠 작성
- 🎨 **다크모드 지원** - 테마 전환 기능
- 🔍 **포스트 검색** - 실시간 검색 및 카테고리 필터링
- 💬 **댓글 시스템** - Giscus (GitHub Discussions 기반)
- 📱 **반응형 디자인** - 모바일/태블릿/데스크톱 최적화
- ⚡ **고성능** - Next.js 15+ App Router, Server Components
- ♿ **접근성** - WCAG 2.1 준수
- 🎯 **SEO 최적화** - 메타데이터, Open Graph, JSON-LD

## 🛠️ 기술 스택

### Core

- **Frontend**: Next.js 15+, TypeScript, React 19
- **Styling**: Tailwind CSS 4, shadcn/ui
- **Content**: MDX, gray-matter, next-mdx-remote
- **Testing**: Jest, React Testing Library (TDD)

### Development Tools

- **AI Assistant**: Claude Code (설계, 구현, 리팩토링)
- **Code Quality**: ESLint, Prettier, `.clauderules`
- **Version Control**: Git (체계적인 커밋 메시지)

## 🏗️ 프로젝트 구조 (FSD + Next.js)

**Feature-Sliced Design** 아키텍처로 확장 가능하고 유지보수가 쉬운 구조:

```
src/
├── app/              # Next.js App Router (라우팅만 담당)
├── views/            # 페이지 조합 레이어 (FSD의 pages)
├── widgets/          # 재사용 가능한 큰 UI 블록
├── features/         # 비즈니스 기능 단위
├── entities/         # 도메인 엔티티 (post, user, thread)
└── shared/           # 공통 자원 (ui, lib, config)

content/
├── posts/            # 블로그 포스트 (.mdx)
└── threads/          # 짧은 생각 (.md)

docs/                 # 개발 문서 (계획, 회고, 가이드)
```

### 아키텍처 원칙

- **계층 분리**: 상위 레이어는 하위 레이어만 참조 (app → views → widgets → features → entities → shared)
- **라우팅 분리**: `app/`는 Next.js 라우팅만, `views/`는 페이지 UI 조합
- **단일 책임**: 각 모듈은 하나의 역할만 수행
- **타입 안정성**: TypeScript strict 모드

## 🚀 빠른 시작

```bash
# 의존성 설치
npm install

# 개발 서버 실행
npm run dev

# 테스트 실행 (TDD)
npm run test:watch

# 프로덕션 빌드
npm run build
npm run start
```

## 📚 개발 문서

| 순서 | 문서                                                                     | 주요 내용                              |
| ---- | ------------------------------------------------------------------------ | -------------------------------------- |
| 001  | [초기 설정 및 개발 계획서](./docs/001-INITIAL_SETUP.md)                  | Phase 0-6 개발 로드맵, MDX 시스템 구축 |
| 002  | [데이터 레이어 리팩토링](./docs/002-DATA_LAYER_REFACTOR.md)              | Props Drilling 제거, 아키텍처 개선     |
| 003  | [스레드 스타일 About 페이지](./docs/003-THREAD_STYLE_ABOUT_PAGE_PLAN.md) | TDD 기반 Thread 엔티티 구현            |

> 💡 각 문서는 **계획 → 구현 → 검증** 프로세스를 상세히 기록

## 🧪 개발 방법론

### TDD (Test-Driven Development)

```bash
# 1. 테스트 작성
tests/unit/shared/lib/utils.test.ts

# 2. 구현
src/shared/lib/utils.ts

# 3. 검증
npm run test
```

### 코드 품질 관리

- **`.clauderules`**: 프로젝트별 코딩 규칙 정의
- **일관된 커밋**: `feat:`, `fix:`, `refactor:` 등 컨벤션 준수
- **문서화**: 모든 주요 결정사항을 docs에 기록

## 💡 주요 개발 성과

### 1. 체계적인 아키텍처 설계

- FSD 패턴 적용으로 확장 가능한 구조 구축
- Server/Client Component 최적 분리

### 2. 성능 최적화

- Props Drilling 제거 → Server Component 최대 활용
- 정적 데이터는 직접 import, 동적 데이터만 props 전달

### 3. 개발 생산성

- Claude Code 활용으로 빠른 프로토타이핑
- TDD로 안정적인 코드베이스 확보
- 체계적 문서화로 컨텍스트 스위칭 최소화

## 🎨 디자인 시스템

- **컬러**: Slate 기반 (다크모드 최적화), 눈에 편안한 색감 고려
- **타이포그래피**: Pretendard (한글 가독성)
- **컴포넌트**: shadcn/ui + 커스텀 확장
- **반응형**: Mobile-first 접근

## 📝 콘텐츠 관리

### VS Code 스니펫 활용

`.vscode/mdx.code-snippets`에 정의된 템플릿으로 빠른 콘텐츠 작성:

- `temp` → 블로그 포스트 템플릿
- `thread` → 스레드 템플릿
- `dev` → 개발 포스트 템플릿

---

<div align="center">

**🤖 Built with Claude Code**
AI-Powered Development

</div>
