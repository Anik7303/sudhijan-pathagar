"use client";
import { useTranslations } from "next-intl";
import { Facebook, Mail, MapPin, Phone } from "react-feather";

const items = [
  { Icon: Phone, label: "phone", href: "tel:+88027632221" },
  {
    Icon: Facebook,
    label: "name",
    href: "https://www.facebook.com/people/Sudhijan-Pathagar-%E0%A6%B8%E0%A7%81%E0%A6%A7%E0%A7%80%E0%A6%9C%E0%A6%A8-%E0%A6%AA%E0%A6%BE%E0%A6%A0%E0%A6%BE%E0%A6%97%E0%A6%BE%E0%A6%B0/100064217640858/",
  },
  { Icon: MapPin, label: "address" },
];

export default function FooterInfo() {
  const t = useTranslations("info");
  return (
    <ul className="flex flex-col gap-2 text-white">
      <li className="flex items-center gap-1">
        <Mail height={16} />
        <a href="mailto:sudhijan@gmail.com" className="font-inter">
          sudhijan@gmail.com
        </a>
      </li>
      {items.map(({ Icon, href, label }) => (
        <li className="flex items-center gap-1" key={label}>
          <Icon height={16} />
          {/* @ts-ignore */}
          {href ? <a href={href}>{t(label)}</a> : <span>{t(label)}</span>}
        </li>
      ))}
    </ul>
  );
}
