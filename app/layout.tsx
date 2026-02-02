import type { Metadata } from "next";
import { Anton, Lato } from "next/font/google";
import "./globals.css";


const anton = Anton({
  variable: "--font-anton",
  subsets: ["latin"],
  weight: "400",
});

const lato = Lato({
  variable: "--font-lato",
  subsets: ["latin"],
  weight: "400"
});



export const metadata: Metadata = {
  title: "Home - Celebration Church International Benin",
  description: "Celebration Church International Benin",
  keywords: ["Church", "Celebration", "Benin", "CCI", "CCI Benin"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${anton.variable} ${lato.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
