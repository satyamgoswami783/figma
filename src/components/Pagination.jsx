import React from "react";

function Pagination({ total, limit, page, setPage }) {
  const totalPages = Math.ceil(total / limit);

  return (
    <div className="flex justify-center mt-6 gap-2">
      {[...Array(totalPages)].map((_, i) => (
        <button
          key={i}
          onClick={() => setPage(i + 1)}
          className={`px-3 py-1 rounded ${page === i + 1 ? "bg-yellow-500 text-white" : "bg-gray-200"}`}
        >
          {i + 1}
        </button>
      ))}
    </div>
  );
}

export default Pagination;
