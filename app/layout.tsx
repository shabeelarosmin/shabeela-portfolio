import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Shabeela Rosmin | Web Developer",
  description:
    "Welcome to Shabeela Rosmin's personal portfolio. Explore my skills, projects, and education.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
