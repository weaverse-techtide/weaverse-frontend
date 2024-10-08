"use client";

import "./globals.css";
import React from "react";
import Header from "./components/Header";
import Script from "next/script";
import BackToTop from "./components/BackToTop";
import Footer from "./components/Footer";
import Image from "next/image";

export const viewport = "width=device-width, initial-scale=1, shrink-to-fit=no";

export const metadata = {
  title: "Weaverse - ICT 교육의 새로운 패러다임",
  description: "Weaverse는 ICT 교육의 새로운 패러다임을 제시합니다.",
  charset: "utf-8",
};

export const favicon =
  "https://github.com/weniv/wenivlog_manual/blob/main/src/assets/favicon.svg";

export default function GlobalError({ error, reset }) {
  return (
    <html lang="ko">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content={viewport} />
        <meta name="description" content={metadata.description} />
        <link rel="icon" href={favicon} />
        <title>{metadata.title}</title>

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="True"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Heebo:wght@400;500;700&family=Roboto:wght@400;500;700&display=swap"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="/assets/vendor/font-awesome/css/all.min.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="/assets/vendor/bootstrap-icons/bootstrap-icons.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="/assets/vendor/aos/aos.css"
        />

        <link rel="stylesheet" type="text/css" href="/assets/css/style.css" />
      </head>

      <body>
        <Header />
        <main>
          <section className="pt-0 pt-lg-5 position-relative overflow-hidden my-auto">
            <figure className="position-absolute bottom-0 start-0">
              <svg width="822.2px" height="301.9px" viewBox="0 0 822.2 301.9">
                <path
                  className="fill-warning opacity-5"
                  d="M752.5,51.9c-4.5,3.9-8.9,7.8-13.4,11.8c-51.5,45.3-104.8,92.2-171.7,101.4c-39.9,5.5-80.2-3.4-119.2-12.1 c-32.3-7.2-65.6-14.6-98.9-13.9c-66.5,1.3-128.9,35.2-175.7,64.6c-11.9,7.5-23.9,15.3-35.5,22.8c-40.5,26.4-82.5,53.8-128.4,70.7 c-2.1,0.8-4.2,1.5-6.2,2.2L0,301.9c3.3-1.1,6.7-2.3,10.2-3.5c46.1-17,88.1-44.4,128.7-70.9c11.6-7.6,23.6-15.4,35.4-22.8 c46.7-29.3,108.9-63.1,175.1-64.4c33.1-0.6,66.4,6.8,98.6,13.9c39.1,8.7,79.6,17.7,119.7,12.1C634.8,157,688.3,110,740,64.6 c4.5-3.9,9-7.9,13.4-11.8C773.8,35,797,16.4,822.2,1l-0.7-1C796.2,15.4,773,34,752.5,51.9z"
                ></path>
              </svg>
            </figure>
            <figure className="position-absolute top-0 end-0 d-none d-xl-block">
              <svg width="822.2px" height="301.9px" viewBox="0 0 822.2 301.9">
                <path
                  className="fill-danger opacity-3"
                  d="M752.5,51.9c-4.5,3.9-8.9,7.8-13.4,11.8c-51.5,45.3-104.8,92.2-171.7,101.4c-39.9,5.5-80.2-3.4-119.2-12.1 c-32.3-7.2-65.6-14.6-98.9-13.9c-66.5,1.3-128.9,35.2-175.7,64.6c-11.9,7.5-23.9,15.3-35.5,22.8c-40.5,26.4-82.5,53.8-128.4,70.7 c-2.1,0.8-4.2,1.5-6.2,2.2L0,301.9c3.3-1.1,6.7-2.3,10.2-3.5c46.1-17,88.1-44.4,128.7-70.9c11.6-7.6,23.6-15.4,35.4-22.8 c46.7-29.3,108.9-63.1,175.1-64.4c33.1-0.6,66.4,6.8,98.6,13.9c39.1,8.7,79.6,17.7,119.7,12.1C634.8,157,688.3,110,740,64.6 c4.5-3.9,9-7.9,13.4-11.8C773.8,35,797,16.4,822.2,1l-0.7-1C796.2,15.4,773,34,752.5,51.9z"
                ></path>
              </svg>
            </figure>

            <div className="container position-relative">
              <div className="row g-5 align-items-center justify-content-center">
                <div className="col-lg-5">
                  <h1 className="mt-4 mt-lg-0">지금 열심히 작업 중입니다!</h1>
                  <p>
                    Weaverse는 ICT 교육의 새로운 패러다임을 제시합니다. 빠른
                    시일 내에 다시 찾아뵙겠습니다.
                  </p>
                  <div className="overflow-hidden mt-4">
                    <p className="mb-1 h6 fw-light text-start">런칭 진행률</p>
                    <div className="progress progress-md progress-percent-bg bg-light">
                      <div
                        className="progress-bar progress-bar-striped bg-blue aos"
                        data-aos="slide-right"
                        data-aos-delay="200"
                        data-aos-duration="1000"
                        data-aos-easing="ease-in-out"
                        role="progressbar"
                        aria-valuenow="85"
                        aria-valuemin="0"
                        aria-valuemax="100"
                        style={{ width: "85%" }}
                      >
                        <span className="progress-percent text-white">85%</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-lg-7 text-center">
                  <Image
                    src="/assets/images/element/coming-soon.svg"
                    className="h-300px h-sm-400px h-md-500px h-xl-700px"
                    alt=""
                    width={400}
                    height={400}
                  />
                </div>
              </div>
            </div>
          </section>
        </main>
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
