import "@radix-ui/themes/styles.css";
import "./globals.css";

import type { Metadata } from "next";
import { Poppins, Geist_Mono } from "next/font/google";
import Providers from "@/components/providers";

const poppinsSans = Poppins({
  variable: "--font-poppins-sans",
  weight: "400",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Home - Mateo Sand",
  description: "Personal website of Mateo Sand",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppinsSans.variable} ${geistMono.variable} antialiased`}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
