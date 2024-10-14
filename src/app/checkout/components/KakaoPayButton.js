"use client";

const KakaoPayButton = ({ access_token }) => {
  const api = process.env.NEXT_PUBLIC_FRONTEND_URL;
  const checkout = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch(`${api}/payments/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${access_token}`,
        },
      });

      console.log(res);
      if (!res.ok) {
        console.error("Error:", res);
        alert("Failed to checkout");
        return;
      }

      const data = await res.json();
      console.log(data);

      // 리다이렉션을 위한 URL이 있다면 해당 URL로 이동
      if (data.next_redirect_pc_url) {
        window.location.href = data.next_redirect_pc_url;
      } else {
        alert("No redirect URL found");
      }
    } catch (error) {
      console.error("Error during checkout:", error);
      alert("An error occurred during the checkout process.");
    }
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
