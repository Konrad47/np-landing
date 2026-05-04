import pl from "@/messages/pl.json";
import en from "@/messages/en.json";
import type { Locale } from "./config";
import type { Messages } from "./messages";

const dictionaries: Record<Locale, Messages> = {
  pl,
  en,
};

export const getDictionary = async (locale: string): Promise<Messages> => {
  const key = locale as Locale;
  return dictionaries[key] ?? dictionaries.pl;
};
