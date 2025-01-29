import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/providers/theme-provider";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import TanstackProvider from "@/providers/tanstack-provider";
import NextTopLoader from 'nextjs-toploader';

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "UNICORP LLC",
  description: "UNICORP LLC - IT Company in Uzbekistan",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${poppins.variable} antialiased min-h-screen`}
      >
        <NextTopLoader color="hsl(var(--brand))" />
        <TanstackProvider>
        <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <Navbar />
              <main className="pt-[120px]">
                {children}
              </main>
            <Footer />
        </ThemeProvider>
        </TanstackProvider>
      </body>
    </html>
  );
}
