import { StrictMode } from "react";
import "./globals.css";
import Providers from "@/components/Providers/Providers";
import Preloader from "@/components/Preloader/Preloader";

export default function RootLayout({
  children, 
}: {
  children: React.ReactNode;
}) {
  return (
    <html className="overflow-x-hidden" lang="ru">
      <body className="overflow-x-hidden">
        <StrictMode>
        <Providers>
          <Preloader/>
        {children}
        </Providers>
        </StrictMode>
      </body>
    </html>
  );
}
