import Link from "next-intl/link";
import Image from "next/image";

import logo from "@/app/sudhijan.svg";

interface BrandProps {
  label: string;
}

export default function Brand({ label }: BrandProps) {
  return (
    <Link href="/" className="flex items-center gap-2">
      <Image src={logo} alt={label} height={40} />
      <span className="font-sirajee text-secondary-default whitespace-nowrap text-xl font-bold">
        {label}
      </span>
    </Link>
  );
}
