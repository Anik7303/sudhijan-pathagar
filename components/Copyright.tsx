"use client";
import { useLocale, useTranslations } from "next-intl";

export default function Copyright() {
  const t = useTranslations("info");
  const locale = useLocale();

  return (
    <p className="py-4 text-center text-sm text-white">
      &copy; {t("year", { locale })} {t("name")}
    </p>
  );
}
