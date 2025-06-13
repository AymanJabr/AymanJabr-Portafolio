import type { Metadata } from "next";
import { Russo_One, Roboto_Mono } from "next/font/google";
import { ThemeProvider } from "./components/ThemeProvider";
import "./globals.css";
import { Toaster } from "sonner";

const russo_one = Russo_One({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-russo-one",
});

const roboto_mono = Roboto_Mono({
  subsets: ["latin"],
  weight: "500",
  variable: "--font-roboto-mono",
});

export const metadata: Metadata = {
  title: "Ayman Jabr Portfolio",
  description: "I design, develop, and deploy beautiful and modern websites, and Android applications.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${russo_one.variable} ${roboto_mono.variable} antialiased`}>
        <ThemeProvider>
          {children}
          <Toaster richColors />
        </ThemeProvider>
      </body>
    </html>
  );
}
