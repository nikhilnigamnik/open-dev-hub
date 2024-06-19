import { Montserrat } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/NavBar";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Toaster } from "@/components/ui/sonner";
import GlobalProvider from "@/providers/GlobalProvider";
import Script from "next/script";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata = {
  metadataBase: new URL("https://www.opendevhub.xyz/"),
  title: "OpenDevHub",
  description:
    "OpenDevHub is a community of open source developers, designers, and contributors. We provide a platform for open source projects, ideas, and lists.",
  keywords: [
    "OpenDevHub",
    "Open Source",
    "Open Source Projects",
    "Open Source Community",
    "Open Source Software",
    "Open Source Development",
    "Open Source Contributions",
    "Open Source Project Ideas",
    "Open Source Project Lists",
  ],

  openGraph: {
    type: "website",
    url: "https://www.opendevhub.xyz/",
    title: "OpenDevHub",
    description:
      "OpenDevHub is a community of open source developers, designers, and contributors. We provide a platform for open source projects, ideas, and lists.",
    images: [
      {
        url: "https://www.opendevhub.xyz/banenr.png",
        width: 1200,
        height: 630,
        alt: "OpenDevHub",
      },
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-4ZJDKZYQ78"
        ></Script>
        <Script id="google-analytics">
          {`window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
  
    gtag('config', 'G-4ZJDKZYQ78');`}
        </Script>
      </head>
      <body className={montserrat.className}>
        <GlobalProvider>
          <div className="background"></div>
          <NavBar />
          <main className="mb-20">{children}</main>
        </GlobalProvider>
        <Toaster />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
