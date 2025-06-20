import { useState } from "react";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import SignUpPage from "./components/SignUpPage";
import LoginPage from "./components/LoginPage";
import EventDiscoveryPage from "./components/EventDiscoveryPage";

// Create a wrapper component to handle navigation
const AppContent = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  const handleLogin = (userData) => {
    setUser(userData);
    // Store token in localStorage if needed
    localStorage.setItem("userToken", JSON.stringify(userData));
    navigate("/"); // Redirect to home page after login
  };

  const handleSignUp = (userData) => {
    setUser(userData);
    // Store token in localStorage if needed
    localStorage.setItem("userToken", JSON.stringify(userData));
    navigate("/"); // Redirect to home page after signup
  };

  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem("userToken");
    navigate("/"); // Redirect to home page after logout
  };

  // Check for existing user session on app load
  useState(() => {
    const savedUser = localStorage.getItem("userToken");
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
  }, []);

  return (
    <>
      <Navbar user={user} onLogout={handleLogout} />

      <Routes>
        {/* Home page - show different content based on login status */}
        <Route
          path="/"
          element={user ? <EventDiscoveryPage user={user} /> : <HeroSection />}
        />

        {/* Authentication routes */}
        <Route
          path="/signup"
          element={
            user ? (
              <EventDiscoveryPage user={user} />
            ) : (
              <SignUpPage onSignUp={handleSignUp} />
            )
          }
        />

        <Route
          path="/login"
          element={
            user ? (
              <EventDiscoveryPage user={user} />
            ) : (
              <LoginPage onLogin={handleLogin} />
            )
          }
        />

        {/* Other pages */}
        <Route path="/events" element={<EventDiscoveryPage user={user} />} />

        {/* Add more routes as needed */}
        <Route
          path="/about"
          element={<div className="pt-20 p-8">About Page</div>}
        />
        <Route
          path="/contact"
          element={<div className="pt-20 p-8">Contact Page</div>}
        />

        {/* 404 page */}
        <Route
          path="*"
          element={<div className="pt-20 p-8 text-center">Page Not Found</div>}
        />
      </Routes>
    </>
  );
};

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

export default App;
