"use client";
import clsx from "clsx";
import { usePathname } from "next-intl/client";
import Link from "next-intl/link";
import { ChevronDown } from "react-feather";

interface DropdownMenuProps {
  children: React.ReactNode;
  label: string;
  align?: "center" | "left" | "right";
  href?: string;
}

export default function DropdownMenu({
  children,
  label,
  align = "center",
  href = "#",
}: DropdownMenuProps) {
  const pathname = usePathname();
  const isActive = href !== "/" && pathname.startsWith(href);

  return (
    <div className="group relative" data-open={isActive}>
      <Link
        href={href}
        className={clsx(
          "flex cursor-pointer items-center gap-1 rounded-md p-2 text-slate-500",
          isActive ? "text-secondary-default" : "group-hover:text-slate-700",
          "group-data-[open=true]:text-secondary-default"
        )}
      >
        {label}
        <ChevronDown width={15} height={15} />
      </Link>
      <ul
        className={clsx(
          "absolute top-10 hidden w-max flex-col gap-0 border-2 bg-white p-4 group-hover:flex lg:shadow-lg",
          align === "center" && "left-1/2 -translate-x-1/2",
          align === "left" && "lg:left-0",
          align === "right" && "lg:right-0"
        )}
      >
        {children}
      </ul>
    </div>
  );
}
