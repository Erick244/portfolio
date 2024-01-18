import { HTMLAttributes } from "react";

interface FooterRootProps extends HTMLAttributes<HTMLElement> {
    children: React.ReactNode;
}

export function FooterRoot({ children, ...props }: FooterRootProps) {
    return <footer {...props}>{children}</footer>;
}
