import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-blue-600 text-white px-8 py-4">
      <div className="flex gap-8 font-semibold text-lg">

        <Link to="/">Home</Link>

        <Link to="/compare">
          Compare
        </Link>

        <Link to="/saved">
          Saved
        </Link>

      </div>
    </nav>
  );
}

export default Navbar;