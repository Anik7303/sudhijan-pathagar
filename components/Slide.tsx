import clsx from "clsx";
import Image from "next/image";

interface SlideProps {
  active: boolean;
  src: string;
  alt: string;
  width: number;
  height: number;
  blurDataUrl: string;
}

export default function Slide({
  src,
  alt,
  active,
  width,
  height,
  blurDataUrl,
}: SlideProps) {
  return (
    <div
      className={clsx(
        "absolute left-0 top-0 h-full w-full overflow-hidden transition-opacity duration-300 ease-out",
        active ? "visible opacity-100" : "hidden opacity-0"
      )}
    >
      <Image
        className="h-full w-full object-cover"
        src={src}
        alt={alt}
        placeholder="blur"
        blurDataURL={blurDataUrl}
        sizes="100vw"
        fill
      />
    </div>
  );
}
