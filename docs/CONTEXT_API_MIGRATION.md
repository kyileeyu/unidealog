# Context API 마이그레이션 작업

## 목표
SITE_CONFIG를 Props Drilling 방식에서 Context API로 전환하여 데이터 레이어 개선

## 작업 체크리스트

### Phase 1: Provider 설정
- [x] `SiteConfigProvider` 생성
- [x] `useSiteConfig` 훅 생성
- [ ] `app/layout.tsx`에 Provider 추가

### Phase 2: Layout 컴포넌트 마이그레이션
- [ ] `Layout` 컴포넌트에서 props 제거
  - [ ] `siteTitle`, `author`, `githubUrl` props 삭제
  - [ ] 내부에서 `useSiteConfig()` 사용
- [ ] `PageHeader` 컴포넌트 수정
  - [ ] `siteTitle` prop 제거
  - [ ] 내부에서 `useSiteConfig()` 사용
- [ ] `PageFooter` 컴포넌트 수정
  - [ ] `author`, `githubUrl` props 제거
  - [ ] 내부에서 `useSiteConfig()` 사용

### Phase 3: Bio 컴포넌트 마이그레이션
- [ ] `Bio` 컴포넌트에서 `user` prop 제거
- [ ] 내부에서 `useSiteConfig()` 사용
- [ ] User 객체 변환 로직 내부화

### Phase 4: Page 컴포넌트 정리
- [ ] `HomePage` props 정리
- [ ] `AboutPage` props 정리
- [ ] `PostsPage` props 정리
- [ ] `PostDetailPage` props 정리

### Phase 5: App Router 파일 정리
- [ ] `app/page.tsx` - SITE_CONFIG import 제거
- [ ] `app/about/page.tsx` - SITE_CONFIG import 제거
- [ ] `app/posts/page.tsx` - SITE_CONFIG import 제거
- [ ] `app/posts/[slug]/page.tsx` - SITE_CONFIG import 제거

### Phase 6: 테스트 및 검증
- [ ] 빌드 테스트 (`npm run build`)
- [ ] 개발 서버 테스트 (`npm run dev`)
- [ ] 각 페이지 렌더링 확인
  - [ ] `/` (홈)
  - [ ] `/about`
  - [ ] `/posts`
  - [ ] `/posts/[slug]`

## 예상 효과

### Before
```typescript
// 10개 파일에서 SITE_CONFIG import
// Layout에 props 전달
<Layout siteTitle={SITE_CONFIG.name} author={SITE_CONFIG.author.name} ...>
```

### After
```typescript
// Provider 한 곳에서만 import
// 각 컴포넌트에서 훅 사용
const { name, author } = useSiteConfig();
```

## 장점
- ✅ Props Drilling 제거
- ✅ 컴포넌트 간결화
- ✅ 테스트 용이성 향상
- ✅ 데이터 접근 일관성
