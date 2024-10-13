"use client";

import { useState } from "react";
import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";

export default function Courses({ initialCourses }) {
  const api = process.env.NEXT_PUBLIC_FRONTEND_URL;
  const pageMaxNum = 5;
  const [totalPages, setTotalPages] = useState(
    Math.ceil(initialCourses.count / 9)
  );
  const [totalCount, setTotalCount] = useState(initialCourses.count);
  const [courses, setCourses] = useState(initialCourses.results || []);
  const [currentPage, setCurrentPage] = useState(1);
  const router = useRouter();
  const [showingStart, setShowingStart] = useState(currentPage * 9 - 8);
  const [showingEnd, setShowingEnd] = useState(
    currentPage * 9 > initialCourses.count
      ? initialCourses.count
      : currentPage * 9
  );

  const searchParams = useSearchParams();
  const category = searchParams.get("category") || "";
  const courseLevel = searchParams.get("course_level") || "";
  const orderingParm = searchParams.get("ordering") || "";

  const [searchText, setSearchText] = useState("");
  const [ordering, setOrdering] = useState(orderingParm);

  const handleSearch = async (event) => {
    event.preventDefault();
    let path = `/courses/?search=${searchText}`;

    if (category) {
      path += `&category=${category}`;
    }
    if (courseLevel) {
      path += `&course_level=${courseLevel}`;
    }
    if (ordering) {
      path += `&ordering=${ordering}`;
    }
    const url = `${api}${path}`;

    const res = await fetch(url);
    if (!res.ok) {
      throw new Error(res.statusText);
    }
    const data = await res.json();
    setCourses(data.results);
    setCurrentPage(1);
    setShowingStart(1);
    setShowingEnd(data.results.length);
    setTotalCount(data.count);
    setTotalPages(Math.ceil(data.count / 9));
    setSearchText("");
    router.push(path);
  };

  const handlePageChange = async (newPage) => {
    const search = searchParams.get("search");
    let path = `/courses/?page=${newPage}`;
    if (category) {
      path += `&category=${category}`;
    }
    if (courseLevel) {
      path += `&course_level=${courseLevel}`;
    }
    if (search) {
      path += `&search=${search}`;
    }
    if (ordering) {
      path += `&ordering=${ordering}`;
    }
    const url = `${api}${path}`;

    const res = await fetch(url);
    if (!res.ok) {
      throw new Error(res.statusText);
    }
    const data = await res.json();
    setCourses(data.results);
    setCurrentPage(newPage);
    setShowingStart(newPage * 9 - 8);
    setShowingEnd(newPage * 9 > totalCount ? totalCount : newPage * 9);
    setTotalCount(data.count);
    setTotalPages(Math.ceil(initialCourses.count / 9));
    router.push(path);
  };

  const handleOrderingChange = async (event) => {
    const newOrdering = event.target.value;
    const search = searchParams.get("search");
    let path = `/courses/?ordering=${newOrdering}`;
    if (category) {
      path += `&category=${category}`;
    }
    if (courseLevel) {
      path += `&course_level=${courseLevel}`;
    }
    if (search) {
      path += `&search=${search}`;
    }
    const url = `${api}${path}`;

    const res = await fetch(url);
    if (!res.ok) {
      throw new Error(res.statusText);
    }
    const data = await res.json();
    setCourses(data.results);
    setCurrentPage(1);
    setShowingStart(1);
    setShowingEnd(data.results.length);
    setTotalCount(data.count);
    setTotalPages(Math.ceil(data.count / 9));
    setOrdering(newOrdering);
    router.push(path);
  };

  return (
    <div className="col-lg-8 col-xl-9">
      {/* Search option START */}
      <div className="row mb-4 align-items-center">
        {/* Search bar */}
        <div className="col-xl-6">
          <form className="border rounded p-2" onSubmit={handleSearch}>
            <div className="input-group input-borderless">
              <input
                className="form-control me-1"
                type="search"
                placeholder="Find your course"
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
              />
              <button
                type="submit"
                className="btn btn-primary mb-0 rounded z-index-1"
              >
                <i className="fas fa-search"></i>
              </button>
            </div>
          </form>
        </div>

        {/* Select option */}
        <div className="col-xl-3 mt-3 mt-xl-0">
          <form className="border rounded p-2 input-borderless">
            <select
              className="form-select form-select-sm js-choice border-0"
              aria-label=".form-select-sm"
              value={ordering}
              onChange={handleOrderingChange}
            >
              {[
                ["최신순", "-created_at"],
                ["오래된순", "created_at"],
                ["가격높은순", "-price"],
                ["가격낮은순", "price"],
              ].map(([label, value], index) => (
                <option key={index} value={value}>
                  {label}
                </option>
              ))}
            </select>
          </form>
        </div>

        {/* Content */}
        <div className="col-12 col-xl-3 d-flex justify-content-between align-items-center mt-3 mt-xl-0">
          {/* Advanced filter responsive toggler START */}
          <button
            className="btn btn-primary mb-0 d-lg-none"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasSidebar"
            aria-controls="offcanvasSidebar"
          >
            <i className="fas fa-sliders-h me-1"></i> Show filter
          </button>
          {/* Advanced filter responsive toggler END */}
          <p className="mb-0 text-end">
            Showing {showingStart} - {showingEnd} of {totalCount}
          </p>
        </div>
      </div>
      {/* Search option END */}

      {/* Course Grid START */}
      <div className="row g-4">
        {courses.map((course, index) => (
          <div className="col-sm-6 col-xl-4" key={index}>
            <div className="card shadow h-100">
              <a href={`courses/${course.id}`}>
                <Image
                  src={course.thumbnail}
                  className="card-img-top"
                  alt="course image"
                  width="100"
                  height="100"
                />
              </a>
              <div className="card-body pb-0">
                <div className="d-flex justify-content-between mb-2">
                  <a
                    href={`courses/${course.id}`}
                    className="badge bg-success bg-opacity-10 text-success"
                  >
                    {course.course_level}
                  </a>
                  <a href={`courses/${course.id}`} className="h6 fw-light mb-0">
                    <i className="far fa-heart"></i>
                  </a>
                </div>
                <h5 className="card-title">
                  <a href={`courses/${course.id}`}>{course.title}</a>
                </h5>
                <p className="mb-2 text-truncate-2">
                  {course.short_description}
                </p>
                <div className="d-flex align-items-center justify-content-between">
                  <div className="avatar avatar-sm me-2">
                    <Image
                      src={course.author_image}
                      className="rounded-circle"
                      alt="instructor avatar"
                      width="30"
                      height="30"
                    />
                  </div>
                  <span className="h6 fw-light mb-0">{course.author_name}</span>
                </div>
              </div>
              <div className="card-footer pt-0 pb-3">
                <hr />
                <div className="d-flex justify-content-between">
                  <span className="h6 fw-light mb-0">
                    <i className="far fa-clock text-danger me-2"></i>
                    {course.duration}
                  </span>
                  <span className="h6 fw-light mb-0">
                    <i className="fas fa-table text-orange me-2"></i>
                    {course.lectures_count} lectures
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* Course Grid END */}

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
                tabIndex={currentPage === 1 ? "-1" : "0"}
                onClick={
                  currentPage === 1
                    ? null
                    : () => handlePageChange(currentPage - 1)
                }
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
            >
              <a
                className="page-link"
                href="#"
                onClick={
                  currentPage + 1 > totalPages
                    ? null
                    : () => handlePageChange(currentPage + 1)
                }
              >
                <i className="fas fa-angle-double-right"></i>
              </a>
            </li>
          </ul>
        </nav>
      </div>
      {/* Pagination END */}
    </div>
  );
}
