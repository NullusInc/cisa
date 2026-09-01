import { FeaturedCard } from "./FeaturedCard";

type FeaturedItem = {
    title: string;
    image: string[];
    imageAlts?: string[];
    date?: Date;
    alignment: "Vertical" | "Horizontal";
    href: string;
};

const featured: FeaturedItem[] = [
    {
        title: "Become a member!",
        image: [
            "/images/featured/membership-card-front.png",
            "/images/featured/membership-card-back.png",
            "/images/featured/membership-card-back.png",
        ],
        imageAlts: [
            "CISA membership card front",
            "CISA membership card back",
            "CISA membership card back",
        ],
        alignment: "Horizontal",
        href: "https://forms.gle/xTDkKiNxpHwnSZvDA",
    },
    {
        title: "Upcoming: Welcome Back Party",
        image: [
            "/images/featured/welcome-back-party.jpg",
            "/images/featured/welcome-back-party.jpg",
            "/images/featured/welcome-back-party.jpg",
        ],
        imageAlts: [
            "BDCI Welcome Back Party flyer",
            "BDCI Welcome Back Party flyer",
            "BDCI Welcome Back Party flyer",
        ],
        date: new Date(2026, 8, 5),
        alignment: "Vertical",
        href: "https://forms.gle/1ea3rxLs4vZTArH57",
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
        <section className="featured-section flex w-full justify-center px-6 py-16 sm:px-20 lg:px-24">
            <div className="featured-board relative mx-auto grid w-fit max-w-full grid-cols-1 items-start justify-items-center gap-x-12 gap-y-8 xl:grid-cols-[auto_auto] xl:justify-items-stretch">
                <h2 className="z-10 w-full font-sans text-5xl font-bold leading-none tracking-tight text-primary sm:text-6xl xl:absolute xl:left-0 xl:top-2 xl:w-auto xl:text-7xl">
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
