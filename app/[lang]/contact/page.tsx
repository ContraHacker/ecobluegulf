import { get_dictionary, has_locale } from "@/app/dictionaries";
import { EnvelopeIcon, GlobeAltIcon, PhoneIcon } from "@heroicons/react/24/outline";
import { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";

export const metadata: Metadata = {
  title: 'Contact | EcoBlueGulf'
};

export default async function Contact({ params }: PageProps<'/[lang]'>) {

  const { lang } = await params;
  if (!has_locale(lang)) notFound();

  const dict = await get_dictionary(lang);

  return (
    <div className="bg-white">
      <div className="py-12 lg:py-24 px-4 sm:px-12 md:px-18 max-w-6xl mx-auto font-sans">

        <h1 className="text-4xl lg:text-5xl mb-6 md:mb-8 font-bold md:border-t-8 md:pt-8 border-gray-200 max-w-max mx-auto md:mx-0">{dict.contact.heading}</h1>

        <p className="mt-8 md:text-lg font-bold">
          {dict.brand_name}
        </p>

        <p className="text-gray-700 text-justify max-w-2xl md:text-lg">
          {dict.address}
        </p>

        <ul className="mt-8 text-lg space-y-2">
          <li className="hover:text-primary transition-colors">
            <PhoneIcon className="size-6 inline mr-2" />+91 748 340 5875
          </li>
          <li className="hover:text-primary transition-colors">
            <PhoneIcon className="size-6 inline mr-2" />+91 999 737 1132
          </li>
          <li className="hover:text-primary transition-colors">
            <Image alt='WhatsApp' src='/whatsapp.svg' width={24} height={24} className="inline mr-2" />+91 999 737 1132
          </li>
          <li className="hover:text-primary transition-colors">
            <EnvelopeIcon className="size-6 inline mr-2" />info@ecobluegulf.com
          </li>
          <li className="hover:text-primary transition-colors">
            <GlobeAltIcon className="size-6 inline mr-2" />https://ecobluegulf.com
          </li>
        </ul>

      </div>
    </div>
  )
}