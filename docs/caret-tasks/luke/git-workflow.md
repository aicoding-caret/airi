# 🌿 Git & PR 워크플로우 가이드

## 📋 현재 상황 정리

**원본 저장소**: `https://github.com/moeru-ai/airi`
**포크 저장소**: `https://github.com/aicoding-caret/airi`
**작업 브랜치**: `luke` (main 브랜치에서 분기)
**현재 위치**: `D:\dev\airi` (원본에서 클론된 상태)

## 🔧 Git 설정 변경 필요

### 1. Remote 설정 변경
현재 원본 저장소에서 클론했으므로, 포크된 저장소를 추가하고 origin을 변경해야 합니다.

```bash
# 현재 remote 확인
git remote -v
# 결과: origin https://github.com/moeru-ai/airi.git (fetch/push)

# 원본을 upstream으로 변경
git remote rename origin upstream

# 포크된 저장소를 origin으로 추가
git remote add origin https://github.com/aicoding-caret/airi.git

# 설정 확인
git remote -v
# 예상 결과:
# origin    https://github.com/aicoding-caret/airi.git (fetch)
# origin    https://github.com/aicoding-caret/airi.git (push)
# upstream  https://github.com/moeru-ai/airi.git (fetch)
# upstream  https://github.com/moeru-ai/airi.git (push)
```

### 2. 브랜치 생성 및 전환
```bash
# 현재 브랜치 확인
git branch
# * main

# luke 브랜치 생성 및 전환
git checkout -b luke

# 브랜치 확인
git branch
# main
# * luke
```

### 3. 포크 저장소에 브랜치 푸시 설정
```bash
# luke 브랜치를 origin(포크)에 푸시하며 upstream 설정
git push -u origin luke
```

## 🚀 작업 진행 워크플로우

### 일일 작업 시작 시
```bash
# 1. 원본 저장소에서 최신 변경사항 가져오기
git fetch upstream

# 2. main 브랜치를 최신으로 업데이트 (필요시)
git checkout main
git merge upstream/main

# 3. luke 브랜치로 돌아와서 최신 main 반영 (필요시)
git checkout luke
git merge main
```

### 작업 진행 중
```bash
# 1. 작업한 파일들 확인
git status

# 2. 변경 사항 스테이징
git add packages/i18n/src/locales/ko/
git add docs/content/ko/
# 또는 모든 변경사항
git add .

# 3. 커밋 (의미 있는 단위로)
git commit -m "feat(i18n): add Korean base translations

- Add Korean base.yaml with character prompt
- Add Korean stage.yaml for main UI
- Register Korean locale in index.ts"

# 4. 포크 저장소에 푸시
git push origin luke
```

### 주요 Phase별 커밋 전략
```bash
# Phase 1: 기본 구조
git commit -m "feat(i18n): add Korean locale infrastructure

- Create Korean locale directory structure
- Add empty Korean translation files
- Register Korean locale in index.ts"

# Phase 2: 핵심 UI
git commit -m "feat(i18n): add Korean core UI translations

- Complete base.yaml translations (character prompts, system messages)
- Complete stage.yaml translations (chat interface, voice controls)
- Add Korean language option to settings"

# Phase 3: 설정 화면
git commit -m "feat(i18n): add Korean settings translations

- Complete settings.yaml translations (600+ keys)
- Add all LLM provider descriptions in Korean
- Add voice/speech provider settings in Korean"

# Phase 4: 데스크톱 앱
git commit -m "feat(i18n): add Korean Tamagotchi translations

- Complete tamagotchi/settings.yaml
- Complete tamagotchi/stage.yaml
- Add desktop-specific Korean UI support"

# Phase 5: 문서
git commit -m "docs: add Korean documentation

- Add Korean main page and overview
- Add Korean user guides (web/desktop)
- Add Korean VitePress configuration"
```

## 📝 PR 제출 프로세스

### 1. 최종 검증
```bash
# 브랜치 정리 (squash 필요시)
git log --oneline -10

# 빌드 및 테스트
pnpm install
pnpm typecheck
pnpm lint
pnpm build:web
pnpm build:tamagotchi

# 최종 푸시
git push origin luke
```

### 2. GitHub에서 PR 생성
1. `https://github.com/aicoding-caret/airi`로 이동
2. "Compare & pull request" 버튼 클릭
3. **Base**: `moeru-ai/airi:main` ← **Head**: `aicoding-caret/airi:luke`
4. 제목: `feat(i18n): add comprehensive Korean language support`
5. 상세 설명 작성 (translation-workflow.md의 PR 템플릿 사용)

### 3. PR 설명 체크리스트
```markdown
## 🇰🇷 한국어 번역 지원 추가

### 📋 주요 변경사항
- [x] 한국어 로케일 완전 지원 (~900개 키 번역)
- [x] 웹/데스크톱 앱 UI 전체 한국어 지원
- [x] 문서 사이트 한국어 구조 추가
- [x] VitePress 한국어 설정 구성

### 🧪 테스트 완료 항목
- [x] 모든 UI 컴포넌트 한국어 표시 확인
- [x] LLM 제공업체 설정 한국어 지원 확인
- [x] 캐릭터 카드 시스템 한국어 지원 확인
- [x] 모바일 반응형 테스트 완료
- [x] 빌드 오류 없음 확인 (`pnpm build`)
- [x] 린트 검사 통과 (`pnpm lint`)

### 📷 스크린샷
[웹/데스크톱 한국어 UI 스크린샷들]

### 🔍 번역 품질 관리
- VTuber/AI 전문 용어 일관성 유지
- 한국 사용자 친화적 어투 적용
- 기존 영어/중국어 구조와 일관성 유지

### ✅ 체크리스트
- [x] 모든 번역 키 누락 없음
- [x] YAML 구문 오류 없음
- [x] 타입체크 통과
- [x] UI 레이아웃 정상 작동
- [x] 문서화 완료

Closes #[이슈번호] (해당하는 경우)
```

## 🔄 향후 유지보수

### 원본 저장소 변경사항 동기화
```bash
# 1. 원본에서 최신 변경사항 가져오기
git fetch upstream

# 2. main 브랜치 업데이트
git checkout main
git merge upstream/main
git push origin main

# 3. luke 브랜치에 반영 (필요시)
git checkout luke
git merge main

# 4. 충돌 해결 후 푸시
git push origin luke
```

### 추가 번역이나 수정이 필요한 경우
```bash
# luke 브랜치에서 계속 작업
git checkout luke

# 작업 후 커밋
git add .
git commit -m "fix(i18n): update Korean translation for new features"
git push origin luke

# 기존 PR에 자동으로 반영됨
```

## ⚠️ 주의사항

### Git 작업 시 주의점
- **절대 main 브랜치에서 직접 작업하지 않기**
- **커밋 전 반드시 `git status`로 변경사항 확인**
- **민감한 파일 (API 키 등) 실수로 커밋하지 않기**
- **의미 있는 커밋 단위로 분할하기**

### PR 전 필수 확인사항
- [ ] `.gitignore`에 `docs/my-tasks/`가 포함되어 있는지 확인
- [ ] 개인 설정 파일이나 로컬 환경 파일이 포함되지 않았는지 확인
- [ ] 모든 한국어 파일이 UTF-8 인코딩인지 확인
- [ ] YAML 파일 들여쓰기가 정확한지 확인

---

**🎯 목표**: 깔끔하고 완성도 높은 한국어 지원을 한 번의 PR로 제출하여 메인테이너들의 리뷰 부담을 최소화하면서도 한국 사용자들에게 완전한 기능을 제공하기!
