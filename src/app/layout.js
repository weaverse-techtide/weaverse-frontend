import "./globals.css";
import Header from "./components/Header";
import Script from "next/script";
import BackToTop from "./components/BackToTop";
import Footer from "./components/Footer";
import * as jwt_decode from "jwt-decode";
import { cookies } from "next/headers";

export const viewport = "width=device-width, initial-scale=1, shrink-to-fit=no";

export const metadata = {
  title: "Weaverse - ICT 교육의 새로운 패러다임",
  description: "Weaverse는 ICT 교육의 새로운 패러다임을 제시합니다.",
  charset: "utf-8",
};

export const favicon =
  "https://github.com/weniv/wenivlog_manual/blob/main/src/assets/favicon.svg";

export default function RootLayout({ children }) {
  // 쿠키에서 access_token을 가져옵니다.
  const cookiesStore = cookies();
  const access_token = cookiesStore.get("access_token");
  // access_token이 있으면 token을 decode합니다.
  let decodedToken = null;
  if (access_token) {
    try {
      decodedToken = jwt_decode(access_token);
      console.log(decodedToken);
    } catch (error) {
      console.error(error);
    }
  } else {
    console.log("access_token이 없습니다.");
  }

  return (
    <html lang="ko">
      <body>
        <Header decodedToken={decodedToken} />
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

        <Script src="/assets/vendor/aos/aos.js" />

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
