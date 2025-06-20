// Page.jsx
import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

// Public components
import Navbar from "./components/page/Navbar";
import HeroSection from "./components/HeroSection";
import SignUpPage from "./components/log/SignUpPage";
import LoginPage from "./components/log/LoginPage";
import EventDiscoveryPage from "./components/page/EventDiscoveryPage";
import Footer from "./components/page/Footer";

// Admin components
import AdminDashboard from "./AdminDashboard"; // We'll create this

function Page() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check for existing user session
    const savedUser = localStorage.getItem("userToken");
    if (savedUser) {
      try {
        const userData = JSON.parse(savedUser);
        setUser(userData);
      } catch (error) {
        localStorage.removeItem("userToken");
      }
    }
    setLoading(false);
  }, []);

  const handleLogin = (userData) => {
    setUser(userData);
    localStorage.setItem("userToken", JSON.stringify(userData));
  };

  const handleSignUp = (userData) => {
    setUser(userData);
    localStorage.setItem("userToken", JSON.stringify(userData));
  };

  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem("userToken");
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  // Check if user is admin
  const isAdmin = user?.role === "admin";

  return (
    <BrowserRouter>
      {isAdmin ? (
        // Admin View - Use your existing App.jsx structure
        <AdminDashboard user={user} onLogout={handleLogout} />
      ) : (
        // Public View
        <>
          <Navbar user={user} onLogout={handleLogout} />
          <Routes>
            <Route
              path="/"
              element={
                user ? <EventDiscoveryPage user={user} /> : <HeroSection />
              }
            />
            <Route
              path="/signup"
              element={
                user ? (
                  <Navigate to="/" replace />
                ) : (
                  <SignUpPage onSignUp={handleSignUp} />
                )
              }
            />
            <Route
              path="/login"
              element={
                user ? (
                  <Navigate to="/" replace />
                ) : (
                  <LoginPage onLogin={handleLogin} />
                )
              }
            />
            <Route
              path="/events"
              element={<EventDiscoveryPage user={user} />}
            />
            <Route
              path="/about"
              element={<div className="pt-20 p-8">About Page</div>}
            />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
          <Footer />
        </>
      )}
    </BrowserRouter>
  );
}

export default Page;
