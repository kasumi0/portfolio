import type { Metadata } from "next";
import {
  Cormorant_Garamond,
  Shippori_Mincho,
  Zen_Kaku_Gothic_New,
} from "next/font/google";
import "./globals.css";
import { Header } from "./components/header/Header";
import { Footer } from "./components/footer/Footer";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "600"],
});

const gothic = Zen_Kaku_Gothic_New({
  variable: "--font-gothic",
  subsets: ["latin"],
  weight: ["400", '500'],
});

const shippori = Shippori_Mincho({
  variable: "--font-shippori",
  subsets: ["latin"],
  weight: ["400", "600"],
});

export const metadata: Metadata = {
  title: "kasumi-takabayashi portfolio",
  description:
    "高林果純のポートフォリオサイトです。名古屋を中心にweb制作/開発をしています。",
  openGraph: {
    title: "高林果純のポートフォリオ",
    description:
      "高林果純のポートフォリオサイトです。名古屋を中心にweb制作/開発をしています。",
    url: "https://portfolio-one-cyan-78.vercel.app/",
    images: [
      {
        url: "/ogp.jpg",
        width: 1200,
        height: 630,
      },
    ],
    locale: "ja_JP",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body
        className={`${cormorant.variable} ${shippori.variable} ${gothic.variable}`}
      >
        <Header />
        <main>
          <video
            src="/bg.webm"
            playsInline
            muted
            loop
            autoPlay
            className="bg-movie"
          ></video>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
