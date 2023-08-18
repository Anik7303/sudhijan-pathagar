import clsx from "clsx";
import Link from "next-intl/link";
import Image from "next/image";

import logo from "@/app/sudhijan.svg";

interface BrandProps {
  label: string;
  size: number;
  bold?: boolean;
  color?: string;
  column?: boolean;
}

export default function Brand({
  label,
  size,
  bold,
  color = "text-secondary-default",
  column = false,
}: BrandProps) {
  return (
    <Link
      href="/"
      className={clsx("flex items-center gap-2", column && "flex-col")}
    >
      <Image src={logo} alt={label} height={size} />
      <span
        className={clsx(
          "whitespace-nowrap font-sirajee text-xl",
          color,
          bold && "font-bold"
        )}
      >
        {label}
      </span>
    </Link>
  );
}
