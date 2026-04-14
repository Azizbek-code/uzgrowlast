import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { LanguageProvider } from "@/contexts/LanguageContext";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title:
    "UZ-GROW - Agro-Injiniring | Issiqxona qurish va qishloq xo'jaligi yechimlari",
  description:
    "UZ-GROW - O'zbekistonning yetakchi agro-injiniring kompaniyasi. Zamonaviy issiqxonalar, agrotexnologiyalar va qishloq xo'jaligi uchun kompleks yechimlar. 8+ yillik tajriba, 2000+ muvaffaqiyatli loyiha.",
  keywords: [
    "issiqxona qurish",
    "agro-injiniring",
    "qishloq xo'jaligi",
    "UZ-GROW",
    "issiqxona turlari",
    "polikarbonat issiqxona",
    "gidroponik",
    "agrobiznes",
    "O'zbekiston",
    "Toshkent",
    "issiqxona narxlari",
    "qurilish materiallari",
  ],
  authors: [{ name: "Rustamjon Rahmonov", url: "https://uzgrow.uz/ceo" }],
  creator: "UZ-GROW Agro-Injiniring",
  publisher: "UZ-GROW",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "uz_UZ",
    url: "https://uzgrow.uz",
    title:
      "UZ-GROW - Agro-Injiniring | Issiqxona qurish va qishloq xo'jaligi yechimlari",
    description:
      "UZ-GROW - O'zbekistonning yetakchi agro-injiniring kompaniyasi. Zamonaviy issiqxonalar, agrotexnologiyalar va qishloq xo'jaligi uchun kompleks yechimlar.",
    siteName: "UZ-GROW",
    images: [
      {
        url: "/images/logo.png",
        width: 1200,
        height: 630,
        alt: "UZ-GROW Agro-Injiniring",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "UZ-GROW - Agro-Injiniring | Issiqxona qurish va qishloq xo'jaligi yechimlari",
    description:
      "UZ-GROW - O'zbekistonning yetakchi agro-injiniring kompaniyasi. Zamonaviy issiqxonalar, agrotexnologiyalar va qishloq xo'jaligi uchun kompleks yechimlar.",
    images: ["/images/logo.png"],
    creator: "@uzgrow",
    site: "@uzgrow",
  },
  alternates: {
    canonical: "https://uzgrow.uz",
    languages: {
      "uz-UZ": "https://uzgrow.uz",
      "ru-RU": "https://uzgrow.uz/ru",
      "en-US": "https://uzgrow.uz/en",
    },
  },
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="uz" className="scroll-smooth" suppressHydrationWarning>
      <body
        className={`${inter.variable} font-sans antialiased`}
        suppressHydrationWarning
      >
        <LanguageProvider>{children}</LanguageProvider>
        <Analytics />
      </body>
    </html>
  );
}
