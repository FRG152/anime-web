import "./globals.css";
import "swiper/css";
import "swiper/css/pagination";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import ProviderStore from "@/store/ProviderStore";
import { getCategories } from "@/utils/api";

interface Props {
  children: React.ReactNode;
}

export const metadata: Metadata = {
  title: "Anime web",
  description: "Search anime info",
};

export default async function RootLayout({ children }: Readonly<Props>) {
  const categories = await getCategories();

  return (
    <ProviderStore>
      <html lang="en">
        <body>
          <Navbar categories={categories} />
          {children}
        </body>
      </html>
    </ProviderStore>
  );
}
