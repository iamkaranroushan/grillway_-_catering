import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import MainLayout from "@/components/Layouts/mainLayout";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// app/layout.tsx (or RootLayout)
export const metadata: Metadata = {
  title: "Grillway & Catering",
  description: "Syrian Restaurant",
  openGraph: {
    type: "website",
    url: "https://grillway.karanroushan.com",
    title: "Grillway & Catering",
    description: "Order fresh and delicious meat from Syrian Kitchen",
    images: [
      {
        url: "/image/grilled_chicken.png",
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Grillway & Catering",
    description: "Order fresh and delicious meat from Syrian Kitchen",
    images: ["/image/grilled_chicken.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={``}>
        <MainLayout>{children}</MainLayout>
      </body>
    </html>
  );
}
