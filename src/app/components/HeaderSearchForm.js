"use client";

import { useState } from "react";

const HeaderSearchForm = () => {
  const [searchText, setSearchText] = useState("");

  const handleSearchSubmit = (event) => {
    event.preventDefault();

    // 검색어가 있을 경우, 검색어를 URL에 추가하여 페이지 이동
    if (searchText) {
      window.location.href = `/courses/?search=${searchText}`;
    }
  };

  return (
    <form className="position-relative" onSubmit={handleSearchSubmit}>
      <input
        className="form-control pe-5 bg-transparent"
        type="search"
        placeholder="Search"
        aria-label="Search"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
      />
      <button
        className="bg-transparent p-2 position-absolute top-50 end-0 translate-middle-y border-0 text-primary-hover text-reset"
        type="submit"
      >
        <i className="fas fa-search fs-6 "></i>
      </button>
    </form>
  );
};

export default HeaderSearchForm;
