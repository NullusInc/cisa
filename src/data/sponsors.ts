export type DiscountBoxType = {
  companyName: string;
  discountDescription: string;
  discount?: string;
  image: string;
}

export const discountBoxes: DiscountBoxType[] = [
  {
    companyName: "88 Brewing Company",
    discountDescription: "10% taproom drinks and food",
    discount: "10%",
    image: "/images/sponsors/88-Brewing-Company.jpg",
  },
  {
    companyName: "Actually Pretty Good Pizza",
    discountDescription: "10% off Bankview dine-in",
    discount: "10%",
    image: "/images/sponsors/Actually-Pretty-Good-Pizza.webp",
  },
  {
    companyName: "Civic Tavern",
    discountDescription: "10% off",
    discount: "10%",
    image: "/images/sponsors/Civic-Tavern.png",
  },
  {
    companyName: "Cold Garden",
    discountDescription: "15% off on-premise drinks",
    discount: "15%",
    image: "/images/sponsors/Cold-Garden.png",
  },
  {
    companyName: "Social Beer Haus",
    discountDescription: "10% off",
    discount: "10%",
    image: "/images/sponsors/Social-Beer-Haus.png",
  },
  {
    companyName: "Commonwealth Bar & Stage",
    discountDescription: "No line, no cover until 11:30PM",
    image: "/images/sponsors/Commonwealth-Bar-&-Stage.png",
  },
  {
    companyName: "Pizza Please!",
    discountDescription: "15% off",
    discount: "15%",
    image: "/images/sponsors/Pizza-Please.png",
  },
  {
    companyName: "Italiano Please!",
    discountDescription: "15% off",
    discount: "15%",
    image: "/images/sponsors/Italiano-Please.png",
  },
]
