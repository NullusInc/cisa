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
  title: "City Innovation Students' Association",
  description:
    "The City Innovation Students' Association (CISA) is the undergraduate government body with the mission to represent academic student interests and foster an inclusive community within the School of Architecture, Planning and Landscape.",
  keywords: ['CISA', 'City Innovation', 'Students Association', 'Ryerson University', 'Architecture', 'Planning', 'Landscape', 'Student Government'],
  authors: [{ name: 'City Innovation Students\' Association' }],
  creator: 'City Innovation Students\' Association',
  publisher: 'City Innovation Students\' Association',
  icons: {
    icon: [
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-64x64.png', sizes: '64x64', type: 'image/png' },
      { url: '/favicon.ico', sizes: 'any', type: 'image/x-icon' },
    ],
    shortcut: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: 'black-translucent',
    title: 'CISA',
  },
  manifest: '/manifest.json',
  openGraph: {
    title: "City Innovation Students' Association",
    description:
      "The City Innovation Students' Association (CISA) is the undergraduate government body with the mission to represent academic student interests and foster an inclusive community within the School of Architecture, Planning and Landscape.",
    type: 'website',
    url: 'https://cisaryerson.ca',
    siteName: "City Innovation Students' Association",
    locale: 'en_CA',
    countryName: 'Canada',
  },
  twitter: {
    card: 'summary_large_image',
    title: "City Innovation Students' Association",
    description:
      "The City Innovation Students' Association (CISA) is the undergraduate government body with the mission to represent academic student interests and foster an inclusive community within the School of Architecture, Planning and Landscape.",
    creator: '@cisaryerson',
  },
  robots: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
  alternates: {
    canonical: 'https://cisaryerson.ca',
  },
  formatDetection: {
    telephone: true,
    email: true,
    address: true,
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
  themeColor: '#fffcf4',
  colorScheme: 'light dark',
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
