import { EventCard } from "./EventCard";

type EventItem = {
    title: string;
    image: string[];
    date: Date;
    alignment: "Vertical" | "Horizontal";
};

const previewImages = [
    "/images/events/placeholder.svg",
    "/images/events/placeholder.svg",
    "/images/events/placeholder.svg",
];

const previewDate = new Date(2026, 7, 24);

const events: EventItem[] = [
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

function splitEventColumns(items: EventItem[]) {
    const left: { item: EventItem; index: number }[] = [];
    const right: { item: EventItem; index: number }[] = [];

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

export const Events = () => {
    const { left, right } = splitEventColumns(events);

    return (
        <section className="events-section flex w-full justify-center px-6 py-16 sm:px-8">
            <div className="events-board relative grid grid-cols-1 items-start justify-items-center gap-x-12 gap-y-8 xl:grid-cols-[auto_auto] xl:justify-items-stretch">
                <h2 className="z-10 w-full font-sans text-4xl font-bold leading-none tracking-tight text-primary xl:absolute xl:left-0 xl:top-0 xl:w-auto xl:text-5xl">
                    Events
                </h2>
                <div className="events-board__col events-board__left">
                    {left.map(({ item, index }, columnIndex) => (
                        <EventCard
                            key={`event-${index}`}
                            {...item}
                            style={{ order: 2 * (columnIndex + 1) }}
                        />
                    ))}
                </div>
                <div className="events-board__col">
                    {right.map(({ item, index }, columnIndex) => (
                        <EventCard
                            key={`event-${index}`}
                            {...item}
                            style={{ order: 2 * columnIndex + 1 }}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};
