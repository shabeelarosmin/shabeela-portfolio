import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Shabeela | Creative Portfolio",
  description:
    "Explore Shabeela's portfolio, skills, projects and creative work.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
