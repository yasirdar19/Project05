import { Link } from "react-router-dom";
import TopNav from "../components/TopNav";
import Footer from "../components/Footer";

const NotFoundPage = () => {
  return (
    <div className="min-h-screen flex flex-col bg-base-200">
      <TopNav />

      <main className="flex-1 flex items-center justify-center p-4">
        <div className="text-center">
          <p className="text-8xl font-bold text-primary opacity-20 select-none">404</p>
          <h1 className="text-3xl font-bold mt-2 mb-2">Page Not Found</h1>
          <p className="text-base opacity-70 mb-8 max-w-sm mx-auto">
            The page you&apos;re looking for doesn&apos;t exist or has been moved.
            Double-check the URL and try again.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link to="/" className="btn btn-primary">
              Go to Home
            </Link>
            <Link to="/login" className="btn btn-outline">
              Login
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default NotFoundPage;
