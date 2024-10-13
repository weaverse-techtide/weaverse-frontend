"use client";

import { useState } from "react";
import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";

export default function Curriculums({ initialCurriculums }) {
  const category_choices = [
    { value: "", label: "All" },
    { value: "JavaScript", label: "JavaScript" },
    { value: "Python", label: "Python" },
    { value: "Django", label: "Django" },
    { value: "React", label: "React" },
    { value: "Vue", label: "Vue" },
    { value: "Node", label: "Node" },
    { value: "AWS", label: "AWS" },
    { value: "Docker", label: "Docker" },
    { value: "DB", label: "DB" },
  ];

  const skill_level_choices = [
    { value: "", label: "All" },
    { value: "beginner", label: "초급" },
    { value: "intermediate", label: "중급" },
    { value: "advanced", label: "고급" },
  ];

  const ordering_choices = [
    { value: "create_at", label: "최신순" },
    { value: "-create_at", label: "오래된순" },
    { value: "price", label: "높은 가격순" },
    { value: "-price", label: "낮은 가격순" },
  ];

  const api = process.env.NEXT_PUBLIC_FRONTEND_URL;
  const pageMaxNum = 5;
  const [totalPages, setTotalPages] = useState(
    Math.ceil(initialCurriculums.count / 9)
  );

  const [totalCount, setTotalCount] = useState(initialCurriculums.count);
  const [curriculums, setCurriculums] = useState(initialCurriculums.results);
  const [currentPage, setCurrentPage] = useState(1);
  const router = useRouter();
  const [showingStart, setShowingStart] = useState(currentPage * 9 - 8);
  const [showingEnd, setShowingEnd] = useState(
    currentPage * 9 > initialCurriculums.count
      ? initialCurriculums.count
      : currentPage * 9
  );

  const searchParams = useSearchParams();
  const [currentCategory, setCategory] = useState(
    searchParams.get("category") || ""
  );
  const [currentSillLevel, setSkillLevel] = useState(
    searchParams.get("skill_level") || ""
  );
  const orderingParm = searchParams.get("ordering") || "";

  const [currentOrdering, setOrdering] = useState(orderingParm);
  const search = searchParams.get("search") || "";

  const handlePageChange = async (page) => {
    let params = new URLSearchParams();
    params.set("page", page);
    if (currentCategory) {
      params.set("category", currentCategory);
    }
    if (currentSillLevel) {
      params.set("curriculum_level", currentSillLevel);
    }
    if (currentOrdering) {
      params.set("ordering", ordering);
    }
    if (search) {
      params.set("search", search);
    }
    const path = `/curriculums/?${params}`;
    const url = `${api}${path}`;

    const res = await fetch(url);
    if (!res.ok) {
      throw new Error(res.statusText);
    }
    const data = await res.json();
    setCurriculums(data.results);
    setCurrentPage(page);
    setShowingStart(page * 9 - 8);
    setShowingEnd(page * 9 > data.count ? data.count : page * 9);
    setTotalCount(data.count);
    setTotalPages(Math.ceil(data.count / 9));
    router.push(path);
  };

  const applyFilters = async () => {
    const params = new URLSearchParams();
    if (currentCategory) {
      params.set("category", currentCategory);
    }
    if (currentSillLevel) {
      params.set("skill_level", currentSillLevel);
    }
    if (currentOrdering) {
      params.set("ordering", ordering);
    }
    if (search) {
      params.set("search", search);
    }
    const path = `/curriculums/?${params}`;
    window.location.href = path;
  };

  const handleOrderingChange = async (event) => {
    const newOrdering = event.target.value;
    const params = new URLSearchParams();
    if (currentCategory) {
      params.set("category", currentCategory);
    }
    if (currentSillLevel) {
      params.set("skill_level", currentSillLevel);
    }
    if (newOrdering) {
      params.set("ordering", newOrdering);
    }
    if (search) {
      params.set("search", search);
    }
    const path = `/curriculums/?${params}`;
    console.log(path);
    const url = `${api}${path}`;
    const res = await fetch(url);
    if (!res.ok) {
      throw new Error(res.statusText);
    }
    const data = await res.json();
    setCurriculums(data.results);
    setCurrentPage(1);
    setShowingStart(1);
    setShowingEnd(data.results.length);
    setTotalCount(data.count);
    setTotalPages(Math.ceil(data.count / 9));
    setOrdering(newOrdering);
    router.push(path);
  };

  return (
    <section className="pb-0 py-sm-5">
      <div className="container">
        {/* Title and select START */}
        <div className="row g-3 align-items-center mb-4">
          {/* Content */}
          <div className="col-md-4">
            <h4 className="mb-0">
              Showing {showingStart} - {showingEnd} of {totalCount} results
            </h4>
          </div>

          {/* Select option */}
          <div className="col-md-8">
            <div className="row g-3 align-items-center justify-content-md-end me-auto">
              <form className="col-md-4 border rounded p-1 input-borderless">
                <select
                  className="form-select js-choice z-index-9"
                  aria-label=".form-select-sm"
                  value={currentOrdering}
                  onChange={handleOrderingChange}
                >
                  {ordering_choices.map((order, index) => (
                    <option value={order.value} key={index}>
                      {order.label}
                    </option>
                  ))}
                </select>
              </form>
            </div>
          </div>
        </div>
        {/* Title and select END */}

        <div className="row">
          {/* Main content START */}

          <div className="col-xl-9 col-xxl-8">
            {/* Course list START */}

            <div className="row g-4">
              {curriculums.map((curriculum) => (
                <div className="col-12" key={curriculum.id}>
                  <div className="card shadow p-2">
                    <div className="row g-0">
                      <div className="col-md-5 justify-content-center d-flex">
                        <Image
                          src="https://bootcamp.weniv.co.kr/images/camps/frontend-est/thumbnail.webp"
                          className="rounded-2"
                          alt="Card image"
                          width={340}
                          height={250}
                        />
                      </div>
                      <div className="col-md-7">
                        <div className="card-body">
                          {/* Badge and rating */}
                          <div className="d-flex justify-content-between align-items-center mb-2">
                            {/* Badge */}
                            <a
                              href="#"
                              className="badge text-bg-primary mb-2 mb-sm-0"
                            >
                              {curriculum.category}
                            </a>
                            {/* Rating and wishlist */}
                            <div>
                              <span className="h6 fw-light me-3">
                                <i className="fas fa-star text-warning me-1"></i>
                                {curriculum.rating}
                              </span>
                              <a href="#" className="text-danger">
                                <i className="fas fa-heart"></i>
                              </a>
                            </div>
                          </div>

                          {/* Title */}
                          <h5 className="card-title">
                            <a href="#">{curriculum.name}</a>
                          </h5>
                          <p className="text-truncate-2 d-none d-lg-block">
                            {curriculum.description}
                          </p>

                          {/* Info */}
                          <ul className="list-inline">
                            <li className="list-inline-item h6 fw-light mb-1 mb-sm-0">
                              <i className="far fa-clock text-danger me-2"></i>
                              21 hours 30 minutes
                            </li>
                            <li className="list-inline-item h6 fw-light mb-1 mb-sm-0">
                              <i className="fas fa-table text-orange me-2"></i>
                              {curriculum.courses_count} courses
                            </li>
                            <li className="list-inline-item h6 fw-light">
                              <i className="fas fa-signal text-success me-2"></i>
                              {curriculum.skill_level}
                            </li>
                          </ul>

                          {/* Price and avatar */}
                          <div className="d-sm-flex justify-content-sm-between align-items-center">
                            {/* Avatar */}
                            <div className="d-flex align-items-center">
                              <div className="avatar">
                                <Image
                                  src={curriculum.author_image}
                                  className="avatar-img rounded-circle"
                                  alt="avatar"
                                  width={30}
                                  height={30}
                                />
                              </div>
                              <p className="mb-0 ms-2">
                                <a href="#" className="h6 fw-light">
                                  {curriculum.author_name}
                                </a>
                              </p>
                            </div>
                            {/* Price */}
                            <div className="mt-3 mt-sm-0">
                              <a
                                href={`/curriculums/${curriculum.id}`}
                                className="btn btn-primary"
                              >
                                View more
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
              {/* Course item END */}
            </div>
            {/* Course list END */}

            {/* Pagination START */}
            <div className="col-12">
              <nav
                className="mt-4 d-flex justify-content-center"
                aria-label="navigation"
              >
                <ul className="pagination pagination-primary-soft d-inline-block d-md-flex rounded mb-0">
                  <li
                    className={`page-item mb-0 ${
                      currentPage === 1 ? "disabled" : ""
                    }`}
                  >
                    <a
                      className="page-link"
                      href="#"
                      onClick={() => handlePageChange(currentPage - 1)}
                    >
                      <i className="fas fa-angle-double-left"></i>
                    </a>
                  </li>
                  {[...Array(pageMaxNum)].map((_, index) => {
                    const pageNumber = currentPage + index - 2;
                    if (pageNumber < 1 || pageNumber > totalPages) {
                      return null;
                    }
                    return (
                      <li
                        className={`page-item mb-0 ${
                          currentPage === pageNumber ? "active" : ""
                        }`}
                        key={pageNumber}
                      >
                        <a
                          className="page-link"
                          href="#"
                          onClick={() => handlePageChange(pageNumber)}
                        >
                          {pageNumber}
                        </a>
                      </li>
                    );
                  })}
                  <li
                    className={`page-item mb-0 ${
                      currentPage + 1 > totalPages ? "disabled" : ""
                    }`}
                    value={currentPage + 1}
                  >
                    <a
                      className="page-link"
                      href="#"
                      onClick={() => handlePageChange(currentPage + 1)}
                    >
                      <i className="fas fa-angle-double-right"></i>
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
            {/* Pagination END */}
          </div>
          {/* Main content END */}

          {/* Right sidebar START */}
          <div className="col-lg-3 col-xxl-4">
            {/* Responsive offcanvas body START */}
            <div
              className="offcanvas-xl offcanvas-end"
              tabIndex="-1"
              id="offcanvasSidebar"
            >
              <div className="offcanvas-header bg-light">
                <h5 className="offcanvas-title" id="offcanvasNavbarLabel">
                  Advance Filter
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="offcanvas"
                  data-bs-target="#offcanvasSidebar"
                  aria-label="Close"
                ></button>
              </div>
              <div className="offcanvas-body p-3 p-xl-0">
                <form>
                  {/* Category START */}
                  <div className="card card-body shadow p-4 mb-4">
                    {/* Title */}
                    <h4 className="mb-3">Category</h4>
                    <ul className="list-inline mb-0">
                      {category_choices.map((category, index) => (
                        <li className="list-inline-item" key={category.value}>
                          <input
                            type="radio"
                            className="btn-check"
                            name="category"
                            id={`category${index}`}
                            checked={category.value === currentCategory}
                            onChange={() => setCategory(category.value)}
                          />
                          <label
                            className="btn btn-light btn-primary-soft-check"
                            htmlFor={`category${index}`}
                          >
                            {category.label}
                          </label>
                        </li>
                      ))}
                    </ul>
                    {/* Row END */}
                  </div>
                  {/* Category END */}

                  {/* Skill level START */}
                  <div className="card card-body shadow p-4 mb-4">
                    {/* Title */}
                    <h4 className="mb-3">Skill level</h4>
                    <ul className="list-inline mb-0">
                      {/* Item */}
                      {skill_level_choices.map((level, index) => (
                        <li className="list-inline-item mb-2" key={level.label}>
                          <input
                            type="radio"
                            className="btn-check"
                            id={`level${index}`}
                            name="skill_level"
                            checked={level.value === currentSillLevel}
                            onChange={() => setSkillLevel(level.value)}
                          />
                          <label
                            className="btn btn-light btn-primary-soft-check"
                            htmlFor={`level${index}`}
                          >
                            {level.label}
                          </label>
                        </li>
                      ))}
                    </ul>
                  </div>
                  {/* Skill level END */}
                </form>
                {/* Form End */}
              </div>

              {/* Button */}
              <div className="d-grid p-2 p-xl-0 bg-body text-center">
                <button className="btn btn-primary mb-0" onClick={applyFilters}>
                  Filter Results
                </button>
              </div>
            </div>
            {/* Responsive offcanvas body END */}
          </div>
          {/* Right sidebar END */}
        </div>
        {/* Row END */}
      </div>
    </section>
  );
}
