import React from "react";

function SearchInput() {
  return (
    <div className="flex items-center p-4">
      <input className="bg-slate-100 hover:bg-slate-30 rounded-full h-8 w-52 text-slate-800 px-2" />
      <button className="btn btn-ghost btn-circle px-2">
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
      </button>
    </div>
  );
}

export default SearchInput;
