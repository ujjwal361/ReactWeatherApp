import React from "react";

function SearchEngine({ query, setQuery, search }) {
  return (
    <div className="SearchEngine">
      <input
        type="text"
        className="city-search"
        placeholder="Enter City Name"
        name="query"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyDown={search}
      />
      <button onClick={(e) => search({ key: "Enter", preventDefault: () => {} })}>
        <i className="fas fa-search" style={{ fontSize: "18px" }}></i>
      </button>
    </div>
  );
}

export default SearchEngine;
