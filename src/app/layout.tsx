import "./globals.css";
import "swiper/css";
import "swiper/css/pagination";
import type { Metadata } from "next";
import ProviderStore from "@/store/ProviderStore";

export const metadata: Metadata = {
  title: "Anime web",
  description: "Search anime info",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ProviderStore>
      <html lang="en">
        <body className={`antialiased`}>{children}</body>
      </html>
    </ProviderStore>
  );
}
