import type { Metadata } from "next";
import { Sora } from "next/font/google";
import "./globals.css";
import ResNav from "@/components/Home/Navbar/ResNav";
import Footer from "@/components/Home/Footer/Footer";

const font = Sora({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Web Portfolio",
  description: "the portofolio of a web developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="custom-scrollbar">
      <body
        className={font.className}>
          <ResNav/>
          {children}
          <Footer/>
          </body>
    </html>
  );
}
