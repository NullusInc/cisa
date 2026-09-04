'use client';

import Image from 'next/image';
import { UpArrowBox } from './UpArrowBox';

export function Footer() {
  return (
    <footer className="footer-grid relative grid grid-cols-3 items-end p-24 @container">
      <div className="bg-primary text-background flex flex-col items-center justify-center py-8 px-8 sm:py-12 sm:px-20 justify-self-start">
        <div className="flex flex-col gap-1 text-left font-medium text-[clamp(1rem,0.6rem+1vw,1.6rem)] [&>a]:flex [&>a]:items-center [&>a]:gap-2">
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

      <div className="flex items-end justify-center justify-self-center">
        <Image
          src="/images/branding/CISA-Logo-Orange.svg"
          alt="CISA Logo"
          height={1200}
          width={1200}
          className="h-96 w-auto object-contain"
        />
      </div>

      <button
        type="button"
        onClick={() =>
          document.getElementById('scroll-container')?.scrollTo({ top: 0, behavior: 'smooth' })
        }
        aria-label="Back to top"
        className="flex aspect-square w-[clamp(2rem,1.5rem+2vw,4rem)] shrink-0 cursor-pointer items-center justify-center bg-primary text-background justify-self-end"
      >
        <UpArrowBox />
      </button>
    </footer>
  );
}