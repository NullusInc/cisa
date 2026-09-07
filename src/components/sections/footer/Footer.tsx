'use client';

import Image from 'next/image';
import { useRef } from 'react';
import { FooterGridCellSizer } from './FooterGridCellSizer';
import { UpArrowBox } from './UpArrowBox';

export function Footer() {
  const footerRef = useRef<HTMLElement>(null);

  return (
    <footer
      ref={footerRef}
      className="footer-grid relative grid h-[100svh] grid-cols-1 grid-rows-[45fr_45fr_auto] items-stretch gap-y-0 px-6 pt-12 pb-6 @container sm:px-24 sm:py-24 sm:h-auto sm:grid-cols-3 sm:grid-rows-1 sm:items-end md:grid-cols-2 md:grid-rows-[auto_auto] md:items-end md:gap-y-8 md:pb-8 lg:grid-cols-3 lg:grid-rows-1 lg:items-end lg:gap-y-0 lg:pb-24"
    >
      <FooterGridCellSizer targetRef={footerRef} />
      <div className="bg-primary text-background order-2 flex w-full flex-col items-center justify-center py-6 px-8 sm:order-none sm:w-auto sm:py-12 sm:px-20 justify-self-start">
        <div className="flex flex-col gap-1 text-left font-medium text-[clamp(1.25rem,0.75rem+1.25vw,2rem)] [&>a]:flex [&>a]:items-center [&>a]:gap-2 [&>a>p]:whitespace-nowrap sm:text-[clamp(1rem,0.6rem+1vw,1.6rem)]">
          <a href="https://www.instagram.com/saplcisa/" target="_blank" rel="noopener noreferrer">
            <Image
              src="/images/footer/instagram-01.svg"
              alt="Instagram Logo"
              width={64}
              height={64}
              className="h-[0.8em] w-[0.8em] shrink-0 object-contain"
            />
            <p>@saplcisa</p>
          </a>
          <a href="mailto:hello@saplcisa.com">
            <Image
              src="/images/footer/email.svg"
              alt=""
              width={64}
              height={64}
              className="h-[0.8em] w-[0.8em] shrink-0 object-contain"
            />
            <p>hello@saplcisa.com</p>
          </a>
          <a
            href="https://www.google.com/maps/place/801+7+Ave+SW,+Calgary,+AB+T2P+1A1/@51.0466052,-114.0820309,725m/data=!3m2!1e3!4b1!4m6!3m5!1s0x53716fe405c51f11:0xfcd8ee916ae95380!8m2!3d51.0466019!4d-114.079456!16s%2Fg%2F11x923xhmr?entry=ttu&g_ep=EgoyMDI2MDgzMS4wIKXMDSoASAFQAw%3D%3D"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/images/footer/location-01.svg"
              alt=""
              width={64}
              height={64}
              className="h-[0.8em] w-[0.8em] shrink-0 object-contain"
            />
            <p>801 7 Ave SW, Room 713</p>
          </a>
          <p className="mt-8 mb-1 font-normal text-[clamp(0.625rem,0.5rem+0.5vw,0.875rem)]">Powered by</p>
          <a href="https://www.nullus.ca/" target="_blank" rel="noopener noreferrer">
            <Image
              src="/images/branding/NULLUS_FULL_LOGO.svg"
              alt="Nullus Inc. Logo"
              width={800}
              height={800}
              priority
              className="h-14 w-auto brightness-0 invert"
            />
          </a>
        </div>
      </div>

      <div className="order-1 flex w-full items-center justify-center justify-self-center sm:order-none sm:w-auto sm:items-end md:justify-self-end lg:justify-self-center">
        <Image
          src="/images/branding/CISA-Logo-Orange.svg"
          alt="CISA Logo"
          height={1200}
          width={1200}
          className="h-auto max-h-[38svh] w-full object-contain sm:h-96 sm:max-h-none sm:w-auto"
        />
      </div>

      <button
        type="button"
        onClick={() =>
          document.getElementById('scroll-container')?.scrollTo({ top: 0, behavior: 'smooth' })
        }
        aria-label="Back to top"
        className="order-3 mt-6 flex aspect-square w-[clamp(3rem,2rem+4vw,5.5rem)] shrink-0 cursor-pointer items-center justify-center justify-self-center self-center bg-primary text-background sm:order-none sm:mt-0 sm:w-[clamp(2rem,1.5rem+2vw,4rem)] sm:self-auto sm:justify-self-end md:col-span-2 md:mt-0 md:justify-self-center lg:col-span-1 lg:justify-self-end"
      >
        <UpArrowBox />
      </button>
    </footer>
  );
}