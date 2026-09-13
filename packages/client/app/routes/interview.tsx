import React, { useEffect } from "react"
import { useLocation, useNavigate } from "react-router"
import type { Route } from "./+types/interview"
import InterviewTemplate from "../components/templates/InterviewTemplate"

export function meta({}: Route.MetaArgs) {
    return [
        { title: "Mock Interview - InterviewEasy" },
        { name: "description", content: "AI Mock Interview Session" },
    ]
}

export default function Interview() {
    const location = useLocation()
    const navigate = useNavigate()
    
    // MockInterviewTemplate에서 넘어온 설정값들
    const config = location.state

    // 설정 없이 직접 URL로 접속한 경우 튕겨냄
    useEffect(() => {
        if (!config) {
            navigate("/mock-interview", { replace: true })
        }
    }, [config, navigate])

    if (!config) {
        return null // 리다이렉트 대기
    }

    return <InterviewTemplate config={config} />
}
