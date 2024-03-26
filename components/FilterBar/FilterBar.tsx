import React from "react";
import Link from "next/link";
const FilterBar = () => {
  return (
    <div className="navbar">
      <div className="flex-1">
        <a className="btn btn-ghost text-xl">Mom's Fridge</a>
      </div>
      <ul className="menu menu-horizontal px-4">
        <Link className="menu menu-horizontal px-1" href="/allRecipes">
          Recipes
        </Link>
        <Link className="menu menu-horizontal px-1" href="/aboutUs">
          About Us
        </Link>
        <div className="flex items-center">
          <input className="bg-slate-50 hover:bg-red-200 rounded-3xl h-12 w-56" />
          <button className="btn btn-ghost btn-circle">
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
      </ul>
    </div>
  );
};

export default FilterBar;
