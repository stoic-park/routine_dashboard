# Routine Tracker --- Product Requirements Document (PRD)

## 1. Overview

Routine Tracker는 사용자가 **루틴을 등록하고, 실행 여부를 체크하며,
대시보드에서 시각적으로 진행 상황을 확인**할 수 있는 애플리케이션입니다.

-   **핵심 기능**
    -   루틴 등록: 제목, 주기(매일/매주/매월/특정일), 목표 횟수, 차트
        형식(bar, line, polar 등)
    -   실행 체크: 매일 실행 여부 기록
    -   대시보드: 등록된 루틴의 현황을 다양한 차트로 시각화
-   **목표**
    -   사용자가 습관을 형성하고 유지할 수 있도록 동기 부여
    -   시각적 피드백을 통해 성취감을 제공

------------------------------------------------------------------------

## 2. User Stories

1.  나는 매일 아침 물 2L 마시는 루틴을 등록하고 오늘 완료했는지 체크하고
    싶다.
2.  나는 주 3회 러닝 루틴을 등록하고 주간 달성률을 차트로 보고 싶다.
3.  나는 여러 루틴을 대시보드에서 한눈에 확인하고, 카드형 위젯을
    드래그·리사이즈해 내 레이아웃을 만들고 싶다.

------------------------------------------------------------------------

## 3. Pages

### 3.1 루틴 페이지 (Routine Page)

-   기능

    -   루틴 등록 Form
    -   등록된 루틴 목록 확인
    -   루틴별 오늘 실행 여부 체크 (✅)

-   데이터

    ``` ts
    Routine {
      id: string
      title: string
      period: 'daily' | 'weekly' | 'monthly' | 'custom'
      target: number
      chartType: 'bar' | 'line' | 'polar'
      createdAt: string
    }
    ```

### 3.2 대시보드 페이지 (Dashboard Page)

-   기능

    -   등록된 루틴별 차트를 그리드에 배치
    -   위젯 드래그/리사이즈 지원 (react-grid-layout 활용)
    -   차트 형식 변경 가능

-   데이터

    ``` ts
    DashboardState {
      layouts: BreakpointLayouts
      showLegends: boolean
      locked: boolean
      lastUpdatedAt: string
    }
    ```

------------------------------------------------------------------------

## 4. 기술 스택

-   Frontend: Next.js, React, TailwindCSS, shadcn/ui
-   Chart: ECharts
-   Grid: react-grid-layout
-   State: Zustand / React Query
-   Storage: MVP(LocalStorage), 이후 Supabase/Firebase

------------------------------------------------------------------------

## 5. Roadmap

### 5.1 MVP (1~2주)

-   루틴 CRUD (제목/주기/차트)
-   오늘 실행 체크
-   대시보드(드래그·리사이즈 가능한 그리드 차트)

### 5.2 확장 (3~6주)

-   달성률 통계, Streak(연속 달성일)
-   캘린더 Heatmap
-   푸시 알림 (PWA)
-   소셜 공유 / 친구와 경쟁

------------------------------------------------------------------------

## 6. 성공 지표 (KPI)

-   등록된 루틴 수
-   주간 실행률 (%)
-   평균 Streak 길이
-   대시보드 위젯 커스터마이징 사용률

------------------------------------------------------------------------
