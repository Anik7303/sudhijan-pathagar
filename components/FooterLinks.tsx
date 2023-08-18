"use client";
import { useTranslations } from "next-intl";
import LinkItem from "./LinkItem";

const list1 = [
  { href: "/founding_period/history", label: "founding_period.history" },
  {
    href: "/administration/board_of_directors",
    label: "administration.board_of_directors",
  },
  {
    href: "/administration/executive_council",
    label: "administration.executive_council",
  },
  { href: "/objective", label: "objective" },
];
const list2 = [
  { href: "/publications", label: "publications" },
  { href: "/awards", label: "awards" },
  { href: "/scholarships", label: "scholarships" },
  { href: "/gallery/images", label: "gallery.images" },
  { href: "/gallery/videos", label: "gallery.videos" },
];

export default function FooterLinks() {
  const t = useTranslations("links");
  return (
    <>
      <ul className="hidden flex-col justify-start gap-2 md:flex">
        {list1.map(({ label, href }) => (
          // @ts-ignore
          <LinkItem key={label} href={href} label={t(label)} />
        ))}
      </ul>
      <ul className="hidden flex-col justify-start gap-2 md:flex">
        {list2.map(({ label, href }) => (
          // @ts-ignore
          <LinkItem key={label} href={href} label={t(label)} />
        ))}
      </ul>
    </>
  );
}
