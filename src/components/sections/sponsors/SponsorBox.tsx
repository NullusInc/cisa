import Image from "next/image";
import { StarBadge } from "@/components/sections/sponsors/StarBadge";

export type DiscountBoxType = {
  companyName: string;
  discountDescription: string;
  discount?: string;
  image: string;
}

export function SponsorBox(props: DiscountBoxType) {
  return (
    <div className="group flex flex-col justify-center items-center mb-24 px-6 w-48 shrink-0">
      <div className="relative">
        <Image
          src={props.image}
          alt={props.companyName}
          width={100}
          height={100}
          className="w-32 h-32 object-contain rounded-sm"
        />
        {props.discount && <StarBadge label={props.discount} />}
      </div>

      <div className="relative h-6 mt-4 w-40 text-center">
        <p className="absolute inset-0 transition-opacity duration-300 opacity-100 group-hover:opacity-0 text-sm font-semibold">
          {props.companyName}
        </p>
        <p className="absolute inset-0 transition-opacity duration-300 opacity-0 group-hover:opacity-100 text-sm font-semibold">
          {props.discountDescription}
        </p>
      </div>
    </div>
  )
}