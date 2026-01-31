# 이력서 페이지 구현 계획

## 1. 개요

블로그 프로젝트(`/resume`) 경로에 A4 2장 분량의 이력서 페이지를 구현한다.
Figma 디자인(`이력서_유승현`)의 "첫 페이지"(4:20)와 "6"(63:798) 프레임을 코드로 옮긴다.

---

## 2. Figma 디자인 분석

### 2.1 페이지 사양
- **프레임 크기**: 595 x 842px (A4 @ 72dpi)
- **배경색**: `#FFFFFF`
- **폰트**: Pretendard (프로젝트에 이미 적용됨)
- **텍스트 색상**: `#000000` (검정)
- **내부 콘텐츠 영역**: 547 x 821px → 좌우 마진 약 24px, 상하 마진 약 10px

### 2.2 CSS 스케일링
Figma 72dpi → 웹 96dpi 변환 비율: **1.334x** (794 / 595)

| Figma (px) | CSS (px) | 용도 |
|------------|----------|------|
| 8 | 10-11 | 날짜, 기술스택 상세 |
| 9 | 12 | 역할 설명, 기타 본문 |
| 10 | 13 | 서브 제목, 연락처 라벨 |
| 11 | 14-15 | 자기소개 본문 |
| 14 | 18-19 | 회사명, 활동명 |
| 16 | 21 | 섹션 헤더 |
| 18 | 24 | 이름 |

### 2.3 레이아웃 구조

#### 섹션 간 구분선
- 각 섹션 사이에 얇은 수평 구분선(`border-top` 또는 `<hr>`)

#### 업무 경험 아이템 레이아웃
- **2컬럼 수평 배치** (gap: 12px → 16px CSS)
- **좌측 컬럼** (~158px → ~211px): 팀/기간, 프로젝트명, 연도/기술, 기술스택
- **우측 컬럼** (나머지): 역할, 문제해결, 성과 설명

---

## 3. 페이지별 콘텐츠

### 3.1 Page 1 — "첫 페이지"

```
┌─────────────────────────────────────────────────┐
│  유승현 (Seunghyun Kyilee Yu)        [프로필사진] │
│  email | phone | LinkedIn | GitHub               │
├─────────────────────────────────────────────────┤
│  자기 소개                                        │
│  3년간 하나의 프로덕트를 성장시켜온 4년차 ...       │
├─────────────────────────────────────────────────┤
│  경력                                             │
│  이마고웍스 (Imagoworks)                           │
│  Frontend Engineer | 2022.07 ~ 재직중 (3년 7개월)  │
│  Frontend Intern | 2022.03 ~ 2022.06 (4개월)      │
│  치과 CAD/CAM 솔루션 B2B, B2C SaaS ...            │
├─────────────────────────────────────────────────┤
│  스킬                                             │
│  Frontend: JS, TS, React, Jest ...                │
│  Collaboration: Git, Jira, Bitbucket ...          │
├─────────────────────────────────────────────────┤
│  업무 경험                                        │
│  [좌측]                  │ [우측]                  │
│  상태관리 아키텍처 재설계  │ 역할: Cypress E2E ...  │
│  2025 | React, TS ...    │ 문제해결: ...           │
│  기술스택: ...            │ 성과: 80% E2E ...      │
└─────────────────────────────────────────────────┘
```

#### 상세 콘텐츠

**헤더**
- 이름: `유승현 (Seunghyun Kyilee Yu)` — 18px SemiBold→ CSS 24px
- 프로필 사진: 원형 104x104px → CSS ~139px, `/public/images/profile.png`

**연락처** (수평 나열, gap: 24px → 32px)
- 이메일: kyileeeyu@gmail.com
- 전화번호: 010-5772-5514
- LinkedIn: linkedin.com/in/seunghyun-yu
- GitHub: github.com/kyileeyu

