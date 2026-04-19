import type { Route } from "./+types/login";
import LoginTemplate from "~/components/templates/LoginTemplate";

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
    ];
}

export default function Main() {
    return <LoginTemplate />;
}
