import type { Metadata, Viewport } from "next";
import { Inter, Montserrat } from "next/font/google";
import "./globals.css";
import { site } from "@/lib/site";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const montserrat = Montserrat({ subsets: ["latin"], weight: ["600", "700", "800", "900"], variable: "--font-montserrat" });

export const metadata: Metadata = {
  title: `${site.name} — ${site.tagline}`,
  description: site.description,
};

export const viewport: Viewport = { themeColor: "#f5f7fb" };

// Runs before paint so a saved dark preference doesn't flash light first.
const themeScript = `try{if(localStorage.getItem("theme")==="dark")document.documentElement.classList.add("dark")}catch(e){}`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${montserrat.variable}`} suppressHydrationWarning>
      <head>
        <meta name="google-site-verification" content="JCW-pfBr6MkyDIgwvMvkxxYa9cTk5It9P6N6AvzF0nU" />
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="font-sans antialiased overflow-x-clip">{children}</body>
    </html>
  );
}
