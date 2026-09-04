"use client";

import { useState } from "react";
import Image from "next/image";
import { StarBadge } from "@/components/sections/sponsors/StarBadge";
import { DiscountBoxType } from "@/data/sponsors";

export function SponsorBox(sponsor: DiscountBoxType) {
  const [showDiscount, setShowDiscount] = useState(false);

  return (
    <div
      className="group flex flex-col justify-center items-center px-7.75 w-62.5 shrink-0"
      onClick={() => setShowDiscount((prev) => !prev)}
    >
      <div className="relative">
        <Image
          src={sponsor.image}
          alt={sponsor.companyName}
          width={166}
          height={166}
          className="w-41.5 h-41.5 object-contain rounded-sm"
        />
        {sponsor.discount && <StarBadge label={sponsor.discount} />}
      </div>

      <div className="relative h-7.75 mt-5.25 w-52 text-center">
        <p
          className={`absolute inset-0 transition-opacity duration-300 text-[18px] font-semibold ${
            showDiscount ? "opacity-0" : "opacity-100"
          } group-hover:opacity-0`}
        >
          {sponsor.companyName}
        </p>
        <p
          className={`absolute inset-0 transition-opacity duration-300 text-[18px] font-semibold ${
            showDiscount ? "opacity-100" : "opacity-0"
          } group-hover:opacity-100`}
        >
          {sponsor.discountDescription}
        </p>
      </div>
    </div>
  );
}