import { ChromaButton } from "@/components/buttons/ChromaButton";
import { ExternalLinkIcon, GithubIcon } from "lucide-react";
import Link from "next/link";

interface ProjectCardLinksProps {
    githubUrl: string;
    websiteUrl?: string;
}

export function ProjectCardLinks({
    githubUrl,
    websiteUrl,
}: ProjectCardLinksProps) {
    return (
        <div className="space-x-5 invisible group-hover:visible transition-all duration-200 z-10 absolute inset-0 w-full h-full group-hover:bg-background/20 group-hover:backdrop-blur-sm rounded-lg flex justify-center items-center">
            <ChromaButton
                aria-label="Repository Link"
                asChild
                className="text-background invisible group-hover:visible h-10 w-16"
            >
                <Link href={githubUrl} target="_blank">
                    <GithubIcon />
                </Link>
            </ChromaButton>

            {websiteUrl && (
                <ChromaButton
                    aria-label="Website Link"
                    asChild
                    className="text-background invisible group-hover:visible h-10 w-16"
                >
                    <Link href={websiteUrl} target="_blank">
                        <ExternalLinkIcon />
                    </Link>
                </ChromaButton>
            )}
        </div>
    );
}
