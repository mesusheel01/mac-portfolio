
import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import { Button, buttonVariants } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Mac-Portfolio",
  description: "It is basically a mac inspired portfolio website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider 
        attribute='class'
        enableSystem
        defaultTheme="system"
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
