import type { Metadata } from "next";
import localFont from 'next/font/local'
import "./globals.css";

const inter = localFont({
  src: [
    {
      path: '../fonts/Inter-Variable.ttf',
      style: 'normal',
    },
    {
      path: '../fonts/Inter-Italic-Variable.ttf',
      style: 'italic',
    },
  ],
  variable: '--font-inter',
  weight: '100 900',
})

export const metadata: Metadata = {
  title: "City Innovation Students' Association",
  description: "The City Innovation Students' Association (CISA) is the undergraduate government body with the mission to represent academic student interests and foster an inclusive community within the School of Architecture, Planning and Landscape.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col font-sans">{children}</body>
    </html>
  );
}
