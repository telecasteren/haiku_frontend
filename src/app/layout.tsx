import type { Metadata } from "next";
import { Noto_Sans } from "next/font/google";
import localFont from "next/font/local";
import "@/css/globals.css";
import { cn } from "@/lib/utils";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const notoSans = Noto_Sans({ subsets: ["latin"], variable: "--font-sans" });

const neueMachina = localFont({
  src: "../../public/font/PPNeueMachina/PPNeueMachina-Regular.otf",
  variable: "--font-heading",
});

export const metadata: Metadata = {
  title: {
    template: "%s | Haiku Coffee",
    default: "Haiku Coffee",
  },
  description: "Speciality roaster and coffee shop",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn(
        "font-sans",
        notoSans.variable,
        neueMachina.variable,
      )}
    >
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
