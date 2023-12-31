import clsx from "clsx";
import { Metadata } from "next";
import { NextIntlClientProvider, createTranslator } from "next-intl";
import { notFound } from "next/navigation";

import "@/app/globals.css";
import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";
import {
  kalpurush,
  notoSans,
  openSans,
  sirajee,
  solaimanLipi,
} from "@/lib/fonts";
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
    kalpurush.variable,
    notoSans.variable,
    openSans.variable,
    sirajee.variable,
    solaimanLipi.variable,
    locale === "bn" ? "font-solaiman" : "font-open-sans",
    "flex min-h-[100svh] flex-col"
  );
  return (
    <html lang={locale} suppressHydrationWarning>
      <body className={classes}>
        <NextIntlClientProvider
          locale={locale}
          messages={messages}
          timeZone="Asia/Dhaka"
        >
          <Navigation />
          <div className="flex-grow">{children}</div>
          <Footer />
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
