import Image from "next/image";

export function BackgroundImage() {
    return (
        <Image
            priority
            className="fixed -z-20 min-h-screen inset-0 object-cover opacity-40 w-full"
            alt="Background Image"
            width={1920}
            height={1080}
            src={"/images/bg.webp"}
        />
    );
}
