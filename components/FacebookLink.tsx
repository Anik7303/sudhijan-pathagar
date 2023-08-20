import { Facebook } from "react-feather";

interface FacebookLinkProps {
  size?: number;
}

export default function FacebookLink({ size = 16 }: FacebookLinkProps) {
  return (
    <a
      className="group cursor-pointer rounded-full bg-white p-2 transition duration-300 ease-out hover:bg-facebook"
      href="https://www.facebook.com/people/Sudhijan-Pathagar-%E0%A6%B8%E0%A7%81%E0%A6%A7%E0%A7%80%E0%A6%9C%E0%A6%A8-%E0%A6%AA%E0%A6%BE%E0%A6%A0%E0%A6%BE%E0%A6%97%E0%A6%BE%E0%A6%B0/100064217640858/"
      target="_blank"
      rel="noreferrer noopener"
    >
      <Facebook
        width={size}
        height={size}
        className="fill-facebook stroke-facebook group-hover:fill-white group-hover:stroke-white"
      />
    </a>
  );
}
