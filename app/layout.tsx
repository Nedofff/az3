import { StrictMode } from "react";
import "./globals.css";
import Providers from "@/components/Providers/Providers";

export default function RootLayout({
  children, 
}: {
  children: React.ReactNode;
}) {
  return (
    <html className="overflow-x-hidden" lang="ru">
      <body>
        <StrictMode>
        <Providers>
        {children}
        </Providers>
        </StrictMode>
      </body>
    </html>
  );
}
