import Image from "next/image";

export default function CoursesPage() {
  return (
    <main>
      {/* =======================
Page Banner START */}
      <section
        class="bg-blue align-items-center d-flex"
        style={{
          background:
            "url(assets/images/pattern/04.png) no-repeat center center",
          backgroundSize: "cover",
        }}
      >
        <div class="container">
          <div class="row">
            <div class="col-12 text-center">
              {/* Title */}
              <h1 class="text-white">Course Grid Classic</h1>
              {/* Breadcrumb */}
              <div class="d-flex justify-content-center">
                <nav aria-label="breadcrumb">
                  <ol class="breadcrumb breadcrumb-dark breadcrumb-dots mb-0">
                    <li class="breadcrumb-item">
                      <a href="#">Home</a>
                    </li>
                    <li class="breadcrumb-item active" aria-current="page">
                      Courses classic
                    </li>
                  </ol>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* =======================
Page Banner END */}

      {/* =======================
Page content START */}
      <section class="py-5">
        <div class="container">
          <div class="row">
            {/* Main content START */}
            <div class="col-lg-8 col-xl-9">
              {/* Search option START */}
              <div class="row mb-4 align-items-center">
                {/* Search bar */}
                <div class="col-xl-6">
                  <form class="border rounded p-2">
                    <div class="input-group input-borderless">
                      <input
                        class="form-control me-1"
                        type="search"
                        placeholder="Find your course"
                      />
                      <button
                        type="button"
                        class="btn btn-primary mb-0 rounded z-index-1"
                      >
                        <i class="fas fa-search"></i>
                      </button>
                    </div>
                  </form>
                </div>

                {/* Select option */}
                <div class="col-xl-3 mt-3 mt-xl-0">
                  <form class="border rounded p-2 input-borderless">
                    <select
                      class="form-select form-select-sm js-choice border-0"
                      aria-label=".form-select-sm"
                    >
                      <option value="">Most Viewed</option>
                      <option>Recently search</option>
                      <option>Most popular</option>
                      <option>Top rated</option>
                    </select>
                  </form>
                </div>

                {/* Content */}
                <div class="col-12 col-xl-3 d-flex justify-content-between align-items-center mt-3 mt-xl-0">
                  {/* Advanced filter responsive toggler START */}
                  <button
                    class="btn btn-primary mb-0 d-lg-none"
                    type="button"
                    data-bs-toggle="offcanvas"
                    data-bs-target="#offcanvasSidebar"
                    aria-controls="offcanvasSidebar"
                  >
                    <i class="fas fa-sliders-h me-1"></i> Show filter
                  </button>
                  {/* Advanced filter responsive toggler END */}
                  <p class="mb-0 text-end">Showing 1-7 of 32 result</p>
                </div>
              </div>
              {/* Search option END */}

              {/* Course Grid START */}
              <div class="row g-4">
                {/* Card item START */}
                <div class="col-sm-6 col-xl-4">
                  <div class="card shadow h-100">
                    {/* Image */}
                    <Image
                      src="/assets/images/courses/4by3/08.jpg"
                      class="card-img-top"
                      alt="course image"
                      width="100"
                      height="100"
                    />
                    {/* Card body */}
                    <div class="card-body pb-0">
                      {/* Badge and favorite */}
                      <div class="d-flex justify-content-between mb-2">
                        <a
                          href="#"
                          class="badge bg-purple bg-opacity-10 text-purple"
                        >
                          All level
                        </a>
                        <a href="#" class="h6 fw-light mb-0">
                          <i class="far fa-heart"></i>
                        </a>
                      </div>
                      {/* Title */}
                      <h5 class="card-title">
                        <a href="#">Sketch from A to Z: for app designer</a>
                      </h5>
                      <p class="mb-2 text-truncate-2">
                        Proposal indulged no do sociable he throwing settling.
                      </p>
                      {/* Rating star */}
                      <ul class="list-inline mb-0">
                        <li class="list-inline-item me-0 small">
                          <i class="fas fa-star text-warning"></i>
                        </li>
                        <li class="list-inline-item me-0 small">
                          <i class="fas fa-star text-warning"></i>
                        </li>
                        <li class="list-inline-item me-0 small">
                          <i class="fas fa-star text-warning"></i>
                        </li>
                        <li class="list-inline-item me-0 small">
                          <i class="fas fa-star text-warning"></i>
                        </li>
                        <li class="list-inline-item me-0 small">
                          <i class="far fa-star text-warning"></i>
                        </li>
                        <li class="list-inline-item ms-2 h6 fw-light mb-0">
                          4.0/5.0
                        </li>
                      </ul>
                    </div>
                    {/* Card footer */}
                    <div class="card-footer pt-0 pb-3">
                      <hr />
                      <div class="d-flex justify-content-between">
                        <span class="h6 fw-light mb-0">
                          <i class="far fa-clock text-danger me-2"></i>12h 56m
                        </span>
                        <span class="h6 fw-light mb-0">
                          <i class="fas fa-table text-orange me-2"></i>15
                          lectures
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Card item END */}

                {/* Card item START */}
                <div class="col-sm-6 col-xl-4">
                  <div class="card shadow h-100">
                    {/* Image */}
                    <Image
                      src="/assets/images/courses/4by3/02.jpg"
                      class="card-img-top"
                      alt="course image"
                      width="100"
                      height="100"
                    />
                    <div class="card-body pb-0">
                      {/* Badge and favorite */}
                      <div class="d-flex justify-content-between mb-2">
                        <a
                          href="#"
                          class="badge bg-success bg-opacity-10 text-success"
                        >
                          Beginner
                        </a>
                        <a href="#" class="text-danger">
                          <i class="fas fa-heart"></i>
                        </a>
                      </div>
                      {/* Title */}
                      <h5 class="card-title">
                        <a href="#">Graphic Design Masterclass</a>
                      </h5>
                      <p class="mb-2 text-truncate-2">
                        Rooms oh fully taken by worse do Points afraid but may
                        end Rooms Points afraid but may end Rooms
                      </p>
                      {/* Rating star */}
                      <ul class="list-inline mb-0">
                        <li class="list-inline-item me-0 small">
                          <i class="fas fa-star text-warning"></i>
                        </li>
                        <li class="list-inline-item me-0 small">
                          <i class="fas fa-star text-warning"></i>
                        </li>
                        <li class="list-inline-item me-0 small">
                          <i class="fas fa-star text-warning"></i>
                        </li>
                        <li class="list-inline-item me-0 small">
                          <i class="fas fa-star text-warning"></i>
                        </li>
                        <li class="list-inline-item me-0 small">
                          <i class="fas fa-star-half-alt text-warning"></i>
                        </li>
                        <li class="list-inline-item ms-2 h6 fw-light mb-0">
                          4.5/5.0
                        </li>
                      </ul>
                    </div>
                    {/* Card footer */}
                    <div class="card-footer pt-0 pb-3">
                      <hr />
                      <div class="d-flex justify-content-between">
                        <span class="h6 fw-light mb-0">
                          <i class="far fa-clock text-danger me-2"></i>9h 56m
                        </span>
                        <span class="h6 fw-light mb-0">
                          <i class="fas fa-table text-orange me-2"></i>65
                          lectures
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Card item END */}

                {/* Card item START */}
                <div class="col-sm-6 col-xl-4">
                  <div class="card shadow h-100">
                    {/* Image */}
                    <Image
                      src="/assets/images/courses/4by3/03.jpg"
                      class="card-img-top"
                      alt="course image"
                      width="100"
                      height="100"
                    />
                    <div class="card-body pb-0">
                      {/* Badge and favorite */}
                      <div class="d-flex justify-content-between mb-2">
                        <a
                          href="#"
                          class="badge bg-success bg-opacity-10 text-success"
                        >
                          Beginner
                        </a>
                        <a href="#" class="h6 fw-light mb-0">
                          <i class="far fa-heart"></i>
                        </a>
                      </div>
                      {/* Title */}
                      <h5 class="card-title">
                        <a href="#">Create a Design System in Figma</a>
                      </h5>
                      <p class="mb-2 text-truncate-2">
                        Rooms oh fully taken by worse do. Points afraid but may
                        end afraid but may end.
                      </p>
                      {/* Rating star */}
                      <ul class="list-inline mb-0">
                        <li class="list-inline-item me-0 small">
                          <i class="fas fa-star text-warning"></i>
                        </li>
                        <li class="list-inline-item me-0 small">
                          <i class="fas fa-star text-warning"></i>
                        </li>
                        <li class="list-inline-item me-0 small">
                          <i class="fas fa-star text-warning"></i>
                        </li>
                        <li class="list-inline-item me-0 small">
                          <i class="fas fa-star text-warning"></i>
                        </li>
                        <li class="list-inline-item me-0 small">
                          <i class="fas fa-star-half-alt text-warning"></i>
                        </li>
                        <li class="list-inline-item ms-2 h6 fw-light mb-0">
                          4.5/5.0
                        </li>
                      </ul>
                    </div>
                    {/* Card footer */}
                    <div class="card-footer pt-0 pb-3">
                      <hr />
                      <div class="d-flex justify-content-between">
                        <span class="h6 fw-light mb-0">
                          <i class="far fa-clock text-danger me-2"></i>5h 56m
                        </span>
                        <span class="h6 fw-light mb-0">
                          <i class="fas fa-table text-orange me-2"></i>32
                          lectures
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Card item END */}

                {/* Card item START */}
                <div class="col-sm-6 col-xl-4">
                  <div class="card shadow h-100">
                    {/* Image */}
                    <Image
                      src="/assets/images/courses/4by3/07.jpg"
                      class="card-img-top"
                      alt="course image"
                      width="100"
                      height="100"
                    />
                    <div class="card-body pb-0">
                      {/* Badge and favorite */}
                      <div class="d-flex justify-content-between mb-2">
                        <a
                          href="#"
                          class="badge bg-success bg-opacity-10 text-success"
                        >
                          Beginner
                        </a>
                        <a href="#" class="text-danger">
                          <i class="fas fa-heart"></i>
                        </a>
                      </div>
                      {/* Title */}
                      <h5 class="card-title">
                        <a href="#">Deep Learning with React-Native </a>
                      </h5>
                      <p class="mb-2 text-truncate-2">
                        Far advanced settling say finished raillery. Offered
                        chiefly farther.
                      </p>
                      {/* Rating star */}
                      <ul class="list-inline mb-0">
                        <li class="list-inline-item me-0 small">
                          <i class="fas fa-star text-warning"></i>
                        </li>
                        <li class="list-inline-item me-0 small">
                          <i class="fas fa-star text-warning"></i>
                        </li>
                        <li class="list-inline-item me-0 small">
                          <i class="fas fa-star text-warning"></i>
                        </li>
                        <li class="list-inline-item me-0 small">
                          <i class="fas fa-star text-warning"></i>
                        </li>
                        <li class="list-inline-item me-0 small">
                          <i class="far fa-star text-warning"></i>
                        </li>
                        <li class="list-inline-item ms-2 h6 fw-light mb-0">
                          4.0/5.0
                        </li>
                      </ul>
                    </div>
                    {/* Card footer */}
                    <div class="card-footer pt-0 pb-3">
                      <hr />
                      <div class="d-flex justify-content-between">
                        <span class="h6 fw-light mb-0">
                          <i class="far fa-clock text-danger me-2"></i>18h 56m
                        </span>
                        <span class="h6 fw-light mb-0">
                          <i class="fas fa-table text-orange me-2"></i>99
                          lectures
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Card item END */}

                {/* Card item START */}
                <div class="col-sm-6 col-xl-4">
                  <div class="card shadow h-100">
                    {/* Image */}
                    <Image
                      src="/assets/images/courses/4by3/11.jpg"
                      class="card-img-top"
                      alt="course image"
                      width="100"
                      height="100"
                    />
                    <div class="card-body pb-0">
                      {/* Badge and favorite */}
                      <div class="d-flex justify-content-between mb-2">
                        <a
                          href="#"
                          class="badge bg-purple bg-opacity-10 text-purple"
                        >
                          All level
                        </a>
                        <a href="#" class="text-danger">
                          <i class="fas fa-heart"></i>
                        </a>
                      </div>
                      {/* Title */}
                      <h5 class="card-title">
                        <a href="#">Build Responsive Websites with HTML</a>
                      </h5>
                      <p class="mb-2 text-truncate-2">
                        Far advanced settling say finished raillery. Offered
                        chiefly farther.
                      </p>
                      {/* Rating star */}
                      <ul class="list-inline mb-0">
                        <li class="list-inline-item me-0 small">
                          <i class="fas fa-star text-warning"></i>
                        </li>
                        <li class="list-inline-item me-0 small">
                          <i class="fas fa-star text-warning"></i>
                        </li>
                        <li class="list-inline-item me-0 small">
                          <i class="fas fa-star text-warning"></i>
                        </li>
                        <li class="list-inline-item me-0 small">
                          <i class="fas fa-star text-warning"></i>
                        </li>
                        <li class="list-inline-item me-0 small">
                          <i class="far fa-star text-warning"></i>
                        </li>
                        <li class="list-inline-item ms-2 h6 fw-light mb-0">
                          4.0/5.0
                        </li>
                      </ul>
                    </div>
                    {/* Card footer */}
                    <div class="card-footer pt-0 pb-3">
                      <hr />
                      <div class="d-flex justify-content-between">
                        <span class="h6 fw-light mb-0">
                          <i class="far fa-clock text-danger me-2"></i>15h 30m
                        </span>
                        <span class="h6 fw-light mb-0">
                          <i class="fas fa-table text-orange me-2"></i>68
                          lectures
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Card item END */}

                {/* Card item START */}
                <div class="col-sm-6 col-xl-4">
                  <div class="card shadow h-100">
                    {/* Image */}
                    <Image
                      src="/assets/images/courses/4by3/12.jpg"
                      class="card-img-top"
                      alt="course image"
                      width="100"
                      height="100"
                    />
                    <div class="card-body pb-0">
                      {/* Badge and favorite */}
                      <div class="d-flex justify-content-between mb-2">
                        <a
                          href="#"
                          class="badge bg-success bg-opacity-10 text-success"
                        >
                          Beginner
                        </a>
                        <a href="#" class="h6 fw-light mb-0">
                          <i class="far fa-heart"></i>
                        </a>
                      </div>
                      {/* Title */}
                      <h5 class="card-title">
                        <a href="#">Build Websites with CSS</a>
                      </h5>
                      <p class="text-truncate-2 mb-2">
                        Far advanced settling say finished raillery. Offered
                        chiefly farther.
                      </p>
                      {/* Rating star */}
                      <ul class="list-inline mb-0">
                        <li class="list-inline-item me-0 small">
                          <i class="fas fa-star text-warning"></i>
                        </li>
                        <li class="list-inline-item me-0 small">
                          <i class="fas fa-star text-warning"></i>
                        </li>
                        <li class="list-inline-item me-0 small">
                          <i class="fas fa-star text-warning"></i>
                        </li>
                        <li class="list-inline-item me-0 small">
                          <i class="fas fa-star text-warning"></i>
                        </li>
                        <li class="list-inline-item me-0 small">
                          <i class="fas fa-star-half-alt text-warning"></i>
                        </li>
                        <li class="list-inline-item ms-2 h6 fw-light mb-0">
                          4.5/5.0
                        </li>
                      </ul>
                    </div>
                    {/* Card footer */}
                    <div class="card-footer pt-0 pb-3">
                      <hr />
                      <div class="d-flex justify-content-between">
                        <span class="h6 fw-light mb-0">
                          <i class="far fa-clock text-danger me-2"></i>36h 30m
                        </span>
                        <span class="h6 fw-light mb-0">
                          <i class="fas fa-table text-orange me-2"></i>72
                          lectures
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Card item END */}

                {/* Card item START */}
                <div class="col-sm-6 col-xl-4">
                  <div class="card shadow h-100">
                    {/* Image */}
                    <Image
                      src="/assets/images/courses/4by3/05.jpg"
                      class="card-img-top"
                      alt="course image"
                      width="100"
                      height="100"
                    />
                    <div class="card-body pb-0">
                      {/* Badge and favorite */}
                      <div class="d-flex justify-content-between mb-2">
                        <a
                          href="#"
                          class="badge bg-success bg-opacity-10 text-success"
                        >
                          Beginner
                        </a>
                        <a href="#" class="h6 fw-light mb-0">
                          <i class="far fa-heart"></i>
                        </a>
                      </div>
                      {/* Title */}
                      <h5 class="card-title">
                        <a href="#">The Complete Web Development in python</a>
                      </h5>
                      <p class="text-truncate-2 mb-2">
                        Mention Mr manners opinion if garrets enabled.
                      </p>
                      {/* Rating star */}
                      <ul class="list-inline mb-0">
                        <li class="list-inline-item me-0 small">
                          <i class="fas fa-star text-warning"></i>
                        </li>
                        <li class="list-inline-item me-0 small">
                          <i class="fas fa-star text-warning"></i>
                        </li>
                        <li class="list-inline-item me-0 small">
                          <i class="fas fa-star text-warning"></i>
                        </li>
                        <li class="list-inline-item me-0 small">
                          <i class="fas fa-star text-warning"></i>
                        </li>
                        <li class="list-inline-item me-0 small">
                          <i class="fas fa-star-half-alt text-warning"></i>
                        </li>
                        <li class="list-inline-item ms-2 h6 fw-light mb-0">
                          4.5/5.0
                        </li>
                      </ul>
                    </div>
                    {/* Card footer */}
                    <div class="card-footer pt-0 pb-3">
                      <hr />
                      <div class="d-flex justify-content-between">
                        <span class="h6 fw-light mb-0">
                          <i class="far fa-clock text-danger me-2"></i>10h 00m
                        </span>
                        <span class="h6 fw-light mb-0">
                          <i class="fas fa-table text-orange me-2"></i>26
                          lectures
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Card item END */}

                {/* Card item START */}
                <div class="col-sm-6 col-xl-4">
                  <div class="card shadow h-100">
                    {/* Image */}
                    <Image
                      src="/assets/images/courses/4by3/06.jpg"
                      class="card-img-top"
                      alt="course image"
                      width="100"
                      height="100"
                    />
                    <div class="card-body pb-0">
                      {/* Badge and favorite */}
                      <div class="d-flex justify-content-between mb-2">
                        <a
                          href="#"
                          class="badge bg-info bg-opacity-10 text-info"
                        >
                          Intermediate
                        </a>
                        <a href="#" class="h6 fw-light mb-0">
                          <i class="far fa-heart"></i>
                        </a>
                      </div>
                      {/* Title */}
                      <h5 class="card-title">
                        <a href="#">Angular – The Complete Guider</a>
                      </h5>
                      <p class="text-truncate-2 mb-2">
                        Rooms oh fully taken by worse do. Points afraid but may
                        end.
                      </p>
                      {/* Rating star */}
                      <ul class="list-inline mb-0">
                        <li class="list-inline-item me-0 small">
                          <i class="fas fa-star text-warning"></i>
                        </li>
                        <li class="list-inline-item me-0 small">
                          <i class="fas fa-star text-warning"></i>
                        </li>
                        <li class="list-inline-item me-0 small">
                          <i class="fas fa-star text-warning"></i>
                        </li>
                        <li class="list-inline-item me-0 small">
                          <i class="fas fa-star text-warning"></i>
                        </li>
                        <li class="list-inline-item me-0 small">
                          <i class="fas fa-star-half-alt text-warning"></i>
                        </li>
                        <li class="list-inline-item ms-2 h6 fw-light mb-0">
                          4.5/5.0
                        </li>
                      </ul>
                    </div>
                    {/* Card footer */}
                    <div class="card-footer pt-0 pb-3">
                      <hr />
                      <div class="d-flex justify-content-between">
                        <span class="h6 fw-light mb-0">
                          <i class="far fa-clock text-danger me-2"></i>9h 32m
                        </span>
                        <span class="h6 fw-light mb-0">
                          <i class="fas fa-table text-orange me-2"></i>42
                          lectures
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Card item END */}

                {/* Card item START */}
                <div class="col-sm-6 col-xl-4">
                  <div class="card shadow h-100">
                    {/* Image */}
                    <Image
                      src="/assets/images/courses/4by3/10.jpg"
                      class="card-img-top"
                      alt="course image"
                      width="100"
                      height="100"
                    />
                    <div class="card-body pb-0">
                      {/* Badge and favorite */}
                      <div class="d-flex justify-content-between mb-2">
                        <a
                          href="#"
                          class="badge bg-info bg-opacity-10 text-info"
                        >
                          Intermediate
                        </a>
                        <a href="#" class="text-danger">
                          <i class="fas fa-heart"></i>
                        </a>
                      </div>
                      {/* Title */}
                      <h5 class="card-title">
                        <a href="#">Bootstrap 5 From Scratch</a>
                      </h5>
                      <p class="text-truncate-2 mb-2">
                        Far advanced settling say finished raillery. Offered
                        chiefly farther.
                      </p>
                      {/* Rating star */}
                      <ul class="list-inline mb-0">
                        <li class="list-inline-item me-0 small">
                          <i class="fas fa-star text-warning"></i>
                        </li>
                        <li class="list-inline-item me-0 small">
                          <i class="fas fa-star text-warning"></i>
                        </li>
                        <li class="list-inline-item me-0 small">
                          <i class="fas fa-star text-warning"></i>
                        </li>
                        <li class="list-inline-item me-0 small">
                          <i class="fas fa-star text-warning"></i>
                        </li>
                        <li class="list-inline-item me-0 small">
                          <i class="fas fa-star-half-alt text-warning"></i>
                        </li>
                        <li class="list-inline-item ms-2 h6 fw-light mb-0">
                          4.5/5.0
                        </li>
                      </ul>
                    </div>
                    {/* Card footer */}
                    <div class="card-footer pt-0 pb-3">
                      <hr />
                      <div class="d-flex justify-content-between">
                        <span class="h6 fw-light mb-0">
                          <i class="far fa-clock text-danger me-2"></i>25h 56m
                        </span>
                        <span class="h6 fw-light mb-0">
                          <i class="fas fa-table text-orange me-2"></i>38
                          lectures
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Card item END */}
              </div>
              {/* Course Grid END */}

              {/* Pagination START */}
              <div class="col-12">
                <nav
                  class="mt-4 d-flex justify-content-center"
                  aria-label="navigation"
                >
                  <ul class="pagination pagination-primary-soft d-inline-block d-md-flex rounded mb-0">
                    <li class="page-item mb-0">
                      <a class="page-link" href="#" tabindex="-1">
                        <i class="fas fa-angle-double-left"></i>
                      </a>
                    </li>
                    <li class="page-item mb-0 active">
                      <a class="page-link" href="#">
                        1
                      </a>
                    </li>
                    <li class="page-item mb-0" aria-current="page">
                      <a class="page-link" href="#">
                        2
                      </a>
                    </li>
                    <li class="page-item mb-0">
                      <a class="page-link" href="#">
                        ..
                      </a>
                    </li>
                    <li class="page-item mb-0">
                      <a class="page-link" href="#">
                        6
                      </a>
                    </li>
                    <li class="page-item mb-0">
                      <a class="page-link" href="#">
                        <i class="fas fa-angle-double-right"></i>
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
              {/* Pagination END */}
            </div>
            {/* Main content END */}

            {/* Right sidebar START */}
            <div class="col-lg-4 col-xl-3">
              {/* Responsive offcanvas body START */}
              <div
                class="offcanvas-lg offcanvas-end"
                tabindex="-1"
                id="offcanvasSidebar"
              >
                <div class="offcanvas-header bg-light">
                  <h5 class="offcanvas-title" id="offcanvasNavbarLabel">
                    Advance Filter
                  </h5>
                  <button
                    type="button"
                    class="btn-close"
                    data-bs-dismiss="offcanvas"
                    data-bs-target="#offcanvasSidebar"
                    aria-label="Close"
                  ></button>
                </div>
                <div class="offcanvas-body p-3 p-lg-0">
                  <form>
                    {/* Category START */}
                    <div class="card card-body shadow p-4 mb-4">
                      {/* Title */}
                      <h4 class="mb-3">Category</h4>
                      {/* Category group */}
                      <div class="col-12">
                        {/* Checkbox */}
                        <div class="d-flex justify-content-between align-items-center">
                          <div class="form-check">
                            <input
                              class="form-check-input"
                              type="checkbox"
                              value=""
                              id="flexCheckDefault9"
                            />
                            <label
                              class="form-check-label"
                              for="flexCheckDefault9"
                            >
                              All
                            </label>
                          </div>
                          <span class="small">(1256)</span>
                        </div>
                        {/* Checkbox */}
                        <div class="d-flex justify-content-between align-items-center">
                          <div class="form-check">
                            <input
                              class="form-check-input"
                              type="checkbox"
                              value=""
                              id="flexCheckDefault10"
                            />
                            <label
                              class="form-check-label"
                              for="flexCheckDefault10"
                            >
                              Development
                            </label>
                          </div>
                          <span class="small">(365)</span>
                        </div>
                        {/* Checkbox */}
                        <div class="d-flex justify-content-between align-items-center">
                          <div class="form-check">
                            <input
                              class="form-check-input"
                              type="checkbox"
                              value=""
                              id="flexCheckDefault11"
                            />
                            <label
                              class="form-check-label"
                              for="flexCheckDefault11"
                            >
                              Design
                            </label>
                          </div>
                          <span class="small">(156)</span>
                        </div>
                        {/* Checkbox */}
                        <div class="d-flex justify-content-between align-items-center">
                          <div class="form-check">
                            <input
                              class="form-check-input"
                              type="checkbox"
                              value=""
                              id="flexCheckDefault12"
                            />
                            <label
                              class="form-check-label"
                              for="flexCheckDefault12"
                            >
                              Accounting
                            </label>
                          </div>
                          <span class="small">(65)</span>
                        </div>
                        {/* Checkbox */}
                        <div class="d-flex justify-content-between align-items-center">
                          <div class="form-check">
                            <input
                              class="form-check-input"
                              type="checkbox"
                              value=""
                              id="flexCheckDefault17"
                            />
                            <label
                              class="form-check-label"
                              for="flexCheckDefault17"
                            >
                              Translation
                            </label>
                          </div>
                          <span class="small">(245)</span>
                        </div>
                        {/* Checkbox */}
                        <div class="d-flex justify-content-between align-items-center">
                          <div class="form-check">
                            <input
                              class="form-check-input"
                              type="checkbox"
                              value=""
                              id="flexCheckDefault13"
                            />
                            <label
                              class="form-check-label"
                              for="flexCheckDefault13"
                            >
                              Finance
                            </label>
                          </div>
                          <span class="small">(184)</span>
                        </div>
                        {/* Checkbox */}
                        <div class="d-flex justify-content-between align-items-center">
                          <div class="form-check">
                            <input
                              class="form-check-input"
                              type="checkbox"
                              value=""
                              id="flexCheckDefault14"
                            />
                            <label
                              class="form-check-label"
                              for="flexCheckDefault14"
                            >
                              Legal
                            </label>
                          </div>
                          <span class="small">(65)</span>
                        </div>
                        {/* Checkbox */}
                        <div class="d-flex justify-content-between align-items-center">
                          <div class="form-check">
                            <input
                              class="form-check-input"
                              type="checkbox"
                              value=""
                              id="flexCheckDefault15"
                            />
                            <label
                              class="form-check-label"
                              for="flexCheckDefault15"
                            >
                              Photography
                            </label>
                          </div>
                          <span class="small">(99)</span>
                        </div>

                        {/* Collapse body */}
                        <div
                          class="collapse multi-collapse"
                          id="multiCollapseExample1"
                        >
                          <div class="card card-body p-0">
                            {/* Checkbox */}
                            <div class="d-flex justify-content-between align-items-center">
                              <div class="form-check">
                                <input
                                  class="form-check-input"
                                  type="checkbox"
                                  value=""
                                  id="flexCheckDefault16"
                                />
                                <label
                                  class="form-check-label"
                                  for="flexCheckDefault16"
                                >
                                  Writing
                                </label>
                              </div>
                              <span class="small">(178)</span>
                            </div>
                            {/* Checkbox */}
                            <div class="d-flex justify-content-between align-items-center">
                              <div class="form-check">
                                <input
                                  class="form-check-input"
                                  type="checkbox"
                                  value=""
                                  id="flexCheckDefault18"
                                />
                                <label
                                  class="form-check-label"
                                  for="flexCheckDefault18"
                                >
                                  Marketing
                                </label>
                              </div>
                              <span class="small">(104)</span>
                            </div>
                          </div>
                        </div>
                        {/* Collapse button */}
                        <a
                          class=" p-0 mb-0 mt-2 btn-more d-flex align-items-center"
                          data-bs-toggle="collapse"
                          href="#multiCollapseExample1"
                          role="button"
                          aria-expanded="false"
                          aria-controls="multiCollapseExample1"
                        >
                          See <span class="see-more ms-1">more</span>
                          <span class="see-less ms-1">less</span>
                          <i class="fas fa-angle-down ms-2"></i>
                        </a>
                      </div>
                    </div>
                    {/* Category END */}

                    {/* Price START */}
                    <div class="card card-body shadow p-4 mb-4">
                      {/* Title */}
                      <h4 class="mb-3">Price Level</h4>
                      <ul class="list-inline mb-0">
                        {/* Rent */}
                        <li class="list-inline-item">
                          <input
                            type="radio"
                            class="btn-check"
                            name="options"
                            id="option1"
                          />
                          <label
                            class="btn btn-light btn-primary-soft-check"
                            for="option1"
                          >
                            All
                          </label>
                        </li>
                        {/* Sale */}
                        <li class="list-inline-item">
                          <input
                            type="radio"
                            class="btn-check"
                            name="options"
                            id="option2"
                          />
                          <label
                            class="btn btn-light btn-primary-soft-check"
                            for="option2"
                          >
                            Free
                          </label>
                        </li>
                        {/* Buy */}
                        <li class="list-inline-item">
                          <input
                            type="radio"
                            class="btn-check"
                            name="options"
                            id="option3"
                          />
                          <label
                            class="btn btn-light btn-primary-soft-check"
                            for="option3"
                          >
                            Paid
                          </label>
                        </li>
                      </ul>
                    </div>
                    {/* Price END */}

                    {/* Skill level START */}
                    <div class="card card-body shadow p-4 mb-4">
                      {/* Title */}
                      <h4 class="mb-3">Skill level</h4>
                      <ul class="list-inline mb-0">
                        {/* Item */}
                        <li class="list-inline-item mb-2">
                          <input
                            type="checkbox"
                            class="btn-check"
                            id="btn-check-12"
                          />
                          <label
                            class="btn btn-light btn-primary-soft-check"
                            for="btn-check-12"
                          >
                            All levels
                          </label>
                        </li>
                        {/* Item */}
                        <li class="list-inline-item mb-2">
                          <input
                            type="checkbox"
                            class="btn-check"
                            id="btn-check-9"
                          />
                          <label
                            class="btn btn-light btn-primary-soft-check"
                            for="btn-check-9"
                          >
                            Beginner
                          </label>
                        </li>
                        {/* Item */}
                        <li class="list-inline-item mb-2">
                          <input
                            type="checkbox"
                            class="btn-check"
                            id="btn-check-10"
                          />
                          <label
                            class="btn btn-light btn-primary-soft-check"
                            for="btn-check-10"
                          >
                            Intermediate
                          </label>
                        </li>
                        {/* Item */}
                        <li class="list-inline-item mb-2">
                          <input
                            type="checkbox"
                            class="btn-check"
                            id="btn-check-11"
                          />
                          <label
                            class="btn btn-light btn-primary-soft-check"
                            for="btn-check-11"
                          >
                            Advanced
                          </label>
                        </li>
                      </ul>
                    </div>
                    {/* Skill level END */}

                    {/* Language START */}
                    <div class="card card-body shadow p-4 mb-4">
                      {/* Title */}
                      <h4 class="mb-3">Language</h4>
                      <ul class="list-inline mb-0 g-3">
                        {/* Item */}
                        <li class="list-inline-item mb-2">
                          <input
                            type="checkbox"
                            class="btn-check"
                            id="btn-check-2"
                          />
                          <label
                            class="btn btn-light btn-primary-soft-check"
                            for="btn-check-2"
                          >
                            English
                          </label>
                        </li>
                        {/* Item */}
                        <li class="list-inline-item mb-2">
                          <input
                            type="checkbox"
                            class="btn-check"
                            id="btn-check-3"
                          />
                          <label
                            class="btn btn-light btn-primary-soft-check"
                            for="btn-check-3"
                          >
                            Francas
                          </label>
                        </li>
                        {/* Item */}
                        <li class="list-inline-item mb-2">
                          <input
                            type="checkbox"
                            class="btn-check"
                            id="btn-check-4"
                          />
                          <label
                            class="btn btn-light btn-primary-soft-check"
                            for="btn-check-4"
                          >
                            Hindi
                          </label>
                        </li>
                        {/* Item */}
                        <li class="list-inline-item mb-2">
                          <input
                            type="checkbox"
                            class="btn-check"
                            id="btn-check-5"
                          />
                          <label
                            class="btn btn-light btn-primary-soft-check"
                            for="btn-check-5"
                          >
                            Russian
                          </label>
                        </li>
                        {/* Item */}
                        <li class="list-inline-item mb-2">
                          <input
                            type="checkbox"
                            class="btn-check"
                            id="btn-check-6"
                          />
                          <label
                            class="btn btn-light btn-primary-soft-check"
                            for="btn-check-6"
                          >
                            Spanish
                          </label>
                        </li>
                        {/* Item */}
                        <li class="list-inline-item mb-2">
                          <input
                            type="checkbox"
                            class="btn-check"
                            id="btn-check-7"
                          />
                          <label
                            class="btn btn-light btn-primary-soft-check"
                            for="btn-check-7"
                          >
                            Bengali
                          </label>
                        </li>
                        {/* Item */}
                        <li class="list-inline-item mb-2">
                          <input
                            type="checkbox"
                            class="btn-check"
                            id="btn-check-8"
                          />
                          <label
                            class="btn btn-light btn-primary-soft-check"
                            for="btn-check-8"
                          >
                            Portuguese
                          </label>
                        </li>
                      </ul>
                    </div>
                    {/* Language END */}
                  </form>
                  {/* Form End */}
                </div>

                {/* Button */}
                <div class="d-grid p-2 p-lg-0 text-center">
                  <button class="btn btn-primary mb-0">Filter Results</button>
                </div>
              </div>
              {/* Responsive offcanvas body END */}
            </div>
            {/* Right sidebar END */}
          </div>
          {/* Row END */}
        </div>
      </section>
      {/* =======================
Page content END */}

      {/* =======================
Newsletter START */}
      <section class="pt-0">
        <div class="container position-relative overflow-hidden">
          {/* SVG decoration */}
          <figure class="position-absolute top-50 start-50 translate-middle ms-3">
            <svg>
              <path
                d="m496 22.999c0 10.493-8.506 18.999-18.999 18.999s-19-8.506-19-18.999 8.507-18.999 19-18.999 18.999 8.506 18.999 18.999z"
                fill="#fff"
                fill-rule="evenodd"
                opacity=".502"
              />
              <path
                d="m775 102.5c0 5.799-4.701 10.5-10.5 10.5-5.798 0-10.499-4.701-10.499-10.5 0-5.798 4.701-10.499 10.499-10.499 5.799 0 10.5 4.701 10.5 10.499z"
                fill="#fff"
                fill-rule="evenodd"
                opacity=".102"
              />
              <path
                d="m192 102c0 6.626-5.373 11.999-12 11.999s-11.999-5.373-11.999-11.999c0-6.628 5.372-12 11.999-12s12 5.372 12 12z"
                fill="#fff"
                fill-rule="evenodd"
                opacity=".2"
              />
              <path
                d="m20.499 10.25c0 5.66-4.589 10.249-10.25 10.249-5.66 0-10.249-4.589-10.249-10.249-0-5.661 4.589-10.25 10.249-10.25 5.661-0 10.25 4.589 10.25 10.25z"
                fill="#fff"
                fill-rule="evenodd"
                opacity=".2"
              />
            </svg>
          </figure>
          {/* Svg decoration */}
          <figure class="position-absolute bottom-0 end-0 mb-5 d-none d-sm-block">
            <svg
              class="rotate-130"
              width="258.7px"
              height="86.9px"
              viewBox="0 0 258.7 86.9"
            >
              <path
                stroke="white"
                fill="none"
                stroke-width="2"
                d="M0,7.2c16,0,16,25.5,31.9,25.5c16,0,16-25.5,31.9-25.5c16,0,16,25.5,31.9,25.5c16,0,16-25.5,31.9-25.5 c16,0,16,25.5,31.9,25.5c16,0,16-25.5,31.9-25.5c16,0,16,25.5,31.9,25.5s16-25.5,31.9-25.5"
              />
              <path
                stroke="white"
                fill="none"
                stroke-width="2"
                d="M0,57c16,0,16,25.5,31.9,25.5c16,0,16-25.5,31.9-25.5c16,0,16,25.5,31.9,25.5c16,0,16-25.5,31.9-25.5 c16,0,16,25.5,31.9,25.5c16,0,16-25.5,31.9-25.5c16,0,16,25.5,31.9,25.5s16-25.5,31.9-25.5"
              />
            </svg>
          </figure>

          <div class="bg-grad-pink p-3 p-sm-5 rounded-3">
            <div class="row justify-content-center position-relative">
              {/* SVG decoration */}
              <figure class="fill-white opacity-1 position-absolute top-50 start-0 translate-middle-y">
                <svg width="141px" height="141px">
                  <path d="M140.520,70.258 C140.520,109.064 109.062,140.519 70.258,140.519 C31.454,140.519 -0.004,109.064 -0.004,70.258 C-0.004,31.455 31.454,-0.003 70.258,-0.003 C109.062,-0.003 140.520,31.455 140.520,70.258 Z" />
                </svg>
              </figure>
              {/* Newsletter */}
              <div class="col-12 position-relative my-2 my-sm-3">
                <div class="row align-items-center">
                  {/* Title */}
                  <div class="col-lg-6">
                    <h3 class="text-white mb-3 mb-lg-0">
                      Are you ready for a more great Conversation?
                    </h3>
                  </div>
                  {/* Input item */}
                  <div class="col-lg-6 text-lg-end">
                    <form class="bg-body rounded p-2">
                      <div class="input-group">
                        <input
                          class="form-control border-0 me-1"
                          type="email"
                          placeholder="Type your email here"
                        />
                        <button type="button" class="btn btn-dark mb-0 rounded">
                          Subscribe
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>{" "}
            {/* Row END */}
          </div>
        </div>
      </section>
      {/* =======================
Newsletter END */}
    </main>
  );
}
