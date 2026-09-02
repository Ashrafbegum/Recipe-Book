import { useState, useEffect } from "react";

function Search({ onSearch }) {
  const [search, setSearch] = useState("");

  const searchRecipes = () => {
      onSearch(search);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      searchRecipes();
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search recipes..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        onKeyDown={handleKeyDown}
      />

      <button type="button" onClick={searchRecipes}>
        Search
      </button>
    </div>
  );
}

export default Search;