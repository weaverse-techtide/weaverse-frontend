"use client";

import { useState } from "react";

const SearchForm = () => {
  const [searchText, setSearchText] = useState("");

  const handleSearchSubmit = (event) => {
    event.preventDefault();

    // 검색어가 있을 경우, 검색어를 URL에 추가하여 페이지 이동
    if (searchText) {
      window.location.href = `/courses/?search=${searchText}`;
    }
  };

  return (
    <form className="bg-body rounded p-2" onSubmit={handleSearchSubmit}>
      <div className="input-group">
        <input
          className="form-control border-0 me-1"
          type="search"
          placeholder="Search course"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <button type="submit" className="btn btn-dark mb-0 rounded">
          Search
        </button>
      </div>
    </form>
  );
};

export default SearchForm;
