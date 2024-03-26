import React from "react";
import Link from "next/link";
import FilterBar from "@/components/FilterBar/FilterBar";
export default function Home() {
  return (
    <FilterBar/>
    <div>
      <Link href="/aboutUs">About Us</Link>
      <Link href="/allRecipes">Recipes</Link>
    </div>
  );
}
