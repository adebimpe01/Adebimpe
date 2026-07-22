import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-display",
  subsets: ["latin"],
});


export const metadata: Metadata = {
  metadataBase: new URL("https://yourdomain.com"),
  title: "Rukayat Abdulkareem — Frontend Developer",
  description:
    "Frontend developer based in Ibadan, Nigeria, building clean, responsive web interfaces with React and Next.js. Open to entry-level and internship roles.",
  keywords: [
    "Rukayat Abdulkareem",
    "frontend developer",
    "React developer",
    "Next.js developer",
    "web developer Nigeria",
  ],
  authors: [{ name: "Rukayat Abdulkareem" }],
  openGraph: {
    title: "Rukayat Abdulkareem — Frontend Developer",
    description:
      "Frontend developer based in Ibadan, Nigeria, building clean, responsive web interfaces with React and Next.js.",
    url: "https://yourdomain.com",
    siteName: "Rukayat Abdulkareem",
    images: [{ url: "/profile.jpg", width: 1200, height: 630 }],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rukayat Abdulkareem — Frontend Developer",
    description:
      "Frontend developer based in Ibadan, Nigeria, building clean, responsive web interfaces.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body className="font-body">{children}</body>
    </html>
  );
}