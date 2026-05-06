# 1주차 과제 — 개발 환경 & 웹 기초

풀스택 개발 강의 (React + Java Spring Boot) **1주차** 과제입니다.  
이 저장소는 **과제 안내 전용**이며, 수강생은 **Fork 후 Pull Request**로 제출합니다.

---

## 📌 제출 방식 (PR)

1. 이 저장소 상단 **Fork** → 본인 계정으로 복사  
2. Fork한 저장소를 로컬에 `git clone`  
3. 브랜치 생성: `git checkout -b week01/본인GitHub아이디`  
4. 아래 **제출 폴더 규칙**에 맞게 파일 추가 후 커밋·푸시  
5. **원본 저장소(`likelion-session/week01-assignment`)** 로 **Pull Request** 생성  
6. PR 제목 예: `[1주차] 홍길동 (GitHub: username)`

자세한 단계는 [SUBMISSION.md](./SUBMISSION.md)를 참고하세요.

---

## 📁 제출 폴더 규칙

```
submissions/
└── {본인GitHub아이디}/
    ├── README.md              # 과제 요약, 실행 방법, 스크린샷 링크 또는 첨부 안내
    ├── practice1-env.md     # 실습1: 환경 확인 명령어 출력 (복사 붙여넣기 또는 스크린샷)
    └── week01-page/           # 실습2: HTML/CSS/JS 페이지
        ├── index.html
        ├── (선택) style.css, main.js
```

- 폴더명은 **반드시 본인 GitHub 사용자명**과 동일하게 합니다.  
- `README.md`에 이름, 학번(해당 시), 완료한 항목을 적습니다.

---

## ✅ 필수 과제

### 실습 1 — 개발 환경 확인 (10점)

터미널에서 아래 명령을 실행하고 **출력 결과**를 `practice1-env.md`에 붙여넣거나 스크린샷으로 첨부합니다.

```bash
node --version
npm --version
java -version
git --version
```

(선택) `javac -version` 도 가능하면 함께 기록합니다.

---

### 실습 2 — 간단한 웹 페이지 (40점)

`submissions/{아이디}/week01-page/` 에 다음을 만족하는 **정적 페이지**를 만듭니다.

| 구분 | 요구사항 |
|------|----------|
| HTML | 페이지 제목(탭): 본인에게 맞게 수정. 본문에 제목, 자기소개(이름·취미 등), 버튼 1개 |
| CSS | 배경색 `#f0f0f0`, 제목은 가독성 있게 스타일링 |
| JS | 버튼 클릭 시 `alert` 로 메시지 표시, `console.log` 로 현재 시간 출력 |

브라우저에서 연 화면을 `README.md`에 스크린샷으로 넣거나, 이미지 파일을 같은 폴더에 두고 링크합니다.

---

### 실습 3 — Git & GitHub (25점)

- 본인 GitHub에 **개인 저장소** 하나를 만들고, 위 `week01-page` 또는 과제 전체를 푸시해 둡니다.  
- `README.md`에 **개인 저장소 URL**을 적습니다.

---

### 실습 4 — React 프로젝트 실행 (선택, 15점)

- `npx create-react-app` 으로 프로젝트 생성 후 실행  
- `App.js`에서 화면에 보이는 문구를 본인 문구로 변경  
- 변경된 코드 일부와 실행 화면을 `README.md` 또는 `react-note.md`에 기록  

(환경 사정상 어렵다면 실습 4는 생략 가능 — README에 사유를 짧게 적어 주세요.)

---

### 실습 5 — Spring Boot Hello (선택, 10점)

- [Spring Initializr](https://start.spring.io/)로 프로젝트 생성 (Spring Web)  
- `/hello` 등 간단한 GET API 한 개  
- 응답 캡처 또는 코드 스니펫을 `spring-note.md` 등에 기록  

(선택 과제는 생략 시 README에 “미진행”으로 표기)

---

## 📅 마감

- 강의에서 안내하는 **마감일시**를 따릅니다. (이 저장소 Issues 또는 강의 노션 확인)

---

## ⚖️ 배점 요약

| 항목 | 배점 |
|------|------|
| 실습 1 환경 확인 | 10 |
| 실습 2 웹 페이지 | 40 |
| 실습 3 GitHub 저장소 | 25 |
| 실습 4 React (선택) | 15 |
| 실습 5 Spring (선택) | 10 |
| **합계** | **100** (선택 미제출 시 해당 만큼 제외 후 환산 가능) |

---

## ❓ 문의

강의 채널(슬랙·카카오 등) 또는 이 저장소 **Issues** (질문 템플릿이 있으면 활용)로 문의하세요.

---

## 📚 참고

- [Node.js](https://nodejs.org/)
- [MDN Web Docs](https://developer.mozilla.org/)
- [Git 문서](https://git-scm.com/doc)
