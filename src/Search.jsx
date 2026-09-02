import { useState, useEffect } from "react";

function Search({ onSearch }) {

  const [search, setSearch] = useState("");

  useEffect(() => {

    const timer = setTimeout(() => {
      onSearch(search);
    }, 500);

    return () => clearTimeout(timer);

  }, [search, onSearch]);

  return (
    <div>

      <input
        type="text"
        placeholder="Search recipes..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

    </div>
  );
}

export default Search;
