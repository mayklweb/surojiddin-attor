"use client";
import {
  Aboreto,
  Gayathri,
  Cormorant_Garamond,
  Albert_Sans,
} from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";
import MenuModal from "@/components/modal/MenuModal";
import useModal from "@/store/modal";

const gayathri = Gayathri({
  variable: "--font-gayathri",
  subsets: ["latin"],
  weight: ["100", "400", "700"],
});

const aboreto = Aboreto({
  variable: "--font-aboreto",
  subsets: ["latin"],
  weight: ["400"],
});

const albertSans = Albert_Sans({
  variable: "--font-albert-sans",
  subsets: ["latin"],
  weight: ["400"],
});

const cormorantGaramond = Cormorant_Garamond({
  variable: "--font-cormorant-garamond",
  subsets: ["latin"],
  weight: ["400"],
});


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const { isOpen } = useModal()

  return (
    <html lang="en">
      <body
        className={`${gayathri.variable} ${aboreto.variable} ${cormorantGaramond.variable} ${albertSans.variable} antialiased ${isOpen && 'overflow-y-hidden'}`}
      >
        <div className="wrapper">
          <Header />
          <main className="flex flex-col main">{children}</main>
          <Footer />
          {/* {isOpen && createPortal(, document.querySelector('.wrapper') as HTMLElement)} */}
          <MenuModal />
        </div>
      </body>
    </html>
  );
}
