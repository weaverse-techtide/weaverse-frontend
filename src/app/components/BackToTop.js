"use client";

import React, { useEffect } from "react";

const BackToTop = () => {
  const handleScroll = () => {
    const button = document.querySelector(".back-top");
    if (window.scrollY > 300) {
      button.style.display = "block";
    } else {
      button.style.display = "none";
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className="back-top"
      onClick={scrollToTop}
      style={{ display: "none", cursor: "pointer" }}
    >
      <i className="bi bi-arrow-up-short position-absolute top-50 start-50 translate-middle"></i>
    </div>
  );
};

export default BackToTop;
