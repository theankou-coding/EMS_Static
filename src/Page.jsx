import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./components/page/Home";
import About from "./components/page/About";
import Contact from "./components/page/Contact";
import LoginPage from "./components/log/LoginPage";
import SignUpPage from "./components/log/SignUpPage";
import UserHome from "./components/user/Home";
import UserEvent from "./components/user/Event";
import UserCategories from "./components/user/Categories";
import ForgetPasswordPage from "./components/log/FogetPassword";
function Page() {
  return (
    <BrowserRouter>
      {/* Navbar remains visible on all pages */}
      {/* <Navbar /> */}

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/home" element={<Navigate to="/" replace />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact-us" element={<Contact />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/forget" element={<ForgetPasswordPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/user/home" element={<UserHome />} />
        <Route path="/user/event" element={<UserEvent />} />
        <Route path="/user/categories" element={<UserCategories />} />
        {/* Fallback 404 page */}
        <Route
          path="*"
          element={
            <h2 className="text-center mt-20 text-2xl text-red-600">
              404 - Page Not Found
            </h2>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default Page;
