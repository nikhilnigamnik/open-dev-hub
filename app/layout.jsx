import { Montserrat } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/NavBar";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Toaster } from "@/components/ui/sonner";
import GlobalProvider from "@/providers/GlobalProvider";
import Script from "next/script";
import BottomNav from "@/components/BottomNav";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata = {
  title: "OpenDevHub",
  description: "OpenDevHub is a platform for open source projects.",
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
          <BottomNav />
        </GlobalProvider>
        <Toaster />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
