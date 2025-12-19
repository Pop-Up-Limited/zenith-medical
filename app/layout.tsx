import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { COMPANY_NAME, COMPANY_NAME_EN } from "@/lib/constants";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: `${COMPANY_NAME} | ${COMPANY_NAME_EN}`,
  description: "臻顶医疗致力于通过突破性的医学影像技术和创新解决方案，为全球医疗机构提供更精准、更高效的诊断工具。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body className={inter.className}>
        <Header />
        <main className="min-h-screen bg-slate-50">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
