import { EventCard } from "./EventCard";

const previewImages = [
    "/images/events/ss-1.png",
    "/images/events/ss-2.png",
    "/images/events/ss-1.png",
];

export const Events = () => {
    return (
        <section className="flex h-full w-full flex-col items-center justify-center gap-16 overflow-auto p-8 sm:flex-row sm:items-end sm:gap-24">
            <EventCard
                title="Vertical"
                image={previewImages}
                date={new Date()}
                alignment="Vertical"
            />
            <EventCard
                title="Horizontal"
                image={previewImages}
                date={new Date()}
                alignment="Horizontal"
            />
        </section>
    );
};