**자기 소개**
> 3년간 하나의 프로덕트를 성장시켜온 4년차 프론트엔드 개발자입니다.
> 신입으로 입사해 현재 11개국 수십 곳의 기업이 실제로 사용하는 B2B2C SaaS 제품을 만들어왔습니다. 사용 과정에서 발생한 문제들을 직접 해결하고, 성능 병목을 찾아 개선하며, 프로덕션 환경에서 안정적으로 동작하는 시스템을 구축한 경험이 있습니다.

**경력**
- 회사: 이마고웍스 (Imagoworks) — 14px
- Frontend Engineer | 2022.07 ~ 재직중 (3년 7개월) — 10px Medium
- Frontend Intern | 2022.03 ~ 2022.06 (4개월) — 9px Medium
- 설명: 치과 CAD/CAM 솔루션을 제공하는 B2B, B2C SaaS 시리즈 C 스타트업. 13개국에 서비스 중. — 10px Medium

**스킬** (2컬럼, gap: 24px → 32px)
- Frontend: JavaScript, TypeScript, React, Jest, Playwright. npm, pnpm, Webpack, Vite
- Collaboration: Git, Jira, Bitbucket, Azure DevOps, Teams

**업무 경험 #1**
- 팀/기간: (빈 값)
- 프로젝트명: 상태관리 아키텍처 재설계
- 연도/기술: 2025 | React, TypeScript, Zustand, TanStack Query, Jest
- 기술스택: React, Typescript, Cypress, MUI, React-hook-form, TanStack-Query
- 역할:
  - 기존 백오피스 기능에 Cypress 기반 E2E 테스트 도입 및 주요 버그 리포트/픽스
  - JS 기반 Minimals UI 백오피스를 TypeScript로 점진적 마이그레이션
  - 쿠폰, 기프트카드 발급/관리 페이지 신규 구현
  - 계정별 사용자 정보를 불러오는 Tenant 시스템 설계 및 반영
  - UTC → Timezone 변환 메서드 및 기간별 데이터 Export 기능 구현
- 문제해결: Cypress 기반의 테스트 자동화 적용 중, JS 환경의 유지보수 이슈를 체감하며 TypeScript 도입 필요성 제안 → 점진적 마이그레이션 주도
- 성과: E2E 테스트 커버리지 80% 이상 확보, 3개월 내에 전체 백오피스의 90%를 TypeScript로 변환하여 코드 품질 및 가독성 향상

---

### 3.2 Page 2 — "Frame 6"

```
┌─────────────────────────────────────────────────┐
│  업무 경험                                        │
│  [좌측]                  │ [우측]                  │
│  비즈 플랫폼 팀           │ 역할: 1인 개발 ...     │
│  Auth SDK 모노레포 전환   │ 문제해결: ...           │
│  2024 | Pnpm, TS ...     │ 성과: 범용 SDK ...     │
│                          │                        │
│  비즈 플랫폼 팀           │ 역할: 구독 페이지 ...   │
│  구독 모델 + 워크스페이스  │ 문제해결: FSD ...      │
│  ...                     │ 성과: TDD 커버리지 ... │
├─────────────────────────────────────────────────┤
│  기타 경험                                        │
│  2026.01 ~ ... Teams 봇 생성 | lambda + aws ...   │
│  2024.09 ~ ... 구독모델 + 워크스페이스 | Stripe ... │
│  2022.09 ~ ... B2B 백오피스 고도화 | E2E 80% ...   │
│  2022.03 ~ ... 랜딩페이지 리뉴얼 | Lighthouse ...  │
│  2024.01 ~ ... 사내 프론트엔드 스터디 진행          │
├─────────────────────────────────────────────────┤
│  학력                                             │
│  가톨릭대학교  컴퓨터정보공학, 빅데이터 인문경영     │
│               2017.03 ~ 2022.08                   │
└─────────────────────────────────────────────────┘
```

#### 상세 콘텐츠

