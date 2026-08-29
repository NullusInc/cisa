"use client"

import { SponsorBox } from "@/components/sections/sponsors/SponsorBox";
import { discountBoxes } from "@/data/sponsors";
import { useEffect, useRef, useState } from "react";

export function SponsorCarousel() {
  const containerRef = useRef<HTMLDivElement>(null)
  const setRef = useRef<HTMLDivElement>(null)
  const [repeatCount, setRepeatCount] = useState(2)

  useEffect(() => {
    const container = containerRef.current
    const set = setRef.current
    if (!container || !set) {
      return;
    }

    const recalculate = () => {
      const discountBoxesWidth = set.offsetWidth
      if (discountBoxesWidth === 0) {
        return;
      }

      const setsNeeded = Math.ceil((container.offsetWidth * 2) / discountBoxesWidth)
      setRepeatCount(Math.max(2, setsNeeded))
    }

    recalculate()
    const observer = new ResizeObserver(recalculate)
    observer.observe(container)
    observer.observe(set)

    return () => observer.disconnect()
  }, [])

  return (
    <div ref={containerRef} className="marquee-container overflow-hidden py-8 border-y-10 border-primary">
      <div
        className="flex w-max animate-marquee"
        style={{ "--repeat-count": repeatCount } as React.CSSProperties}
      >
        {Array.from({ length: repeatCount }).map((_, setIndex) => (
          <div
            key={setIndex}
            ref={setIndex === 0 ? setRef : undefined}
            className="flex shrink-0"
          >
            {discountBoxes.map((discountBox, i) => (
              <SponsorBox key={`${setIndex}-${i}`} {...discountBox} />
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}
