# TIT (Today I Thought) 페이지 구현 계획서

## 📋 현재 상태 분석

### 파일 구조
- **페이지 파일**: `src/app/about/page.tsx`
- **UI 컴포넌트**: `src/page-components/about/ui/AboutPage.tsx`

### 현재 구조
- 프로필 (Bio)
- Skills & Technologies
- Featured Projects
- Timeline
- Contact

## 🎯 목표

Instagram Threads 스타일의 간결하고 현대적인 **TIT (Today I Thought)** 페이지 구현
- 내 정보 + 내 생각들을 담은 공간

---

## 📐 새로운 UI 구성

```
┌─────────────────────────────────┐
│ 프로필 헤더                      │
│ ┌───┐                           │
│ │ 👤│ nickName                  │
│ └───┘ nickName                  │
├─────────────────────────────────┤
│                                 │
│ 📝 스레드 목록                   │
│                                 │
│ ┌─────────────────────────────┐ │
│ │ nickName · 16분           │ │
│ │ 끌어당김을 배웠다.            │ │
│ │ 나는 무한한 가능성...        │ │
│ └─────────────────────────────┘ │
│                                 │
│ ┌─────────────────────────────┐ │
│ │ nickName · 2일            │ │
│ │ 우리는 삶이라는 게임안에...   │ │
│ └─────────────────────────────┘ │
│                                 │
└─────────────────────────────────┘
```

### 주요 컴포넌트

1. **프로필 헤더**
   - 아바타 이미지 (`/images/avatar.jpg`)
   - 이름 (`name: "Seunghyun Yu"`)
   - 이메일 (`email: "kyileeeyu@gmail.com"`)
   - Bio (`bio: "이 공간의 주인입니다"`)
   - 소셜 링크 (GitHub, LinkedIn)
   - **Skills 태그** (기존 skills 배열을 Badge 형태로 표시)

2. **스레드 리스트**
   - 각 스레드 카드
   - 작성자 정보
   - 작성 시간
   - 본문 내용

### 제외 항목
- ❌ 팔로워 수
- ❌ 액션 버튼 (프로필 편집)
- ❌ 탭 네비게이션 (스레드/답글/미디어/리포스트)
- ❌ 상호작용 버튼 (좋아요, 댓글, 리포스트, 공유) - 추후 구현

---

## 🏗️ 데이터 구조

```typescript
interface Thread {
  id: string;
  author: string;
  content: string;
  timestamp: string; // ISO 8601 형식, UI에서 timeAgo로 변환하여 표시
}

interface AboutPageProps {
  siteTitle: string;
  author: string;
  githubUrl?: string;
  user: User;
  threads?: Thread[];
  skills?: string[];
  className?: string;
}
```

### 샘플 스레드 데이터

```typescript
const threads: Thread[] = [
  {
    id: "1",
    author: "nullandflow",
    content: `끌어당김을 배웠다.
나는 무한한 가능성, 우주이고 무엇이든 될 수 있다.

돈, 직장, 성공, 사람, 평안
나의 욕망이과 생각한 것들을 끌어당겼다.
틀렸도 있고 안됐것도 있다.

'그럼 법칙이 아닌데..?'
자연스럽게 다음단계의 무의식정화라는 키워드를 접했다.

열심히 올렸다.

그러고 나니,
무엇을 끌어당겨야 할지 몰랐다.

나를 몰랐기 때문이다.`,
    timestamp: "2025-10-02T10:00:00Z",
  },
  {
    id: "2",
    author: "nullandflow",
    content: `우리는 삶이라는 게임안에 들어온 여행자

모두를 승님으로 인정해 각자의 퀘스트를 깨고있다.

그러니까, 즐겁하되 너무 진지해지진 말기`,
    timestamp: "2025-09-30T15:30:00Z",
  },
];
```

---

## 📋 TDD 기반 구현 계획 (Phase별 체크리스트)

### Phase 1: 유틸리티 함수 및 데이터 로직 (TDD) ✅
- [x] **Test**: `formatTimeAgo` 함수 테스트 작성
  - [x] 방금 전 (1분 미만)
  - [x] N분 전
  - [x] N시간 전
  - [x] N일 전
  - [x] N주 전
  - [x] N개월 전
