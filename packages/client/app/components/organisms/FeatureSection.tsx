import React from "react"
import { Box, HStack, VStack, Text, Image } from "@chakra-ui/react"

type Props = {
    id?: string
    title: string
    lines: string[]
    imageOnLeft?: boolean
    imageSrc?: string
    imageAlt?: string
    comingSoon?: string
    /** "split" (default): image + text side by side. "stacked": full-width image
     * with centered text below it, used to break up runs of split sections. */
    layout?: "split" | "stacked"
    /** A live component demo to show instead of a static imageSrc. */
    visual?: React.ReactNode
}

const FeatureSection: React.FC<Props> = ({
    id,
    title,
    lines,
    imageOnLeft = false,
    imageSrc,
    imageAlt,
    comingSoon,
    layout = "split",
    visual,
}) => {
    if (layout === "stacked") {
        return (
            <Box id={id} w="100%" py={{ base: 12, md: 20 }}>
                <Box w="100%" maxW="1440px" mx="auto" px={{ base: 4, md: 8 }}>
                    <VStack gap={{ base: 6, md: 8 }} align="center">
                        <VStack gap={3} maxW="640px" align="center" textAlign="center">
                            <Text
                                fontSize={{ base: "22px", md: "30px" }}
                                fontWeight={700}
                                color="gray.900"
                                lineHeight="1.3"
                            >
                                {title}
                            </Text>

                            <VStack align="stretch" gap={1.5}>
                                {lines.map((l, i) => (
                                    <Text
                                        fontWeight={500}
                                        key={i}
                                        fontSize={{ base: "14px", md: "16px" }}
                                        lineHeight="1.6"
                                        color="gray.600"
                                    >
                                        {l}
                                    </Text>
                                ))}
                            </VStack>

                            {comingSoon && (
                                <Box
                                    mt={2}
                                    px={3}
                                    py={1.5}
                                    borderRadius="full"
                                    bg="blue.50"
                                    border="1px solid"
                                    borderColor="blue.100"
                                >
                                    <Text fontSize="14px" fontWeight={600} color="blue.700">
                                        Coming Soon · {comingSoon}
                                    </Text>
                                </Box>
                            )}
                        </VStack>

                        {visual ? (
                            <Box w="100%" maxW="1040px">
                                {visual}
                            </Box>
                        ) : (
                            imageSrc && (
                                <Image
                                    src={imageSrc}
                                    alt={imageAlt || title}
                                    w="100%"
                                    maxW="1040px"
                                    objectFit="cover"
                                    borderRadius="md"
                                    minH={{ base: "220px", md: "420px" }}
                                />
                            )
                        )}
                    </VStack>
                </Box>
            </Box>
        )
    }

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
                    {visual ? (
                        <Box flex="1" minW={0} w="100%">
                            {visual}
                        </Box>
                    ) : imageSrc ? (
                        <Image
                            src={imageSrc}
                            alt={imageAlt || title}
                            flex="1"
                            minW={0}
                            w="100%"
                            objectFit="cover"
                            borderRadius="md"
                            minH={{ base: "320px", md: "560px" }}
                        />
                    ) : (
                        <Box
                            flex="1"
                            minH={{ base: "320px", md: "560px" }}
                            bg="gray.200"
                            borderRadius="md"
                            boxShadow="sm"
                        />
                    )}

                    <VStack flex="1" align="flex-start" gap={3}>
                        <Text
                            fontSize={{ base: "22px", md: "30px" }}
                            fontWeight={700}
                            color="gray.900"
                            lineHeight="1.3"
                        >
                            {title}
                        </Text>

                        <VStack align="stretch" gap={1.5}>
                            {lines.map((l, i) => (
                                <Text
                                    fontWeight={500}
                                    key={i}
                                    fontSize={{ base: "14px", md: "16px" }}
                                    lineHeight="1.6"
                                    color="gray.600"
                                >
                                    {l}
                                </Text>
                            ))}
                        </VStack>

                        {comingSoon && (
                            <Box
                                mt={2}
                                px={3}
                                py={1.5}
                                borderRadius="full"
                                bg="blue.50"
                                border="1px solid"
                                borderColor="blue.100"
                            >
                                <Text fontSize="14px" fontWeight={600} color="blue.700">
                                    Coming Soon · {comingSoon}
                                </Text>
                            </Box>
                        )}
                    </VStack>
                </HStack>
            </Box>
        </Box>
    )
}

export default FeatureSection
