import { Link } from "react-router-dom";
import TopNav from "../components/TopNav";
import Footer from "../components/Footer";

const UnauthorizedPage = () => {
  return (
    <div className="min-h-screen flex flex-col bg-base-200">
      <TopNav />

      <main className="flex-1 flex items-center justify-center p-4">
        <div className="text-center">
          <p className="text-8xl font-bold text-warning opacity-20 select-none">401</p>
          <h1 className="text-3xl font-bold mt-2 mb-2">Unauthorized</h1>
          <p className="text-base opacity-70 mb-8 max-w-sm mx-auto">
            You need to be logged in to access this page. Please sign in with your
            account to continue.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link to="/login" className="btn btn-primary">
              Login
            </Link>
            <Link to="/signup" className="btn btn-outline">
              Create Account
            </Link>
            <Link to="/" className="btn btn-ghost">
              Go to Home
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default UnauthorizedPage;
