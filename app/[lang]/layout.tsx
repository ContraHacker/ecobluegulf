import "@/app/globals.css";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Eco Blue Gulf",
  description: "Diesel Exhaust Fluid (DEF) for all Euro6 Compliant Vehicles.",
};

export default async function RootLayout({ children, params }: LayoutProps<'/[lang]'>) {
  return (
    <html
      lang={(await params).lang}
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body>{children}</body>
    </html>
  );
}

export async function generateStaticParams() {
  return [{ lang: 'en' }, { lang: 'ar' }]
}
