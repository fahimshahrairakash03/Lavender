import React from "react";

const SearchModal = () => {
  return (
    <div>
      {/* The button to open modal */}
      <label htmlFor="my-modal-3" className="btn btn-ghost">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
      </label>

      {/* Put this part before </body> tag */}
      <input type="checkbox" id="my-modal-3" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="my-modal-3"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>

          <div className="pt-5">
            <input
              type="text"
              placeholder="SEARCH HERE"
              className="input  input-bordered w-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchModal;
