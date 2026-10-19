import { createRequestHandler } from "react-router"

const requestHandler = createRequestHandler(
    () => import("virtual:react-router/server-build"),
    import.meta.env.MODE,
)

export default {
    async fetch(request: Request, env: Cloudflare.Env, ctx: ExecutionContext) {
        const url = new URL(request.url)

        // 1. /api 경로 요청을 AWS 백엔드로 프록시
        if (url.pathname.startsWith("/api")) {
            const backendOrigin =
                env.BACKEND_URL || "http://<EC2_공인_IP_또는_도메인>:3000"
            const targetUrl = new URL(url.pathname + url.search, backendOrigin)

            // 원본 헤더 복사 및 호스트/포워딩 헤더 재설정
            const headers = new Headers(request.headers)
            headers.set("Host", targetUrl.host)
            headers.set("X-Forwarded-Host", url.host)
            headers.set("X-Forwarded-Proto", url.protocol.replace(":", ""))

            const proxyRequest = new Request(targetUrl.toString(), {
                method: request.method,
                headers,
                body: request.body,
                redirect: "manual",
                duplex: "half", // 스트리밍/바디 전송 지원
            } as RequestInit)

            return fetch(proxyRequest)
        }

        // 2. 그 외 모든 페이지/정적 요청은 React Router로 처리
        return requestHandler(request)
    },
}
