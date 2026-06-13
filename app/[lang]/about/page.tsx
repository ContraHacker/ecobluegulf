import { get_dictionary, has_locale } from "@/app/dictionaries";
import { Metadata } from "next";
import { notFound } from "next/navigation";

export const metadata: Metadata = {
  title: 'About | EcoBlueGulf'
};

export default async function About({ params }: PageProps<'/[lang]'>) {

  const { lang } = await params;
  if (!has_locale(lang)) notFound();

  const dict = await get_dictionary(lang);

  return (
    <div className="bg-white" id='about-us'>
      <div className="py-12 lg:py-24 px-4 sm:px-12 md:px-18 max-w-6xl mx-auto font-sans">

        <h3 className="text-4xl lg:text-5xl mb-6 md:mb-8 font-bold md:border-t-8 md:pt-8 border-gray-200 max-w-max mx-auto md:mx-0">{dict.landing_page.about_us.heading}</h3>

        <p className="mt-8 text-gray-700 text-justify max-w-2xl md:text-lg">
          {dict.landing_page.about_us.text}
        </p>

        <p className="mt-8 md:text-lg font-bold">
          {dict.brand_name}
        </p>

        <p className="text-gray-700 text-justify max-w-2xl md:text-lg">
          {dict.address}
        </p>

      </div>
    </div>
  )
}