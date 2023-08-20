"use client";

import { useLocale, useTranslations } from "next-intl";
import { usePathname, useRouter } from "next-intl/client";
import { ChangeEvent } from "react";

import { locales } from "@/lib/locales";

export default function LocaleSwitch() {
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();
  const t = useTranslations("locale");

  function handleLocaleChange(event: ChangeEvent<HTMLSelectElement>) {
    router.replace(pathname, { locale: event.target.value });
  }

  return (
    <select
      className="cursor-pointer rounded-md p-2"
      value={locale}
      onChange={handleLocaleChange}
    >
      {locales.map((locale) => (
        <option key={locale} value={locale}>
          {t("locale", { locale })}
        </option>
      ))}
    </select>
  );
}
