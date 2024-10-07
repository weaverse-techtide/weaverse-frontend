import "./globals.css";
import Head from "next/head";
import ThemeProvider from "./components/ThemeProvider";
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

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <ThemeProvider />
      </Head>
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
      </body>
    </html>
  );
}
