# 🔄 한국어 번역 작업 워크플로우 가이드

## 🎯 작업 진행 방식

**목표**: 테스트 완료 후 일괄 PR 제출
**전략**: Phase별 순차 진행 → 로컬 테스트 → 통합 검증 → PR

## 📅 단계별 작업 일정

### Phase 1: 기본 인프라 구축 (1-2일)
```bash
# 1. 한국어 로케일 기본 구조 생성
mkdir -p packages/i18n/src/locales/ko/{tamagotchi,docs}

# 2. 기본 파일 생성 (빈 템플릿)
touch packages/i18n/src/locales/ko/{base,settings,stage}.yaml
touch packages/i18n/src/locales/ko/tamagotchi/{settings,stage}.yaml
touch packages/i18n/src/locales/ko/docs/{index.ts,theme.yaml}

# 3. index.ts에 한국어 등록
# packages/i18n/src/locales/index.ts 수정

# 4. 문서 한국어 구조 생성
mkdir -p docs/content/ko/{docs/overview/{guide/{web,tamagotchi},contributing},references/research}
```

### Phase 2: 핵심 UI 번역 (3-5일)
**작업 순서**: 사용 빈도가 높은 것부터

1. **`base.yaml` (1일)**
   - 캐릭터 기본 프롬프트 번역
   - 시스템 메시지 번역
   - 토스트 메시지 번역

2. **`stage.yaml` (1일)**
   - 채팅 인터페이스
   - 음성 관련 UI
   - 디버그/개발자 메뉴

3. **언어 설정 등록 및 테스트 (1일)**
   - 브라우저에서 한국어 선택 가능하도록
   - 기본 UI가 한국어로 표시되는지 확인

4. **핵심 설정 번역 (2일)**
   - `settings.yaml`의 기본 섹션만
   - 언어, 테마, 모델 설정 등

### Phase 3: 설정 화면 완성 (7-10일)
**가장 방대한 작업 - 체계적 접근 필요**

1. **제공업체 설정 (5-6일)**
   - 각 LLM 제공업체별 설명 및 필드
   - 우선순위: OpenAI, Anthropic, Ollama, OpenRouter
   - 음성 제공업체: ElevenLabs, Azure Speech

2. **모듈 설정 (2-3일)**
   - 의식, 청각, 발화, 메모리 모듈
   - 각 모듈의 고급 설정

3. **캐릭터 카드 시스템 (1-2일)**
   - 카드 생성/편집 UI
   - 폼 검증 메시지

### Phase 4: 데스크톱 앱 지원 (2-3일)
1. **Tamagotchi 설정** (1-2일)
2. **Tamagotchi UI** (1일)

### Phase 5: 문서 번역 (5-7일)
1. **핵심 문서** (3-4일)
2. **사용 가이드** (2-3일)

## 🔧 작업 환경 및 도구

### 개발 환경 설정
```bash
# 1. 프로젝트 클론 (이미 완료)
cd D:\dev\airi

# 2. 의존성 설치 확인
pnpm install

# 3. 개발 서버 실행 (번역 확인용)
pnpm dev        # 웹 버전
# 또는
pnpm dev:tamagotchi  # 데스크톱 버전

# 4. 별도 터미널에서 문서 서버 (문서 번역 시)
pnpm dev:docs
```

### 권장 작업 도구
- **에디터**: VS Code + 확장 프로그램
  - YAML Language Support
  - Korean Language Pack
  - Auto Rename Tag
  - Better Comments

- **번역 지원 도구**
  - Google Translate (초벌 번역)
  - Papago (자연스러운 표현)
  - 전문 용어 사전 (IT/AI/VTuber)

- **품질 검증**
  - 맞춤법 검사기
  - 스크린샷 비교 (영어 vs 한국어)

## 📋 작업별 상세 체크리스트

### 🔤 YAML 번역 작업
```yaml
# ❌ 잘못된 예시
title: 설정 # 키 값만 번역

# ✅ 올바른 예시
pages:
  settings:
    title: 설정 # 중첩 구조 유지하며 값만 번역
```

**주의사항:**
- YAML 키는 절대 번역하지 않음
- 들여쓰기 정확히 유지
- 문자열 내 변수 `{provider}`, `{error}` 등은 그대로 유지
- 따옴표, 콜론, 대시 등 문법 요소 확인

### 🧪 번역 검증 절차
1. **구문 검증**
   ```bash
   # YAML 문법 오류 확인
   pnpm typecheck
   ```

2. **UI 동작 확인**
   ```bash
   # 개발 서버에서 실제 화면 확인
   pnpm dev
   # 브라우저에서 언어를 한국어로 변경 후 모든 메뉴 탐색
   ```

3. **빌드 테스트**
   ```bash
   # 프로덕션 빌드 확인
   pnpm build:web
   pnpm build:tamagotchi  # 데스크톱 앱도 확인
   ```

4. **린트 검증**
   ```bash
   # 코드 스타일 확인
   pnpm lint
   ```

### 📚 문서 번역 작업
1. **파일 복사**
   ```bash
   cp docs/content/en/index.md docs/content/ko/index.md
   ```

