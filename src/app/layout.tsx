import ProviderStore from "@/store/ProviderStore";
import "./globals.css";
import type { Metadata } from "next";

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
