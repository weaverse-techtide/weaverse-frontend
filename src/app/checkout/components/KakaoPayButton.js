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
      if (!res.ok) {
        console.error("Error:", res);
        alert("Failed to checkout");
      }

      const data = await res.json();

      // 리다이렉션을 위한 URL이 있다면 해당 URL로 이동
      if (data.next_redirect_pc_url) {
        const success = confirm("결제를 진행하시겠습니까?");
        if (success) {
          await fetch(data.next_redirect_pc_url, {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${access_token}`,
            },
          })
            .then((res) => {
              if (res.ok) {
                console.log("here");
                window.location.href = "/";
              } else {
                throw new Error("Failed to checkout");
              }
            })
            .catch((error) => {
              console.error("Error:", error);
              alert("Failed to checkout");
            });
        }
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
