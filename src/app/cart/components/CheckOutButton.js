"use client";

const CheckOutButton = ({ access_token }) => {
  const api = process.env.NEXT_PUBLIC_FRONTEND_URL;

  const checkout = async (e) => {
    e.preventDefault();
    return await fetch(`${api}/payments/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${access_token}`,
      },
      body: JSON.stringify({
        from_cart: true,
      }),
    })
      .then((res) => {
        if (res.ok) {
          console.log("here");
          window.location.href = "/checkout";
        } else {
          throw new Error("Failed to checkout");
        }
      })
      .catch((error) => {
        console.error("Error:", error);
        alert("Failed to checkout");
      });
  };

  return (
    <div className="d-grid">
      <button className="btn btn-lg btn-success" onClick={(e) => checkout(e)}>
        카카오 페이 결제 요청
      </button>
    </div>
  );
};

export default CheckOutButton;
