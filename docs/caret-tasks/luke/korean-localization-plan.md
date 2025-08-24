# 🇰🇷 AIRI 한국어 번역 프로젝트 상세 계획서

## 📋 프로젝트 개요

**목표**: Project AIRI의 완전한 한국어 지원 구현
**범위**: UI 번역, 문서 번역, 한국어 사용자 경험 최적화
**예상 기간**: 4-6주 (파트타임 작업 기준)
**난이도**: 중급 ~ 고급 (기술 용어 다수, 맥락 이해 필요)

## 🎯 세부 작업 범위

### Phase 1: 핵심 UI 번역 (Week 1-2)
**우선순위: 최고**

#### 1.1 기본 시스템 번역
- [ ] `packages/i18n/src/locales/ko/base.yaml`
  - 캐릭터 기본 프롬프트 (AIRI 성격 정의)
  - 시스템 토스트 메시지
  - 감정/액션 키워드 설명

#### 1.2 메인 스테이지 UI
- [ ] `packages/i18n/src/locales/ko/stage.yaml`
  - 채팅 인터페이스 (메시지 입력, 캐릭터명 등)
  - 음성 입/출력 관련 UI
  - 모델 로딩 상태 메시지
  - 디버그 메뉴 (감정 버튼 등)

#### 1.3 언어 설정 등록
- [ ] `packages/i18n/src/locales/index.ts` 수정
- [ ] 한국어 옵션을 언어 선택 UI에 표시되도록 설정

### Phase 2: 설정 화면 번역 (Week 2-4)
**우선순위: 높음**

#### 2.1 기본 설정 섹션
- [ ] `packages/i18n/src/locales/ko/settings.yaml` - 기본 구조
  - 언어/테마 설정
  - 모델 설정 (Live2D/VRM)
  - 메모리 설정

#### 2.2 LLM 제공업체 설정 (가장 방대한 작업)
- [ ] 20+ LLM 제공업체 설명 및 설정 UI
  - OpenAI, Anthropic Claude, Google Gemini
  - OpenRouter, Ollama, vLLM 등 로컬 모델
  - Groq, DeepSeek, xAI 등 클라우드 서비스
- [ ] 각 제공업체별 고유 설정 필드
  - API 키, Base URL, Account ID 등
  - 고급 설정 (HTTP 헤더, 파라미터 등)

#### 2.3 음성 관련 설정
- [ ] TTS (텍스트 음성 변환) 설정
  - ElevenLabs, Azure Speech, OpenAI TTS 등
  - 음성 선택, 속도, 볼륨, 피치 조절
- [ ] STT (음성 텍스트 변환) 설정
  - Whisper, Azure Speech 등
  - 마이크 선택, 감지 임계값 등

#### 2.4 모듈 설정
- [ ] 의식 모듈 (LLM 모델 선택)
- [ ] 청각 모듈 (음성 인식)
- [ ] 발화 모듈 (음성 합성)
- [ ] 기억 모듈 (단기/장기 메모리)
- [ ] 게이밍 모듈 (Minecraft, Factorio)

#### 2.5 캐릭터 카드 시스템
- [ ] 캐릭터 생성/편집 인터페이스
- [ ] 성격, 시나리오, 인사말 설정
- [ ] 시스템 프롬프트 편집기

### Phase 3: 데스크톱 앱 번역 (Week 3-4)
**우선순위: 중간**

#### 3.1 Tamagotchi 전용 설정
- [ ] `packages/i18n/src/locales/ko/tamagotchi/settings.yaml`
  - 윈도우 관련 설정 (투명도, 위치 등)
  - 키보드 단축키 설정
  - MCP 서버 관리

#### 3.2 Tamagotchi 전용 UI
- [ ] `packages/i18n/src/locales/ko/tamagotchi/stage.yaml`
  - 데스크톱 전용 채팅 인터페이스
  - 시스템 트레이 관련 메시지

### Phase 4: 문서 번역 (Week 4-6)
**우선순위: 낮음**

#### 4.1 문서 구조 생성
- [ ] `docs/content/ko/` 디렉토리 구조 생성
- [ ] VitePress 설정 파일에 한국어 추가

#### 4.2 핵심 문서 번역
- [ ] 메인 페이지 (`index.md`)
- [ ] 설치 및 시작 가이드
- [ ] 기능 소개 및 사용법
- [ ] 기여 가이드

