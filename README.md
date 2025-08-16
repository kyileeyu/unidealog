# 📝 Modern Blog Project

## 🎯 프로젝트 개요

기존 Gatsby 블로그의 구조와 기능을 참고하여 Next.js 13+ App Router와 shadcn/ui로 구현하는 현대적인 블로그입니다.

### 🛠️ 기술 스택
- **Frontend**: Next.js 13+ (App Router), TypeScript
- **Styling**: Tailwind CSS, shadcn/ui
- **Content**: MDX
- **Deployment**: Vercel

## 🏗️ 프로젝트 구조

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
├── components/             # UI 컴포넌트 (shadcn/ui 기반)
│   ├── ui/                # shadcn/ui 기본 컴포넌트
│   ├── blog/              # 블로그 전용 컴포넌트
│   │   ├── bio/
│   │   ├── post-card/
│   │   ├── post-content/
│   │   ├── post-tabs/
│   │   └── ...
│   └── layout/            # 레이아웃 컴포넌트
├── lib/                   # 유틸리티 및 설정
│   ├── utils.ts
│   ├── mdx.ts
│   └── constants.ts
├── types/                 # TypeScript 타입 정의
└── content/              # MDX 블로그 포스트
```

## 🚀 구현 로드맵

### ✅ Phase 0: 프로젝트 초기 설정
- [x] Next.js 프로젝트 생성
- [x] TypeScript, Tailwind CSS 설정
- [x] shadcn/ui 기본 설정

### 📋 Phase 1: 기본 shadcn/ui 컴포넌트 설치 및 설정
- [ ] shadcn/ui 기본 컴포넌트 설치 (Button, Card, Badge, Tabs 등)
- [ ] CSS 변수 및 커스텀 테마 설정
- [ ] 다크/라이트 테마 구현

### 📋 Phase 2: 레이아웃 및 네비게이션 구현
- [ ] 메인 레이아웃 컴포넌트 (`Layout`)
- [ ] 헤더 컴포넌트 (`PageHeader`)
- [ ] 푸터 컴포넌트 (`PageFooter`)
- [ ] 테마 토글 (`ThemeSwitch`)

### 📋 Phase 3: 블로그 핵심 컴포넌트
- [ ] 프로필/Bio 컴포넌트
- [ ] 포스트 카드 컴포넌트 (`PostCard`)
- [ ] 포스트 탭/카테고리 필터 (`PostTabs`)
- [ ] 포스트 검색 기능

### 📋 Phase 4: MDX 및 콘텐츠 관리
- [ ] MDX 설정 및 파싱
- [ ] 포스트 메타데이터 타입 정의
- [ ] 포스트 목록 페이지
- [ ] 개별 포스트 페이지

### 📋 Phase 5: 고급 기능
- [ ] SEO 최적화
- [ ] 댓글 시스템 (utterances)
- [ ] 포스트 네비게이션
- [ ] 404 페이지

### 📋 Phase 6: 배포 및 최적화
- [ ] Vercel 배포 설정
- [ ] 성능 최적화
- [ ] 이미지 최적화

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

### 빌드
```bash
npm run build
```

### 배포
```bash
npm run start
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
