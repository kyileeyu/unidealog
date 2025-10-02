# 데이터 레이어 개선 작업

## 목표
Props Drilling을 제거하고 각 컴포넌트에서 SITE_CONFIG를 직접 import하여 데이터 접근 단순화

## 작업 방향 변경 이유

### ❌ Context API (취소)
- SITE_CONFIG는 **정적 데이터** (런타임에 변하지 않음)
- Context는 **상태 관리** 용도 (동적 데이터)
- 불필요한 클라이언트 번들 증가
- Server Component의 장점을 활용 못함

### ✅ 직접 Import (채택)
- **성능 우수**: Server Component 유지 가능
- **번들 최적화**: 클라이언트 코드 감소
- **간결함**: 단순히 import하여 사용
- **SEO**: Server Component로 초기 렌더링

---

## 작업 체크리스트

### Phase 1: 정리 작업 ✅
- [x] Context API 관련 파일 삭제
  - [x] `src/shared/providers/SiteConfigProvider.tsx`
  - [x] `src/shared/providers/index.ts`
  - [x] `src/shared/providers/` 디렉토리
- [x] `app/layout.tsx`에서 Provider import/사용 제거
- [x] 기존 변경사항 되돌리기
  - [x] `Layout` 컴포넌트 원래대로 (`'use client'` 제거, Server Component로 복귀)
  - [x] `PageHeader` 컴포넌트 원래대로 (useSiteConfig → SITE_CONFIG 직접 import)

### Phase 2: Widget 컴포넌트 개선 ✅
- [x] `Layout` 컴포넌트
  - [x] `siteTitle`, `author`, `githubUrl` props 삭제
  - [x] Server Component 유지 (no `'use client'`)
- [x] `PageHeader` 컴포넌트
  - [x] `siteTitle` prop 삭제
  - [x] 내부에서 `SITE_CONFIG.name` 직접 사용
  - [x] `'use client'` 유지 (PostSearch, ThemeToggle 때문)
- [x] `PageFooter` 컴포넌트
  - [x] `author`, `githubUrl` props 삭제
  - [x] 내부에서 `SITE_CONFIG.author` 직접 사용
  - [x] Server Component 유지

### Phase 3: Bio 컴포넌트 개선
- [ ] `Bio` 컴포넌트
  - [ ] `user` prop 삭제
  - [ ] 내부에서 `SITE_CONFIG.author` 사용
  - [ ] User 객체 변환 로직 내부화
  - [ ] `'use client'` 유지 (이미 클라이언트 컴포넌트)

### Phase 4: Page 컴포넌트 정리 ✅
- [x] `HomePage`
  - [x] `siteTitle`, `author`, `githubUrl` props 제거
  - [x] `posts`만 전달받음
- [x] `AboutPage`
  - [x] 이미 완료됨 (threads만 전달)
- [x] `PostsPage`
  - [x] `siteTitle`, `author` props 제거
  - [x] `posts`, `categories`만 전달받음
- [x] `PostDetailPage`
  - [x] SITE_CONFIG 관련 props 확인 및 제거
  - [x] SITE_CONFIG import 추가
- [x] `NotFoundPage`
  - [x] SITE_CONFIG 관련 props 제거
- [x] `CategoryPage`
  - [x] SITE_CONFIG 관련 props 제거

### Phase 5: App Router 파일 정리 ✅
- [x] `app/page.tsx`
  - [x] `<HomePage posts={posts} />`만 유지
  - [x] SITE_CONFIG 관련 props 제거
- [x] `app/about/page.tsx`
  - [x] 이미 완료됨
- [x] `app/posts/page.tsx`
  - [x] SITE_CONFIG props 제거
- [x] `app/posts/[slug]/page.tsx`
  - [x] SITE_CONFIG props 제거
- [x] `app/not-found.tsx`
  - [x] SITE_CONFIG props 제거

### Phase 6: 테스트 및 검증 ✅
- [x] 타입 체크 (`npm run build`) - 성공

---

## 설계 원칙

### Before (Props Drilling)
```typescript
// app/page.tsx
<HomePage
  posts={posts}
  siteTitle={SITE_CONFIG.name}           // ❌ 불필요
  author={SITE_CONFIG.author.name}       // ❌ 불필요
  githubUrl={SITE_CONFIG.author.github}  // ❌ 불필요
/>

// HomePage.tsx
<Layout siteTitle={siteTitle} author={author} ...>  // ❌ Props Drilling
```

### After (직접 Import)
```typescript
// app/page.tsx
<HomePage posts={posts} />  // ✅ 외부 데이터만 전달

// HomePage.tsx (Server Component)
import { SITE_CONFIG } from '@/shared/config/site';

export function HomePage({ posts }) {
  return <Layout>{/* ... */}</Layout>;  // ✅ props 없음
}

// Layout.tsx (Server Component)
import { SITE_CONFIG } from '@/shared/config/site';

export function Layout({ children }) {
  return (
    <>
      <PageHeader />  // ✅ props 없음
      {children}
      <PageFooter />  // ✅ props 없음
    </>
  );
}
```

---

## 데이터 전달 규칙

### ✅ Props로 전달해야 하는 것
- **외부 데이터**: API 응답, DB 조회 결과
- **동적 데이터**: 사용자 입력, 상태 변경
- **예시**: `posts`, `threads`, `searchQuery`

### ❌ Props로 전달하지 말아야 하는 것
- **정적 설정**: SITE_CONFIG, 환경 변수
- **상수 데이터**: 변하지 않는 값
- **예시**: `siteTitle`, `author`, `navigation`

---

## 예상 효과

### 성능
- ✅ Server Component 활용 → 클라이언트 번들 감소
- ✅ 불필요한 Context Provider 제거
- ✅ 초기 로딩 속도 향상

### 코드 품질
- ✅ Props Drilling 제거
- ✅ 컴포넌트 인터페이스 간소화
- ✅ 코드 가독성 향상

### 유지보수
- ✅ 데이터 접근 방식 통일
- ✅ 테스트 용이성 (import만 mock)
- ✅ 타입 안정성 유지
