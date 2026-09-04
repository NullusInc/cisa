type SectionTitleProps = {
  text: string;
  className?: string;
};

export default function SectionTitle({ text, className = '' }: SectionTitleProps) {
  return (
    <h2
      className={`font-sans w-full text-left text-[clamp(1.4rem,0.56rem+4.32vw,4.8rem)] font-bold tracking-tight leading-[0.9] text-primary ${className}`}
    >
      {text}
    </h2>
  );
}
