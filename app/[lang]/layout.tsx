import "@/app/globals.css";
import Header from "@/components/Header";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { get_dictionary, Locale } from "../dictionaries";

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

  const lang = (await params).lang as Locale;
  const dict = await get_dictionary(lang);

  return (
    <html
      lang={lang}
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body>
        <Header dict={dict} />
        {children}
        </body>
    </html>
  );
}

export async function generateStaticParams() {
  return [{ lang: 'en' }, { lang: 'ar' }]
}
