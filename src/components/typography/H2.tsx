"use client";

import { cn } from "@/lib/utils";
import { useSetAtom } from "jotai";
import { HTMLAttributes, useEffect, useRef } from "react";
import { ServerMotion } from "../framer-motion-server";
import { hashAtom } from "../layout/NavMenu";

interface H2Props extends HTMLAttributes<HTMLHeadingElement> {
    children: React.ReactNode;
}

export function H2({ children, ...props }: H2Props) {
    const ref = useRef<HTMLHeadingElement | null>(null);
    const setHash = useSetAtom(hashAtom);

    useEffect(() => {
        const handleScroll = () => {
            if (ref.current) {
                const elementTop = ref.current.getBoundingClientRect().top;
                const scrollTop = window.scrollY;

                if (scrollTop <= 10) {
                    setHash("");
                } else if (scrollTop >= elementTop) {
                    setHash(`#${props.id}`);
                }
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [setHash, props.id]);

    return (
        <ServerMotion.div
            initial={{ width: "0%", opacity: 0 }}
            whileInView={{ width: "100%", opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="relative z-10 w-full h-0.5 bg-foreground flex items-center justify-center my-10"
        >
            <h2
                ref={ref}
                style={{
                    color: "hsl(var(--background))",
                }}
                className={cn(
                    "whitespace-nowrap absolute scroll-m-20 text-3xl md:text-4xl font-black text-shadow-md shadow-black/50 ",
                    props.className
                )}
                {...props}
            >
                {children}
            </h2>
        </ServerMotion.div>
    );
}
