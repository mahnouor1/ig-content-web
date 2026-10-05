import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "JEV / Outreach CRM — Technical Case Study",
  description: "I built JEV into my own custom outreach CRM. A lead classification layer that runs directly inside the outreach pipeline I built.",
  keywords: ["JEV", "Outreach CRM", "AI Engineer", "Lead Classification", "Next.js", "Supabase", "PostgreSQL"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${jetbrainsMono.variable} antialiased`}>
      <body className="min-h-screen bg-[#ECEAE3] text-[#111111] font-mono selection:bg-[#FBF3B9] selection:text-[#111111]">
        {children}
      </body>
    </html>
  );
}
