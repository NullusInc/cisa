import Image from "next/image";

export default function Home() {
  return (
    <div className="relative flex flex-1 flex-col items-center justify-center overflow-hidden bg-background px-6 text-foreground">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-3 animate-marquee bg-[repeating-linear-gradient(-45deg,var(--accent)_0,var(--accent)_12px,transparent_12px,transparent_24px)] bg-size-[34px_100%] opacity-90"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 h-3 animate-marquee bg-[repeating-linear-gradient(-45deg,var(--accent)_0,var(--accent)_12px,transparent_12px,transparent_24px)] bg-size-[34px_100%] opacity-90"
      />

      <div className="relative flex flex-col items-center text-center">
        <div className="mb-8 flex h-32 w-32 items-center justify-center rounded-2xl border-2 border-primary/20 bg-primary/5">
          <Image
            src="/images/branding/CISA-Logo-Green.png"
            alt="CISA Logo"
            width={128}
            height={128}
            className="h-24 w-24 object-contain"
            priority
          />
        </div>

        <p className="mb-3 text-sm font-medium tracking-widest text-accent uppercase">
          Coming soon
        </p>
        <h1 className="text-4xl font-bold tracking-tight text-primary sm:text-5xl">
          Under Construction
        </h1>
        <p className="mt-4 max-w-md text-lg text-secondary">
          We&apos;re building something new. Check back soon for updates.
        </p>

        <div className="mt-10 flex items-center gap-2">
          <span className="h-2 w-2 animate-pulse rounded-full bg-accent" />
          <span className="h-2 w-2 animate-pulse rounded-full bg-accent [animation-delay:150ms]" />
          <span className="h-2 w-2 animate-pulse rounded-full bg-accent [animation-delay:300ms]" />
        </div>
      </div>
    </div>
  );
}