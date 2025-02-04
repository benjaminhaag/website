import type { Metadata } from "next";
import "./globals.css";
import { NavBar } from '@/components/NavBar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons'

import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
import Footer from "@/components/Footer";
import Link from "@/components/Link";
import { PostHogProvider } from "@/providers/PostHogProvider";
config.autoAddCss = false

export const metadata: Metadata = {
  title: "Benjamin Haag - IT Services",
  description: "IT Services",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <html lang="en" className="scroll-p-20 scroll-smooth text-balance">
        <head />
        <body>
          <PostHogProvider>
            <NavBar />
            <div className="flex flex-col min-h-dvh pt-16">
              <div className="grow">
                {children}
              </div>
              <Footer />
            </div>
          </PostHogProvider>
        </body>
      </html>
    </>
  );
}
