"use client";
import { useTranslations } from "next-intl";

import Brand from "./Brand";
import Copyright from "./Copyright";
import FooterInfo from "./FooterInfo";
import FooterLinks from "./FooterLinks";

export default function Footer() {
  const tInfo = useTranslations("info");

  return (
    <footer className="bg-primary-default">
      <div className="container mx-auto flex flex-col gap-4 md:flex-wrap">
        <section className="flex items-center justify-around pt-8 md:justify-between">
          <Brand label={tInfo("name")} size={60} color="text-white" column />
          <FooterLinks />
          <FooterInfo />
        </section>
        <Copyright />
      </div>
    </footer>
  );
}
