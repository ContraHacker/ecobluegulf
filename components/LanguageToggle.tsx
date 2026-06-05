'use client';

import { useRouter } from 'next/navigation';

export default function LanguageToggle() {

  const router = useRouter();

  const switch_language = (newLocale: string) => {
    document.cookie = `NEXT_LOCALE=${newLocale}; path=/; max-age=31536000; SameSite=Lax`;
    router.refresh();
  };

  return (
    <div className="flex gap-2">
      <button onClick={() => switch_language('en')}>English</button>
      <span>|</span>
      <button onClick={() => switch_language('ar')}>عربي</button>
    </div>
  );
}