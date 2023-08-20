"use client";
import clsx from "clsx";
import { usePathname } from "next-intl/client";
import Link from "next-intl/link";

interface DropdownMenuItemProps {
  children: React.ReactNode;
  href: string;
}

export default function DropdownMenuItem({
  children,
  href,
}: DropdownMenuItemProps) {
  const pathname = usePathname();
  const isActive = pathname === href;
  return (
    <li>
      <Link
        className={clsx(
          "inline-block w-full whitespace-nowrap rounded-md p-2 transition ease-out",
          isActive
            ? "text-secondary-default"
            : "text-slate-500 hover:text-slate-700"
        )}
        href={href}
      >
        {children}
      </Link>
    </li>
  );
}
