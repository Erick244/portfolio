import { cn } from "@/lib/utils";
import { HTMLAttributes } from "react";

interface H2Props extends HTMLAttributes<HTMLHeadingElement> {
    children: React.ReactNode;
}

export function H2({ children, ...props }: H2Props) {
    return (
        <div className="relative w-full h-0.5 bg-foreground flex items-center justify-center my-10">
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
        </div>
    );
}
