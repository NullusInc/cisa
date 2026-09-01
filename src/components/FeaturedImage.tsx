import Image from "next/image";

interface FeaturedImagesProps {
    image: string[];
    alignment: "Vertical" | "Horizontal";
    title: string;
    imageAlts?: string[];
}

const MAX_IMAGES = 3;

const VERTICAL_FRAME =
    "featured-photo-frame--vertical relative overflow-hidden bg-neutral-200";

const HORIZONTAL_FRAME =
    "featured-photo-frame--horizontal relative overflow-hidden bg-neutral-200";

type Placement = {
    wrapper: string;
    frame: string;
};

const VERTICAL_PLACEMENT: Record<number, Placement[]> = {
    1: [{ wrapper: "left-1/2 z-10 -translate-x-1/2", frame: "origin-bottom" }],
    2: [
        {
            wrapper: "left-1/2 z-20 -translate-x-1/2",
            frame: "origin-bottom -rotate-[2deg] group-hover:-rotate-[3deg] group-focus-within:-rotate-[3deg]",
        },
        {
            wrapper:
                "left-1/2 z-10 -translate-x-[calc(50%+0.65rem)] group-hover:-translate-x-[calc(50%+5rem)] group-focus-within:-translate-x-[calc(50%+5rem)]",
            frame: "origin-bottom -rotate-[6deg] group-hover:-rotate-[9deg] group-focus-within:-rotate-[9deg]",
        },
    ],
    3: [
        {
            wrapper: "left-1/2 z-30 -translate-x-1/2",
            frame: "origin-bottom -rotate-[1.5deg] group-hover:-rotate-[2deg] group-focus-within:-rotate-[2deg]",
        },
        {
            wrapper:
                "left-1/2 z-10 -translate-x-[calc(50%+0.85rem)] group-hover:-translate-x-[calc(50%+5.1rem)] group-focus-within:-translate-x-[calc(50%+5.1rem)]",
            frame: "origin-bottom -rotate-[6deg] group-hover:-rotate-[9deg] group-focus-within:-rotate-[9deg]",
        },
        {
            wrapper:
                "left-1/2 z-20 -translate-x-[calc(50%-0.85rem)] group-hover:-translate-x-[calc(50%-5.1rem)] group-focus-within:-translate-x-[calc(50%-5.1rem)]",
            frame: "origin-bottom rotate-[5deg] group-hover:rotate-[8deg] group-focus-within:rotate-[8deg]",
        },
    ],
};

const HORIZONTAL_PLACEMENT: Record<number, Placement[]> = {
    1: [
        {
            wrapper: "left-1/2 z-10 -translate-x-1/2 -translate-y-1/2",
            frame: "",
        },
    ],
    2: [
        {
            wrapper: "left-1/2 z-20 -translate-x-1/2 -translate-y-1/2",
            frame: "rotate-[2deg]",
        },
        {
            wrapper:
                "left-1/2 z-10 -translate-x-[52%] -translate-y-[calc(50%-0.85rem)] group-hover:-translate-y-[calc(50%-3.2rem)] group-focus-within:-translate-y-[calc(50%-3.2rem)]",
            frame: "-rotate-[4deg] group-hover:-rotate-[8deg] group-focus-within:-rotate-[8deg]",
        },
    ],
    3: [
        {
            wrapper: "left-1/2 z-30 -translate-x-1/2 -translate-y-1/2",
            frame: "rotate-[2deg] group-hover:rotate-[3deg] group-focus-within:rotate-[3deg]",
        },
        {
            wrapper:
                "left-1/2 z-10 -translate-x-[54%] -translate-y-[calc(50%+1.3rem)] group-hover:-translate-x-[60%] group-hover:-translate-y-[calc(50%+3.8rem)] group-focus-within:-translate-x-[60%] group-focus-within:-translate-y-[calc(50%+3.8rem)]",
            frame: "-rotate-[5deg] group-hover:-rotate-[9deg] group-focus-within:-rotate-[9deg]",
        },
        {
            wrapper:
                "left-1/2 z-20 -translate-x-[46%] -translate-y-[calc(50%-1.3rem)] group-hover:-translate-x-[40%] group-hover:-translate-y-[calc(50%-3.8rem)] group-focus-within:-translate-x-[40%] group-focus-within:-translate-y-[calc(50%-3.8rem)]",
            frame: "rotate-[4deg] group-hover:rotate-[9deg] group-focus-within:rotate-[9deg]",
        },
    ],
};

export const FeaturedImage = ({
    image,
    alignment,
    title,
    imageAlts,
}: FeaturedImagesProps) => {
    const stack = image.slice(0, MAX_IMAGES);
    const count = stack.length;

    if (count === 0) {
        return null;
    }

    const isVertical = alignment === "Vertical";
    const placements = isVertical
        ? VERTICAL_PLACEMENT[count]
        : HORIZONTAL_PLACEMENT[count];
    const frame = isVertical ? VERTICAL_FRAME : HORIZONTAL_FRAME;

    return (
        <div
            className={
                isVertical
                    ? "featured-photo-stack--vertical relative"
                    : "featured-photo-stack--horizontal relative"
            }
        >
            {stack.map((src, index) => {
                const placement = placements[index];

                return (
                    <div
                        key={`${src}-${index}`}
                        className={`featured-photo-item absolute ${
                            isVertical ? "bottom-0" : "top-1/2"
                        } ${placement.wrapper}`}
                    >
                        <div className={`${frame} ${placement.frame}`.trim()}>
                            <Image
                                src={src}
                                alt={imageAlts?.[index] ?? `${title} photo ${index + 1}`}
                                fill
                                className="object-cover"
                                sizes={
                                    isVertical
                                        ? "(min-width: 1280px) 28vw, (min-width: 640px) 50vw, 200px"
                                        : "(min-width: 1280px) 32vw, (min-width: 640px) 55vw, 280px"
                                }
                            />
                        </div>
                    </div>
                );
            })}
        </div>
    );
};
