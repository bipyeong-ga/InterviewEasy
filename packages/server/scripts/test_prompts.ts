import { evaluateAnswer, generateInterviewReport } from "../src/services/openaiService.ts"

async function main() {
    console.log("=== evaluateAnswer 테스트 ===")
    const evalResult = await evaluateAnswer({
        questionText:
            "트래픽이 급증했을 때 서버 병목을 어떻게 진단하고 해결했나요?",
        answerText:
            "APM으로 응답 지연 구간을 특정하고, DB 커넥션 풀이 병목이라는 걸 확인했습니다. 커넥션 풀 크기를 조정하고 읽기 쿼리를 레플리카로 분산시켜서 응답 시간을 420ms에서 180ms로 줄였습니다.",
        job: "백엔드 개발자",
    })
    console.log(JSON.stringify(evalResult, null, 2))

    console.log("\n=== generateInterviewReport 테스트 ===")
    const reportResult = await generateInterviewReport({
        job: "백엔드 개발자",
        company: "예시 기업",
        results: [
            {
                questionId: 1,
                questionText:
                    "트래픽이 급증했을 때 서버 병목을 어떻게 진단하고 해결했나요?",
                answerText:
                    "APM으로 응답 지연 구간을 특정하고, DB 커넥션 풀이 병목이라는 걸 확인했습니다. 커넥션 풀 크기를 조정하고 읽기 쿼리를 레플리카로 분산시켜서 응답 시간을 420ms에서 180ms로 줄였습니다.",
                score: evalResult.score,
                feedback: evalResult.feedback,
                status: "SUCCESS",
            },
            {
                questionId: 2,
                questionText: "팀원과 기술적으로 의견이 충돌했던 경험을 말해주세요.",
                answerText:
                    "코드 리뷰에서 동료가 상태관리 라이브러리 도입을 제안했는데, 저는 프로젝트 규모상 과하다고 생각해서 근거 자료를 정리해 공유하고 논의 끝에 절충안을 찾았습니다.",
                score: 8,
                feedback: "협업 상황에서의 논리적 설득 과정이 잘 드러남",
                status: "SUCCESS",
            },
        ],
    })
    console.log(JSON.stringify(reportResult, null, 2))
}

main().catch((e) => {
    console.error("ERROR:", e)
    process.exit(1)
})
