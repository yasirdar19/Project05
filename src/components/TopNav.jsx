import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import { toast } from "react-toastify";

const TopNav = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    navigate("/");
    await logout();
    toast.success("Logged out successfully");  
  };

  const initials = user?.displayName
    ? user.displayName
        .split(" ")
        .map((n) => n[0])
        .join("")
        .toUpperCase()
        .slice(0, 2)
    : user?.email?.[0]?.toUpperCase() ?? "U";

  return (
    <nav className="navbar bg-primary text-primary-content px-4 shadow-md">
      <div className="flex-1">
        <Link to="/" className="flex items-center gap-2 text-xl font-bold hover:opacity-80 transition-opacity">
          🎬 Movie App
        </Link>
      </div>

      <div className="flex-none flex items-center gap-2">
        {user ? (
          <>
            <Link to="/dashboard" className="btn btn-ghost btn-sm text-primary-content">
              Dashboard
            </Link>

            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="flex items-center gap-2 cursor-pointer hover:opacity-80 transition-opacity"
              >
                <div className="w-8 h-8 rounded-full overflow-hidden flex items-center justify-center bg-primary-content text-primary text-sm font-bold flex-shrink-0">
                  {user.photoURL ? (
                    <img src={user.photoURL} alt="avatar" className="w-full h-full object-cover" />
                  ) : (
                    <span>{initials}</span>
                  )}
                </div>
                <span className="hidden sm:block text-sm font-medium max-w-[120px] truncate">
                  {user.displayName || user.email}
                </span>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 text-base-content rounded-box z-50 mt-3 w-56 p-2 shadow-lg"
              >
                <li className="px-3 py-2 border-b border-base-300 mb-1">
                  <span className="font-semibold block">{user.displayName || "User"}</span>
                  <span className="text-xs opacity-60 block truncate">{user.email}</span>
                </li>
                <li>
                  <button onClick={handleLogout} className="text-error font-medium">
                    Logout
                  </button>
                </li>
              </ul>
            </div>
          </>
        ) : (
          <>
            <span className="badge badge-outline text-primary-content border-primary-content text-xs hidden sm:inline-flex">
              Guest
            </span>
            <Link to="/login" className="btn btn-ghost btn-sm text-primary-content">
              Login
            </Link>
            <Link
              to="/signup"
              className="btn btn-sm bg-primary-content text-primary font-semibold border-0 hover:bg-base-100"
            >
              Sign Up
            </Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default TopNav;
