import PostTemplate from "~/components/templates/PostTemplate"
import type { Route } from "./+types/post"

export function meta({}: Route.MetaArgs) {
    return [
        { title: "공고 확인 | 면접 Easy" },
        {
            name: "description",
            content: "지역, 직무별로 채용 공고를 찾아보세요",
        },
    ]
}

export default function Post() {
    return <PostTemplate />
}
