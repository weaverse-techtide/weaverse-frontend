import Image from "next/image";
import { cookies } from "next/headers";
import KakaoPayButton from "./components/KakaoPayButton";
import { notFound, redirect } from "next/navigation";

export default async function CheckoutPage() {
  const cookie = await cookies();
  const access_token = cookie.get("access_token");
  if (!access_token) {
    redirect("/login");
  }

  const initialOrder = await fetch(
    process.env.NEXT_PUBLIC_API_URL + "/orders/",
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${access_token.value}`,
      },
    }
  )
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      return data;
    })
    .catch((error) => {
      console.error("Error:", error);
      notFound();
    });

  function formattedPrice(price) {
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  return (
    <main>
      {/* =======================
Page Banner START */}
      <section className="py-0">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="bg-light p-4 text-center rounded-3">
                <h1 className="m-0">Checkout</h1>
                {/* Breadcrumb */}
                <div className="d-flex justify-content-center">
                  <nav aria-label="breadcrumb">
                    <ol className="breadcrumb breadcrumb-dots mb-0">
                      <li className="breadcrumb-item">
                        <a href="/">Home</a>
                      </li>
                      <li className="breadcrumb-item">
                        <a href="/courses">Courses</a>
                      </li>
                      <li className="breadcrumb-item">
                        <a href="/cart">Cart</a>
                      </li>
                      <li
                        className="breadcrumb-item active"
                        aria-current="page"
                      >
                        Checkout
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
            <div className="col-xl-8 mb-4 mb-sm-0">
              {/* Alert */}
              {!access_token && (
                <div
                  className="alert alert-danger alert-dismissible d-flex justify-content-between align-items-center fade show py-2 pe-2"
                  role="alert"
                >
                  <div>
                    <i className="bi bi-exclamation-octagon-fill me-2"></i>
                    Already have an account?
                    <a href="#" className="text-reset btn-link mb-0 fw-bold">
                      Log in
                    </a>
                  </div>
                  <button
                    type="button"
                    className="btn btn-link mb-0 text-primary-hover text-end"
                    data-bs-dismiss="alert"
                    aria-label="Close"
                  >
                    <i className="bi bi-x-lg"></i>
                  </button>
                </div>
              )}

              {/* Personal info START */}
              <div className="table-responsive border-0 rounded-3">
                {/* Table START */}
                <table className="table align-middle p-4 mb-0">
                  {/* Table head */}
                  {/* Table body START */}
                  <tbody className="border-top-0">
                    {/* Table item */}
                    {initialOrder.order_items.map((order_item, index) => (
                      <tr key={index}>
                        {/* Course item */}
                        <td>
                          <div className="d-lg-flex align-items-center">
                            {/* Image */}
                            <div className="w-100px w-md-80px mb-2 mb-md-0">
                              <Image
                                src={order_item.thumbnail || "/"}
                                width={100}
                                height={75}
                                alt="Course Image"
                              />
                            </div>
                            {/* Title */}
                            <h6 className="mb-0 ms-lg-3 mt-2 mt-lg-0">
                              {order_item.course && (
                                <a href={"/courses/" + order_item.course}>
                                  {order_item.get_item_name}
                                </a>
                              )}
                              {order_item.curriculum && (
                                <a
                                  href={"/curriculums/" + cart_item.curriculum}
                                >
                                  {order_item.get_item_name}
                                </a>
                              )}
                            </h6>
                          </div>
                        </td>

                        {/* Amount item */}
                        <td className="text-end">
                          <h5 className="text-success mb-0">
                            {formattedPrice(order_item.get_price)} 원
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
              {/* Personal info END */}
            </div>
            {/* Main content END */}

            {/* Right sidebar START */}
            <div className="col-xl-4">
              <div className="row mb-0">
                <div className="col-md-6 col-xl-12">
                  {/* Order summary START */}
                  <div className="card card-body shadow p-4 mb-4">
                    {/* Title */}
                    <h4 className="mb-4">Order Summary</h4>
                    <hr /> {/* Divider */}
                    {/* Price and detail */}
                    <ul className="list-group list-group-borderless mb-2">
                      <li className="list-group-item px-0 d-flex justify-content-between">
                        <span className="h5 mb-0">Total</span>
                        <span className="h5 mb-0">
                          {formattedPrice(initialOrder.get_total_price)} 원
                        </span>
                      </li>
                    </ul>
                    {/* Button */}
                    <KakaoPayButton access_token={access_token.value} />
                    {/* Content */}
                    <p className="small mb-0 mt-2 text-center">
                      By completing your purchase, you agree to these
                      <a href="#">
                        <strong>Terms of Service</strong>
                      </a>
                    </p>
                  </div>
                  {/* Order summary END */}
                </div>
              </div>
              {/* Row End */}
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
