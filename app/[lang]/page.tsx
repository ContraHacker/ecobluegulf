import LanguageToggle from "@/components/LanguageToggle";
import { notFound } from "next/navigation";
import { get_dictionary, has_locale } from "../dictionaries";

export default async function Home({ params }: PageProps<'/[lang]'>) {

  const { lang } = await params;

  if (!has_locale(lang)) notFound();
 
  const dict = await get_dictionary(lang)

  return (
    <>
      <h1 className="text-xl">{ dict.brand_name }</h1>
      <LanguageToggle />
    </>
  );
}
