import Image from "next/image";

export function BackgroundImage() {
    return (
        <Image
            className="-z-10 absolute inset-0 w-full h-full"
            alt="Abstract waves pattens background"
            src={"/images/bg-2.png"}
            width={400}
            height={600}
        />
    );
}
