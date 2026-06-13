import { AdjustmentsHorizontalIcon, CheckIcon, CloudArrowDownIcon, GlobeEuropeAfricaIcon } from "@heroicons/react/20/solid";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { get_dictionary, has_locale } from "../dictionaries";

export default async function Home({ params }: PageProps<'/[lang]'>) {

  const { lang } = await params;
  if (!has_locale(lang)) notFound();

  const dict = await get_dictionary(lang);

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

      <div className="bg-white" id='product'>
        <div className="py-12 lg:py-24 px-4 sm:px-12 md:px-18 max-w-6xl mx-auto font-sans lg:grid grid-cols-[max-content_auto] gap-x-32">

          <div>

            <h3 className="text-4xl lg:text-5xl mb-6 md:mb-8 font-bold md:border-t-8 md:pt-8 border-gray-200 max-w-max mx-auto md:mx-0">{dict.landing_page.product.heading}</h3>

            <p className="text-gray-700 text-justify max-w-2xl md:text-lg">
              {dict.landing_page.product.subheading}
            </p>

            <p className="mt-4 text-gray-700 text-justify max-w-2xl md:text-lg">
              {dict.landing_page.product.desc}
            </p>

            <div className="flex justify-start gap-x-4 mt-8 max-w-max mx-auto md:mx-0">
              <Link
                href={`/${lang}#know-more`}
                className="w-56 block bg-gray-50 py-3 text-center rounded border border-black/25 shadow-sm hover:shadow-md text"
              >
                {dict.landing_page.product.ctas[0]}
              </Link>

              <Link
                href='/contact'
                className="w-56 block bg-primary-50 py-3 text-center rounded border border-black/25 shadow-sm hover:shadow-md text"
              >
                {dict.landing_page.product.ctas[1]}
              </Link>
            </div>

          </div>

          <div className="relative hidden lg:block">
            <Image
              src='/logo.svg'
              alt='Pristine Envo Logo'
              fill
            />
          </div>

        </div>
      </div>

      <div className="bg-secondary/50">
        <div className="py-12 lg:py-24 px-4 sm:px-12 md:px-18 max-w-6xl mx-auto font-sans">

          <h3 className="text-4xl lg:text-5xl mb-6 md:mb-8 font-bold md:border-t-8 md:pt-8 border-secondary max-w-max mx-auto md:mx-0">{dict.landing_page.applications.heading}</h3>

          <ul className="text-gray-800 text-lg lg:text-xl space-y-2 max-w-max mx-auto md:mx-0">
            <li className="flex items-center gap-x-2">
              <CheckIcon className="size-5 lg:size-8 text-green-600 shrink-0" />
              <span>{dict.landing_page.applications.list[0]}</span>
            </li>
            <li className="flex items-center gap-x-2">
              <CheckIcon className="size-5 lg:size-8 text-green-600 shrink-0" />
              <span>{dict.landing_page.applications.list[1]}</span>
            </li>
          </ul>

          <p className="mt-8 text-gray-700 text-justify max-w-2xl md:text-lg">
            {dict.landing_page.applications.sub_heading}
          </p>

          <div className="flex justify-start gap-x-4 mt-8 max-w-max mx-auto md:mx-0">
            <Link
              href={`/${lang}#know-more`}
              className="w-56 block bg-gray-50 py-3 text-center rounded border border-black/25 shadow-sm hover:shadow-md text"
            >
              {dict.landing_page.applications.ctas[0]}
            </Link>

            <Link
              href={`/${lang}#offerings`}
              className="w-56 block bg-secondary py-3 text-center rounded border border-black/25 shadow-sm hover:shadow-md text"
            >
              {dict.landing_page.applications.ctas[1]}
            </Link>
          </div>

        </div>
      </div>

      <div className="bg-white" id='know-more'>
        <div className="py-12 lg:py-24 px-4 sm:px-12 md:px-18 max-w-6xl mx-auto font-sans">

          <h3 className="text-4xl lg:text-5xl mb-6 md:mb-8 font-bold md:border-t-8 md:pt-8 border-gray-200 max-w-max mx-auto md:mx-0">{dict.landing_page.benifits.heading}</h3>

          <p className="text-gray-700 text-justify max-w-2xl md:text-lg">
            {dict.landing_page.benifits.sub_heading}
          </p>

          <ul className="text-gray-800 text-lg lg:text-xl space-y-2 max-w-max mx-auto md:mx-0 mt-6 md:mt-8">
            <li className="flex items-center gap-x-2">
              <CheckIcon className="size-5 lg:size-8 text-green-600 shrink-0" />
              <span>{dict.landing_page.benifits.list[0]}</span>
            </li>
            <li className="flex items-center gap-x-2">
              <CheckIcon className="size-5 lg:size-8 text-green-600 shrink-0" />
              <span>{dict.landing_page.benifits.list[1]}</span>
            </li>
            <li className="flex items-center gap-x-2">
              <CheckIcon className="size-5 lg:size-8 text-green-600 shrink-0" />
              <span>{dict.landing_page.benifits.list[2]}</span>
            </li>
            <li className="flex items-center gap-x-2">
              <CheckIcon className="size-5 lg:size-8 text-green-600 shrink-0" />
              <span>{dict.landing_page.benifits.list[3]}</span>
            </li>
          </ul>

          <p className="mt-8 text-gray-700 text-justify max-w-2xl md:text-lg">
            <b>{dict.landing_page.benifits.desc.heading}:</b>{dict.landing_page.benifits.desc.text}
          </p>

        </div>
      </div>

      <div className="bg-green-50" id='offerings'>
        <div className="py-12 lg:py-24 px-4 sm:px-12 md:px-18 max-w-6xl mx-auto font-sans">

          <h3 className="text-4xl lg:text-5xl mb-6 md:mb-8 font-bold md:border-t-8 md:pt-8 border-green-200 max-w-max mx-auto md:mx-0">{dict.landing_page.offering.heading}</h3>

          <ul className="text-gray-800 text-lg lg:text-xl space-y-2 max-w-max mx-auto md:mx-0">
            <li className="flex items-center gap-x-2">
              <CheckIcon className="size-5 lg:size-8 text-green-600 shrink-0" />
              <span>{dict.landing_page.offering.list[0]}</span>
            </li>
            <li className="flex items-center gap-x-2">
              <CheckIcon className="size-5 lg:size-8 text-green-600 shrink-0" />
              <span>{dict.landing_page.offering.list[1]}</span>
            </li>
            <li className="flex items-center gap-x-2">
              <CheckIcon className="size-5 lg:size-8 text-green-600 shrink-0" />
              <span>{dict.landing_page.offering.list[2]}</span>
            </li>
            <li className="flex items-center gap-x-2">
              <CheckIcon className="size-5 lg:size-8 text-green-600 shrink-0" />
              <span>{dict.landing_page.offering.list[3]}</span>
            </li>
            <li className="flex items-center gap-x-2">
              <CheckIcon className="size-5 lg:size-8 text-green-600 shrink-0" />
              <span>{dict.landing_page.offering.list[4]}.</span>
            </li>
          </ul>

          <p className="mt-8 text-gray-700 text-justify max-w-2xl md:text-lg">
            <b>{dict.landing_page.offering.sub_heading}</b>
          </p>

          <div className="mt-4 max-w-2xl md:text-lg flex flex-col sm:flex-row gap-4 items-center">
            <div className="bg-white px-2 py-2 rounded w-full">
              <p className="text-gray-600 text-sm font-bold">{dict.landing_page.offering.labelled_list.buses.label}</p>
              <p className="text-gray-700 text-lg">{dict.landing_page.offering.labelled_list.buses.text}</p>
            </div>
            <div className="bg-white px-2 py-2 rounded w-full">
              <p className="text-gray-600 text-sm font-bold">{dict.landing_page.offering.labelled_list.heavy_trucks.label}</p>
              <p className="text-gray-700 text-lg">{dict.landing_page.offering.labelled_list.heavy_trucks.text}</p>
            </div>
            <div className="bg-white px-2 py-2 rounded w-full">
              <p className="text-gray-600 text-sm font-bold">{dict.landing_page.offering.labelled_list.passenger_cars.label}</p>
              <p className="text-gray-700 text-lg">{dict.landing_page.offering.labelled_list.passenger_cars.text}</p>
            </div>
          </div>

          <div className="flex justify-start gap-x-4 mt-8 max-w-max mx-auto md:mx-0">
            <Link
              href='/contact'
              className="w-56 block bg-gray-50 py-3 text-center rounded border border-black/25 shadow-sm hover:shadow-md text"
            >
              {dict.landing_page.offering.ctas[0]}
            </Link>

            <Link
              href='/buy'
              className="w-56 block bg-green-200 py-3 text-center rounded border border-black/25 shadow-sm hover:shadow-md text"
            >
              {dict.landing_page.offering.ctas[1]}
            </Link>
          </div>

        </div>
      </div>

    </>
  );
}
