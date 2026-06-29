import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Washing Machine & AC Repair | Gummidipoondi, Redhills, Periyapalayam | JP Service Center",
  description:"Same-day doorstep washing machine and AC repair services in Gummidipoondi, Redhills, Periyapalayam, Uthukottai and Thiruvallur. Expert technicians for LG, Samsung, IFB, Whirlpool, Bosch and all major brands. Call +91 95852 89293.",
  keywords: [
  "washing machine repair Gummidipoondi",
  "washing machine repair Redhills",
  "washing machine repair Periyapalayam",
  "washing machine repair Uthukottai",
  "washing machine repair Thiruvallur",
  "AC service Gummidipoondi",
  "LG washing machine service",
  "Samsung washing machine repair",
],

  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1.0,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable} scroll-smooth`}>
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0..1,0"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased min-h-screen bg-background text-on-background flex flex-col">
        {children}
      </body>
    </html>
  );
}
