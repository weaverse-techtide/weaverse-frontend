import "./globals.css";
import Header from "./components/Header";
import Script from "next/script";
import BackToTop from "./components/BackToTop";
import Footer from "./components/Footer";

export const viewport = "width=device-width, initial-scale=1, shrink-to-fit=no";

export const metadata = {
  title: "Weaverse - ICT 교육의 새로운 패러다임",
  description: "Weaverse는 ICT 교육의 새로운 패러다임을 제시합니다.",
  charset: "utf-8",
};

export const favicon =
  "https://github.com/weniv/wenivlog_manual/blob/main/src/assets/favicon.svg";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />
        {/* Back to Top */}
        <BackToTop />
        {/* Bootstrap JS */}
        <Script src="/assets/vendor/bootstrap/dist/js/bootstrap.bundle.min.js" />
        {/* Vendors */}
        <Script src="/assets/vendor/tiny-slider/tiny-slider.js" />
        <Script src="/assets/vendor/glightbox/js/glightbox.js" />
        <Script src="/assets/vendor/purecounterjs/dist/purecounter_vanilla.js" />

        {/* Template Functions */}
        <Script src="/assets/js/functions.js" />

        {/* Theme Provider */}
        <Script
          src="/assets/js/theme_provider.js"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
