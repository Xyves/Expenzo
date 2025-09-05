import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Providers from "@/lib/Providers";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
import { ClerkProvider } from "@clerk/nextjs";

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
    <html lang="en">
      <body className="h-[100vh]" id="root">
        <ClerkProvider signInUrl="/authentication" signUpUrl="/registration">
          <Providers>{children}</Providers>
        </ClerkProvider>
      </body>
    </html>
  );
}
