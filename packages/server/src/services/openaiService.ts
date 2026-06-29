import OpenAI from "openai"
import dotenv from "dotenv"

dotenv.config()

const client = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
})

export async function generateRealtimeToken(): Promise<string> {
    try {
        const response = await fetch("https://api.openai.com/v1/realtime/client_secrets", {
            method: "POST",
            headers: {
                "Authorization": `Bearer ${process.env.OPENAI_API_KEY}`,
                "Content-Type": "application/json"
            },
            body: JSON.stringify({})
        });

        if (!response.ok) {
            const errorText = await response.text();
            console.error("OpenAI Realtime Token Error Body:", errorText);
            throw new Error(`Failed to generate realtime token: ${response.status} ${response.statusText} - ${errorText}`);
        }

        const data = await response.json();
        console.log("Realtime Token Success Payload:", data.value);
        return data.value;
    } catch (error) {
        console.error("Realtime Token Error:", error);
        throw error;
    }
}

export async function generateInterviewQuestions(coverLetter: string): Promise<string> {
    try {
        const response = await client.chat.completions.create({
            model: "gpt-4o",
            messages: [
                {
                    role: "system",
                    content:
                        "당신은 대기업의 까다로운 면접관입니다. 제출된 자기소개서를 날카롭게 분석하여, 지원자의 역량을 검증할 수 있는 압박 면접 질문 3개를 번호 매겨서 생성해주세요.",
                },
                { role: "user", content: `분석할 자기소개서:\n${coverLetter}` },
            ],
            temperature: 0.5,
        })
        return response.choices[0].message.content || ""
    } catch (error) {
        console.error("Interview Questions Generation Error:", error)
        throw error
    }
}

export async function analyzeCoverLetter(coverLetter: string): Promise<string> {
    try {
        const response = await client.chat.completions.create({
            model: "gpt-4o",
            messages: [
                {
                    role: "system",
                    content:
                        "당신은 취업 컨설팅 전문가입니다. 제출된 자기소개서의 장점, 보완할 점, 그리고 문맥 수정 방향을 가독성 좋게 요약하여 피드백 양식으로 제공해주세요.",
                },
                { role: "user", content: `분석할 자기소개서:\n${coverLetter}` },
            ],
            temperature: 0.5,
        })
        return response.choices[0].message.content || ""
    } catch (error) {
        console.error("Cover Letter Analysis Error:", error)
        throw error
    }
}

export async function analyzeResume(resumeText: string): Promise<string> {
    try {
        const response = await client.chat.completions.create({
            model: "gpt-4o",
            messages: [
                {
                    role: "system",
                    content:
                        "당신은 헤드헌터이자 커리어 코치입니다. 이력서의 경력 사항과 기술 스택을 분석하여, 이 지원자가 강점으로 내세울 수 있는 부분과 이력서상에서 매력도가 떨어지는 부분을 짚어내고 개선 방향을 제안해주세요.",
                },
                { role: "user", content: `분석할 이력서 내용\n${resumeText}` },
            ],
            temperature: 0.5,
        })
        return response.choices[0].message.content || ""
    } catch (error) {
        console.error("Resume Analysis Error:", error)
        throw error
    }
}
