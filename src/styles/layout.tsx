import type React from "react";
import { Inter } from "next/font/google";
import "./globals.css";
//import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Charlie Junior | Software Developer",
  description:
    "Personal portfolio of Charlie Junior, a software developer specializing in React and modern web technologies.",
  openGraph: {
    title: "Charlie Junior | Software Developer",
    description:
      "Personal portfolio of Charlie Junior, a software developer specializing in React and modern web technologies.",
    url: "https://charliejunior.dev",
    siteName: "Charlie Junior Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Charlie Junior Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        {/* <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
        {children}
        </ThemeProvider> */}
        {children}
      </body>
    </html>
  );
}
