import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import R3fSetupWrapper from "@/app/ui/wrapper/ReactThreeFiberSetup";
import UIContainer from "./ui/2d/UIContainer";
import StoreProvider from "./StoreProvider";
const inter = Inter({ subsets: ["latin"] });
export const metadata: Metadata = {
  title: "R3f Shopify Experience",
  description: "3D Shopify Experience Created By Exarta",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="href" href="/odyssey.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>R3f Shopify Experience</title>
      </head>
      <body className={`${inter.className} min-h-screen bg-white antialiased`}>
        <StoreProvider>
          <UIContainer />
          <R3fSetupWrapper>{children}</R3fSetupWrapper>
        </StoreProvider>
      </body>
    </html>
  );
}
