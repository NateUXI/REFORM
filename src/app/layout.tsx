import type { Metadata } from "next";
import Footer from "@/components/Footer";
import LayeredWaves from "@/components/LayeredWaves";
import Navigation from "@/components/Navigation";
import ScrollReveal from "@/components/ScrollReveal";
import "./framer.css";
import "./globals.css";

const title = "Reform, The infinite canvas for all designers";
const description =
  "Board images, brainstorm on an infinite canvas, and keep your ideas ready anywhere with Reform cloud sync.";

export const metadata: Metadata = {
  title,
  description,
  icons: { icon: "/images/REFORM_LOGO.svg" },
  openGraph: { type: "website", title, description },
  twitter: { card: "summary_large_image", title, description },
  robots: { index: true, follow: true, "max-image-preview": "large" },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" dir="ltr">
      <body>
        {/* Site-wide frame: floating nav on top, footer and wave artwork below. */}
        <div
          className="framer-6aAoN framer-g8sek framer-N4ECo framer-16ty77c"
          data-layout-template="true"
          style={{ minHeight: "100vh", width: "auto" }}
        >
          <Navigation />
          <ScrollReveal>
            {children}
            <Footer />
          </ScrollReveal>
          <div className="framer-1a0hke9" />
          <LayeredWaves />
        </div>
      </body>
    </html>
  );
}
