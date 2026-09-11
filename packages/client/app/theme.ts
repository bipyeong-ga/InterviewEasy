import { createSystem, defaultConfig, defineConfig } from "@chakra-ui/react"

// Centralizes the hex values that were previously hardcoded throughout the
// templates (Tailwind slate/blue/sky/emerald/amber scales) so every screen
// shares one palette instead of copy-pasted hex literals.
const config = defineConfig({
    theme: {
        tokens: {
            colors: {
                gray: {
                    50: { value: "#F8FAFC" },
                    100: { value: "#F1F5F9" },
                    200: { value: "#E2E8F0" },
                    300: { value: "#CBD5E1" },
                    400: { value: "#94A3B8" },
                    500: { value: "#64748B" },
                    600: { value: "#475569" },
                    700: { value: "#334155" },
                    800: { value: "#1E293B" },
                    900: { value: "#0F172A" },
                    950: { value: "#020617" },
                },
                blue: {
                    700: { value: "#1D4ED8" },
                    800: { value: "#1E40AF" },
                },
                sky: {
                    400: { value: "#38BDF8" },
                },
                emerald: {
                    50: { value: "#ECFDF5" },
                    400: { value: "#4ADE80" },
                    500: { value: "#10B981" },
                    600: { value: "#059669" },
                    700: { value: "#047857" },
                },
                amber: {
                    400: { value: "#FBBF24" },
                },
            },
        },
    },
})

export const system = createSystem(defaultConfig, config)
