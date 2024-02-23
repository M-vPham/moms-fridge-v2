import Link from "next/link";
import FilterBar from "./components/FilterBar/FilterBar";

export default function Home() {
  return (
    <main>
      <p> Hello World</p>
      <FilterBar />
      <Link href="/allRecipes">Recipes</Link>
    </main>
  );
}
