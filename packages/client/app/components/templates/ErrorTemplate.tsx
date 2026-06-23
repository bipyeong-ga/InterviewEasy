import { Box, VStack, Text, Image, Button } from "@chakra-ui/react"
import { motion } from "motion/react"
import React from "react"
import BlockLink from "../atoms/BlockLink"
import { FaAngleLeft } from "react-icons/fa"

const MotionBox = motion.create(Box)
const MotionVStack = motion.create(VStack)
const MotionText = motion.create(Text)
const MotionButton = motion.create(Button)

const ErrorTemplate: React.FC<{
    title: string
    details: string
}> = ({ title, details }) => {
    return (
        <MotionBox
            h="100vh"
            w="100%"
            bg="gray.50"
            display="flex"
            justifyContent="center"
            alignItems="flex-start"
            pt={{ base: "20", md: "40" }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
        >
            <MotionVStack
                gap={6}
                align="start"
                maxW={{ base: "90%", md: "500px" }}
                initial="hidden"
                animate="visible"
                variants={{
                    hidden: { opacity: 0 },
                    visible: {
                        opacity: 1,
                        transition: {
                            staggerChildren: 0.15,
                            delayChildren: 0.2,
                        },
                    },
                }}
            >
                <BlockLink to="/">
                    <MotionBox
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4 }}
                    >
                        <Image
                            src="/logo1.svg"
                            alt="Logo"
                            maxH={{ base: "30px", md: "40px" }}
                            w="100%"
                            h="100%"
                            objectFit="contain"
                        />
                    </MotionBox>
                </BlockLink>

                <MotionText
                    fontSize={{ base: "2xl", md: "3xl" }}
                    fontWeight="bold"
                    variants={{
                        hidden: { opacity: 0, y: 10 },
                        visible: {
                            opacity: 1,
                            y: 0,
                            transition: { duration: 0.4 },
                        },
                    }}
                >
                    {title}
                </MotionText>

                <MotionText
                    fontSize={{ base: "md", md: "lg" }}
                    color="gray.600"
                    variants={{
                        hidden: { opacity: 0, y: 10 },
                        visible: {
                            opacity: 1,
                            y: 0,
                            transition: { duration: 0.4 },
                        },
                    }}
                >
                    {details}
                </MotionText>
                <MotionButton
                    size={"sm"}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4 }}
                    onClick={() => {
                        history.back()
                    }}
                >
                    <FaAngleLeft />
                    Go Back
                </MotionButton>
            </MotionVStack>
        </MotionBox>
    )
}

export default ErrorTemplate
