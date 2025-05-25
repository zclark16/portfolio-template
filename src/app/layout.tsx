import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Background from "@/components/Background";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Portfolio | Constant Nortey Jr.",
  description: "Welcome to my portfolio website showcasing my work and skills.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Background />
        <main className="relative min-h-screen">
          {children}
        </main>
      </body>
    </html>
  );
}
