import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import StoreProvider from "../redux/StoreProvider";
import Carts from "@/components/shared/Carts";
import { Toaster } from "react-hot-toast";
export const metadata: Metadata = {
  title: "Home: PC-PartsBD",
  description: "A Big PC Parts Marketplace In Bangladesh",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <StoreProvider>
        <body className={`inter.className relative`}>
          <Toaster position="top-right" />
          {children}
          <div>
            <Carts />
          </div>
        </body>
      </StoreProvider>
    </html>
  );
}
