import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-white shadow p-4 flex gap-6">
      <Link to="/" className="font-bold text-blue-600">Recipe Finder</Link>
      <Link to="/saved" className="hover:text-blue-500">Saved Recipes</Link>
    </nav>
  );
}
