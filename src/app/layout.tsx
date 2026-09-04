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
  title: "CISA - City Innovation Students' Association",
  description:
    "The City Innovation Students' Association (CISA) is the undergraduate student governing body within UCalgary's School of Architecture, Planning and Landscape. Our mission is to represent academic student interests and foster an inclusive community.",
  keywords: [
    "CISA",
    "City Innovation",
    "Students Association",
    "UCalgary",
    "Architecture",
    "Planning",
    "Landscape",
    "Student Government",
  ],
  authors: [{ name: "CISA - City Innovation Students' Association" }],
  creator: "City Innovation Students' Association",
  publisher: "City Innovation Students' Association",
  openGraph: {
    type: "website",
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
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "CISA - City Innovation Students' Association",
    description:
      "The undergraduate student governing body of UCalgary's School of Architecture, Planning and Landscape.",
    images: ["/images/branding/CISA-Logo-Orange.svg"],
  },
  icons: {
    icon: "/favicon.png",
    apple: "/apple-touch-icon.png",
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
