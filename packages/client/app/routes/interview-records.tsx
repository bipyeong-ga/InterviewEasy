import InterviewRecordsTemplate from "~/components/templates/InterviewRecordsTemplate"
import type { Route } from "./+types/interview-records"

export function meta({}: Route.MetaArgs) {
    return [
        { title: "모의면접 기록 | 면접 Easy" },
        {
            name: "description",
            content: "지금까지 진행한 모의면접 기록 목록",
        },
    ]
}

export default function InterviewRecords() {
    return <InterviewRecordsTemplate />
}
