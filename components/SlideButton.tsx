import clsx from "clsx";
import { ArrowLeft, ArrowRight } from "react-feather";

interface SlideButtonProps {
  align: "left" | "right";
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}

export default function SlideButton({ align, onClick }: SlideButtonProps) {
  return (
    <button
      className={clsx(
        "absolute top-1/2 flex h-12 w-12 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full border-2 border-primary-default bg-primary-default text-slate-300 opacity-50 outline-none outline-0 ring-slate-300 transition-all duration-200 ease-out hover:opacity-100 focus:ring",
        align === "left" ? "left-3" : "right-3"
      )}
      onClick={onClick}
      title={`${align === "left" ? "previous" : "next"} slide`}
    >
      {align === "left" ? (
        <ArrowLeft width="20px" height="20px" />
      ) : (
        <ArrowRight width="20px" height="20px" />
      )}
    </button>
  );
}
