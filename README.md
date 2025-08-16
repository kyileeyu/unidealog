# 📝 Unidealog - Modern Blog with TDD

## 🎯 프로젝트 개요

기존 Gatsby 블로그(bloggg)의 구조와 기능을 참고하여 Next.js 13+ App Router와 shadcn/ui로 구현하는 현대적인 블로그입니다.

### 🛠️ 기술 스택

- **Frontend**: Next.js 13+ (App Router), TypeScript
- **Styling**: Tailwind CSS, shadcn/ui
- **Testing**: Jest, React Testing Library
- **Content**: MDX
- **Deployment**: Vercel

## 🏗️ 프로젝트 구조 (FSD - Feature-Sliced Design)

```
src/
├── app/                    # Next.js 13+ App Router
│   ├── (blog)/
│   │   ├── posts/[category]/
│   │   └── post/[slug]/
│   ├── about/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
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
│   ├── category/          # 카테고리별 포스트
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

## 🚀 구현 로드맵

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
- [x] **Comments**: 댓글 시스템 (utterances)

### ✅ Phase 4: Widgets Layer - 복합 UI 컴포넌트

- [x] **Page Header**: 네비게이션이 포함된 헤더
- [x] **Page Footer**: 푸터 컴포넌트
- [x] **Post Card**: 포스트 카드 위젯
- [x] **Post List**: 포스트 목록 위젯
- [x] **Post Content**: 포스트 내용 렌더링 위젯
- [x] **Layout**: 메인 레이아웃 위젯

### 📋 Phase 5: Pages Layer - 페이지 구성

- [ ] **Home Page**: 메인 페이지
- [ ] **Post Detail Page**: 개별 포스트 페이지
- [ ] **Category Page**: 카테고리별 포스트 페이지
- [ ] **About Page**: 소개 페이지
- [ ] **404 Page**: Not Found 페이지

### 📋 Phase 6: 고급 기능 및 최적화

- [ ] SEO 최적화
- [ ] 이미지 최적화
- [ ] 성능 최적화
- [ ] 접근성 개선
- [ ] Vercel 배포 설정

## 🎨 디자인 시스템

### 컬러 팔레트

- **Primary**: Slate 기반 (shadcn/ui 기본)
- **Background**: White/Dark
- **Text**: Gray-900/Gray-100

### 타이포그래피

- **Font Family**: Inter (Next.js 기본)
- **Headings**: Bold, 다양한 크기
- **Body**: Regular, 읽기 좋은 line-height

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
