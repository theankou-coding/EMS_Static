// layouts/PublicLayout.jsx
import { Outlet } from "react-router-dom";
import Navbar from "../components/page/Navbar";
import Footer from "../components/page/Footer";

const PublicLayout = ({ user, onLogout }) => {
  return (
    <div className="min-h-screen">
      <Navbar user={user} onLogout={onLogout} />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default PublicLayout;
