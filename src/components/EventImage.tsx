import Image from "next/image";

interface EventImagesProps {
    image: string[];
    alignment: "Vertical" | "Horizontal";
}

const MAX_IMAGES = 3;

const VERTICAL_FRAME =
    "event-photo-frame--vertical relative overflow-hidden border border-black bg-neutral-200";

const HORIZONTAL_FRAME =
    "event-photo-frame--horizontal relative overflow-hidden border border-black bg-neutral-200";

type Placement = {
    wrapper: string;
    frame: string;
};

const VERTICAL_PLACEMENT: Record<number, Placement[]> = {
    1: [{ wrapper: "left-1/2 z-10 -translate-x-1/2", frame: "origin-bottom" }],
    2: [
        {
            wrapper: "left-1/2 z-20 -translate-x-1/2",
            frame: "origin-bottom -rotate-[2deg]",
        },
        {
            wrapper: "left-1/2 z-10 -translate-x-[calc(50%+0.65rem)]",
            frame: "origin-bottom -rotate-[6deg]",
        },
    ],
    3: [
        {
            wrapper: "left-1/2 z-30 -translate-x-1/2",
            frame: "origin-bottom -rotate-[1.5deg]",
        },
        {
            wrapper: "left-1/2 z-10 -translate-x-[calc(50%+0.85rem)]",
            frame: "origin-bottom -rotate-[6deg]",
        },
        {
            wrapper: "left-1/2 z-20 -translate-x-[calc(50%-0.85rem)]",
            frame: "origin-bottom rotate-[5deg]",
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
            wrapper:
                "left-1/2 z-20 -translate-x-[46%] -translate-y-[calc(50%+0.25rem)]",
            frame: "rotate-[3deg]",
        },
        {
            wrapper:
                "left-1/2 z-10 -translate-x-[54%] -translate-y-[calc(50%-0.35rem)]",
            frame: "-rotate-[5deg]",
        },
    ],
    3: [
        {
            wrapper:
                "left-1/2 z-30 -translate-x-[45%] -translate-y-[calc(50%+0.4rem)]",
            frame: "rotate-[3deg]",
        },
        {
            wrapper: "left-1/2 z-20 -translate-x-1/2 -translate-y-1/2",
            frame: "-rotate-[1deg]",
        },
        {
            wrapper:
                "left-1/2 z-10 -translate-x-[55%] -translate-y-[calc(50%-0.45rem)]",
            frame: "-rotate-[5deg]",
        },
    ],
};

export const EventImage = ({ image, alignment }: EventImagesProps) => {
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
                    ? "event-photo-stack--vertical relative"
                    : "event-photo-stack--horizontal relative"
            }
        >
            {stack.map((src, index) => {
                const placement = placements[index];

                return (
                    <div
                        key={`${src}-${index}`}
                        className={`absolute ${
                            isVertical ? "bottom-0" : "top-1/2"
                        } ${placement.wrapper}`}
                    >
                        <div className={`${frame} ${placement.frame}`.trim()}>
                            <Image
                                src={src}
                                alt=""
                                fill
                                className="object-cover"
                                sizes={isVertical ? "256px" : "384px"}
                            />
                        </div>
                    </div>
                );
            })}
        </div>
    );
};
