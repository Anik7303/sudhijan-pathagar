"use client";
import { useTranslations } from "next-intl";

export default function HomePage() {
  const t = useTranslations("info");
  return (
    <main className="container mx-auto">
      <h1 className="font-sirajee py-2 text-center text-3xl">{t("name")}</h1>
      <p className="py-2">{t("address")}</p>
    </main>
  );
}
