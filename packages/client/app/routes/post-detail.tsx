import PostDetailTemplate from "~/components/templates/PostDetailTemplate"
import type { Route } from "./+types/post-detail"

export function meta({}: Route.MetaArgs) {
    return [
        { title: "공고 상세 | 면접 Easy" },
        {
            name: "description",
            content: "채용 공고 상세 정보를 확인하세요",
        },
    ]
}

export default function PostDetail() {
    return <PostDetailTemplate />
}
