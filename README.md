# InterviewEasy

AI 기반 모의 면접 & 취업 준비 웹 서비스입니다. 이력서·자기소개서를 AI가 분석해 맞춤형 면접 질문을 생성하고, 웹캠·음성으로 실전처럼 모의 면접을 진행한 뒤 STT 채점과 종합 리포트, 영상 다시보기까지 제공합니다.

## 주요 기능

- **회원가입 / 로그인** — 이메일 로그인 및 Google·GitHub OAuth, JWT + HttpOnly 쿠키 기반 인증
- **자소서 · 이력서 분석** — PDF 업로드 시 AI가 요약·개선점을 제시하고, 원본 문서와 AI 피드백을 좌우로 비교하며 채팅으로 후속 질문 가능
- **채용 공고** — 공고 목록/상세 조회, 이력서 기반 추천 공고, 스크랩(좋아요)
- **AI 모의 면접**
  - 이력서·희망 직무 기반 맞춤 질문 자동 생성
  - 웹캠 녹화 + 음성 답변 → Whisper STT 변환 → 실시간 백그라운드 채점
  - 면접 세션 전체 영상 저장 및 질문 구간 이동(챕터) 다시보기
  - 종합 리포트: 6축 역량 레이더 차트, 말하기 속도·필러워드·침묵 비율 등 딜리버리 지표, 질문별 상세 피드백
- **마이페이지** — 프로필(이름/닉네임/프로필 사진) 관리, 스크랩한 공고, 작성한 자소서/이력서 바로가기, 모의 면접 기록 및 다시보기

## 기술 스택

| 영역 | 스택 |
|---|---|
| 클라이언트 | React 19, React Router 7, Chakra UI v3, Vite, TypeScript |
| 서버 | Node.js, Express 5, TypeScript, PostgreSQL |
| AI 엔진 | Python, FastAPI (TTS, 실시간 얼굴 랜드마크 WebSocket) |
| AI 모델 | OpenAI GPT-4o (질문 생성·채점·리포트), Whisper (STT) |
| 인프라 | Docker / docker-compose, nginx |

## 프로젝트 구조

```
interview-easy/
├── packages/
│   ├── client/        # React Router 프론트엔드
│   ├── server/        # Express API 서버 (인증, 이력서, 공고, 면접, DB)
│   ├── ai/project/    # FastAPI 기반 보조 AI 엔진 (TTS, 얼굴 랜드마크)
│   └── uploads/       # 로컬 업로드 임시 저장소
├── docker-compose.yml
├── Dockerfile
└── nginx.conf
```

## 시작하기

### 사전 요구사항

- Node.js 20+, [pnpm](https://pnpm.io/)
- PostgreSQL (로컬 설치 또는 Docker)
- (선택) Python 3.10+ — 보조 AI 엔진(TTS 등) 사용 시
- (선택) OpenAI API Key — 없으면 질문 생성/채점이 폴백(더미) 응답으로 동작합니다

### 1. 데이터베이스 실행

```bash
docker run -d --name interview-db \
  -e POSTGRES_USER=user -e POSTGRES_PASSWORD=1234 -e POSTGRES_DB=interview \
  -p 5432:5432 postgres:latest
```

로컬에 이미 PostgreSQL이 실행 중이라면 포트가 겹치지 않도록 `-p`를 다른 값(예: `5433:5432`)으로 바꾸고, 아래 `.env`의 `DB_PORT`도 맞춰주세요.

### 2. 환경 변수 설정

`packages/server/.env` 파일을 생성합니다 (`packages/server/.env.example` 참고):

```env
PORT=3000

DB_HOST=localhost
DB_PORT=5432
DB_USER=user
DB_PASSWORD=1234
DB_NAME=interview

JWT_SECRET=change-me-to-a-random-secret
JWT_EXPIRES_IN_SECS=604800
JWT_ISSUER=intervieweasy

FRONTEND_URL=http://localhost:5173
CORS_ORIGIN=http://localhost:5173

# OAuth 로그인을 쓰려면 채워주세요 (선택)
GITHUB_CLIENT_ID=
GITHUB_CLIENT_SECRET=
GOOGLE_CLIENT_ID=
GOOGLE_CLIENT_SECRET=

# 없으면 AI 기능은 더미 응답으로 동작합니다
OPENAI_API_KEY=
```

OAuth 앱 등록 방법은 [`packages/server/OAUTH_SETUP.md`](packages/server/OAUTH_SETUP.md)를 참고하세요.

### 3. 의존성 설치

```bash
pnpm --prefix packages/server install
pnpm --prefix packages/client install
```

### 4. 개발 서버 실행

루트에서 서버 + 클라이언트를 동시에 실행:

```bash
pnpm dev
```

또는 개별 실행:

```bash
pnpm dev:s   # 서버 (http://localhost:3000) — 최초 실행 시 DB 마이그레이션 자동 적용
pnpm dev:c   # 클라이언트 (http://localhost:5173)
pnpm dev:a   # (선택) FastAPI 보조 AI 엔진 (http://localhost:8000)
```

클라이언트는 `/api` 요청을 Vite 프록시를 통해 서버(`:3000`)로 전달하므로, 브라우저에서는 `http://localhost:5173`만 열면 됩니다.

## 스크립트

| 명령어 | 설명 |
|---|---|
| `pnpm dev` | 서버 + 클라이언트 동시 실행 |
| `pnpm dev:s` / `pnpm dev:c` / `pnpm dev:a` | 서버 / 클라이언트 / AI 엔진 개별 실행 |
| `pnpm build:s` / `pnpm build:c` | 서버 / 클라이언트 프로덕션 빌드 |

## 배포

루트의 `docker-compose.yml`로 DB·서버·클라이언트·nginx를 한 번에 띄울 수 있습니다.

```bash
docker compose up -d --build
```

## 라이선스

ISC
