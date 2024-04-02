"use client";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import { ThemeProvider } from "../components/ui/theme/theme-provider";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  const router = useRouter();
  useEffect(() => {
    const handleRouteChnage = () => {
      const token = sessionStorage.getItem("token");

      if (!token) {
        router.push("/login");
      }
    };
    handleRouteChnage();
  }, [router]);

  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
