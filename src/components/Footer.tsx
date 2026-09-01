'use client';

import Image from 'next/image';

export function Footer() {
  return (
    <footer className="footer-grid relative">
      <div className="absolute left-1/20 top-1/5 bg-primary w-[28%] h-[35%] flex items-center justify-center text-white">
        <div className="text-left font-bold *:text-lg *:sm:text-xl *:md:text-2xl *:lg:text-3xl">
          <div>@saplcisa</div>
          <div>hello@saplcisa.com</div>
          <div>801 7 Ave SW, room 713</div>
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
      <div className="absolute right-1/20 top-1/5 bg-primary w-[28%] h-[35%] flex flex-col items-center justify-center text-white">
        <p className="mt-8 mb-1 font-light">Powered by</p>
        <a
          href="https://www.nullus.ca/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src="/images/branding/NULLUS_FULL_LOGO.svg"
            alt="Nullus Inc. Logo"
            width={800}
            height={800}
            priority
            className="h-12 w-auto mx-2 brightness-0 invert"
          />
        </a>
      </div>
    </footer>
  );
}