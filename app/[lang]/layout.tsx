import "@/app/globals.css";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { notFound } from "next/navigation";
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
  title: "EcoBlueGulf",
  description: "Diesel Exhaust Fluid (DEF) for all Euro6 Compliant Vehicles.",
};

export default async function RootLayout({ children, params }: LayoutProps<'/[lang]'>) {

  const lang = (await params).lang as Locale;

  if (lang !== 'en' && lang !== 'ar') {
    return notFound();
  }

  const dict = await get_dictionary(lang);

  return (
    <html
      lang={lang}
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-screen flex flex-col">
        <Header dict={dict} />
        {children}
        <Footer dict={dict} />
      </body>
    </html>
  );
}

export async function generateStaticParams() {
  return [{ lang: 'en' }, { lang: 'ar' }]
}