import { EventImage } from "./EventImage";

interface EventCardProps {
    title: string;
    image: string[];
    date: Date;
    alignment: "Vertical" | "Horizontal";
}

const dateFormatter = new Intl.DateTimeFormat("en-US", {
    month: "2-digit",
    day: "2-digit",
    year: "numeric",
});

export const EventCard = ({ title, image, date, alignment }: EventCardProps) => {
    return (
        <article className="event-grid relative shrink-0 overflow-hidden">
            <h2 className="absolute left-0 top-[calc(var(--event-cell)/2)] z-10 flex h-[calc(var(--event-cell)*0.42)] w-[calc(var(--event-cell)*2.15)] -translate-y-1/2 items-center bg-primary px-3 font-sans text-sm font-bold tracking-tight text-background sm:text-base">
                {title}
            </h2>
            <time
                dateTime={date.toISOString()}
                className="col-start-6 row-start-5 z-10 flex items-end justify-end overflow-hidden p-1.5 font-sans text-[0.65rem] leading-none tabular-nums whitespace-nowrap text-primary sm:p-2 sm:text-xs"
            >
                {dateFormatter.format(date)}
            </time>
            <div className="col-span-6 col-start-1 row-span-5 row-start-1 flex items-center justify-center">
                <EventImage image={image} alignment={alignment} />
            </div>
        </article>
    );
};
