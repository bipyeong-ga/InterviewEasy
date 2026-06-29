import React, { useState, useEffect, useCallback } from "react"
import { Box, Flex, Text, Center, VStack } from "@chakra-ui/react"
import { toaster } from "../ui/toaster"
import { useInterviewStream } from "../../hooks/useInterviewStream"

interface InterviewTemplateProps {
    mode: "EASY" | "HARD"
    config?: any
}

const InterviewTemplate: React.FC<InterviewTemplateProps> = ({ mode, config }) => {
    const [seconds, setSeconds] = useState(0)
    const [score, setScore] = useState(100)
    const [evaluationLog, setEvaluationLog] = useState<{ score: number, feedback: string, timestamp: number }[]>([])

    const handleInterrupt = useCallback(() => {
        setScore((prev) => Math.max(0, prev - 5)); // 5점씩 감점
        
        if (mode === "EASY") {
            toaster.create({
                title: "감점!",
                description: "면접관이 말할 때는 경청해주세요. (-5점)",
                type: "warning",
                duration: 3000,
            })
        }
    }, [mode])

    const handleEvaluate = useCallback((evalData: { score: number, feedback: string }) => {
        setEvaluationLog(prev => [...prev, { ...evalData, timestamp: Date.now() }]);
        
        // 10점 만점 기준, 감점 계산 (예: 8점이면 -2점)
        const penalty = 10 - evalData.score;
        if (penalty > 0) {
            setScore(prev => Math.max(0, prev - penalty));
        }

        if (mode === "EASY") {
            toaster.create({
                title: `AI 평가: ${evalData.score}/10점`,
                description: evalData.feedback,
                type: evalData.score >= 8 ? "success" : "info",
                duration: 5000,
            })
        }
    }, [mode])

    // 콜백을 config에 추가하여 훅으로 전달
    const streamConfig = {
        ...config,
        onInterrupt: handleInterrupt,
        onEvaluate: handleEvaluate
    }

    const { videoRef, isStreaming, caption } = useInterviewStream(streamConfig)

    // 타이머 틱
    useEffect(() => {
        let interval: NodeJS.Timeout
        if (mode === "EASY") {
            interval = setInterval(() => {
                setSeconds((prev) => prev + 1)
            }, 1000)
        }
        return () => clearInterval(interval)
    }, [mode])

    const formatTime = (secs: number) => {
        const m = Math.floor(secs / 60).toString().padStart(2, "0")
        const s = (secs % 60).toString().padStart(2, "0")
        return `${m}:${s}`
    }

    return (
        <Flex
            direction="column"
            w="100vw"
            h="100vh"
            bg="#D1D5DB"
            position="relative"
            overflow="hidden"
            align="center"
            justify="center"
        >
            {/* Hidden Video for MediaPipe / WebRTC Stream */}
            <video
                ref={videoRef}
                playsInline
                autoPlay
                muted
                style={{ display: "none" }}
            />

            {/* EASY Mode: Timer & Score */}
            {mode === "EASY" && (
                <Flex
                    position="absolute"
                    top={4}
                    right={4}
                    bg="#F8FAFC"
                    w={{ base: "140px", md: "180px" }}
                    h={{ base: "40px", md: "60px" }}
                    align="center"
                    justify="space-between"
                    px={4}
                    borderRadius="md"
                    boxShadow="sm"
                >
                    <Text fontSize={{ base: "14px", md: "16px" }} fontWeight="700" color="#334155">
                        {formatTime(seconds)}
                    </Text>
                    <Text fontSize={{ base: "14px", md: "16px" }} fontWeight="700" color={score < 70 ? "red.500" : "#2563EB"}>
                        {score}점
                    </Text>
                </Flex>
            )}

            {/* Avatar Placeholder */}
            <VStack gap={0} mt="auto" mb="auto">
                <Center
                    w={{ base: "150px", md: "200px" }}
                    h={{ base: "150px", md: "200px" }}
                    bg="#878787"
                    borderRadius="full"
                    zIndex={2}
                >
                    <Text fontSize={{ base: "18px", md: "24px" }} fontWeight="800" color="black">
                        면접관
                    </Text>
                </Center>
                <Box
                    w={{ base: "300px", md: "400px" }}
                    h={{ base: "150px", md: "200px" }}
                    bg="#878787"
                    borderTopRadius="120px"
                    borderBottomRadius="0"
                    mt="-30px"
                    zIndex={1}
                />
            </VStack>

            {/* EASY Mode: Caption */}
            {mode === "EASY" && (
                <Flex
                    position="absolute"
                    bottom={0}
                    left={0}
                    right={0}
                    bg="#F8FAFC"
                    h={{ base: "60px", md: "80px" }}
                    align="center"
                    justify="center"
                    boxShadow="0px -2px 10px rgba(0,0,0,0.05)"
                >
                    <Text fontSize={{ base: "14px", md: "16px" }} fontWeight="600" color="#334155">
                        {caption}
                    </Text>
                </Flex>
            )}
        </Flex>
    )
}

export default InterviewTemplate
