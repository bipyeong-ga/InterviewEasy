import ProfileTemplate from "~/components/templates/ProfileTemplate"

export function meta() {
    return [
        { title: "내 프로필 - InterviewEasy" },
        { name: "description", content: "프로필 수정 및 스크랩한 공고를 확인하세요." },
    ]
}

export default function Profile() {
    return <ProfileTemplate />
}
