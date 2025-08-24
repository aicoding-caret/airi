# 📚 docs/content/ko 구조 계획

## 현재 docs 구조 분석

### 기존 언어별 구조
```
docs/content/
├── en/           # 영어 (완전)
│   ├── blog/     # 개발일지 (2025.03~08, DreamLog)
│   ├── docs/     # 문서 (chronicles, manual, overview)
│   ├── references/  # 연구 자료
│   └── index.md  # 메인 페이지
├── zh-Hans/      # 중국어 (부분 번역)
│   ├── blog/     # 일부 포스트만 번역됨
│   ├── docs/     # 핵심 문서만 번역
│   ├── references/
│   └── index.md
└── public/       # 공통 자료 (이미지, 폰트 등)
```

## 🇰🇷 한국어 docs 구조 제안

### Phase 1: 핵심 구조 (즉시 필요)
```
docs/content/ko/
├── index.md                 # 메인 랜딩 페이지
├── docs/
│   └── overview/
│       ├── index.md         # AIRI 소개
│       ├── about-ai-vtuber.md
│       ├── about-neuro-sama.md
│       ├── guide/           # 사용 가이드
│       │   ├── web/
│       │   └── tamagotchi/
│       └── contributing/
│           └── index.md     # 기여 가이드
└── references/
    └── research/           # 연구 자료 (선택사항)
```

### Phase 2: 확장 구조 (추후 추가)
```
docs/content/ko/
├── blog/                   # 한국어 블로그 (선택적 번역)
│   ├── index.md
│   └── [선택된 주요 포스트들]
├── docs/
│   ├── chronicles/         # 버전 히스토리
│   └── manual/            # 상세 매뉴얼
└── references/
    └── research/
        ├── gaming/
        │   └── minecraft.md
        ├── lipsync.md
        ├── mocap.md
        ├── text-to-motion.md
        └── tts.md
```

## 📋 번역 우선순위별 파일 목록

### 🔥 최우선 (사용자 온보딩용)
1. **`index.md`** - 메인 페이지
   - AIRI 소개
   - 주요 기능 설명
   - 시작하기 링크

2. **`docs/overview/index.md`** - 프로젝트 개요
   - "Re-creating Neuro-sama" 개념 설명
   - 기술 스택 소개
   - 커뮤니티 링크

3. **`docs/overview/guide/web/index.md`** - 웹 버전 사용법
   - 브라우저에서 AIRI 사용하는 방법
   - 기본 설정 가이드

4. **`docs/overview/guide/tamagotchi/index.md`** - 데스크톱 사용법
   - 설치 방법
   - 기본 사용법 및 단축키

### 🎯 높음 (커뮤니티 참여용)
5. **`docs/overview/contributing/index.md`** - 기여 가이드
   - 개발 환경 설정
   - 코드 기여 방법
   - 번역 기여 방법

6. **`docs/overview/about-ai-vtuber.md`** - AI VTuber 설명
   - AI VTuber 개념 소개
   - AIRI의 독특한 점

### 📚 중간 (심화 이해용)
7. **주요 DevLog 선택 번역** (3-5개 정도)
   - DreamLog-0x1 (프로젝트 비전)
   - DevLog-2025.08.05 (최신 기능)
   - DevLog-2025.06.08 (Tamagotchi 소개)

8. **연구 자료 번역**
   - `references/research/gaming/minecraft.md`
   - `references/research/tts.md`

### 🔧 낮음 (완성도용)
9. **상세 매뉴얼**
   - `docs/manual/versions/index.md`
   - `docs/chronicles/` (버전별 변경사항)

## 💻 VitePress 설정 변경사항

### 1. 언어 설정 추가
`docs/.vitepress/config.ts`에 한국어 추가 필요:
```typescript
export default defineConfig({
  // ... 기존 설정
  locales: {
    'root': { label: 'English', lang: 'en' },
    'zh-Hans': { label: '简体中文', lang: 'zh-Hans' },
    'ko': {
      label: '한국어',
      lang: 'ko',
      themeConfig: {
        // 한국어 네비게이션 메뉴
        nav: [
          { text: '홈', link: '/ko/' },
          { text: '문서', link: '/ko/docs/' },
          { text: '블로그', link: '/ko/blog/' }
        ],
        sidebar: {
          // 한국어 사이드바 구성
        }
      }
    }
  }
})
```

### 2. 한국어 테마 설정
- 네비게이션 메뉴 번역
- 검색 플레이스홀더 번역
- "편집 제안" 링크 번역
- 푸터 텍스트 번역

## 📝 번역 스타일 가이드

### 기술 용어 처리
- **고유명사**: 원문 유지
  - "AIRI" → "AIRI"
  - "Neuro-sama" → "Neuro-sama"
  - "Live2D" → "Live2D"
  - "VRM" → "VRM"

- **기술 용어**: 의미 전달 우선
  - "Text-to-Speech" → "음성 합성 (TTS)"
  - "Large Language Model" → "대규모 언어 모델 (LLM)"
  - "Real-time" → "실시간"

### 문체
- **설명문**: 명확하고 이해하기 쉬운 한국어
- **가이드**: 단계적이고 친근한 어투
- **기술 문서**: 정확하고 간결한 표현

### 링크 및 참조 처리
- 영문 링크는 그대로 유지
- 한국어 페이지 간 링크는 `/ko/` 경로 사용
- 외부 링크에 대한 설명 추가 (필요시)

## 🚀 구현 계획

### 1단계: 기본 구조 생성
```bash
# 한국어 디렉토리 생성
mkdir -p docs/content/ko/{docs/overview/{guide/{web,tamagotchi},contributing},references/research/gaming}

# 기본 파일 생성 (영문에서 복사 후 번역)
cp docs/content/en/index.md docs/content/ko/index.md
cp docs/content/en/docs/overview/index.md docs/content/ko/docs/overview/index.md
# ... 기타 우선순위 파일들
```

### 2단계: VitePress 설정
- `.vitepress/config.ts` 수정
- 한국어 네비게이션 구성
- 한국어 사이드바 메뉴 구성

### 3단계: 콘텐츠 번역
- 우선순위에 따라 순차적 번역
- 각 파일별로 검토 후 커밋

### 4단계: 최적화
- 한국어 검색 기능 테스트
- 모바일 반응형 확인
- SEO 메타데이터 한국어 추가

## 📊 예상 작업량

| 카테고리 | 파일 수 | 예상 시간 | 난이도 |
|----------|---------|-----------|--------|
| 핵심 페이지 | 4-5개 | 8-10시간 | 중간 |
| 가이드 문서 | 3-4개 | 6-8시간 | 쉬움 |
| DevLog 번역 | 3-5개 | 10-15시간 | 어려움 |
| 설정 파일 | 1-2개 | 2-3시간 | 쉬움 |
| **총계** | **11-16개** | **26-36시간** | **중간** |

---

**참고사항**:
- 중국어 번역을 참고하여 구조와 스타일 일관성 유지
- 커뮤니티 피드백을 받아 지속적으로 개선
- 영문 원본 업데이트 시 한국어도 동기화 필요
