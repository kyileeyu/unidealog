## 🚀 Unidealog - Modern Blog Development Progress

### ✅ Completed Phases

#### Phase 0: 프로젝트 초기 설정
- [x] Next.js 프로젝트 생성
- [x] TypeScript, Tailwind CSS 설정
- [x] shadcn/ui 기본 설정 및 초기화
- [x] 테스트 환경 설정 (Jest, React Testing Library)

#### Phase 1: Shared Layer - 기본 컴포넌트 및 유틸리티
- [x] shadcn/ui 기본 컴포넌트 설치 (Button, Badge, Tabs, Input, Separator, Switch, Card, Avatar)
- [x] 공통 유틸리티 함수 구현 (기존 utils.ts 활용)
- [x] 타입 정의 및 설정 파일 (shared/types, shared/config)
- [x] 테마 시스템 구축 (ThemeProvider, ThemeToggle)

#### Phase 2: Entities Layer - 비즈니스 엔티티
- [x] **Post Entity**: 포스트 모델 및 타입 정의
- [x] **Category Entity**: 카테고리 모델
- [x] **User Entity**: 사용자/프로필 모델 및 Bio 컴포넌트
- [x] MDX 파싱 및 콘텐츠 관리

#### Phase 3: Features Layer - 핵심 기능
- [x] **Post Search**: 포스트 검색 기능 (검색 로직, 상태 관리, zustand)
- [x] **Theme Switch**: 다크/라이트 테마 토글 (features로 구조화)
- [x] **Post Navigation**: 이전/다음 포스트 네비게이션, 연관 포스트
- [x] **Comments**: 댓글 시스템 (utterances)

### 📋 다음 단계: Phase 4 - Widgets Layer

Next Phase: Widgets Layer 구현
- [ ] **Page Header**: 네비게이션이 포함된 헤더
- [ ] **Page Footer**: 푸터 컴포넌트  
- [ ] **Post Card**: 포스트 카드 위젯
- [ ] **Post List**: 포스트 목록 위젯
- [ ] **Post Content**: 포스트 내용 렌더링 위젯
- [ ] **Layout**: 메인 레이아웃 위젯

### 🛠️ 사용된 기술 스택
- **Frontend**: Next.js 13+ (App Router), TypeScript
- **Styling**: Tailwind CSS, shadcn/ui
- **State Management**: Zustand (검색 기능)
- **Testing**: Jest, React Testing Library
- **Architecture**: FSD (Feature-Sliced Design)
