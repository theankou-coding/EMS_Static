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
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="38"
              height="38"
              viewBox="0 0 48 48"
            >
              <path
                fill="#ffc107"
                d="M43.611 20.083H42V20H24v8h11.303c-1.649 4.657-6.08 8-11.303 8c-6.627 0-12-5.373-12-12s5.373-12 12-12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4C12.955 4 4 12.955 4 24s8.955 20 20 20s20-8.955 20-20c0-1.341-.138-2.65-.389-3.917"
              />
              <path
                fill="#ff3d00"
                d="m6.306 14.691l6.571 4.819C14.655 15.108 18.961 12 24 12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4C16.318 4 9.656 8.337 6.306 14.691"
              />
              <path
                fill="#4caf50"
                d="M24 44c5.166 0 9.86-1.977 13.409-5.192l-6.19-5.238A11.9 11.9 0 0 1 24 36c-5.202 0-9.619-3.317-11.283-7.946l-6.522 5.025C9.505 39.556 16.227 44 24 44"
              />
              <path
                fill="#1976d2"
                d="M43.611 20.083H42V20H24v8h11.303a12.04 12.04 0 0 1-4.087 5.571l.003-.002l6.19 5.238C36.971 39.205 44 34 44 24c0-1.341-.138-2.65-.389-3.917"
              />
            </svg>
            continue with google
          </button>

          <p className="text-center text-xs mt-4 text-black">
            Already have an account?{" "}
            <Link
              to="/login"
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
