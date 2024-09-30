"use client";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { HTMLAttributes } from "react";

interface H2Props extends HTMLAttributes<HTMLHeadingElement> {
    children: React.ReactNode;
}

export function H2({ children, ...props }: H2Props) {
    return (
        <motion.div
            initial={{ width: "0%" }}
            whileInView={{ width: "100%" }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="relative z-10 w-full h-0.5 bg-foreground flex items-center justify-center my-10"
        >
            <h2
                style={{
                    color: "hsl(var(--background))",
                }}
                className={cn(
                    "absolute scroll-m-20 text-3xl md:text-4xl font-black text-shadow-md shadow-black/50 ",
                    props.className
                )}
                {...props}
            >
                {children}
            </h2>
        </motion.div>
    );
}
