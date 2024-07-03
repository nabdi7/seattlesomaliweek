import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Seattle Somali Week",
  description: "Seattle Somali Week is a week-long celebration of Somali culture in Seattle.",
  keywords: "Somali, Seattle Somali Week, Somali Community, Somali Events Seattle, Somali Community Seattle,",
  openGraph: {
    title: "Seattle Somali Week",
    description: "",
    type: "website",
    siteName: "Seattle Somali Week",
    url: "https://seattlesomaliweek.org",

    // images: [
    //   {
    //     url: "https://seattlesomaliweek.org/img5.jpg",
    //     width: 500,
    //     height: 500,
    //     alt: "EmotionsTM",
    //   },
    // ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />

        <main className="">
          {children}
        </main>
        <Footer />
        </body>
    </html>
  );
}
