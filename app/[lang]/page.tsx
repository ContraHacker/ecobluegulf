import { AdjustmentsHorizontalIcon, CloudArrowDownIcon, GlobeEuropeAfricaIcon } from "@heroicons/react/20/solid";
import Image from "next/image";
import { notFound } from "next/navigation";
import { get_dictionary, has_locale } from "../dictionaries";

export default async function Home({ params }: PageProps<'/[lang]'>) {

  const { lang } = await params;
  if (!has_locale(lang)) notFound();

  const dict = await get_dictionary(lang)

  return (
    <>
      <main className="px-4 sm:px-12 md:px-18 max-w-6xl mx-auto">
        <div className="py-12">

          <h1 className="text-6xl sm:text-7xl md:text-8xl font-bold text-primary text-center text-shadow-[2px_2px_yellow,2px_0px_6px_rgba(0,0,0,0.5)] -skew-3 -mb-10 sm:-mb-16 lg:-mb-28">
            {dict.brand_name}
          </h1>

          <div className="relative w-full md:w-5/6 mx-auto aspect-video -z-10">
            <Image
              src='/hero-image.png'
              alt='Decorative Image'
              fill
            />
          </div>

          <p className="text-center text-2xl md:text-3xl mt-8 font-bold font-sans">
            {dict.landing_page.hero.heading}
          </p>

          <p className="text-center max-w-2xl text-lg mx-auto mt-4 text-gray-700">
            {dict.landing_page.hero.description}
          </p>

        </div>
      </main>

      <div className="bg-primary/10 py-8 md:py-16 space-y-8 md:space-y-16 font-sans">

        <div className="flex flex-col lg:flex-row items-center justify-between gap-4 text-lg px-4 sm:px-12 md:px-18 max-w-6xl mx-auto text-primary-600">
          <div className="hover:-translate-y-1 transition-transform hover:cursor-default">
            <AdjustmentsHorizontalIcon className="size-8 md:size-12 inline mr-2" />
            <span className="md:text-xl">{dict.landing_page.features.icon_text[0]}</span>
          </div>
          <div className="hover:-translate-y-1 transition-transform hover:cursor-default">
            <GlobeEuropeAfricaIcon className="size-8 md:size-12 inline mr-2" />
            <span className="md:text-xl">{dict.landing_page.features.icon_text[1]}</span>
          </div>
          <div className="hover:-translate-y-1 transition-transform hover:cursor-default">
            <CloudArrowDownIcon className="size-8 md:size-12 inline mr-2" />
            <span className="md:text-xl">{dict.landing_page.features.icon_text[2]}</span>
          </div>
        </div>

        <div className="px-4 sm:px-12 md:px-18 max-w-6xl mx-auto">
          <h3 className="font-bold text-2xl lg:text-3xl text-primary-600 text-center">{dict.landing_page.features.heading}</h3>
          <p className="text-gray-800 font-bold text-lg text-center mt-1 mb-4">{dict.landing_page.features.sub_heading}</p>
          <ul className="text-gray-600 mt-1 text-center text-sm">
            <li>{dict.landing_page.features.points[0]}</li>
            <li>{dict.landing_page.features.points[1]}</li>
          </ul>
        </div>

      </div>
    </>
  );
}
