import React from "react";
import { Link } from "react-router-dom";

const SignUpForm = () => {
  // Placeholder function for Google login/signup
  const handleGoogleAuth = () => {
    // Implement Google OAuth flow here
    alert("Google login/signup clicked");
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
      <div className="max-w-sm w-full bg-white rounded-lg border border-blue-300 shadow-md shadow-gray-400/30 p-8">
        <h2 className="text-center text-2xl font-bold mb-1">Sign Up Now!</h2>
        <p className="text-center text-xs mb-6">Join Events With Us</p>

        <form>
          <label className="block mb-1 text-gray-400 text-xs" htmlFor="email">
            Email
          </label>
          <input
            type="email"
            id="email"
            placeholder="Email"
            className="w-full mb-4 px-3 py-2 border border-gray-300 rounded text-sm placeholder-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-400"
          />

          <label
            className="block mb-1 text-gray-400 text-xs"
            htmlFor="password"
          >
            password
          </label>
          <input
            type="password"
            id="password"
            placeholder="password"
            className="w-full mb-4 px-3 py-2 border border-gray-300 rounded text-sm placeholder-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-400"
          />

          <label
            className="block mb-4 text-gray-400 text-xs"
            htmlFor="confirmPassword"
          >
            confirm password
          </label>
          <input
            type="password"
            id="confirmPassword"
            placeholder="confirm password"
            className="w-full mb-4 px-3 py-2 border border-gray-300 rounded text-sm placeholder-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-400"
          />

          <p className="text-xs mb-4">
            By creating an account you agree to our{" "}
            <a href="#" className="text-blue-400 hover:underline">
              terms of Use
            </a>
          </p>

          <Link
            to="/user/home"
            className="w-full inline-block text-center text-white font-semibold text-sm bg-blue-400 rounded-md py-2 hover:bg-blue-500 transition-colors"
          >
            Sign up
          </Link>

          <div className="flex items-center my-4 text-gray-400 text-xs">
            <hr className="flex-grow border border-gray-300" />
            <span className="mx-2">or</span>
            <hr className="flex-grow border border-gray-300" />
          </div>

          <button
            onClick={handleGoogleAuth}
            type="button"
            className="w-full border border-blue-400 text-blue-400 rounded-md py-2 text-xs flex items-center justify-center gap-2 hover:bg-blue-50 transition-colors"
          >
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/512px-Google_%22G%22_Logo.svg.png"
              alt="Google logo"
              className="w-4 h-4"
            />
            continue with google
          </button>

          <p className="text-center text-xs mt-4 text-black">
            Already have an account?{" "}
            <Link
              to="/user/home"
              className="text-blue-400 hover:underline font-semibold"
            >
              Sign in
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default SignUpForm;
