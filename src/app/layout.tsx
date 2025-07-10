import "./globals.css";
import "swiper/css";
import "swiper/css/pagination";
import Navbar from "@/components/Navbar";
import ProviderStore from "@/store/ProviderStore";
import type { Metadata } from "next";

import { Poppins } from "next/font/google";
import Footer from "@/components/Footer";

interface Props {
  children: React.ReactNode;
}

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Anime web",
  description: "Search anime info",
};

export default async function RootLayout({ children }: Readonly<Props>) {
  return (
    <ProviderStore>
      <html lang="en" className={poppins.className}>
        <body className="relative">
          <Navbar />
          {children}
          <Footer />
        </body>
      </html>
    </ProviderStore>
  );
}
