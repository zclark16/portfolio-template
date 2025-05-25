import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Background from "@/components/Background";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Portfolio | Constant Nortey Jr.",
  description: "Full-stack developer passionate about creating efficient and functional web applications and systems",
  icons: {
    icon: { url: '/yetron.ico', type: 'image/x-icon' },
    shortcut: { url: '/yetron.ico', type: 'image/x-icon' },
    apple: { url: '/yetron.png', type: 'image/png' },
  },
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
