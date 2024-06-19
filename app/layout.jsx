import { Montserrat } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/NavBar";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Toaster } from "@/components/ui/sonner";
import GlobalProvider from "@/providers/GlobalProvider";
import Script from "next/script";
import { baseURL } from "@/lib/constants";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata = {
  title: {
    default: "OpenDevHub - Open Source Projects",
    template: "%s | OpenDevHub - Open Source Projects",
  },
  description:
    "OpenDevHub is a platform for open source projects, where you can find open source projects, contribute to them, and get ideas for your next open source project.",
  metadataBase: new URL(baseURL),
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
    title: "OpenDevHub - Open Source Projects",
    description:
      "OpenDevHub is a platform for open source projects, where you can find open source projects, contribute to them, and get ideas for your next open source project.",
    type: "website",
    url: baseURL,
    siteName: "OpenDevHub",
    locale: "en_US",
    type: "website",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": "-1",
      "max-image-preview": "large",
      "max-snippet": "-1",
    },
  },
  twitter: {
    title: "OpenDevHub - Open Source Projects",
    card: "summary_large_image",
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
