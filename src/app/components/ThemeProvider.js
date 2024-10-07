"use client"; // 클라이언트 컴포넌트로 설정

import { useEffect } from "react";

// 로컬 스토리지에서 테마를 가져오는 함수
const getStoredTheme = () => localStorage.getItem("theme");

// 선호하는 테마를 결정하는 함수
const getPreferredTheme = () => {
  const storedTheme = getStoredTheme();
  if (storedTheme) {
    return storedTheme;
  }
  return window.matchMedia("(prefers-color-scheme: light)").matches
    ? "light"
    : "light";
};

// 테마를 설정하는 함수
const setTheme = (theme) => {
  if (
    theme === "auto" &&
    window.matchMedia("(prefers-color-scheme: dark)").matches
  ) {
    document.documentElement.setAttribute("data-bs-theme", "dark");
  } else {
    document.documentElement.setAttribute("data-bs-theme", theme);
  }
};

// 테마 아이콘 및 버튼 상태를 업데이트하는 함수
const showActiveTheme = (theme) => {
  const activeThemeIcon = document.querySelector(".theme-icon-active use");
  const btnToActive = document.querySelector(
    `[data-bs-theme-value="${theme}"]`
  );
  const svgOfActiveBtn = btnToActive
    .querySelector(".mode-switch use")
    .getAttribute("href");

  document.querySelectorAll("[data-bs-theme-value]").forEach((element) => {
    element.classList.remove("active");
  });

  btnToActive.classList.add("active");
  activeThemeIcon.setAttribute("href", svgOfActiveBtn);
};

// 테마 전환 버튼 이벤트 리스너를 초기화하는 함수
const initializeThemeToggle = () => {
  document.querySelectorAll("[data-bs-theme-value]").forEach((toggle) => {
    toggle.addEventListener("click", () => {
      const theme = toggle.getAttribute("data-bs-theme-value");
      localStorage.setItem("theme", theme);
      setTheme(theme);
      showActiveTheme(theme);
    });
  });
};

// 미디어 쿼리 변화를 감지하여 테마를 변경하는 함수
const detectMediaQueryChange = () => {
  window
    .matchMedia("(prefers-color-scheme: dark)")
    .addEventListener("change", () => {
      const storedTheme = getStoredTheme();
      if (storedTheme !== "light" && storedTheme !== "dark") {
        setTheme(getPreferredTheme());
      }
    });
};

const ThemeProvider = ({ children }) => {
  useEffect(() => {
    setTheme(getPreferredTheme());

    window.addEventListener("DOMContentLoaded", () => {
      const el = document.querySelector(".theme-icon-active");
      if (el != undefined && el != null) {
        showActiveTheme(getPreferredTheme());
        detectMediaQueryChange();
        initializeThemeToggle();
      }
    });
  }, []);

  return <>{children}</>;
};

export default ThemeProvider;
