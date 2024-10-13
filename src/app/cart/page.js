import Image from "next/image";
import { cookies } from "next/headers";
import { notFound } from "next/navigation";

export default async function CartPage() {
  const cookie = await cookies();
  const access_token = cookie.get("access_token");
  if (!access_token) {
    return notFound();
  }
  const initialCart = await fetch(process.env.NEXT_PUBLIC_API_URL + "/cart", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${access_token.value}`,
    },
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      return data;
    })
    .catch((error) => {
      console.error("Error:", error);
      return notFound();
    });

  function formattedPrice(price) {
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  const checkout = await fetch(process.env.NEXT_PUBLIC_API_URL + "/payments/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${access_token.value}`,
    },
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      return data;
    })
    .catch((error) => {
      console.error("Error:", error);
      return notFound();
    });

  return (
    <main>
      {/* =======================
Page Banner START */}
      <section className="py-0">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="bg-light p-4 text-center rounded-3">
                <h1 className="m-0">My cart</h1>
                {/* Breadcrumb */}
                <div className="d-flex justify-content-center">
                  <nav aria-label="breadcrumb">
                    <ol className="breadcrumb breadcrumb-dots mb-0">
                      <li className="breadcrumb-item">
                        <a href="#">Home</a>
                      </li>
                      <li className="breadcrumb-item">
                        <a href="#">Courses</a>
                      </li>
                      <li
                        className="breadcrumb-item active"
                        aria-current="page"
                      >
                        Cart
                      </li>
                    </ol>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* =======================
Page Banner END */}

      {/* =======================
Page content START */}
      <section className="pt-5">
        <div className="container">
          <div className="row g-4 g-sm-5">
            {/* Main content START */}
            <div className="col-lg-8 mb-4 mb-sm-0">
              <div className="card card-body p-4 shadow">
                <div className="table-responsive border-0 rounded-3">
                  {/* Table START */}
                  <table className="table align-middle p-4 mb-0">
                    {/* Table head */}
                    {/* Table body START */}
                    <tbody className="border-top-0">
                      {/* Table item */}
                      {initialCart.cart_items.map((cart_item, index) => (
                        <tr key={index}>
                          {/* Course item */}
                          <td>
                            <div className="d-lg-flex align-items-center">
                              {/* Image */}
                              <div className="w-100px w-md-80px mb-2 mb-md-0">
                                <Image
                                  src={cart_item.get_image_url || "/"}
                                  width={100}
                                  height={75}
                                  alt="Course Image"
                                />
                              </div>
                              {/* Title */}
                              <h6 className="mb-0 ms-lg-3 mt-2 mt-lg-0">
                                {cart_item.course && (
                                  <a href={"/courses/" + cart_item.course}>
                                    {cart_item.get_item_name}
                                  </a>
                                )}
                                {cart_item.curriculum && (
                                  <a
                                    href={
                                      "/curriculums/" + cart_item.curriculum
                                    }
                                  >
                                    {cart_item.get_item_name}
                                  </a>
                                )}
                              </h6>
                            </div>
                          </td>

                          {/* Amount item */}
                          <td className="text-end">
                            <h5 className="text-success mb-0">
                              {formattedPrice(cart_item.get_price)} 원
                            </h5>
                          </td>
                          {/* Action item */}
                          <td className="text-end">
                            <button className="btn btn-sm btn-danger-soft px-2 mb-0">
                              <i className="fas fa-fw fa-times"></i>
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                {/* Coupon input and button */}
                <div className="row g-3 mt-2">
                  <div className="col-md-6">
                    <div className="input-group">
                      <input
                        className="form-control form-control "
                        placeholder="COUPON CODE"
                      />
                      <button type="button" className="btn btn-primary">
                        Apply coupon
                      </button>
                    </div>
                  </div>
                  {/* Update button */}
                  <div className="col-md-6 text-md-end">
                    <button className="btn btn-primary mb-0" disabled>
                      Update cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
            {/* Main content END */}

            {/* Right sidebar START */}
            <div className="col-lg-4">
              {/* Card total START */}
              <div className="card card-body p-4 shadow">
                {/* Title */}
                <h4 className="mb-3">Cart Total</h4>

                {/* Price and detail */}
                <ul className="list-group list-group-borderless mb-2">
                  <li className="list-group-item px-0 d-flex justify-content-between">
                    <span className="h6 fw-light mb-0">Original Price</span>
                    <span className="h6 fw-light mb-0 fw-bold">
                      {formattedPrice(initialCart.get_total_price)}
                    </span>
                  </li>
                  <li className="list-group-item px-0 d-flex justify-content-between">
                    <span className="h5 mb-0">Total</span>
                    <span className="h5 mb-0">
                      {formattedPrice(initialCart.get_total_price)}
                    </span>
                  </li>
                </ul>

                {/* Button */}
                <div className="d-grid">
                  <a href="/checkout" className="btn btn-lg btn-success">
                    Proceed to Checkout
                  </a>
                </div>

                {/* Content */}
                <p className="small mb-0 mt-2 text-center">
                  By completing your purchase, you agree to these{" "}
                  <a href="#">
                    <strong>Terms of Service</strong>
                  </a>
                </p>
              </div>
              {/* Card total END */}
            </div>
            {/* Right sidebar END */}
          </div>
          {/* Row END */}
        </div>
      </section>
      {/* =======================
Page content END */}
    </main>
  );
}
