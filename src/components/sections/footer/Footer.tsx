'use client';

import Image from 'next/image';
import { UpArrowBox } from './UpArrowBox';

export function Footer() {
  return (
    <footer className="footer-grid relative mt-50">
      <div className="absolute left-1/20 top-1/6 bg-primary w-[28%] h-[70%] flex flex-col items-center justify-center text-background [container-type:inline-size]">
        <div className="flex flex-col gap-1 text-left font-medium [&>a]:flex [&>a]:items-center [&>a]:gap-[2cqw] [&>a]:text-[clamp(1.125rem,7.86cqw,1.875rem)]">
          <a href="https://www.instagram.com/saplcisa/" target="_blank" rel="noopener noreferrer">
            <Image
              src="/images/footer/instagram.png"
              alt=""
              width={64}
              height={64}
              className="h-[0.8em] w-[0.8em] shrink-0 object-contain"
            />
            @saplcisa
          </a>
          <a href="mailto:hello@saplcisa.com">
            <Image
              src="/images/footer/mail.png"
              alt=""
              width={64}
              height={64}
              className="h-[0.8em] w-[0.8em] shrink-0 object-contain"
            />
            hello@saplcisa.com
          </a>
          <a href="https://www.google.com/maps/place/801+7+Ave+SW,+Calgary,+AB+T2P+1A1/@51.0466052,-114.0820309,725m/data=!3m2!1e3!4b1!4m6!3m5!1s0x53716fe405c51f11:0xfcd8ee916ae95380!8m2!3d51.0466019!4d-114.079456!16s%2Fg%2F11x923xhmr?entry=ttu&g_ep=EgoyMDI2MDgzMS4wIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noopener noreferrer">
            <Image
              src="/images/footer/map-icon.png"
              alt=""
              width={64}
              height={64}
              className="h-[0.8em] w-[0.8em] shrink-0 object-contain"
            />
            801 7 Ave SW, room 713
          </a>
          <p className="mt-8 mb-1 font-normal text-[clamp(0.625rem,3cqw,0.875rem)]">Powered by</p>
          <a href="https://www.nullus.ca/" target="_blank" rel="noopener noreferrer">
            <Image
              src="/images/branding/NULLUS_FULL_LOGO.svg"
              alt="Nullus Inc. Logo"
              width={800}
              height={800}
              priority
              className="h-[clamp(2rem,16.07cqw,3rem)] w-auto brightness-0 invert"
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
        className="absolute right-1/19 bottom-1/8 flex aspect-square w-[5%] cursor-pointer items-center justify-center bg-primary text-background"
        >
        <UpArrowBox />
      </button>
    </footer>
  );
}