"use client";

import { useTranslations } from "next-intl";

import Brand from "./Brand";
import DropdownMenu from "./DropdownMenu";
import DropdownMenuItem from "./DropdownMenuItem";
import NavLink from "./NavLink";
import LocaleSwitch from "./LocaleSwitch";

const links = [
  { href: "/", label: "home" },
  { href: "/institute", label: "institute" },
  {
    href: "/founding_period",
    label: "founding_period.index",
    children: [
      { href: "/founding_period/history", label: "founding_period.history" },
      { href: "/founding_period/founders", label: "founding_period.founders" },
    ],
  },
  { href: "/objective", label: "objective" },
  {
    href: "/administration",
    label: "administration.index",
    children: [
      {
        href: "/administration/board_of_directors",
        label: "administration.board_of_directors",
      },
      {
        href: "/administration/executive_council",
        label: "administration.executive_council",
      },
      {
        href: "/administration/student_members",
        label: "administration.student_members",
      },
      {
        href: "/administration/general_members",
        label: "administration.general_members",
      },
      {
        href: "/administration/lifetime_members",
        label: "administration.lifetime_members",
      },
    ],
  },
  { href: "/publications", label: "publications" },
  { href: "/awards", label: "awards" },
  { href: "/scholarships", label: "scholarships" },
  {
    href: "/gallery",
    label: "gallery.index",
    children: [
      { href: "/gallery/images", label: "gallery.images" },
      { href: "/gallery/videos", label: "gallery.videos" },
    ],
  },
  { href: "/book_search", label: "book_search", variant: "primary" },
];

export default function Navigation() {
  const t = useTranslations("links");
  return (
    <header className="sticky top-0 z-10 flex flex-col gap-2 bg-white p-4">
      <div className="flex items-center justify-between">
        <Brand label={t("brand")} size={40} bold />
        <LocaleSwitch />
      </div>
      <nav className="flex justify-end gap-2">
        {links.map(({ children, href, label, variant }) =>
          children ? (
            // @ts-ignore
            <DropdownMenu key={label} label={t(label)} href={href}>
              {children.map(({ label, href }) => (
                <DropdownMenuItem key={label} href={href}>
                  {/* @ts-ignore */}
                  {t(label)}
                </DropdownMenuItem>
              ))}
            </DropdownMenu>
          ) : (
            <NavLink key={label} href={href} variant={variant}>
              {/* @ts-ignore */}
              {t(label)}
            </NavLink>
          )
        )}
      </nav>
    </header>
  );
}
