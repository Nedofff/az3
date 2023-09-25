import { StrictMode } from "react";
import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import Preloader from "@/components/Preloader/Preloader";

export const metadata: Metadata = {
  title: 'Аудиторская группа "Аземша и партнеры"',
  description: "Generated by create next app",
};

export default function RootLayout({
  children, 
}: {
  children: React.ReactNode;
}) {
  return (
    <html className="overflow-x-hidden" lang="ru">
      <body>
        <StrictMode>
      {/* <Preloader/> */}
        <Header />
        {children}
        <Footer />
        </StrictMode>
      </body>
    </html>
  );
}
