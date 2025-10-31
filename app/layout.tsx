import type { Metadata } from "next";
import { Inter, Lora, EB_Garamond } from "next/font/google";
import "./globals.css";
import Providers from "@/components/layout/ThemeProvider";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const lora = Lora({ subsets: ["latin"], variable: "--font-lora" });
const ebg = EB_Garamond({ subsets: ["latin"], style: ["italic", "normal"], variable: "--font-ebg" });

export const metadata: Metadata = {
  title: {
    default: "HomePage — Odonate",
    template: "%s — Odonate",
  },
  description: "Solution informatique et de mise en ligne",
  openGraph: {
    title: "Odonate",
    description: "Solution informatique et de mise en ligne",
    images: ["/logo.png"],
  },
  metadataBase: new URL("https://odonate.fr"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
     <html lang="fr" suppressHydrationWarning>
       <body className={`${inter.variable} ${lora.variable} ${ebg.variable} font-sans min-h-screen w-full overflow-hidden`}>
         <Providers>{children}</Providers>
       </body>
     </html>
   );
 }
