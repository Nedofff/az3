import { StrictMode } from "react";
import "./globals.css";
import Providers from "@/components/Providers/Providers";

import type { Metadata } from "next";

export const metadata: Metadata = {
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
  }
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
        <Providers>
        {children}
        </Providers>
        </StrictMode>
      </body>
    </html>
  );
}
