import React from "react";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <p> Hello World</p>
      <Link href="/allRecipes">Recipes</Link>
    </div>
  );
}
