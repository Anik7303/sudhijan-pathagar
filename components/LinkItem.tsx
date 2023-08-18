import Link from "next-intl/link";

interface LinkItemProps {
  href: string;
  label: string;
}

export default function LinkItem({ href, label }: LinkItemProps) {
  return (
    <li>
      <Link href={href} className="text-white hover:underline">
        {label}
      </Link>
    </li>
  );
}
