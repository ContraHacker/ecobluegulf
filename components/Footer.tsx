import { Dict } from "@/app/dictionaries";
import { EnvelopeIcon, PhoneIcon } from "@heroicons/react/20/solid";
import Image from "next/image";
import Link from "next/link";

export default function Footer({ dict }: { dict: Dict }) {
  return (
    <footer className="bg-linear-to-b from-gray-50 from-85% to-gray-300 border-t-2 border-t-primary-50 mt-auto">

      <div className="px-4 sm:px-12 md:px-18 max-w-6xl mx-auto py-8 lg:py-12 flex flex-col lg:flex-row lg:justify-between lg:items-center gap-y-8">

        <div className="lg:border-l-4 border-secondary lg:pl-6">
          <Link
            href='/'
            className='flex items-center gap-x-2 max-w-max'
          >
            <Image
              src='/logo.svg'
              alt='EcoBlueGulf Logo'
              width={32}
              height={32}
            />
            <span className="text-xl md:text-2xl font-semibold text-shadow-xs text-primary">{dict.brand_name}</span>
          </Link>

          <p className="text-gray-800 mt-4 text-lg font-sans">
            {dict.brand_name}
          </p>

          <p className="text-gray-700 max-w-xs mt-2">
            {dict.address}
          </p>
        </div>

        <div>
          <ul className="space-y-2 font-sans text-lg">
            <li className="flex items-center gap-x-2">
              <PhoneIcon className="size-6" />+91 748 340 5875
            </li>
            <li className="flex items-center gap-x-2">
              <PhoneIcon className="size-6" />+91 999 737 1132
            </li>
            <li className="flex items-center gap-x-2">
              <Image alt='WhatsApp' src='/whatsapp.svg' width={24} height={24} />+91 999 737 1132
            </li>
            <li className="flex items-center gap-x-2">
              <EnvelopeIcon className="size-6" />info@ecobluegulf.com
            </li>
          </ul>
        </div>

      </div>

      <p className="text-gray-500 text-xs text-center border-y border-gray-200 py-4">
        2026 - {dict.brand_name}<br /> <br />
        All logos, company names and brand names are the properties of their respective owners.<br />
        [05/06/2026]
      </p>

    </footer>
  )
}