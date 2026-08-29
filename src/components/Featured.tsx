import { FeaturedCard } from "./FeaturedCard";

type FeaturedItem = {
    title: string;
    image: string[];
    date: Date;
    alignment: "Vertical" | "Horizontal";
};

const previewImages = [
    "/images/featured/placeholder.svg",
    "/images/featured/placeholder.svg",
    "/images/featured/placeholder.svg",
];

const previewDate = new Date(2026, 7, 24);

const featured: FeaturedItem[] = [
    {
        title: "Event Name",
        image: previewImages,
        date: previewDate,
        alignment: "Horizontal",
    },
    {
        title: "Event Name",
        image: previewImages,
        date: previewDate,
        alignment: "Vertical",
    },
    {
        title: "Event Name",
        image: previewImages,
        date: previewDate,
        alignment: "Vertical",
    },
];

function splitFeaturedColumns(items: FeaturedItem[]) {
    const left: { item: FeaturedItem; index: number }[] = [];
    const right: { item: FeaturedItem; index: number }[] = [];

    items.forEach((item, index) => {
        const goesLeft = index === 0 || (index >= 3 && index % 2 === 1);
        if (goesLeft) {
            left.push({ item, index });
        } else {
            right.push({ item, index });
        }
    });

    return { left, right };
}

export const Featured = () => {
    const { left, right } = splitFeaturedColumns(featured);

    return (
        <section className="featured-section flex w-full justify-center px-6 py-16 sm:px-8">
            <div className="featured-board relative grid grid-cols-1 items-start justify-items-center gap-x-12 gap-y-8 xl:grid-cols-[auto_auto] xl:justify-items-stretch">
                <h2 className="z-10 w-full font-sans text-4xl font-bold leading-none tracking-tight text-primary xl:absolute xl:left-0 xl:top-0 xl:w-auto xl:text-5xl">
                    Featured
                </h2>
                <div className="featured-board__col featured-board__left">
                    {left.map(({ item, index }, columnIndex) => (
                        <FeaturedCard
                            key={`featured-${index}`}
                            {...item}
                            style={{ order: 2 * (columnIndex + 1) }}
                        />
                    ))}
                </div>
                <div className="featured-board__col">
                    {right.map(({ item, index }, columnIndex) => (
                        <FeaturedCard
                            key={`featured-${index}`}
                            {...item}
                            style={{ order: 2 * columnIndex + 1 }}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};
