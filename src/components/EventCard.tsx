import type { CSSProperties } from "react";
import { EventImage } from "./EventImage";

interface EventCardProps {
    title: string;
    image: string[];
    date: Date;
    alignment: "Vertical" | "Horizontal";
    style?: CSSProperties;
}

const dateFormatter = new Intl.DateTimeFormat("en-US", {
    month: "2-digit",
    day: "2-digit",
    year: "numeric",
});

function toDateValue(date: Date) {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
}

export const EventCard = ({
    title,
    image,
    date,
    alignment,
    style,
}: EventCardProps) => {
    return (
        <article
            tabIndex={0}
            className="event-grid group relative overflow-hidden hover:z-20 hover:overflow-visible focus-within:z-20 focus-within:overflow-visible focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
            style={style}
        >
            <h3
                title={title}
                className="absolute left-0 top-[calc(var(--event-row)*0.15)] z-10 flex h-[calc(var(--event-row)*0.32)] w-[calc(var(--event-col)*2.15)] min-w-0 items-center bg-primary px-[0.35em] font-sans text-[length:calc(var(--event-col)*0.16)] font-bold tracking-tight text-background"
            >
                <span className="min-w-0 truncate">{title}</span>
            </h3>
            <time
                dateTime={toDateValue(date)}
                className="col-start-4 row-start-3 z-10 flex items-end justify-center overflow-hidden px-0.5 pb-[0.2em] font-sans text-[length:calc(var(--event-col)*0.12)] leading-none tabular-nums tracking-tight whitespace-nowrap text-primary"
            >
                {dateFormatter.format(date)}
            </time>
            <div className="col-span-4 col-start-1 row-span-3 row-start-1 flex items-center justify-center">
                <EventImage
                    image={image}
                    alignment={alignment}
                    title={title}
                />
            </div>
        </article>
    );
};