**업무 경험 #2 — Auth SDK 모노레포 전환**
- 팀: 비즈 플랫폼 팀 | 2025.02 ~ 2025.04 (3개월)
- 프로젝트명: Auth SDK 모노레포 전환
- 연도/기술: 2024 | Pnpm, TypeScript, React, Changesets
- 기술스택: Pnpm, TypeScript, React, Changesets
- 역할: 1인 개발로 프로젝트 셋업부터 배포까지 전 과정 주도
- 문제해결:
  - 기존 Auth SDK는 Axios에 의존적 → 인증 로직을 클래스 기반으로 분리하여 fetch, ky 등 다양한 HTTP Client 대응 가능하도록 개선
  - Error Dialog가 React Context에 종속 → Event Emitter 도입해 Context 없이도 에러 알림 가능하도록 구조 변경
- 성과:
  - 다양한 HTTP Client를 지원하는 범용 SDK로 전환
  - example 패키지를 추가하여 동료 개발자들의 적용 시간 단축 및 DX 향상

**업무 경험 #3 — 구독 모델 + 워크스페이스 구조 도입**
- 팀: 비즈 플랫폼 팀 | 2024.09 ~ 2025.03 (6개월)
- 프로젝트명: 구독 모델 + 워크스페이스 구조 도입
- 설명: 크레딧 방식을 구독 결제 방식으로 전환. 멤버-워크스페이스 등의 기능 추가
- 기술스택: React, TypeScript, msw, Jest, TanStack-Query, React-i18next
- 역할:
  - 구독 및 관리 페이지, 워크 스페이스 구조 구축 및 개발
  - Stripe 결제 연동 및 크로스 도메인 인증 처리
  - Lokalize 기반 국제화(i18n) 툴 세팅 및 9개국어 다국어 적용
- 문제해결:
  - FSD 아키텍처 도입해 도메인 간 관심사 분리
  - render-props 및 compound-component 디자인 패턴 사용해 재사용성과 응집도 개선
- 성과:
  - 주요 테스트 시나리오에 대한 TDD 커버리지 확보
  - render-props와 compound-component 패턴으로 빈번한 요구사항 변경에 안정적 대응

**기타 경험** (타임라인 목록)
- 2026.01 ~ 2026.02 | Teams 책 구매요청 봇 생성 | lambda + aws를 이용하여 playwright e2e를 통해 생성
- 2024.09 ~ 2025.03 | 구독모델 + 워크스페이스 | Stripe 결제연동, 9개국어 i18n 적용
- 2022.09 ~ 2023.07 | B2B 백오피스 고도화 | E2E(cypress) 80% 커버리지 달성, TS 마이그레이션 90% 전환
- 2022.03 ~ 2022.06 | 랜딩페이지 리뉴얼 | Lighthouse 49→95점, 검색 1페이지 달성
- 2024.01 ~ 2024.08 | 사내 프론트엔드 스터디 진행

**학력**
- 가톨릭대학교
- 컴퓨터정보공학, 빅데이터 인문경영 복수전공
- 2017.03 ~ 2022.08

---

## 4. 생성/수정할 파일

FSD(Feature-Sliced Design) 아키텍처를 따라 `src/features/resume/` 아래에 구성한다.

```
src/features/resume/
├── index.ts                  # public API — export
├── ui/
│   ├── ResumePage.tsx        # 전체 이력서 페이지 (A4 2장 컨테이너)
│   ├── ResumePageOne.tsx     # Page 1 컴포넌트
│   └── ResumePageTwo.tsx     # Page 2 컴포넌트
```

| 파일 | 작업 | 설명 |
|------|------|------|
| `src/features/resume/ui/ResumePage.tsx` | **생성** | 전체 이력서 래퍼 (A4 2장 + 프린트 스타일) |
| `src/features/resume/ui/ResumePageOne.tsx` | **생성** | Page 1: 헤더/자기소개/경력/스킬/업무경험 |
| `src/features/resume/ui/ResumePageTwo.tsx` | **생성** | Page 2: 업무경험(계속)/기타경험/학력 |
| `src/features/resume/index.ts` | **생성** | `ResumePage` export |
| `src/app/resume/page.tsx` | **생성** | `/resume` 라우트 핸들러 |
| `public/images/profile.png` | **완료** | 프로필 사진 (Figma에서 추출 완료) |

