import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Header } from "@/components/layout/header/Header";

import "./globals.css";
import { ThemeProvider } from "next-themes";
import { Footer } from "@/components/layout/footer";

import { LoaderProvider } from "@/components/providers/LoaderProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Palina Vasilevich | Frontend Developer",
  description:
    "Frontend Developer specializing in React and TypeScript. Building scalable, maintainable, and user-focused web applications.",
  icons: {
    icon: "/icons/planet.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        suppressHydrationWarning
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col min-h-screen`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <LoaderProvider>
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
          </LoaderProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
