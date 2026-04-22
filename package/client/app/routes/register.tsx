import type { Route } from "./+types/main"
import Register from "~/components/templates/Register"

export function meta({}: Route.MetaArgs) {
    return [
        { title: "title" },
        {
            name: "description",
            content: "description",
        },
        { property: "og:type", content: "website" },
        { property: "og:site_name", content: "site_name" },
        { property: "og:title", content: "title" },
        {
            property: "og:description",
            content: "description",
        },
        { property: "og:url", content: "" },
        { name: "twitter:title", content: "title" },
        {
            name: "twitter:description",
            content: "description",
        },
    ]
}

export default function test() {
    return <Register />
}
