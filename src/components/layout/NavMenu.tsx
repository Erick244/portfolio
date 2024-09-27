"use client";

import { cn } from "@/lib/utils";
import { Code2Icon, HomeIcon, MonitorIcon, UserIcon } from "lucide-react";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu } from "../menu";

const items = [
    {
        href: "",
        label: "Home",
        icon: <HomeIcon />,
        classes: "peer/item0 peer/item",
    },
    {
        href: "#projects",
        label: "Projects",
        icon: <MonitorIcon />,
        classes: "peer/item1 peer/item",
    },
    {
        href: "#skills",
        label: "Skills",
        icon: <Code2Icon />,
        classes: "peer/item2 peer/item",
    },
    {
        href: "#about-me",
        label: "About Me",
        icon: <UserIcon />,
        classes: "peer/item3 peer/item",
    },
];

export function NavMenu() {
    const [hash, setHash] = useState<string>("/");
    const params = useParams();

    useEffect(() => {
        setHash(window.location.hash);
    }, [params]);

    return (
        <Menu.Root>
            {items.map((item, i) => (
                <Menu.Item
                    key={i}
                    href={item.href}
                    active={hash === item.href}
                    className={cn("hover:text-background", item.classes)}
                >
                    {item.icon}
                </Menu.Item>
            ))}

            <div className="absolute w-14 h-10 lg:h-14 bg-foreground/50 rounded -z-10 opacity-0 translate-x-[150%] lg:translate-x-0 lg:translate-y-[150%]  peer-hover/item0:translate-x-0 peer-hover/item0:translate-y-0 lg:peer-hover/item0:translate-y-0 peer-hover/item1:translate-x-[calc(100%_+_4px)] peer-hover/item1:translate-y-0 lg:peer-hover/item1:translate-y-[calc(100%_+_4px)] lg:peer-hover/item1:translate-x-0  peer-hover/item2:translate-x-[calc(200%_+_8px)] lg:peer-hover/item2:translate-x-0 lg:peer-hover/item2:translate-y-[calc(200%_+_8px)] peer-hover/item3:translate-x-[calc(300%_+_12px)] lg:peer-hover/item3:translate-x-0 lg:peer-hover/item3:translate-y-[calc(300%_+_12px)] peer-hover/item:opacity-100 transition-all duration-300 lg:rounded-lg peer-hover/item2:translate-y-0 peer-hover/item3:translate-y-0 " />
        </Menu.Root>
    );
}
