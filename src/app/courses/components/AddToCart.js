"use client";

import cookies from "js-cookie";

const AddToCart = ({ id }) => {
  const addToCart = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_FRONTEND_URL}/cart`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${cookies.get("access_token")}`,
      },
      body: JSON.stringify({
        course: id,
      }),
    });
    if (res.ok) {
      window.location.href = "/cart";
    } else {
      alert("Failed to add to cart");
    }
  };

  return (
    <button className="btn btn-outline-primary" onClick={addToCart}>
      Add to cart
    </button>
  );
};

export default AddToCart;
