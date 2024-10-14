"use client";

import cookies from "js-cookie";

const PaymentButton = ({ result, pg_token }) => {
  const api =
    process.env.NEXT_PUBLIC_FRONTEND_URL +
    "/payments" +
    "?result=" +
    result +
    "&pg_token=" +
    pg_token;
  const checkout = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch(`${api}`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${cookies.get("access_token")}`,
        },
      });
      if (!res.ok) {
        console.error("Error:", res);
        alert("Failed to checkout");
      }
      window.location.href = "/";
    } catch (error) {
      console.error("Error during checkout:", error);
      alert("An error occurred during the checkout process.");
    }
  };

  return (
    <div className="d-grid">
      <button className="btn btn-lg btn-success" onClick={(e) => checkout(e)}>
        카카오 페이 결제 승인
      </button>
      <a className="btn btn-lg btn-danger" href="/">
        카카오 페이 결제 취소
      </a>
    </div>
  );
};
