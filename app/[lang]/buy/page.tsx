import { get_dictionary, has_locale } from "@/app/dictionaries";
import { PhoneIcon } from "@heroicons/react/20/solid";
import { CheckIcon } from "@heroicons/react/24/outline";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

export const metadata: Metadata = {
  title: 'Buy | EcoBlueGulf'
};

export default async function Buy({ params }: PageProps<'/[lang]'>) {

  const { lang } = await params;
  if (!has_locale(lang)) notFound();

  const dict = await get_dictionary(lang);

  return (
    <>
      <div className="bg-white">
        <div className="py-12 lg:py-24 px-4 sm:px-12 md:px-18 max-w-6xl mx-auto font-sans">

          <h1 className="text-4xl lg:text-5xl mb-6 md:mb-8 font-bold md:border-t-8 md:pt-8 border-gray-200 max-w-max mx-auto md:mx-0">{dict.buy.where_to_buy.heading}</h1>

          <p className="text-xl">
            &gt; {dict.buy.where_to_buy.list[0]}
          </p>

          <p className="text-xl mt-2">
            &gt; {dict.buy.where_to_buy.list[1]}
          </p>

          <ul className="mt-4 text-lg space-y-2 mb-8">
            <li className="hover:text-primary transition-colors">
              <PhoneIcon className="size-6 inline mr-2" />+91 748 340 5875
            </li>
            <li className="hover:text-primary transition-colors">
              <PhoneIcon className="size-6 inline mr-2" />+91 999 737 1132
            </li>
            <li className="hover:text-primary transition-colors">
              <Image alt='WhatsApp' src='/whatsapp.svg' width={24} height={24} className="inline mr-2" />+91 999 737 1132
            </li>
          </ul>

          <Link
            href='/contact'
            className="w-56 block bg-green-200 py-3 text-center rounded border border-black/25 shadow-sm hover:shadow-md text"
          >
            {dict.buy.where_to_buy.ctas[0]}
          </Link>

        </div>

      </div>

      <div className="bg-green-50">
        <div className="py-12 lg:py-24 px-4 sm:px-12 md:px-18 max-w-6xl mx-auto font-sans">

          <h3 className="text-4xl lg:text-5xl mb-6 md:mb-8 font-bold md:border-t-8 md:pt-8 border-green-200 max-w-max mx-auto md:mx-0">{dict.buy.available_now.heading}</h3>

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

        </div>
      </div>

    </>
  )
}