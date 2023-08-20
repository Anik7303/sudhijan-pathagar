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
  src: [{ path: "../public/fonts/nikosh.ttf" }],
  variable: "--font-nikosh",
});

export const sirajee = localFont({
  src: [
    { path: "../public/fonts/sirajee.ttf", style: "normal" },
    { path: "../public/fonts/sirajee_italic.ttf", style: "italic" },
  ],
  variable: "--font-sirajee",
});
