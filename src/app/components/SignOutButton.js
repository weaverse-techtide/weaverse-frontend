"use client";

import { useRouter } from "next/navigation";
import Cookies from "js-cookie";

const SignOutButton = () => {
  const router = useRouter();

  const handleSignOut = async () => {
    try {
      // 백엔드 서버로 로그아웃 요청
      await fetch(`${process.env.NEXT_PUBLIC_FRONTEND_URL}/logout/`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${Cookies.get("refresh_token")}`,
        },
      });
    } catch (error) {
      console.error("로그아웃 실패:", error);
    }

    // 쿠키에서 accesstoken 삭제
    Cookies.remove("access_token");
    Cookies.remove("refresh_token");

    // 홈으로 이동
    window.location.href = "/";
  };

  return (
    <li>
      <a
        className="dropdown-item bg-danger-soft-hover"
        href="#"
        onClick={handleSignOut}
      >
        <i className="bi bi-power fa-fw me-2"></i>Sign Out
      </a>
    </li>
  );
};

export default SignOutButton;
