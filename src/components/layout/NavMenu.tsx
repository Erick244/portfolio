"use client";

import { cn } from "@/lib/utils";
import {
    Code2Icon,
    HomeIcon,
    MonitorIcon,
    PhoneIcon,
    UserIcon,
} from "lucide-react";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu } from "../menu";

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
                    className={cn(
                        "hover:text-background peer/item",
                        item.twClasses
                    )}
                >
                    {item.icon}
                </Menu.Item>
            ))}
            <div
                className={cn(
                    "absolute w-14 h-10 lg:h-14 bg-foreground/50 rounded -z-10 opacity-0 translate-x-[150%] lg:translate-x-0 lg:translate-y-[150%] peer-hover/item:opacity-100 transition-all duration-300 lg:rounded-xl",
                    [...itemsAnimationTwClasses]
                )}
            />
        </Menu.Root>
    );
}

const items = [
    {
        href: "",
        label: "Home",
        icon: <HomeIcon />,
        twClasses: "peer/item0",
    },
    {
        href: "#projects",
        label: "Projects",
        icon: <MonitorIcon />,
        twClasses: "peer/item1",
    },
    {
        href: "#skills",
        label: "Skills",
        icon: <Code2Icon />,
        twClasses: "peer/item2",
    },
    {
        href: "#about-me",
        label: "About Me",
        icon: <UserIcon />,
        twClasses: "peer/item3",
    },
    {
        href: "#contact",
        label: "Contact",
        icon: <PhoneIcon />,
        twClasses: "peer/item4",
    },
];

const itemsAnimationTwClasses = [
    "peer-hover/item0:translate-x-0 peer-hover/item0:translate-y-0",
    "peer-hover/item1:translate-x-[calc(100%_+_4px)] peer-hover/item1:translate-y-0 lg:peer-hover/item1:translate-y-[calc(100%_+_4px)] lg:peer-hover/item1:translate-x-0",
    "peer-hover/item2:translate-x-[calc((100%_+_4px)_*_2)] peer-hover/item2:translate-y-0 lg:peer-hover/item2:translate-y-[calc((100%_+_4px)_*_2)] lg:peer-hover/item2:translate-x-0",
    "peer-hover/item3:translate-x-[calc((100%_+_4px)_*_3)] peer-hover/item3:translate-y-0 lg:peer-hover/item3:translate-y-[calc((100%_+_4px)_*_3)] lg:peer-hover/item3:translate-x-0",
    "peer-hover/item4:translate-x-[calc((100%_+_4px)_*_4)] peer-hover/item4:translate-y-0 lg:peer-hover/item4:translate-y-[calc((100%_+_4px)_*_4)] lg:peer-hover/item4:translate-x-0",
];