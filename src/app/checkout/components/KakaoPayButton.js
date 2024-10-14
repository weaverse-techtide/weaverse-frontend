"use client";

const KakaoPayButton = ({ access_token }) => {
  const api = process.env.NEXT_PUBLIC_FRONTEND_URL;
  const checkout = async (e) => {
    e.preventDefault();

    const res = await fetch(`${api}/payments/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${access_token}`,
      },
    }).then((res) => {
      if (res.ok) {
        window.location.href = "/";
      } else {
        console.error("Error:", res);
        alert("Failed to checkout");
      }
    });
  };

  return (
    <div className="d-grid">
      <button className="btn btn-lg btn-warning" onClick={(e) => checkout(e)}>
        카카오 페이 결제 요청
      </button>
    </div>
  );
};

export default KakaoPayButton;
