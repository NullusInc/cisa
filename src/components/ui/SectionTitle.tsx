type SectionTitleProps = {
  text: string
}

export default function SectionTitle({ text }: SectionTitleProps) {
  return (
    <p 
      className="font-sans w-full text-left text-[clamp(1.5rem,0.6rem+3.2vw,3.75rem)] font-bold tracking-tight leading-[0.9] text-primary m"
      >
        {text}
      </p>
  );
}
