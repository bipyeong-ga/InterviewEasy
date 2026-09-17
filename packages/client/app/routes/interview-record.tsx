import InterviewRecordTemplate from "~/components/templates/InterviewRecordTemplate"
import type { Route } from "./+types/interview-record"

export function meta({}: Route.MetaArgs) {
    return [
        { title: "모의면접 기록 | 면접 Easy" },
        {
            name: "description",
            content: "모의면접 다시보기 및 상세 리포트",
        },
    ]
}

export default function InterviewRecord() {
    return <InterviewRecordTemplate />
}
