"use client";
import { HTMLMotionProps, motion } from "framer-motion";

interface MotionSectionProps extends HTMLMotionProps<"section"> {
    children: React.ReactNode;
}

export function MotionSection({ children, ...props }: MotionSectionProps) {
    return <motion.section {...props}>{children}</motion.section>;
}
