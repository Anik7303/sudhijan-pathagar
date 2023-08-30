"use client";
import { useTranslations } from "next-intl";

import SlideShow from "@/components/SlideShow";

export default function HomePage() {
  const t = useTranslations("info");
  return (
    <main>
      <SlideShow />
    </main>
  );
}
