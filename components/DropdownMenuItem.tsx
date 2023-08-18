interface DropdownMenuItemProps {
  children: React.ReactNode;
}

export default function DropdownMenuItem({ children }: DropdownMenuItemProps) {
  return <li className="w-full">{children}</li>;
}
