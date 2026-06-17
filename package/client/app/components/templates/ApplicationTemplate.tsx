import React, { useEffect, useMemo, useState } from "react"
import { Box } from "@chakra-ui/react"
import Header from "../organisms/Header"

const ApplicationTemplate: React.FC = () => {
    return (
        <>
            <Header />
            <Box mt={20}>
                <div>이력서창임</div>
            </Box>
        </>
    )
}

export default ApplicationTemplate
