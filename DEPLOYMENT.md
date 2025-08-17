# Vercel 배포용 환경변수 설정 가이드

## 필수 환경변수

### 사이트 정보

NEXT_PUBLIC_SITE_URL=https://your-domain.vercel.app
NEXT_PUBLIC_SITE_NAME=UnIdealog
NEXT_PUBLIC_SITE_DESCRIPTION=

### SEO 및 검색엔진 최적화

GOOGLE_SITE_VERIFICATION=your_google_verification_code
NAVER_SITE_VERIFICATION=your_naver_verification_code

### Analytics (선택사항)

GOOGLE_ANALYTICS_ID=G-XXXXXXXXXX

### 소셜 미디어

NEXT_PUBLIC_TWITTER_HANDLE=@yourusername
NEXT_PUBLIC_GITHUB_USERNAME=kyileeyu

### 댓글 시스템 (utterances)

NEXT_PUBLIC_UTTERANCES_REPO=yourusername/unidealog-comments

## Vercel CLI로 환경변수 설정

```bash
# 프로덕션 환경변수 설정
vercel env add NEXT_PUBLIC_SITE_URL production
vercel env add GOOGLE_SITE_VERIFICATION production

# 프리뷰 환경변수 설정 (선택사항)
vercel env add NEXT_PUBLIC_SITE_URL preview

# 개발 환경변수 설정 (로컬에서 vercel dev 사용시)
vercel env add NEXT_PUBLIC_SITE_URL development
```

## Vercel 대시보드에서 설정

1. https://vercel.com/dashboard 접속
2. 프로젝트 선택
3. Settings > Environment Variables
4. 위의 환경변수들을 하나씩 추가

## 주의사항

- `NEXT_PUBLIC_`로 시작하는 변수는 클라이언트에서 접근 가능
- 민감한 정보는 `NEXT_PUBLIC_` 접두사 사용 금지
- 프로덕션, 프리뷰, 개발 환경을 구분하여 설정
