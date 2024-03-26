import React from "react";
import Link from "next/link";
import SearchInput from "../SearchInput/SearchInput";
const FilterBar = () => {
  return (
    <div className="navbar">
      <div className="flex-1">
        <a className="btn btn-ghost text-2xl">Mom's Fridge</a>
      </div>
      <ul className="menu menu-horizontal px-4">
        <Link
          className="menu menu-horizontal text-base px-2"
          href="/allRecipes"
        >
          Recipes
        </Link>
        <Link className="menu menu-horizontal text-base px-2" href="/aboutUs">
          About Us
        </Link>
        <SearchInput />
      </ul>
    </div>
  );
};

export default FilterBar;