---

## 5. 구현 방식

### 5.1 라우트 (`src/app/resume/page.tsx`)
- Server Component
- `metadata`: title "이력서 | 유승현", description 설정
- `<ResumePage />` 렌더링 (`@/features/resume`에서 import)
- **Layout 위젯 사용하지 않음** (블로그 헤더/푸터 없이 독립 A4 문서)

### 5.2 feature 구조 (`src/features/resume/`)

**`ui/ResumePage.tsx`** — 전체 래퍼
- 화면 배경 회색, A4 용지 흰색 (문서 느낌)
- `<ResumePageOne />` + `<ResumePageTwo />` 수직 배치, 사이에 간격
- `@media print` 스타일로 인쇄 시 페이지 나눔 처리
- 다크모드 무시: 항상 흰 배경 + 검정 텍스트 고정
- 폰트: `font-family: 'Pretendard'` 명시

**`ui/ResumePageOne.tsx`** — Page 1
- 헤더 (이름 + 프로필 사진)
- 연락처 수평 나열
- 구분선 + 자기 소개
- 구분선 + 경력
- 구분선 + 스킬
- 구분선 + 업무 경험 #1

**`ui/ResumePageTwo.tsx`** — Page 2
- 업무 경험 헤더 + #2, #3
- 구분선 + 기타 경험
- 구분선 + 학력

**`index.ts`** — public API
```ts
export { ResumePage } from './ui/ResumePage';
```

### 5.3 A4 페이지 컨테이너
```css
width: 210mm;
min-height: 297mm;
padding: ~32px 상하, ~32px 좌우 (Figma 마진 스케일링);
background: white;
font-family: 'Pretendard', sans-serif;
```

### 5.4 스타일링 전략
- **Tailwind CSS 유틸리티 클래스** 사용 (프로젝트 컨벤션 준수)
- A4 크기는 `w-[210mm] min-h-[297mm]`
- 폰트 크기는 Tailwind arbitrary values 사용: `text-[11px]`, `text-[12px]`, `text-[13px]` 등
- 구분선: `border-t border-gray-200` 또는 `<hr>`
- 프로필 사진: `rounded-full` + `object-cover`
- 프린트 스타일:
  ```css
  @media print {
    .page-break { break-after: page; }
    body { background: white; }
  }
  ```

### 5.5 반응형 처리
- 모바일에서는 A4 컨테이너를 `scale` 또는 `overflow-x-auto`로 처리
- 화면 배경은 회색, A4 용지는 흰색 (문서 느낌)

---

## 6. 구현 순서

1. `src/features/resume/ui/ResumePageOne.tsx` 생성 — Page 1 컴포넌트
2. `src/features/resume/ui/ResumePageTwo.tsx` 생성 — Page 2 컴포넌트
3. `src/features/resume/ui/ResumePage.tsx` 생성 — 전체 래퍼
4. `src/features/resume/index.ts` 생성 — export
5. `src/app/resume/page.tsx` 생성 — 라우트 설정
6. 개발 서버에서 `/resume` 접속하여 확인
7. 인쇄 미리보기로 A4 2장 출력 확인

---

## 7. 검증 방법

- [ ] `/resume` 경로 접속 시 이력서 정상 렌더링
- [ ] A4 비율 2장이 화면에 표시
- [ ] 브라우저 인쇄(Ctrl+P)로 정확히 2페이지 출력
- [ ] Figma 디자인과 시각적 일치 (섹션 순서, 텍스트, 레이아웃)
- [ ] 프로필 사진 원형으로 표시
- [ ] 다크모드에서도 흰 배경 유지
- [ ] 모바일 화면에서 깨지지 않음
