import Link from "next/link";

export default function Home() {
  return (
    <main>
      <p> Hello World</p>
      <Link href="/allRecipes">Recipes</Link>
    </main>
  );
}
