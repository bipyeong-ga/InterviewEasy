import React, { useEffect, useMemo, useState } from "react"
import { Footer } from "../organisms/Footer"
import Header from "../organisms/Header"
import FeatureSection from "../organisms/FeatureSection"
import { Box, Button, VStack, Text, HStack, Image } from "@chakra-ui/react"
function GlassyOrb() {
    return (
        <div className="relative w-full h-full flex items-center justify-center overflow-visible">
            <video
                src="https://future.co/images/homepage/glassy-orb/orb-purple.webm"
                autoPlay
                loop
                muted
                playsInline
                onLoadedMetadata={(e) => {
                    e.currentTarget.defaultPlaybackRate = 2
                    e.currentTarget.playbackRate = 2
                }}
                style={{
                    filter: "hue-rotate(-55deg) saturate(250%) brightness(1.2) contrast(1.1)",
                    transform: "scale(1.25)",
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                }}
            />
        </div>
    )
}

const MainTemplate: React.FC = () => {
    return (
        <>
            <Header />

            <Box
                w="100%"
                h="100vh"
                py="6rem"
                px="2rem"
                display="flex"
                justifyContent="center"
                alignItems="center"
                bg="transparent"
                overflow="hidden"
            >
                <Box
                    w="100%"
                    maxW="6xl"
                    py="5rem"
                    px="2rem"
                    display="flex"
                    flexDirection={{ base: "column", md: "row" }}
                    justifyContent="space-between"
                    alignItems="center"
                    gap={{ base: "3rem", md: "1rem" }}
                >
                    {/* Left Column: Texts and Button */}
                    <VStack
                        alignItems={{ base: "center", md: "flex-start" }}
                        textAlign={{ base: "center", md: "left" }}
                        gap={0}
                        flex={1}
                    >
                        <Text
                            fontSize={{ base: "3xl", md: "6xl" }}
                            fontWeight="800"
                            lineHeight="short"
                            color="black"
                        >
                            면접, 이제
                        </Text>
                        <HStack
                            gap={2}
                            fontSize={{ base: "3xl", md: "6xl" }}
                            fontWeight="bold"
                        >
                            <Text color="#2563EB">쉽게</Text>
                            <Text>준비하세요</Text>
                        </HStack>
                        <Button
                            size="xl"
                            bg={"#2563EB"}
                            _hover={{ bg: "#1D4ED8" }}
                            px="2rem"
                            borderRadius="xl"
                            mt={10}
                            onClick={() => {
                                const el =
                                    document.getElementById("target-section")
                                if (el) {
                                    el.scrollIntoView({ behavior: "smooth" })
                                }
                            }}
                        >
                            서비스 둘러보기
                        </Button>
                    </VStack>

                    {/* Right Column: GlassyOrb */}
                    <Box
                        flex={1}
                        display="flex"
                        justifyContent="center"
                        alignItems="center"
                        position="relative"
                        w={{ base: "280px", md: "500px" }}
                        h={{ base: "280px", md: "500px" }}
                    >
                        <GlassyOrb />
                    </Box>
                </Box>
            </Box>
            <FeatureSection
                id="target-section"
                title="딱 맞는 공고만 골라보세요"
                lines={[
                    "직무, 지역, 기술 스택으로 필터링하고",
                    "북마크로 마감일 알림까지",
                ]}
                // imageSrc="/images/feature3.png"
                // imageAlt="AI 면접 피드백 예시"
                imageOnLeft={true}
            />

            <FeatureSection
                title="AI가 고쳐주는 자소서"
                lines={[
                    "맞춤법 교정부터 직무 적합성 피드백까지, 합격하는 서류를 만들어보세요",
                ]}
                // imageSrc="/images/feature3.png"
                // imageAlt="AI 면접 피드백 예시"
                imageOnLeft={false}
            />

            <FeatureSection
                title="실제 면접처럼 연습하세요"
                lines={[
                    "표정, 시선, 음성을 실시간 분석하고",
                    "AI 피드백 리포트로 약점을 잡아드려요",
                ]}
                // imageSrc="/images/feature3.png"
                // imageAlt="AI 면접 피드백 예시"
                imageOnLeft={true}
            />

            <Box
                w="100%"
                py="6rem"
                px="2rem"
                display="flex"
                justifyContent="center"
                bg={"#2563EB"}
            >
                <Box w="100%" maxW="6xl" py="5rem" px="2rem" textAlign="center">
                    <VStack gap="1.5rem">
                        <Text
                            fontSize={{ base: "lg", md: "4xl" }}
                            fontWeight="800"
                            lineHeight="short"
                            color="white"
                        >
                            지금 바로 면접 역량을 강화하세요
                        </Text>

                        <Text fontSize={{ base: "md", md: "xl" }} color="white">
                            수많은 취업 준비생들이 면접Easy와 함께 합격의 꿈을
                            키우고 있습니다.
                        </Text>

                        <Button
                            size="xl"
                            bg={"#FFFFFF"}
                            _hover={{ bg: "#F1F5F9" }}
                            px="2rem"
                            borderRadius="xl"
                            color={"#2563EB"}
                        >
                            시작하기
                        </Button>
                    </VStack>
                </Box>
            </Box>
            <Footer />
        </>
    )
}

export default MainTemplate
