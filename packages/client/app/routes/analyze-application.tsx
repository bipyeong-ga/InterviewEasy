import type { Route } from "./+types/main"
import ApplicationTemplate from "~/components/templates/ApplicationTemplate"

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
    return <ApplicationTemplate />
}
