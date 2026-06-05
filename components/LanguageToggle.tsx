'use client';
import { usePathname, useRouter } from 'next/navigation';

export default function LanguageToggle() {

  const pathname = usePathname();
  const router = useRouter();

  const switch_language = (new_locale: string) => {

    document.cookie = `NEXT_LOCALE=${new_locale}; path=/; max-age=31536000; SameSite=Lax`;
    

    const segments = pathname.split('/');
    const remaining_path = segments.slice(2).join('/');
    
    router.push(`/${new_locale}/${remaining_path}`);

  };

  return (
    <div className="flex gap-2">
      <button onClick={() => switch_language('en')}>English</button>
      <button onClick={() => switch_language('ar')}>عربي</button>
    </div>
  );
}