- [x] **Code**: `formatTimeAgo` 함수 구현
- [x] **Test**: 스레드 마크다운 파일 읽기 함수 테스트
- [x] **Code**: 스레드 파일 읽기 로직 구현
- [x] `content/threads/` 폴더 생성
- [x] 샘플 스레드 마크다운 파일 작성
  - [x] `content/threads/001-law-of-attraction.md`
  - [x] `content/threads/002-life-game.md`

### Phase 2: 데이터 정리 및 구조 변경 ✅
- [x] `src/app/about/page.tsx`에서 불필요한 데이터 제거
  - [x] `projects` 배열 제거
  - [x] `timeline` 배열 제거
  - [x] `skills` 배열은 **유지** (프로필 헤더에 태그로 표시)
- [x] `AboutPageProps` 인터페이스 수정
  - [x] `projects`, `timeline` props 제거
  - [x] `threads` prop 추가
  - [x] `skills` prop 유지
- [x] `page.tsx`를 async 함수로 변경하여 `getThreads()` 호출

### Phase 3: UI 컴포넌트 리팩토링 ✅
- [x] **Code**: `AboutPage.tsx` 레이아웃 변경
  - [x] max-w-2xl로 중앙 정렬 레이아웃 적용
  - [x] 프로필 헤더를 Card 안에 Bio + Skills로 통합
  - [x] Skills를 프로필 하단에 Badge 태그 형태로 표시

### Phase 4: 스레드 리스트 구현 ✅
- [x] **Code**: ThreadCard 컴포넌트 생성
  - [x] 작성자 정보 표시
  - [x] timestamp → formatTimeAgo로 변환하여 표시
  - [x] 본문 내용 표시 (whitespace-pre-wrap으로 줄바꿈 처리)
- [x] **Code**: AboutPage에서 ThreadCard 컴포넌트 사용
- [x] **Code**: entities/thread/index.ts 배럴 파일 생성

### Phase 5: 스타일링 및 반응형 ✅
- [x] 프로필 헤더 스타일링 (Card 컴포넌트 활용)
- [x] 스레드 카드 스타일링
  - [x] Card 컴포넌트 활용
  - [x] 적절한 간격 및 여백 (space-y-4)
  - [x] 타이포그래피 조정 (text-sm, leading-relaxed)
- [x] 반응형 레이아웃 적용
  - [x] 모바일: 단일 컬럼
  - [x] 데스크탑: 중앙 정렬, max-w-2xl
- [x] 다크모드 지원 (기본 테마 시스템 활용)

### Phase 6: 통합 테스트 및 검증
- [ ] E2E 테스트 (선택)
- [ ] 페이지 렌더링 확인
- [ ] 라우팅 정상 작동 확인 (`/about`)
- [ ] 다크모드 전환 테스트
- [ ] 반응형 레이아웃 테스트 (모바일/태블릿/데스크탑)
- [ ] 기존 레이아웃(헤더, 푸터) 통합 확인

---

## 🎨 디자인 가이드

### 참고 UI
- Instagram Threads 스타일
- 미니멀하고 깔끔한 디자인
- 카드 기반 레이아웃

### 스타일 원칙
- 기존 테마 시스템 활용
- `Card` 컴포넌트 재사용
- `Badge` 컴포넌트 활용 (필요시)
- 일관된 간격 및 타이포그래피
- 기존 `Bio` 컴포넌트 재사용 가능하면 재사용

### 반응형 고려사항
- 모바일: 단일 컬럼 레이아웃, 전체 너비
- 태블릿/데스크탑: 중앙 정렬, 최대 너비 제한 (`max-w-2xl` 또는 `max-w-3xl`)

---

## 📌 참고사항

- 스레드 콘텐츠는 `content/threads/` 폴더에 마크다운 파일로 관리
- TDD 방식으로 구현 (Test → Code 순서)
- 상호작용 버튼(좋아요, 댓글 등)은 나중에 구현
- 페이지 이름: **TIT (Today I Thought)**
- `timestamp`는 ISO 8601 형식으로 저장, UI에서 `formatTimeAgo` 함수로 변환하여 표시

---

## ✅ 최종 완료 조건

- [ ] Phase 1~5 모든 체크리스트 완료
- [ ] `/about` 페이지 정상 작동
- [ ] 샘플 스레드 데이터 표시 확인
- [ ] 다크모드 정상 작동
- [ ] 반응형 레이아웃 정상 작동
