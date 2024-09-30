"use client";

import { HTMLMotionProps, motion } from "framer-motion";

interface MotionDivProps extends HTMLMotionProps<"div"> {
    children: React.ReactNode;
}

export function MotionDiv({ children, ...props }: MotionDivProps) {
    return <motion.div {...props}>{children}</motion.div>;
}
