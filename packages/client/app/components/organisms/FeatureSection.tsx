import React from "react"
import { Box, HStack, VStack, Text, Image } from "@chakra-ui/react"

type Props = {
    id?: string
    title: string
    lines: string[]
    imageOnLeft?: boolean
    imageSrc?: string
    imageAlt?: string
}

const FeatureSection: React.FC<Props> = ({
    id,
    title,
    lines,
    imageOnLeft = false,
    imageSrc,
    imageAlt,
}) => {
    return (
        <Box id={id} w="100%" py={{ base: 12, md: 20 }}>
            <Box w="100%" maxW="1440px" mx="auto" px={{ base: 4, md: 8 }}>
                <HStack
                    gap={{ base: 6, md: 12 }}
                    align="center"
                    flexDirection={{
                        base: "column",
                        md: imageOnLeft ? "row" : "row-reverse",
                    }}
                >
                    {imageSrc ? (
                        <Image
                            src={imageSrc}
                            alt={imageAlt || title}
                            flex="1"
                            objectFit="cover"
                            borderRadius="6px"
                            minH={{ base: "320px", md: "560px" }}
                        />
                    ) : (
                        <Box
                            flex="1"
                            minH={{ base: "320px", md: "560px" }}
                            bg="gray.200"
                            borderRadius="6px"
                            boxShadow="sm"
                        />
                    )}

                    <VStack flex="1" align="flex-start" gap={4}>
                        <Text
                            fontSize={{ base: "28px", md: "48px" }}
                            fontWeight={600}
                            color="black"
                            lineHeight="1.05"
                        >
                            {title}
                        </Text>

                        <VStack align="stretch" gap={1}>
                            {lines.map((l, i) => (
                                <Text
                                    fontWeight={600}
                                    key={i}
                                    fontSize={{ base: "16px", md: "20px" }}
                                    color="gray.800"
                                >
                                    {l}
                                </Text>
                            ))}
                        </VStack>
                    </VStack>
                </HStack>
            </Box>
        </Box>
    )
}

export default FeatureSection
