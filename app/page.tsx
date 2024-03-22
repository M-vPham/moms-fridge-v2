import React from "react";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Link href="/aboutUs">About Us</Link>
      <Link href="/allRecipes">Recipes</Link>
    </div>
  );
}
