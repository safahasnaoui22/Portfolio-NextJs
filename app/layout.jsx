import "./globals.css";
import Header from "@/components/ui/Header";
import PageTransition from "@/components/ui/PageTransition";
import StairTransition from "@/components/ui/StairTransition";
import localFont from "next/font/local";
import { JetBrains_Mono } from "next/font/google";

const jetbrainsMono = JetBrains_Mono ({
  subsets : ["latin"],
  weight: ["100" , "200" , "300" , "400" , "500"  ,"600" , "700" , "800"],
  veriable : "--font-jetbrainsMono"
})

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Safa Dkhili",
  description: "web developer Full-Stack Digital Marketer",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={jetbrainsMono.variable}
      >
        <Header/>
        <StairTransition/>
        <PageTransition>
        {children}
        </PageTransition>
       
      </body>
    </html>
  );
}
