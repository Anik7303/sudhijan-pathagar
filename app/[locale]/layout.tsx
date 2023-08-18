import clsx from "clsx";
import { Metadata } from "next";
import { NextIntlClientProvider, createTranslator } from "next-intl";
import { notFound } from "next/navigation";

import "@/app/globals.css";
import { inter, notoSans, sirajee } from "@/lib/fonts";
import { locales } from "@/lib/locales";
import { getMessages } from "@/lib/messages";

interface ParamProps {
  params: { locale: string };
}

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

interface RootLocaleLayoutProps extends ParamProps {
  children: React.ReactNode;
}

export default async function RootLocaleLayout({
  children,
  params: { locale },
}: RootLocaleLayoutProps) {
  let messages;
  try {
    messages = await getMessages(locale);
  } catch (err) {
    notFound();
  }
  const classes = clsx(
    inter.variable,
    notoSans.variable,
    sirajee.variable,
    locale === "bn" ? "font-bengali" : "font-inter"
  );

  return (
    <html lang={locale}>
      <body className={classes}>
        <NextIntlClientProvider
          locale={locale}
          messages={messages}
          timeZone="Asia/Dhaka"
        >
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}

export async function generateMetadata({
  params: { locale },
}: ParamProps): Promise<Metadata> {
  const messages = await getMessages(locale);
  const t = await createTranslator({
    locale,
    messages,
    namespace: "info",
  });
  return {
    title: t("name"),
  };
}
