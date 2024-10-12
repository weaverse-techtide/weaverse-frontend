"use client";

import { useState } from "react";

const CourseFilter = ({ searchParams }) => {
  const category = searchParams.category || "";
  const courseLevel = searchParams.course_level || "";
  const search = searchParams.search || "";
  const ordering = searchParams.ordering || "";
  const [selectedCategory, setSelectedCategory] = useState(category);
  const [selectedCourseLevel, setSelectedCourseLevel] = useState(courseLevel);

  const applyFilters = async () => {
    const params = new URLSearchParams();
    if (selectedCategory !== "All" && selectedCategory !== "") {
      params.set("category", selectedCategory);
    }
    if (selectedCourseLevel !== "" && selectedCourseLevel !== "All") {
      params.set("course_level", selectedCourseLevel);
    }
    if (search) {
      params.set("search", search);
    }
    if (ordering) {
      params.set("ordering", ordering);
    }
    window.location.href = `/courses/?${params}`;
  };

  return (
    <div className="col-lg-4 col-xl-3">
      {/* Responsive offcanvas body START */}
      <div
        className="offcanvas-lg offcanvas-end"
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
        <div className="offcanvas-body p-3 p-lg-0">
          <form>
            {/* Category START */}
            <div className="card card-body shadow p-4 mb-4">
              {/* Title */}
              <h4 className="mb-3">Category</h4>
              {/* Category group */}
              <div className="col-12">
                {/* Checkbox */}
                {[
                  "All",
                  "JavaScript",
                  "Python",
                  "Django",
                  "React",
                  "Vue.js",
                  "Node.js",
                  "AWS",
                  "Docker",
                  "DB",
                ].map((category, index) => (
                  <div
                    className="d-flex justify-content-between align-items-center"
                    key={index}
                  >
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id={`flexCheckDefault${index}`}
                        checked={
                          selectedCategory === category ||
                          (selectedCategory === "" && category === "All")
                        }
                        onChange={() => {
                          setSelectedCategory(category);
                        }}
                      />
                      <label
                        className="form-check-label"
                        htmlFor={`flexCheckDefault${index}`}
                      >
                        {category}
                      </label>
                    </div>
                  </div>
                ))}
                {/* Collapse button */}
              </div>
            </div>
            {/* Category END */}

            {/* Skill level START */}
            <div className="card card-body shadow p-4 mb-4">
              {/* Title */}
              <h4 className="mb-3">Skill level</h4>
              <ul className="list-inline mb-0">
                {/* Item */}
                {[
                  ["All levels", ""],
                  ["Beginner", "beginner"],
                  ["Intermediate", "intermediate"],
                  ["Advanced", "advanced"],
                ].map((level, index) => (
                  <li className="list-inline-item mb-2" key={index}>
                    <input
                      type="checkbox"
                      className="btn-check"
                      id={`btn-check-${index}`}
                      checked={selectedCourseLevel === level[1]}
                      onChange={() => setSelectedCourseLevel(level[1])}
                    />
                    <label
                      className="btn btn-light btn-primary-soft-check"
                      htmlFor={`btn-check-${index}`}
                    >
                      {level[0]}
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
        <div className="d-grid p-2 p-lg-0 text-center">
          <button className="btn btn-primary mb-0" onClick={applyFilters}>
            Filter Results
          </button>
        </div>
      </div>
      {/* Responsive offcanvas body END */}
    </div>
  );
};

export default CourseFilter;
