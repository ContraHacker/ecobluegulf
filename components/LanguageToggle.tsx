'use client';
import clsx from 'clsx';
import { usePathname, useRouter } from 'next/navigation';

export default function LanguageToggle({ className }: { className?: string }) {

  const pathname = usePathname();
  const router = useRouter();

  const switch_language = (new_locale: string) => {

    document.cookie = `NEXT_LOCALE=${new_locale}; path=/; max-age=31536000; SameSite=Lax`;

    const segments = pathname.split('/');
    const remaining_path = segments.slice(2).join('/');
    
    router.push(`/${new_locale}/${remaining_path}`);

  };

  return (
    <div className={clsx(className, "flex gap-x-2")} >
      <button className='hover:text-primary transition-colors cursor-pointer' onClick={() => switch_language('en')}>English</button>
      <span className='block w-px border-l border-secondary' />
      <button className='hover:text-primary transition-colors cursor-pointer' onClick={() => switch_language('ar')}>عربي</button>
    </div>
  );
}