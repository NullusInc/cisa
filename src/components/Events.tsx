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
    const left: EventItem[] = [];
    const right: EventItem[] = [];

    items.forEach((item, index) => {
        const goesLeft = index === 0 || (index >= 3 && index % 2 === 1);
        if (goesLeft) {
            left.push(item);
        } else {
            right.push(item);
        }
    });

    return { left, right };
}

export const Events = () => {
    const { left, right } = splitEventColumns(events);

    return (
        <section className="flex w-full justify-center px-6 py-16 sm:px-8">
            <div className="events-board relative grid grid-cols-1 items-start gap-x-12 gap-y-8 sm:grid-cols-[auto_auto]">
                <h1 className="z-10 font-sans text-4xl font-bold leading-none tracking-tight text-primary sm:absolute sm:left-0 sm:top-0 sm:text-5xl">
                    Events
                </h1>
                <div className="events-board__col events-board__left">
                    {left.map((event, index) => (
                        <EventCard key={`left-${index}`} {...event} />
                    ))}
                </div>
                <div className="events-board__col">
                    {right.map((event, index) => (
                        <EventCard key={`right-${index}`} {...event} />
                    ))}
                </div>
            </div>
        </section>
    );
};
