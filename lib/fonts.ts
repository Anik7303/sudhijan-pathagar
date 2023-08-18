import { Inter, Noto_Sans_Bengali } from "next/font/google";
import localFont from "next/font/local";

export const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const notoSans = Noto_Sans_Bengali({
  subsets: ["bengali"],
  variable: "--font-noto-bengali",
});

export const nikosh = localFont({
  src: [{ path: "../public/fonts/Nikosh.ttf" }],
  variable: "--font-nikosh",
});

export const sirajee = localFont({
  src: [
    { path: "../public/fonts/Li Sirajee Misbah.ttf", style: "normal" },
    { path: "../public/fonts/Li Sirajee Misbah Italic.ttf", style: "italic" },
  ],
  variable: "--font-sirajee",
});
