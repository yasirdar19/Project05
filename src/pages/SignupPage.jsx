import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import { toast } from "react-toastify";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { FcGoogle } from "react-icons/fc";
import TopNav from "../components/TopNav";
import Footer from "../components/Footer";

const SignupPage = () => {
  const { signup, loginWithGoogle } = useAuth();
  const navigate = useNavigate();

  const [displayName, setDisplayName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSignup = async (e) => {
    e.preventDefault();
    if (!displayName || !email || !password) return toast.error("Please fill in all fields");
    if (password.length < 6) return toast.error("Password must be at least 6 characters");
    setLoading(true);
    try {
      await signup(email, password, displayName);
      toast.success("Account created! Welcome to Movie App!");
      navigate("/dashboard");
    } catch (err) {
      toast.error(err.message || "Signup failed. Try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleGoogle = async () => {
    try {
      await loginWithGoogle();
      toast.success("Signed in with Google!");
      navigate("/dashboard");
    } catch (err) {
      toast.error(err.message || "Google sign-in failed");
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-base-200">
      <TopNav />

      <main className="flex-1 flex items-center justify-center p-4">
        <div className="card bg-base-100 shadow-lg w-full max-w-md">
          <div className="card-body">
            <h2 className="card-title text-2xl justify-center mb-1">Create Account</h2>
            <p className="text-center text-sm opacity-70 mb-4">
              Join Movie App to unlock all features
            </p>

            <form onSubmit={handleSignup} className="space-y-4">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Display Name</span>
                </label>
                <input
                  type="text"
                  className="input input-bordered w-full"
                  placeholder="Your name"
                  value={displayName}
                  onChange={(e) => setDisplayName(e.target.value)}
                  required
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  className="input input-bordered w-full"
                  placeholder="you@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    className="input input-bordered w-full pr-10"
                    placeholder="Min. 6 characters"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    minLength={6}
                  />
                  <button
                    type="button"
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-lg opacity-60 hover:opacity-100 transition-opacity"
                    onClick={() => setShowPassword((v) => !v)}
                    aria-label={showPassword ? "Hide password" : "Show password"}
                  >
                    {showPassword ? <FiEyeOff /> : <FiEye />}
                  </button>
                </div>
              </div>

              <button
                type="submit"
                className="btn btn-primary w-full"
                disabled={loading}
              >
                {loading && <span className="loading loading-spinner loading-sm" />}
                {loading ? "Creating account..." : "Sign Up"}
              </button>
            </form>

            <div className="divider">OR</div>

            <button
              type="button"
              className="btn btn-outline w-full gap-2"
              onClick={handleGoogle}
            >
              <FcGoogle className="text-xl" />
              Continue with Google
            </button>

            <p className="text-center text-sm mt-4">
              Already have an account?{" "}
              <Link to="/login" className="link link-primary">
                Login
              </Link>
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default SignupPage;
