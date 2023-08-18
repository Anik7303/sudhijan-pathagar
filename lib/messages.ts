import { defaultLocale } from "./locales";

interface Messages {
  [key: string]: () => Promise<IntlMessages>;
}

const messages: Messages = {
  bn: () => import("@/messages/bn.json").then((m) => m.default),
  en: () => import("@/messages/en.json").then((m) => m.default),
};

export async function getMessages(locale: string) {
  const localeMessages = messages[locale] || messages[defaultLocale];
  return localeMessages();
}
