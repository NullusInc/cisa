import { EventImage } from "./EventImage";

interface EventCardProps {
    title: string;
    image: string[];
    date: Date;
    alignment: "Vertical" | "Horizontal";
}

export const EventCard = ({ image, alignment }: EventCardProps) => {
    return (
        <div>
            <EventImage image={image} alignment={alignment} />
        </div>
    );
};
