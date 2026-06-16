import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const inter = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

// ===== UPDATE YOUR SEO METADATA HERE =====
export const metadata: Metadata = {
  title: "Subham Dangar | Data Science & AI Student",
  description:
    "Portfolio of Subham Dangar — MSc Data Science & AI student interested in Machine Learning, Deep Learning, RAG Systems, Agentic AI, and Distributed Computing.",
  keywords: [
    "AI Engineer",
    "Machine Learning",
    "Deep Learning",
    "Data Scientist",
    "RAG",
    "Agentic AI",
    "Portfolio",
    "Subham Dangar",
  ],
  authors: [{ name: "Subham Dangar" }],
  creator: "Subham Dangar",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://subhamdangar.vercel.app", // ===== REPLACE WITH YOUR DEPLOYED URL =====
    title: "Subham Dangar | Data Science & AI Student",
    description:
      "Portfolio of Subham Dangar — MSc Data Science & AI student interested in Machine Learning, Deep Learning, RAG Systems, Agentic AI, and Distributed Computing.",
    siteName: "Subham Dangar Portfolio",
  },
  // twitter: {
  //   card: "summary_large_image",
  //   title: "Subham Dangar | Data Science & AI Student",
  //   description:
  //     "AI/ML Engineer specializing in Deep Learning, RAG Systems, Agentic AI, and Distributed Computing.",
  // },

  twitter: {
    card: "summary_large_image",
    title: "Subham Dangar | Data Science & AI Student",
    description:
      "MSc Data Science & AI student interested in Machine Learning, Deep Learning, RAG Systems, Agentic AI, and Distributed Computing.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${jetbrainsMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#0a0a0f] text-slate-200">
        {children}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-5MZHCQ4BZ4"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-5MZHCQ4BZ4');
          `}
        </Script>
      </body>
    </html>
  );
}
