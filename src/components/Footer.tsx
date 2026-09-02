'use client';

import Image from 'next/image';

export function Footer() {
  return (
    <footer className="footer-grid relative">
      <div className="absolute left-1/20 top-1/5 bg-primary w-[28%] h-[70%] flex flex-col items-center justify-center text-white">
        <div className="flex flex-col gap-1 text-left *:text-[clamp(1.125rem,2.2vw,1.875rem)]">
          <div>@saplcisa</div>
          <div>hello@saplcisa.com</div>
          <div>801 7 Ave AW, room 713</div>
          <p className="mt-8 mb-1 font-light">Powered by</p>
          <a href="https://www.nullus.ca/" target="_blank" rel="noopener noreferrer">
            <Image
              src="/images/branding/NULLUS_FULL_LOGO.svg"
              alt="Nullus Inc. Logo"
              width={800}
              height={800}
              priority
              className="h-[clamp(2rem,4.5vw,3rem)] w-auto brightness-0 invert"
            />
          </a>
        </div>
      </div>
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[90%] aspect-square">
        <Image
          src="/images/branding/CISA-Logo-Orange.svg"
          alt="CISA Logo"
          fill
          className="object-contain"
        />
      </div>
      <button
        type="button"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        aria-label="Back to top"
        className="absolute right-1/22 bottom-[15.385%] flex aspect-square w-[5%] items-center justify-center bg-primary text-white"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-4/5 w-4/5"
        >
          <path d="M12 19V5" />
          <path d="M5 12l7-7 7 7" />
        </svg>
      </button>
    </footer>
  );
}