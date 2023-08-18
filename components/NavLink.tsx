"use client";
import clsx from "clsx";
import { usePathname } from "next-intl/client";
import Link from "next-intl/link";

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | string;
}

export default function NavLink({ href, children, variant }: NavLinkProps) {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={clsx(
        "inline-block w-full whitespace-nowrap rounded-md p-2 transition-all duration-300 ease-out ",
        isActive ? "text-secondary-default" : "text-slate-500",
        variant === "primary"
          ? "bg-primary-default hover:shadow-primary-light/40 text-white/90 hover:scale-110 hover:shadow-lg"
          : "hover:text-slate-700"
      )}
    >
      {children}
    </Link>
  );
}
