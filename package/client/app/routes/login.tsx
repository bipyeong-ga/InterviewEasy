import type { Route } from "./+types/login"
import LoginTemplate from "~/components/templates/LoginTemplate"

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
    return <LoginTemplate />
}
