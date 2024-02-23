"use client";
import React from "react";
import styles from "./FilterBar.module.css";
const FilterBar = () => {
  return (
    <div className={styles.filterBar}>
      <input
        type="text"
        placeholder="Type here"
        className="input input-bordered w-full max-w-xs"
      />
    </div>
  );
};

export default FilterBar;
