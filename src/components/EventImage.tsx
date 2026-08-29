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
            frame: "origin-bottom -rotate-[2deg] group-hover:-rotate-[3deg]",
        },
        {
            wrapper:
                "left-1/2 z-10 -translate-x-[calc(50%+0.65rem)] group-hover:-translate-x-[calc(50%+5rem)]",
            frame: "origin-bottom -rotate-[6deg] group-hover:-rotate-[9deg]",
        },
    ],
    3: [
        {
            wrapper: "left-1/2 z-30 -translate-x-1/2",
            frame: "origin-bottom -rotate-[1.5deg] group-hover:-rotate-[2deg]",
        },
        {
            wrapper:
                "left-1/2 z-10 -translate-x-[calc(50%+0.85rem)] group-hover:-translate-x-[calc(50%+5.1rem)]",
            frame: "origin-bottom -rotate-[6deg] group-hover:-rotate-[9deg]",
        },
        {
            wrapper:
                "left-1/2 z-20 -translate-x-[calc(50%-0.85rem)] group-hover:-translate-x-[calc(50%-5.1rem)]",
            frame: "origin-bottom rotate-[5deg] group-hover:rotate-[8deg]",
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
                "left-1/2 z-10 -translate-x-[52%] -translate-y-[calc(50%-0.85rem)] group-hover:-translate-y-[calc(50%-1.7rem)]",
            frame: "-rotate-[4deg] group-hover:-rotate-[8deg]",
        },
    ],
    3: [
        {
            wrapper: "left-1/2 z-30 -translate-x-1/2 -translate-y-1/2",
            frame: "rotate-[2deg] group-hover:rotate-[3deg]",
        },
        {
            wrapper:
                "left-1/2 z-10 -translate-x-[54%] -translate-y-[calc(50%+1.3rem)] group-hover:-translate-x-[56%] group-hover:-translate-y-[calc(50%+2.2rem)]",
            frame: "-rotate-[5deg] group-hover:-rotate-[9deg]",
        },
        {
            wrapper:
                "left-1/2 z-20 -translate-x-[46%] -translate-y-[calc(50%-1.3rem)] group-hover:-translate-x-[44%] group-hover:-translate-y-[calc(50%-2.2rem)]",
            frame: "rotate-[4deg] group-hover:rotate-[9deg]",
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
                        className={`event-photo-item absolute ${
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
