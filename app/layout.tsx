import type { Metadata } from "next";
import I18nProvider from "@/providers/i18n-provider";
import { Poppins } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/providers/theme-provider";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import TanstackProvider from "@/providers/tanstack-provider";
import NextTopLoader from "nextjs-toploader";
import Aos from "@/lib/aos";
import "aos/dist/aos.css";
// import Cursor from "@/components/cursor";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "UNICORP LLC",
  description: "UNICORP LLC - IT Company in Uzbekistan",
  icons: {
    icon: "/favicon.png",
  },
  authors: {
    name: "UNICORP LLC",
    url: "https://unicorp.uz/",
  },
  keywords: [
    "UNICORP LLC",
    "IT Company in Uzbekistan",
    "UNICORP LLC - IT Company in Uzbekistan",
    "UNICORP LLC - IT Company in Uzbekistan - Software Development Company",
    "UNICORP LLC - IT Company in Uzbekistan - Software Development Company - Web Development Services",
    "UNICORP LLC - IT Company in Uzbekistan - Software Development Company - Mobile App Development Services",
    "UNICORP LLC - IT Company in Uzbekistan - Software Development Company - Blockchain Development Services",
    "UNICORP LLC - IT Company in Uzbekistan - Software Development Company - Blockchain Development Services - Smart Contract Development",
    "UNICORP LLC - IT Company in Uzbekistan - Software Development Company - Blockchain Development Services - Smart Contract Development - DApp Development",
    "UNICORP LLC - IT Company in Uzbekistan - Software Development Company - Blockchain Development Services - Smart Contract Development - DApp Development - NFT Development",
    "UNICORP LLC - IT Company in Uzbekistan - Software Development Company - Blockchain Development Services - Smart Contract Development - DApp Development - NFT Development - Crypto Development",
  ],
  openGraph: {
    title: "UNICORP LLC - IT Company in Uzbekistan",
    description: "UNICORP LLC is a leading IT company in Uzbekistan.",
    url: "https://unicorp.uz/",
    siteName: "UNICORP LLC",
    images: [
      {
        url: "/favicon.png",
        width: 800,
        height: 600,
        alt: "UNICORP LLC Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "UNICORP LLC - IT Company in Uzbekistan",
    description: "UNICORP LLC is a leading IT company in Uzbekistan.",
    images: ["/favicon.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${poppins.variable} antialiased min-h-screen overflow-x-hidden`}>
        <Aos />
        <NextTopLoader color="hsl(var(--brand))" />
        <TanstackProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            <I18nProvider>
              <Navbar />
              <main className="pt-[120px] overflow-x-hidden">{children}</main>
              <Footer />
            </I18nProvider>
          </ThemeProvider>
        </TanstackProvider>
      </body>
    </html>
  );
}
