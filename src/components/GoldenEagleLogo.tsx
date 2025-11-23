import Image from "next/image";
import { HTMLAttributes } from "react";
import clsx from "clsx";

type GoldenEagleLogoProps = HTMLAttributes<HTMLDivElement>;

export function GoldenEagleLogo({ className, ...props }: GoldenEagleLogoProps) {
    return (
        <div className={clsx("relative", className)} {...props}>
            <Image
                src="/labels/logo.jpg"
                alt="Golden Eagle"
                width={200}
                height={200}
                className="h-full w-full object-contain transition-transform duration-500 ease-in-out group-hover:scale-110"
                priority
            />
        </div>
    );
}
