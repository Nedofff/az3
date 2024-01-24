import type { Metadata } from "next";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";

export const metadata: Metadata = {
  title: 'Аудиторская группа "Аземша и партнеры"',
};

export default function MainLayout({
  children, 
}: {
  children: React.ReactNode;
}) {
  return (
        <>
        <Header />
        {children}
        <Footer />
        </>
  );
}
