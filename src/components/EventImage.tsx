import Image from "next/image";

interface EventImagesProps {
    image: string[];
    alignment: "Vertical" | "Horizontal";
}

const MAX_IMAGES = 3;

const FRAME =
    "relative h-44 w-32 overflow-hidden border border-black bg-neutral-200 sm:h-52 sm:w-36";

type Placement = {
    wrapper: string;
    frame: string;
};

const VERTICAL_PLACEMENT: Record<number, Placement[]> = {
    1: [{ wrapper: "left-1/2 z-10 -translate-x-1/2", frame: "origin-bottom" }],
    2: [
        {
            wrapper: "left-1/2 z-20 -translate-x-1/2",
            frame: "origin-bottom rotate-[3deg]",
        },
        {
            wrapper: "left-1/2 z-10 -translate-x-1/2",
            frame: "origin-bottom -rotate-[8deg]",
        },
    ],
    3: [
        {
            wrapper: "left-1/2 z-30 -translate-x-1/2",
            frame: "origin-bottom rotate-[2deg]",
        },
        {
            wrapper: "left-1/2 z-10 -translate-x-1/2",
            frame: "origin-bottom -rotate-[9deg]",
        },
        {
            wrapper: "left-1/2 z-20 -translate-x-1/2",
            frame: "origin-bottom rotate-[9deg]",
        },
    ],
};

const HORIZONTAL_PLACEMENT: Record<number, Placement[]> = {
    1: [{ wrapper: "left-2 z-10", frame: "" }],
    2: [
        {
            wrapper: "left-2 z-20 translate-x-5 -translate-y-6",
            frame: "rotate-[6deg]",
        },
        { wrapper: "left-2 z-10", frame: "-rotate-[6deg]" },
    ],
    3: [
        {
            wrapper: "left-2 z-30 translate-x-9 -translate-y-11",
            frame: "rotate-[8deg]",
        },
        {
            wrapper: "left-2 z-20 translate-x-4 -translate-y-5",
            frame: "rotate-[1deg]",
        },
        { wrapper: "left-2 z-10", frame: "-rotate-[7deg]" },
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

    return (
        <div
            className={
                isVertical
                    ? "relative h-52 w-56 sm:h-60 sm:w-64"
                    : "relative h-60 w-56 sm:h-72 sm:w-64"
            }
        >
            {stack.map((src, index) => {
                const placement = placements[index];

                return (
                    <div
                        key={`${src}-${index}`}
                        className={`absolute bottom-0 ${placement.wrapper}`}
                    >
                        <div className={`${FRAME} ${placement.frame}`.trim()}>
                            <Image
                                src={src}
                                alt=""
                                fill
                                className="object-cover"
                                sizes="144px"
                            />
                        </div>
                    </div>
                );
            })}
        </div>
    );
};
