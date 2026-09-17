import { type RouteConfig, index, route } from "@react-router/dev/routes"

export default [
    index("routes/main.tsx"),
    route("login", "routes/login.tsx"),
    route("oauth/success", "routes/oauth_success.tsx"),
    route("register", "routes/register.tsx"),
    route("mock-interview", "routes/mock-interview.tsx"),
    route("analyze-application", "routes/analyze-application.tsx"),

    route("post", "routes/post.tsx"),
    route("post/:id", "routes/post-detail.tsx"),
    route("profile", "routes/profile.tsx"),
    route("interview", "routes/interview.tsx"),
    route("interview-records", "routes/interview-records.tsx"),
    route("interview-record/:id", "routes/interview-record.tsx")
] satisfies RouteConfig
