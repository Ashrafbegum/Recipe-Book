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
    <div className="flex w-full max-w-xl mx-auto mb-8">

      <input
        type="text"
        placeholder="Search recipes..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="
          flex-1
          px-4 py-3
          border border-gray-300
          rounded-l-lg
          outline-none
          focus:ring-2 focus:ring-orange-400
          focus:border-orange-400
          text-gray-700
        "
      />

      <button
        type="button"
        onClick={() => onSearch(search)}
        className="
          px-6 py-3
          bg-orange-500
          text-white
          font-semibold
          rounded-r-lg
          hover:bg-orange-600
          transition
        "
      >
        Search
      </button>

    </div>
  );
}

export default Search;