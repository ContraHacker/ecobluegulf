import LanguageToggle from "@/components/LanguageToggle";
import { notFound } from "next/navigation";
import { get_dictionary, has_locale } from "../dictionaries";

export default async function Home({ params }: PageProps<'/[lang]'>) {

  const { lang } = await params;
  if (!has_locale(lang)) notFound();

  const dict = await get_dictionary(lang)

  return (
    <main className="px-4 sm:px-12 md:px-18 max-w-6xl mx-auto">
      <div className="py-12">
        <LanguageToggle />
      </div>
    </main>
  );
}
