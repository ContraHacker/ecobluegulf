'use client';

import { Dict } from "@/app/dictionaries";
import { PhoneIcon, PlusIcon, QuestionMarkCircleIcon, UserIcon } from "@heroicons/react/20/solid";
import { Bars3Icon } from "@heroicons/react/24/solid";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import LanguageToggle from "./LanguageToggle";

export default function Header({ dict }: { dict: Dict }) {

  const [menu_open, set_menu_open] = useState(false);
  const menu_ref = useRef<HTMLUListElement | null>(null);
  const button_ref = useRef<HTMLButtonElement | null>(null);

  function toggle_menu_on_keypress(e: KeyboardEvent) {
    if (e.key.toLowerCase() === 'm') {
      set_menu_open(prev => !prev);
    }
  }

  useEffect(() => {
    window.addEventListener('keydown', toggle_menu_on_keypress);
    return () => {
      window.removeEventListener('keydown', toggle_menu_on_keypress);
    };
  }, []);

  useEffect(() => {

    function handle_click_outside(e: MouseEvent) {
      if (
        menu_ref.current &&
        !menu_ref.current.contains(e.target as Node) &&
        !button_ref.current?.contains(e.target as Node)
      ) {
        set_menu_open(false);
      }
    }

    if (menu_open) {
      document.addEventListener('mousedown', handle_click_outside);
    }
    
    else {
      document.removeEventListener('mousedown', handle_click_outside);
    }

    return () => {
      document.removeEventListener('mousedown', handle_click_outside);
    };

  }, [menu_open]);

  return (
    <nav className="bg-linear-to-r from-primary to-primary-600 sticky top-0 z-10">
      <div className="px-4 sm:px-12 md:px-18 max-w-6xl mx-auto flex items-center justify-between gap-x-2 relative py-4 z-10">

        <Link
          href='/'
          className='flex items-center gap-x-2'
        >
          <Image
            src='/logo.svg'
            alt='Pristine Envo Logo'
            width={32}
            height={32}
          />
          <span className="text-xl font-semibold text-shadow-xs text-secondary">
            { dict.brand_name }
          </span>
        </Link>

        <LanguageToggle className="ml-auto text-secondary" />

        <button
          ref={button_ref}
          onClick={() => set_menu_open(prev => !prev)}
          className="cursor-pointer hover:text-white hover:scale-105"
          onKeyDown={e => { if (e.key === 'Escape') set_menu_open(false) }}
        >
          <span className="sr-only">Main Menu - Use the M key to Open</span>
          <Bars3Icon className={clsx('size-8 text-secondary', menu_open && 'text-white')} />
        </button>

        <ul
          ref={menu_ref}
          className={clsx(
            'absolute top-17 right-4 sm:right-12 md:right-18 shadow transition-all duration-250 border border-primary/50 rounded-lg ml-3 text-lg select-none overflow-clip',
            menu_open ? 'visible opacity-100 translate-y-0' : 'invisible opacity-0 -translate-y-10'
          )}
        >
          <li>
            <Link href='/#product' className="flex gap-x-4 items-center text-primary hover:text-white pl-4 pr-16 py-4 transition-colors bg-gray-50 hover:bg-primary focus:outline-none border-2 focus:border-primary border-gray-50">
              <PlusIcon className="size-5 opacity-50" />
              <span>
                <p className="font-bold">{dict.menu_links.product.title}</p>
                <p className="text-sm">{dict.menu_links.product.desc}<sup>+</sup></p>
              </span>
            </Link>
          </li>
          <li>
            <Link href='/#know-more' className="flex gap-x-4 items-center text-primary hover:text-white pl-4 pr-16 py-4 transition-colors bg-gray-50 hover:bg-primary focus:outline-none border-2 focus:border-primary border-gray-50">
              <QuestionMarkCircleIcon className="size-5 opacity-50" />
              <span>
                <p className="font-bold">{dict.menu_links.know_more.title}</p>
                <p className="text-sm">{dict.menu_links.know_more.desc}</p>
              </span>
            </Link>
          </li>
          <li>
            <Link href='/#about-us' className="flex gap-x-4 items-center text-primary hover:text-white pl-4 pr-16 py-4 transition-colors bg-gray-50 hover:bg-primary focus:outline-none border-2 focus:border-primary border-gray-50">
              <UserIcon className="size-5 opacity-50" />
              <span>
                <p className="font-bold">{dict.menu_links.about_us.title}</p>
                <p className="text-sm">{dict.menu_links.about_us.desc}</p>
              </span>
            </Link>
          </li>
          <li>
            <Link href='/contact' className="flex gap-x-4 items-center text-primary hover:text-white pl-4 pr-16 py-4 transition-colors bg-primary-50 hover:bg-primary focus:outline-none border-2 focus:border-primary border-gray-50">
              <PhoneIcon className="size-5 opacity-50" />
              <span>
                <p className="font-bold">{dict.menu_links.contact_sales.title}</p>
                <p className="text-sm">{dict.menu_links.contact_sales.desc}</p>
              </span>
            </Link>
          </li>
        </ul>

      </div>
    </nav>
  );
}