2. **메타데이터 수정**
   ```markdown
   ---
   title: AIRI - AI 버추얼 캐릭터 플랫폼
   description: Neuro-sama에서 영감을 받은 오픈소스 AI VTuber 프로젝트
   lang: ko
   ---
   ```

3. **내용 번역**
   - 제목, 부제목 번역
   - 본문 번역 (기술 용어 일관성 유지)
   - 링크 주소 확인 (한국어 페이지가 있으면 변경)

## 🎨 번역 품질 기준

### 용어 통일성
| 영어 | 한국어 | 비고 |
|------|--------|------|
| Settings | 설정 | |
| Provider | 제공업체 | LLM 제공업체 |
| Model | 모델 | AI 모델 |
| Voice | 음성 | TTS 관련 |
| Speech Recognition | 음성 인식 | STT |
| Text-to-Speech | 음성 합성 | TTS로 병기 가능 |
| Character Card | 캐릭터 카드 | |
| Personality | 성격 | |
| Scenario | 시나리오 | |
| Greeting | 인사말 | |
| Live2D | Live2D | 고유명사 그대로 |
| VRM | VRM | 고유명사 그대로 |
| Avatar | 아바타 | |
| Animation | 애니메이션 | |
| Emotion | 감정 | |
| Expression | 표정 | |

### 문체 기준
- **설명문**: `~합니다`, `~됩니다` (정중한 격식체)
- **버튼/메뉴**: `설정`, `저장`, `취소` (간결한 명사형)
- **에러 메시지**: `~해주세요`, `~을 확인해주세요` (친근한 안내)
- **도움말**: `~할 수 있습니다`, `~를 권장합니다` (설명체)

## 📝 진행상황 추적

### 작업 로그 템플릿
```markdown
## [날짜] 작업 내용

### 완료 항목
- [ ] base.yaml - 캐릭터 프롬프트 번역
- [ ] stage.yaml - 채팅 UI 번역
- [ ] settings.yaml - 기본 설정 (30%)

### 발견된 이슈
- YAML 구문 오류: settings.yaml:45 (해결됨)
- UI 깨짐: 긴 한국어 텍스트로 인한 레이아웃 이슈

### 다음 작업 계획
- settings.yaml LLM 제공업체 번역 계속
- 모바일 UI 한국어 테스트

### 번역 관련 질문/결정사항
- "VTuber"를 "버추얼 유튜버"로 번역할지?
- 기술 용어 병기 방식 (예: "TTS (음성 합성)" vs "음성 합성")
```

### 최종 검증 체크리스트
- [ ] 모든 YAML 파일 구문 오류 없음
- [ ] 웹 버전에서 모든 메뉴 한국어 정상 표시
- [ ] 데스크톱 버전에서 모든 기능 한국어 정상 표시
- [ ] 문서 사이트 한국어 페이지 정상 작동
- [ ] 빌드 오류 없음 (`pnpm build`)
- [ ] 린트 오류 없음 (`pnpm lint`)
- [ ] 타입체크 통과 (`pnpm typecheck`)
- [ ] 번역 누락 키 없음 (영어와 대조 확인)
- [ ] UI 레이아웃 깨짐 없음 (긴 한국어 텍스트)
- [ ] 모바일 반응형 정상 작동

## 🚀 PR 준비

### 커밋 메시지 규칙
```bash
feat(i18n): add Korean locale support

- Add Korean translations for core UI components
- Add Korean translations for settings pages
- Add Korean documentation structure
- Add Korean locale to VitePress config

Co-authored-by: [your-name] <your-email@example.com>
```

### PR 설명 템플릿
```markdown
## 🇰🇷 한국어 번역 지원 추가

### 📋 변경 사항
- [x] 한국어 로케일 기본 구조 추가
- [x] 핵심 UI 구성 요소 번역 (base.yaml, stage.yaml)
- [x] 설정 화면 완전 번역 (settings.yaml)
- [x] 데스크톱 앱 번역 (tamagotchi/)
- [x] 문서 사이트 한국어 구조 추가 (docs/content/ko/)

### 🧪 테스트 완료
- [x] 웹 브라우저에서 한국어 UI 동작 확인
- [x] 데스크톱 앱에서 한국어 UI 동작 확인
- [x] 문서 사이트 한국어 페이지 확인
- [x] 모바일 반응형 테스트 완료
- [x] 빌드 및 린트 검사 통과

### 📊 번역 통계
- 총 번역 키 수: ~900개
- UI 번역 완료율: 100%
- 문서 번역 완료율: 100% (핵심 문서)

### 🔍 주요 번역 방침
- VTuber 전문 용어는 원문 유지 + 한국어 설명 병기
- 기술 용어는 업계 표준 한국어 사용
- 사용자 친화적이고 일관성 있는 어투 유지

### 📷 스크린샷
[한국어 UI 스크린샷들]

### ✅ 체크리스트
- [x] 모든 번역 키 누락 없음 확인
- [x] YAML 구문 검증 통과
- [x] UI 레이아웃 정상 작동 확인
- [x] 타입체크 및 린트 통과
- [x] 빌드 오류 없음 확인
```

---

**💡 참고**: 작업 중 막히는 부분이나 번역 관련 질문이 있으면 `docs/my-tasks/` 폴더에 메모해두고 나중에 정리해서 질문하기!
