import { Montserrat } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { Toaster } from "@/components/ui/sonner";
import GlobalProvider from "@/providers/GlobalProvider";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata = {
  title: "OpenDevHub",
  description: "OpenDevHub is a platform for open source projects.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <GlobalProvider>
          <div className="background"></div>
          <NavBar />
          {children}
          <Footer />
        </GlobalProvider>
        <Toaster />
      </body>
    </html>
  );
}
