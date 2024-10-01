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
    const ref = useRef(null);
    const setHash = useSetAtom(hashAtom);

    useEffect(() => {
        window.onscroll = () => {
            if (window.scrollY <= 10) {
                setHash("");
            } else if (window.scrollY <= 200) {
                setHash("#projects");
            }
        };
    }, [props.id, setHash]);

    return (
        <ServerMotion.div
            onViewportEnter={() => setHash(`#${props.id}`)}
            initial={{ width: "0%" }}
            whileInView={{ width: "100%" }}
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
