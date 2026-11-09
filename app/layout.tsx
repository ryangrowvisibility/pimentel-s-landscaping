import type { Metadata } from "next";
import { Libre_Baskerville, Source_Sans_3 } from "next/font/google";
import "./globals.css";

const head = Libre_Baskerville({ subsets: ["latin"], weight: ["700"], variable: "--font-head-src" });
const body = Source_Sans_3({ subsets: ["latin"], weight: ["400", "600", "700"], variable: "--font-body-src" });

export const metadata: Metadata = {
  title: "Pimentel's Landscaping | Landscaping & Backyard Makeovers in Bakersfield, CA | (661) 496-6849",
  description:
    "Locally owned landscaping in Bakersfield: sod and artificial grass, sprinklers and drainage, decorative rock, grading, tree work, gardening and yard clean-ups. Rated 4.4 on Google. Call (661) 496-6849.",
  openGraph: {
    title: "Pimentel's Landscaping | Bakersfield, CA",
    description: "Backyard makeovers, sod, sprinklers, drainage and tree work from a locally owned Bakersfield crew. Call (661) 496-6849.",
    type: "website",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-US" className={`${head.variable} ${body.variable}`}>
      <body>{children}</body>
    </html>
  );
}
