# Routine Dashboard

일상적인 루틴을 관리하고 추적하는 대시보드 애플리케이션입니다.

## 기술 스택

- Next.js 15.5.2 (App Router)
- React 19.1.0
- TypeScript 5.9.2
- TailwindCSS 4.1.13
- Radix UI
- Zustand (상태 관리)
- date-fns (날짜 관리)

## 시작하기

### 필수 요구사항

- Node.js 18.0.0 이상
- pnpm 8.0.0 이상

### 설치

```bash
# 의존성 설치
pnpm install

# 개발 서버 실행
pnpm dev

# 프로덕션 빌드
pnpm build

# 프로덕션 서버 실행
pnpm start
```

## 프로젝트 구조

```
/
├── app/              # Next.js App Router
├── components/       # 재사용 가능한 컴포넌트
│   └── ui/          # UI 컴포넌트
├── constants/        # 상수 정의
├── hooks/           # 커스텀 훅
├── lib/             # 유틸리티 라이브러리
├── store/           # Zustand 스토어
├── types/           # TypeScript 타입 정의
└── utils/           # 유틸리티 함수
```

## 개발 가이드

- 코드 스타일은 Prettier와 ESLint를 따릅니다
- 커밋 전 `pnpm lint` 실행을 권장합니다
- 컴포넌트는 최대한 재사용 가능하도록 작성합니다
- 상태 관리는 Zustand를 사용합니다
