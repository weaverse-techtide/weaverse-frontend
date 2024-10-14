"use client";

const KakaoPayButton = () => {
  const api = process.env.NEXT_PUBLIC_FRONTEND_URL;
  const checkoutApi = `${api}/payments/`;

  return (
    <form className="d-grid" action={checkoutApi} method="POST">
      <button className="btn btn-lg btn-warning" type="submit">
        카카오 페이 결제 요청
      </button>
    </form>
  );
};

export default KakaoPayButton;
