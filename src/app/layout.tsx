import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Footer } from '@/components/sections/footer/Footer';

const inter = Inter({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-inter',
});

export const metadata: Metadata = {
  metadataBase: new URL("https://cisa.ucalgary.ca"),
  title: "CISA - City Innovation Students' Association",
  description:
    "The City Innovation Students' Association (CISA) is the undergraduate student governing body within UCalgary's School of Architecture, Planning and Landscape. Our mission is to represent academic student interests and foster an inclusive community.",
  keywords: [
    "CISA",
    "City Innovation",
    "Students Association",
    "University of Calgary",
    "UCalgary",
    "School of Architecture",
    "Planning and Landscape",
    "Student Government",
    "Campus Life",
    "Student Events",
    "Membership",
    "Discounts",
    "Student Organization",
    "Calgary",
    "Alumni",
  ],
  authors: [{ name: "CISA - City Innovation Students' Association" }],
  creator: "City Innovation Students' Association",
  publisher: "City Innovation Students' Association",
  category: "Education",
  applicationName: "CISA",
  referrer: "strict-origin-when-cross-origin",
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
    },
  },
  openGraph: {
    type: "website",
    siteName: "CISA",
    locale: "en_CA",
    url: "https://cisa.ucalgary.ca",
    title: "CISA - City Innovation Students' Association",
    description:
      "The undergraduate student governing body of UCalgary's School of Architecture, Planning and Landscape.",
    images: [
      {
        url: "/images/branding/CISA-Logo-Orange.svg",
        width: 1200,
        height: 630,
        alt: "CISA Logo",
        type: "image/svg+xml",
      },
      {
        url: "/favicon.png",
        width: 256,
        height: 256,
        alt: "CISA Logo",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@cisaucalgary",
    creator: "@cisaucalgary",
    title: "CISA - City Innovation Students' Association",
    description:
      "The undergraduate student governing body of UCalgary's School of Architecture, Planning and Landscape.",
    images: ["/favicon.png"],
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "32x32", type: "image/x-icon" },
      { url: "/favicon.png", sizes: "256x256", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
    shortcut: "/favicon.ico",
  },
  alternates: {
    canonical: "https://cisa.ucalgary.ca",
    languages: {
      "en-CA": "https://cisa.ucalgary.ca",
      "en": "https://cisa.ucalgary.ca",
    },
  },
  manifest: "/site.webmanifest",
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: "CISA",
  },
  formatDetection: {
    telephone: false,
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
  themeColor: '#fffcf4',
};

export default function RootLayout({ children }: LayoutProps<'/'>) {
  return (
    <html lang="en" className={`${inter.variable} antialiased`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://fonts.gstatic.com" />
        <meta
          httpEquiv="Content-Security-Policy"
          content="default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' 'wasm-unsafe-eval' https://cdn.jsdelivr.net https://cdnjs.cloudflare.com; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com; img-src 'self' data: https:; connect-src 'self' blob: https:;"
        />
        <meta
          name="Permissions-Policy"
          content="camera=(), microphone=(), geolocation=(), payment=(), usb=(), magnetometer=(), gyroscope=(), accelerometer=()"
        />
        <meta name="geo.position" content="51.0447; -114.1733" />
        <meta name="geo.placename" content="Calgary, Alberta, Canada" />
        <meta name="geo.region" content="CA-AB" />
        <script
          type="application/ld+json"
          suppressHydrationWarning
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "StudentOrganization",
              name: "City Innovation Students' Association",
              alternateName: "CISA",
              url: "https://cisa.ucalgary.ca",
              logo: "https://cisa.ucalgary.ca/images/branding/CISA-Logo-Orange.svg",
              description:
                "The undergraduate student governing body within UCalgary's School of Architecture, Planning and Landscape.",
              sameAs: ["https://instagram.com/saplcisa"],
              location: {
                "@type": "Place",
                name: "University of Calgary",
                address: {
                  "@type": "PostalAddress",
                  streetAddress: "801 7 Ave SW, Room 713",
                  addressLocality: "Calgary",
                  addressRegion: "AB",
                  postalCode: "T2P 1A1",
                  addressCountry: "CA",
                },
              },
              parentOrganization: {
                "@type": "EducationalOrganization",
                name: "University of Calgary",
                url: "https://ucalgary.ca",
              },
              contactPoint: {
                "@type": "ContactPoint",
                email: "hello@saplcisa.com",
                contactType: "Customer Service",
              },
            }),
          }}
        />
      </head>
      <body className="font-sans">
        <div className="page-frame h-screen w-full fixed inset-0 bg-primary">
          <div className="h-full w-full overflow-y-auto overflow-x-hidden rounded-3xl bg-background">
            {children}
            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
}
