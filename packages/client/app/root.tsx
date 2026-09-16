import {
    isRouteErrorResponse,
    Links,
    Meta,
    Outlet,
    Scripts,
    ScrollRestoration,
    useRouteError,
} from "react-router"

import "./fonts.css"

import ErrorTemplate from "./components/templates/ErrorTemplate"
import type { Route } from "./+types/root"
import { Provider } from "./components/ui/provider"
import { Toaster } from "./components/ui/toaster"
import { AuthProvider } from "./hooks/useAuth"

export const links: Route.LinksFunction = () => [
    { rel: "preconnect", href: "https://fonts.googleapis.com" },
    {
        rel: "preconnect",
        href: "https://fonts.gstatic.com",
        crossOrigin: "anonymous",
    },
    {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,400..800;1,14..32,400..800&display=swap",
    },
]

export function Layout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="ko">
            <head>
                <meta charSet="utf-8" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />

                <Meta />
                <Links />
            </head>
            <body>
                <AuthProvider>
                    <Provider>{children}</Provider>
                </AuthProvider>
                <ScrollRestoration />
                <Scripts />
            </body>
        </html>
    )
}

export default function App() {
    return (
        <>
            <Outlet />
            <Toaster />
        </>
    )
}
export function ErrorBoundary() {
    const error = useRouteError() as unknown

    const isDev = import.meta.env.DEV

    let message = "Oops!"
    let details = "An unexpected error occurred."
    let stack: string | undefined

    const statusCode =
        error instanceof Error
            ? parseInt(error.message.match(/\d+/)?.[0] || "") || null
            : isRouteErrorResponse(error)
                ? error.status
                : null

    if (!isDev) {
        return (
            <Provider>
                <ErrorTemplate
                    title="Oops!"
                    details="An unexpected error occurred."
                />
            </Provider>
        )
    }

    switch (statusCode) {
        case 400:
            message = "Bad Request"
            details = "Server received a bad request."
            break
        case 401:
            message = "Unauthorized"
            details = "Authentication is required."
            break
        case 403:
            message = "Forbidden"
            details = "Access to this page is not allowed."
            break
        case 404:
            message = "Not Found"
            details = "The page you are looking for does not exist."
            break
        case 500:
            message = "Server Error"
            details = "An error occurred on the server."
            break
        default:
            if (isRouteErrorResponse(error)) {
                message = error.statusText
                details = error.data?.message || error.statusText
            } else if (error instanceof Error) {
                details = error.message
                stack = error.stack
            }
    }

    return (
        <Provider>
            <ErrorTemplate title={message} details={details} />
        </Provider>
    )
}
