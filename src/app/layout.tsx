import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://simplified.org"),
  title: {
    default: "Simplified.org - Tech Bootcamp Online & Machine Learning Bootcamp",
    template: "%s | Simplified.org",
  },
  description: "The world's most effective education platform for landing high-paying tech roles. Job guarantee, 1:1 mentorship, AI-powered coursework.",
  keywords: [
    "machine learning bootcamp",
    "tech bootcamp online",
    "coding bootcamp",
    "data science bootcamp",
    "software engineering bootcamp",
    "career change to tech",
    "no degree tech jobs",
    "tech career training",
    "AI automation bootcamp",
    "UX design bootcamp",
  ],
  authors: [{ name: "Simplified.org" }],
  creator: "Simplified.org",
  publisher: "Simplified.org",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://simplified.org",
    siteName: "Simplified.org",
    title: "Simplified.org - Tech Bootcamp Online & Machine Learning Bootcamp",
    description: "The world's most effective education platform for landing high-paying tech roles. Job guarantee, 1:1 mentorship, AI-powered coursework.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Simplified.org - Tech Bootcamp",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Simplified.org - Tech Bootcamp Online",
    description: "Land high-paying tech roles with job guarantee & 1:1 mentorship",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code", // Replace with actual code
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} font-sans antialiased`}
        data-keywords="machine-learning-bootcamp tech-career-training no-degree-tech"
      >
        {children}
      </body>
    </html>
  );
}
