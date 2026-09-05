import type { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: 'Googlebot',
        allow: '/',
        crawlDelay: 0.5,
      },
      {
        userAgent: 'Bingbot',
        allow: '/',
        crawlDelay: 1,
      },
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          '/*.pdf',
          '/*.zip',
          '/*.exe',
          '/*.tar',
          '/*.gz',
          '/admin',
          '/private',
          '/.env',
          '/.git',
        ],
        crawlDelay: 2,
      },
    ],
    sitemap: 'https://saplcisa.ca/sitemap.xml',
    host: 'https://saplcisa.ca',
  };
}
