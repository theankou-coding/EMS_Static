import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/page/Home";
import About from "./components/page/About";
import Contact from "./components/page/Contact"; // Make sure Contact.jsx is correctly named

function Page() {
  return (
    <BrowserRouter>
      {/* Navbar remains visible on all pages */}
      <Navbar />

      <Routes>
        {/* Root route shows Home page */}
        <Route path="/" element={<Home />} />

        {/* Redirect /home to / for cleaner URL */}
        <Route path="/home" element={<Navigate to="/" replace />} />

        {/* About page */}
        <Route path="/about" element={<About />} />

        {/* Contact Us page */}
        <Route path="/contact-us" element={<Contact />} />

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
