import React from "react";

const Pagination = ({ pages, setCurrentPage }) => {
  const handleCurrentPage = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="mb-10 flex justify-center gap-6">
      {pages.map((page) => (
        <button
          onClick={() => handleCurrentPage(page)}
          className="p-3 border rounded-full w-12 h-12 "
          key={page}
        >
          {page + 1}
        </button>
      ))}
    </div>
  );
};

export default Pagination;
