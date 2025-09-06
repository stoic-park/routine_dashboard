# Core Features (핵심 기능)

## 1. 루틴 관리
### 루틴 등록
- 제목 설정
- 주기 선택 (매일/매주/매월/특정일)
- 목표 횟수 설정
- 차트 형식 선택 (bar/line/polar)

### 루틴 실행
- 일일 체크인
- 진행 상황 표시
- 실행 여부 기록

### 루틴 관리
- 수정/삭제
- 활성화/비활성화
- 우선순위 설정

## 2. 대시보드
### 레이아웃
- 그리드 기반 위젯 배치
- 드래그 & 드롭 지원
- 위젯 크기 조절

### 차트 위젯
- 다양한 차트 타입 지원
- 실시간 데이터 반영
- 차트 스타일 변경

### 커스터마이징
- 위젯 위치 저장
- 레이아웃 잠금 기능
- 범례 표시 설정

## 3. 데이터 관리
### 저장소
- LocalStorage 기반 데이터 저장
- 자동 저장
- 데이터 정합성 검증

### 데이터 구조
```typescript
// 루틴 데이터
interface Routine {
  id: string
  title: string
  period: 'daily' | 'weekly' | 'monthly' | 'custom'
  target: number
  chartType: 'bar' | 'line' | 'polar'
  createdAt: string
}

// 대시보드 상태
interface DashboardState {
  layouts: BreakpointLayouts
  showLegends: boolean
  locked: boolean
  lastUpdatedAt: string
}
```

## 4. UI/UX
### 디자인
- 모노톤 기반 미니멀 디자인
- 반응형 레이아웃
- 직관적인 인터페이스

### 사용성
- 간편한 루틴 체크
- 드래그 & 드롭 인터랙션
- 실시간 피드백

### 성능
- 빠른 로딩 속도
- 부드러운 애니메이션
- 효율적인 데이터 처리

## 5. 기술 스택
- Frontend: Next.js, React
- 스타일링: TailwindCSS, shadcn/ui
- 차트: ECharts
- 그리드: react-grid-layout
- 상태관리: Zustand
- 데이터 페칭: React Query
- 저장소: LocalStorage