#### 4.3 블로그/개발일지
- [ ] 주요 DevLog 번역 (선택사항)
- [ ] 한국 사용자를 위한 가이드 작성

## 🛠️ 작업 방법론

### 번역 품질 기준

#### 1. 용어 일관성
- **AI/VTuber 관련 용어**: 원문 유지 + 한국어 설명 병기
  - "VTuber" → "VTuber (버추얼 유튜버)"
  - "Live2D" → "Live2D" (그대로 사용)
  - "VRM" → "VRM" (그대로 사용)
- **기술 용어**: 업계 표준 한국어 용어 사용
  - "Speech Recognition" → "음성 인식"
  - "Text-to-Speech" → "음성 합성" 또는 "TTS"
- **UI 용어**: 직관적이고 간결한 한국어
  - "Settings" → "설정"
  - "Providers" → "제공업체"

#### 2. 어투 및 스타일
- **설정/기능 설명**: 정중하고 명확한 설명체
- **에러 메시지**: 간결하고 해결 방안 제시
- **캐릭터 프롬프트**: 원문의 톤앤매너 유지하되 자연스러운 한국어로

#### 3. 맥락 이해
- AIRI의 캐릭터 설정 (15세 소녀, 귀여운 말투)
- VTuber 문화에 대한 이해
- AI/ML 기술 배경 지식

### 번역 도구 및 워크플로우

#### 1. 파일 기반 번역
```bash
# 1. 영문 파일 복사
cp packages/i18n/src/locales/en/base.yaml packages/i18n/src/locales/ko/base.yaml

# 2. 번역 작업
# 선호 에디터에서 YAML 파일 직접 편집

# 3. 테스트
pnpm dev  # 로컬에서 확인
```

#### 2. Crowdin 활용 (권장)
- 온라인 협업 번역 플랫폼
- 번역 메모리, 용어집 관리
- 자동 품질 검사 기능

### 작업 환경 설정

#### 필수 도구
```bash
# 1. 프로젝트 클론 및 의존성 설치
git clone https://github.com/moeru-ai/airi.git
cd airi
pnpm install

# 2. 개발 서버 실행
pnpm dev  # Stage Web 버전
# 또는
pnpm dev:tamagotchi  # 데스크톱 버전

# 3. 타입체크 및 린트
pnpm typecheck
pnpm lint
```

#### 권장 에디터 설정
- **VS Code** + 확장:
  - YAML Language Support
  - Korean Language Pack
  - Better Comments
  - GitLens

## 📊 작업 진행도 추적

### 번역 완료율 계산
- [ ] Phase 1: 핵심 UI (25%)
- [ ] Phase 2: 설정 화면 (50%)
- [ ] Phase 3: 데스크톱 앱 (15%)
- [ ] Phase 4: 문서 (10%)

### 품질 검증 단계
1. **자동 검증**: YAML 구문 오류, 키 누락 확인
2. **기능 테스트**: 실제 앱에서 UI 동작 확인
3. **언어학적 검토**: 맞춤법, 어투, 일관성 검사
4. **사용자 테스트**: 한국어 사용자 피드백 수집

## 🚀 배포 및 기여

### PR 제출 전 체크리스트
- [ ] 모든 YAML 파일 구문 검증 완료
- [ ] 로컬 개발 환경에서 UI 정상 표시 확인
- [ ] 번역 누락 키 없음 확인
- [ ] `pnpm lint && pnpm typecheck` 통과
- [ ] 의미 있는 커밋 메시지 작성

### 단계별 PR 전략
1. **Phase 1**: 기본 기능 동작하는 최소 번역
2. **Phase 2**: 설정 화면 완전 번역 (여러 PR로 분할 가능)
3. **Phase 3**: 데스크톱 앱 지원
4. **Phase 4**: 문서 사이트 한국어 지원

## 💡 추가 개선 아이디어

### 한국어 특화 기능
- [ ] 한국어 TTS 음성 추가 (네이버 클로바, 카카오 등)
- [ ] 한국어 STT 모델 지원
- [ ] 한국 문화에 맞는 캐릭터 프리셋
- [ ] 한국어 자연어 처리 최적화

### 커뮤니티 기여
- [ ] 한국어 사용자 가이드 작성
- [ ] 한국 VTuber 커뮤니티와의 연계
- [ ] 한국어 번역팀 구성

---

**작업 시작일**: [날짜 입력]
**예상 완료일**: [날짜 입력]
**담당자**: [이름 입력]
**진행 상황**: 0% (계획 수립 완료)
