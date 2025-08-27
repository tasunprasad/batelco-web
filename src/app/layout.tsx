import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";
import type { Metadata } from "next";
import { Martel_Sans } from "next/font/google";
import "./globals.css";
import { ReduxProvider } from "@/store/Provider";

const martelSans = Martel_Sans({
  weight: ["200", "300", "400", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Batelco - Leading Telecommunications Provider",
  description:
    "Connect to Bahrain's fast, reliable network with our mobile, home, and business solutions.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={martelSans.className}>
        <ReduxProvider>
          <Navigation />
          {children}
          <Footer />
        </ReduxProvider>
      </body>
    </html>
  );
}
