"use client";

import { useTranslations } from "next-intl";
import Brand from "./Brand";
import DropdownMenu from "./DropdownMenu";
import DropdownMenuItem from "./DropdownMenuItem";
import NavLink from "./NavLink";

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
    <header className="sticky top-0 z-10 flex flex-col flex-wrap items-center justify-between bg-white px-2 py-3 backdrop-blur lg:flex-row">
      <Brand label={t("brand")} />
      <nav className="hidden flex-col items-center gap-1 lg:flex lg:flex-row">
        {links.map((link) => {
          if (link.children) {
            return (
              <DropdownMenu
                key={link.label}
                // @ts-ignore
                label={t(link.label)}
                href={link.href}
              >
                {link.children.map((item) => (
                  <DropdownMenuItem key={item.label}>
                    <NavLink href={item.href}>
                      {/* @ts-ignore */}
                      {t(item.label)}
                    </NavLink>
                  </DropdownMenuItem>
                ))}
              </DropdownMenu>
            );
          }
          return (
            <NavLink key={link.label} href={link.href} variant={link.variant}>
              {/* @ts-ignore */}
              {t(link.label)}
            </NavLink>
          );
        })}
      </nav>
    </header>
  );
}
