import { defaultLocale } from "@/lib/locales";
import { redirect } from "next/navigation";

export default function RootPage() {
  const url = `/${defaultLocale}/`;
  redirect(url);
}
