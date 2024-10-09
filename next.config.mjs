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
    ],
  },
};

export default nextConfig;
