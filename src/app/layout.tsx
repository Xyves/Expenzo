import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import Providers from "@/lib/Providers";
import { ClerkProvider } from "@clerk/nextjs";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Expenzo",
  description: "Finance tracker",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={geistSans.className}>
      <body className="h-screen w-auto" id="root">
        <ClerkProvider signInUrl="/authentication" signUpUrl="/registration">
          <Providers>{children}</Providers>
        </ClerkProvider>
      </body>
    </html>
  );
}
