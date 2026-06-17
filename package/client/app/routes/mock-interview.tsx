import type { Route } from "./+types/main"
import MockInterviewTemplate from "~/components/templates/MockInterviewTemplate"
export function meta({}: Route.MetaArgs) {
    return [
        { title: "title" },
        {
            name: "description",
            content: "description",
        },
    ]
}

export default function Main() {
    return <MockInterviewTemplate />
}
