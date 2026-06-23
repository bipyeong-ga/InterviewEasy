import type { Route } from "./+types/main"
import MainTemplate from "~/components/templates/MainTemplate"

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
    return <MainTemplate />
}
