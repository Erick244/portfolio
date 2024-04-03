import type { Config } from "tailwindcss";

const config = {
    darkMode: ["class"],
    content: [
        "./pages/**/*.{ts,tsx}",
        "./components/**/*.{ts,tsx}",
        "./app/**/*.{ts,tsx}",
        "./src/**/*.{ts,tsx}",
    ],
    prefix: "",
    theme: {
        container: {
            center: true,
            padding: "2rem",
            screens: {
                "2xl": "1400px",
            },
        },
        extend: {
            colors: {
                border: "hsl(var(--border))",
                input: "hsl(var(--input))",
                ring: "hsl(var(--ring))",
                background: "hsl(var(--background))",
                foreground: "hsl(var(--foreground))",
                primary: {
                    DEFAULT: "hsl(var(--primary))",
                    foreground: "hsl(var(--primary-foreground))",
                },
                secondary: {
                    DEFAULT: "hsl(var(--secondary))",
                    foreground: "hsl(var(--secondary-foreground))",
                },
                destructive: {
                    DEFAULT: "hsl(var(--destructive))",
                    foreground: "hsl(var(--destructive-foreground))",
                },
                muted: {
                    DEFAULT: "hsl(var(--muted))",
                    foreground: "hsl(var(--muted-foreground))",
                },
                accent: {
                    DEFAULT: "hsl(var(--accent))",
                    foreground: "hsl(var(--accent-foreground))",
                },
                popover: {
                    DEFAULT: "hsl(var(--popover))",
                    foreground: "hsl(var(--popover-foreground))",
                },
                card: {
                    DEFAULT: "hsl(var(--card))",
                    foreground: "hsl(var(--card-foreground))",
                },
            },
            borderRadius: {
                lg: "var(--radius)",
                md: "calc(var(--radius) - 2px)",
                sm: "calc(var(--radius) - 4px)",
            },
            keyframes: {
                "accordion-down": {
                    from: { height: "0" },
                    to: { height: "var(--radix-accordion-content-height)" },
                },
                "accordion-up": {
                    from: { height: "var(--radix-accordion-content-height)" },
                    to: { height: "0" },
                },
                journey: {
                    from: { width: "0%" },
                    to: { width: "50%" },
                },
                "tracking-in-expand": {
                    "0%": { letterSpacing: "-0.5em", opacity: "0" },
                    "40%": { opacity: "0.6" },
                    "100%": { opacity: "1" },
                },
                "tracking-in-contract": {
                    "0%": { letterSpacing: "1em", opacity: "0" },
                    "40%": { opacity: "0.6" },
                    "100%": { opacity: "1" },
                },
                "text-focus-in": {
                    "0%": { opacity: "0" },
                    "100%": { opacity: "1" },
                },
                "slide-in-blurred-right": {
                    "0%": {
                        transform: "translateX(1000px) scaleX(2.5) scaleY(0.2)",
                        transformOrigin: "0% 50%",
                        filter: "blur(40px)",
                        opacity: "0",
                    },
                    "100%": {
                        transform: "translateX(0) scaleX(1) scaleY(1)",
                        transformOrigin: "50% 50%",
                        filter: "blur(based)",
                        opacity: "1",
                    },
                },
                "slide-in-blurred-left": {
                    "0%": {
                        transform:
                            "translateX(-1000px) scaleX(2.5) scaleY(0.2)",
                        transformOrigin: "100% 50%",
                        filter: "blur(40px)",
                        opacity: "0",
                    },
                    "100%": {
                        transform: "translateX(0) scaleX(1) scaleY(1)",
                        transformOrigin: "50% 50%",
                        filter: "blur(based)",
                        opacity: "1",
                    },
                },
                "slide-in-blurred-bottom": {
                    "0%": {
                        transform: "translateY(1000px) scaleY(2.5) scaleX(0.2)",
                        transformOrigin: "50% 100%",
                        filter: "blur(40px)",
                        opacity: "0",
                    },
                    "100%": {
                        transform: "translateX(0) scaleX(1) scaleY(1)",
                        transformOrigin: "50% 50%",
                        filter: "blur(based)",
                        opacity: "1",
                    },
                },
            },
            animation: {
                "accordion-down": "accordion-down 0.2s ease-out",
                "accordion-up": "accordion-up 0.2s ease-out",
                journey: "journey 1s ease",
                "tracking-in-expand":
                    "tracking-in-expand 1s cubic-bezier(0.215, 0.610, 0.355, 1.000) both",
                "text-focus-in":
                    "text-focus-in 1s cubic-bezier(0.550, 0.085, 0.680, 0.530) both",
                "tracking-in-contract":
                    "tracking-in-contract 1s cubic-bezier(0.215, 0.610, 0.355, 1.000) both",
                "slide-in-blurred-right":
                    "slide-in-blurred-right 1s cubic-bezier(0.230, 1.000, 0.320, 1.000) both",
                "slide-in-blurred-left":
                    "slide-in-blurred-left 1s cubic-bezier(0.230, 1.000, 0.320, 1.000) both",
                "slide-in-blurred-bottom":
                    "slide-in-blurred-bottom 1s cubic-bezier(0.230, 1.000, 0.320, 1.000) both",
            },
        },
    },
    plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;
