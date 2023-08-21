"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Monitor, Moon, Sun, type Icon } from "react-feather";

const icons: { [key: string]: Icon } = {
  light: Sun,
  dark: Moon,
  system: Monitor,
};

export default function ThemeSwitch() {
  const [ready, setReady] = useState(false);
  const { setTheme, themes, theme } = useTheme();
  const Icon = icons[theme!];

  useEffect(() => {
    setReady(true);
  }, []);

  if (!ready) return null;
  return (
    <div className="group relative cursor-pointer rounded-full p-2">
      <Icon height={16} width={16} className="cursor-pointer" />
      <ul className="absolute left-1/2 top-8 hidden -translate-x-1/2 space-y-1 rounded-md bg-white p-2 shadow-lg transition duration-300 group-hover:block">
        {themes.map((item) => {
          const Icon = icons[item!];
          return (
            <li
              className="flex items-center justify-start gap-2 rounded-md p-2 hover:bg-slate-200/80"
              key={item}
              onClick={() => setTheme(item)}
            >
              <Icon width={16} height={16} />
              <span className="">{item}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
