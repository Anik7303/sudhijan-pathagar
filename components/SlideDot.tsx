import clsx from "clsx";

interface SlideDotProps {
  active: boolean;
  onClick: React.MouseEventHandler<HTMLSpanElement>;
}

export default function SlideDot({ active, onClick }: SlideDotProps) {
  return (
    <span
      className={clsx(
        "relative h-[18px] w-[18px] cursor-pointer select-none rounded-full bg-slate-300 transition-colors duration-200 ease-out after:absolute after:inset-0 after:m-auto after:block after:h-3 after:w-3 after:rounded-full",
        active ? "after:bg-primary-default" : "after:bg-transparent"
      )}
      onClick={onClick}
    ></span>
  );
}
