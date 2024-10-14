import "./globals.css";
import Header from "./components/Header";
import Script from "next/script";
import BackToTop from "./components/BackToTop";
import Footer from "./components/Footer";
import { jwtDecode } from "jwt-decode";
import { cookies } from "next/headers";

export const viewport = "width=device-width, initial-scale=1, shrink-to-fit=no";

export const metadata = {
  title: "Weaverse - ICT 교육의 새로운 패러다임",
  description: "Weaverse는 ICT 교육의 새로운 패러다임을 제시합니다.",
  charset: "utf-8",
};

export const favicon =
  "https://github.com/weniv/wenivlog_manual/blob/main/src/assets/favicon.svg";

export default async function RootLayout({ children }) {
  // 쿠키에서 access_token을 가져옵니다.
  const cookiesStore = await cookies();
  const access_token = cookiesStore.get("access_token");
  const refresh_token = cookiesStore.get("refresh_token");
  // access_token이 있으면 token을 decode합니다.
  let decodedToken = null;
  if (access_token) {
    try {
      decodedToken = jwtDecode(access_token.value);
      if (decodedToken.exp < Date.now() / 1000) {
        decodedToken = null;
      }
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
        <Script src="/assets/vendor/sticky-js/sticky.min.js" />
        <Script src="/assets//vendor/plyr/plyr.js" />
        <Script src="/assets/vendor/aos/aos.js" />
        <Script src="/assets/vendor/choices/js/choices.min.js" />
        <Script src="/assets/vendor/quill/js/quill.min.js" />
        <Script src="/assets/vendor/stepper/js/bs-stepper.min.js" />
        <Script src="/assets/vendor/apexcharts/js/apexcharts.min.js" />

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
