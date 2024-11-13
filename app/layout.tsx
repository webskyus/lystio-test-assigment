import React from "react";
import type { Metadata } from "next";
import localFont from "next/font/local";
import 'swiper/css';
import 'swiper/css/pagination';
import "./globals.css";
import {SearchProvider} from "@/app/context";

const allianceSemiBold = localFont({
  src: "./assets/fonts/allianceSemiBold.woff",
  variable: "--font-alliance-semibold",
  weight: "100 900",
});
const allianceMedium = localFont({
  src: "./assets/fonts/allianceMedium.woff",
  variable: "--font-alliance-medium",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Lystio | Vacation rentals, cabins, beach houses, & more",
  description: "Discover a variety of rental properties tailored to your needs. Whether you’re looking for a cozy apartment or a spacious home, find your dream rental property effortlessly",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${allianceMedium.variable} ${allianceSemiBold.variable} antialiased`}
      >
        <SearchProvider>
          {children}
        </SearchProvider>
      </body>
    </html>
  );
}
