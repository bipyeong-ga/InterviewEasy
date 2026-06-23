import type { Route } from "./+types/main"
import MockInterviewTemplate from "~/components/templates/MockInterviewTemplate"
export function meta({ }: Route.MetaArgs) {
    return [
        { title: "모의면접" },
        {
            name: "description",
            content: "모의면접",
        },
    ]
}

export default function Main() {
    return <MockInterviewTemplate />
}
