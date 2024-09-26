interface MessageRootProps {
    children: React.ReactNode;
}

export function MessageRoot({ children }: MessageRootProps) {
    return <div className="max-w-2xl relative p-5">{children}</div>;
}
