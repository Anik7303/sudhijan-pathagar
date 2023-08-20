import { Inter, Noto_Sans_Bengali } from "next/font/google";
import localFont from "next/font/local";

export const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const kalpurush = localFont({
  src: [{ path: "../fonts/kalpurush.ttf" }],
  variable: "--font-kalpurush",
});

export const notoSans = Noto_Sans_Bengali({
  subsets: ["bengali"],
  variable: "--font-noto-sans",
});

export const solaimanLipi = localFont({
  src: [{ path: "../fonts/solaiman_lipi.ttf" }],
  variable: "--font-solaiman-lipi",
});

export const sirajee = localFont({
  src: [
    { path: "../fonts/sirajee.ttf", style: "normal" },
    { path: "../fonts/sirajee_italic.ttf", style: "italic" },
  ],
  variable: "--font-sirajee",
});
