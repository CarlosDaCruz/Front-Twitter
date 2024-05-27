import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function Navbar() {
  const { isAuthenticated, logout, user } = useAuth();

  return (
    <div>
      <nav className="bg-zinc-700 my-3 flex justify-between py-5 px-10 rounded-lg">
        <Link to="/">
          <h1 className="text-2xl font-bold">BuzzFlow</h1>
        </Link>
        <ul className="flex gap-x-2 items-center">
          {isAuthenticated ? (
            <>
              <li>
              <Link className="bg-fuchsia-600 px-4 py-1 rounded-sm" to="/" >Home</Link>
              </li>
              <li>
                <Link to="/profile" className="bg-fuchsia-600 px-4 py-1 rounded-sm">Profile</Link>
              </li>
              <li>
                <Link className="bg-fuchsia-600 px-4 py-1 rounded-sm" to="/login" onClick={() => {
                    logout();
                }}>Logout</Link>
              </li>
            </>
          ) : (
            <>
              <li>
                <Link to="/login" className=" bg-fuchsia-600 px-4 py-1 rounded-sm">Login</Link>
              </li>
              <li>
                <Link to="/register" className="bg-fuchsia-600 px-4 py-1 rounded-sm">Register</Link>
              </li>
            </>
          )}
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
