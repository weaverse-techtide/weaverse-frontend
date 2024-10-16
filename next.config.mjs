/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.gravatar.com", // Gravatar 도메인
        port: "", // 기본 포트 (HTTPS의 경우 빈 문자열)
        pathname: "/avatar/**", // Gravatar에서의 이미지 경로 패턴
      },
      {
        //https://bootcamp.weniv.co.kr/images/camps/frontend-est/thumbnail.webp
        protocol: "https",
        hostname: "bootcamp.weniv.co.kr",
        port: "", // 기본 포트 (HTTPS의 경우 빈 문자열)
      },
      {
        protocol: "https",
        hostname: "paullab.co.kr",
        port: "", // 기본 포트 (HTTPS의 경우 빈 문자열)
      },
      {
        protocol: "https",
        hostname: "cdn.travie.com",
        port: "", // 기본 포트 (HTTPS의 경우 빈 문자열)
      },
      {
        protocol: "https",
        hostname: "weaverse-techtide.s3.amazonaws.com",
        port: "", // 기본 포트 (HTTPS의 경우 빈 문자열)
      },
    ],
  },
};

export default nextConfig;
