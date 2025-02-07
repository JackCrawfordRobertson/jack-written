

"use client";

import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/TogDark/ThemeProvider";
import { AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";

const inter = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});



export default function RootLayout({ children }) {
  // Key the AnimatePresence by pathname for page-to-page transitions
  const pathname = usePathname();

  return (
    <html lang="en">
      <body
        className={`${inter.variable} font-sans antialiased bg-background text-foreground`}
      >
        <ThemeProvider>
          {/* 
            AnimatePresence around the main content.
            If you want page transitions, 
            set a key on the element that changes (e.g. pathname).
          */}
          <AnimatePresence mode="wait" initial={false}>
            <main key={pathname} className="min-h-screen">
              {children}
            </main>
          </AnimatePresence>
        </ThemeProvider>
      </body>
    </html>
  );
}