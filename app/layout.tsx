import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "TechNova IT Consultancy - Strategic Technology Solutions",
  description: "Leading IT consultancy specializing in digital transformation, cloud solutions, cybersecurity, and enterprise software development. Transform your business with innovative technology strategies.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${dmSans.variable} antialiased`}
        style={{ fontFamily: 'var(--font-dm-sans)' }}
      >
        {children}
      </body>
    </html>
  );
}
