import { useState, useEffect, useCallback, Fragment } from "react";
import { Link, useLocation } from "react-router-dom";
import { mainNavigation } from "../data/home/navigation";
import logoIcon from "../assets/Images/logo-white.png";

const Navbar = ({ user = null, onLogout }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(null);
  const location = useLocation();
  const pathname = location.pathname;

  // Handle scrolling effect
  const handleScroll = useCallback(() => {
    setIsScrolled(window.scrollY > 10);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  // Close dropdown when clicking outside
  const handleClickOutside = useCallback(
    (event) => {
      if (dropdownOpen && !event.target.closest(".nav-dropdown")) {
        setDropdownOpen(null);
      }
    },
    [dropdownOpen]
  );

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [handleClickOutside]);

  // Close mobile menu and dropdowns when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
    setDropdownOpen(null);
  }, [pathname]);

  const toggleDropdown = useCallback((itemId) => {
    setDropdownOpen((prev) => (prev === itemId ? null : itemId));
  }, []);

  const toggleMobileMenu = useCallback(() => {
    setIsMobileMenuOpen((prev) => !prev);
  }, []);

  const handleLogoutClick = useCallback(() => {
    if (onLogout) {
      onLogout();
    }
  }, [onLogout]);

  const getBadgeStyles = (variant) => {
    const baseStyles = "ml-2 py-0.5 px-1.5 text-xs font-medium rounded";
    const variantStyles = {
      new: "bg-green-500/20 text-green-500",
      hot: "bg-blue-500/20 text-blue-500",
      sale: "bg-blue-500/20 text-blue-500",
      default: "bg-purple-500/20 text-purple-500",
    };
    return `${baseStyles} ${variantStyles[variant] || variantStyles.default}`;
  };

  const getNavItemStyles = (itemPath) => {
    const baseStyles =
      "flex items-center space-x-2 px-4 py-2 rounded-md text-lg font-medium transition-colors duration-200";
    const isActive =
      pathname === itemPath || pathname.startsWith(`${itemPath}/`);
    const activeStyles = isActive
      ? "bg-gray-700/40 text-blue-500"
      : "text-gray-300 hover:bg-gray-700/30 hover:text-blue-500";
    return `${baseStyles} ${activeStyles}`;
  };

  const renderBadge = (badge) => {
    if (!badge) return null;
    return <span className={getBadgeStyles(badge.variant)}>{badge.text}</span>;
  };

  const renderDropdownIcon = (isOpen) => (
    <svg
      className={`ml-1.5 h-4 w-4 transition-transform ${
        isOpen ? "rotate-180" : ""
      }`}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M19 9l-7 7-7-7"
      />
    </svg>
  );

  const renderDesktopNavigationItem = (item) => (
    <div key={item.id} className="relative nav-dropdown">
      {item.children ? (
        <Fragment>
          <button
            className={getNavItemStyles(item.path)}
            onClick={() => toggleDropdown(item.id)}
            aria-expanded={dropdownOpen === item.id}
            aria-haspopup="true"
          >
            <span>{item.name}</span>
            {renderDropdownIcon(dropdownOpen === item.id)}
          </button>
          {dropdownOpen === item.id && (
            <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-1 w-64 p-2 bg-gray-900/95 backdrop-blur-md border border-gray-800 rounded-lg shadow-xl">
              <div className="py-1">
                {item.children.map((childItem) => (
                  <Link
                    key={childItem.id}
                    to={childItem.path}
                    className={`flex items-center space-x-2 px-4 py-2 rounded-md text-lg font-medium transition-colors duration-200 ${
                      pathname === childItem.path
                        ? "bg-gray-700/40 text-blue-500"
                        : "text-gray-300 hover:bg-gray-700/30 hover:text-blue-500"
                    } ${
                      childItem.featured
                        ? "border-l-2 border-blue-500 pl-3.5"
                        : ""
                    }`}
                  >
                    <span>{childItem.name}</span>
                  </Link>
                ))}
              </div>
              <div className="mt-2 pt-2 border-t border-gray-800">
                <Link
                  to={item.path}
                  className="block px-4 py-2 text-lg font-medium text-gray-400 hover:text-blue-500 transition-colors"
                >
                  View all {item.name.toLowerCase()} →
                </Link>
              </div>
            </div>
          )}
        </Fragment>
      ) : (
        <Link to={item.path} className={getNavItemStyles(item.path)}>
          <span>{item.name}</span>
        </Link>
      )}
    </div>
  );

  const renderMobileNavigationItem = (item) => (
    <div key={item.id}>
      {item.children ? (
        <Fragment>
          <button
            className={`flex items-center justify-between w-full py-2 text-sm font-medium transition-colors ${
              pathname === item.path || pathname.startsWith(`${item.path}/`)
                ? "text-blue-500"
                : "text-gray-300 hover:text-white"
            }`}
            onClick={() => toggleDropdown(item.id)}
            aria-expanded={dropdownOpen === item.id}
          >
            <span className="flex items-center">
              {item.name}
              {renderBadge(item.badge)}
            </span>
            {renderDropdownIcon(dropdownOpen === item.id)}
          </button>
          {dropdownOpen === item.id && (
            <div className="mt-1 pl-4 border-l border-gray-800 space-y-1">
              {item.children.map((childItem) => (
                <Link
                  key={childItem.id}
                  to={childItem.path}
                  className={`block py-2 text-sm transition-colors ${
                    pathname === childItem.path
                      ? "text-blue-500"
                      : "text-gray-400 hover:text-white"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span>{childItem.name}</span>
                    {renderBadge(childItem.badge)}
                  </div>
                </Link>
              ))}
              <Link
                to={item.path}
                className="block py-2 text-xs font-medium text-gray-400 hover:text-blue-500 transition-colors"
              >
                View all {item.name.toLowerCase()} →
              </Link>
            </div>
          )}
        </Fragment>
      ) : (
        <Link
          to={item.path}
          className={`block py-2 text-sm font-medium transition-colors ${
            pathname === item.path
              ? "text-blue-500"
              : "text-gray-300 hover:text-white"
          }`}
        >
          <div className="flex items-center">
            {item.name}
            {renderBadge(item.badge)}
          </div>
        </Link>
      )}
    </div>
  );

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-gray-900/90 backdrop-blur-md py-2 shadow-lg"
          : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4 lg:px-8 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-3 justify-center">
          <div className="relative h-16 w-20 flex-shrink-0">
            <img
              src={logoIcon}
              alt="ems-logo"
              className="object-contain h-full w-full"
            />
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex text-white items-center space-x-4">
          {mainNavigation.map(renderDesktopNavigationItem)}
        </div>

        {/* CTA Buttons */}
        <div className="hidden lg:block">
          <div className="ml-10 flex items-center space-x-8">
            {user ? (
              // Show user profile if logged in
              <div className="flex items-center space-x-4">
                <span className="text-white">Welcome, {user.name}!</span>
                <button
                  onClick={handleLogoutClick}
                  className="px-7 py-2 text-[1.2rem] bg-red-500 text-white rounded-md hover:bg-red-600 transition-colors"
                >
                  Logout
                </button>
              </div>
            ) : (
              // Show Sign Up button if not logged in
              <Link
                to="/signup"
                className="inline-flex primary-btn px-7 py-2 items-center text-[1.2rem] bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors"
              >
                Sign Up
              </Link>
            )}
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 rounded-lg hover:bg-gray-800 text-gray-300 transition-colors"
          onClick={toggleMobileMenu}
          aria-label="Toggle mobile menu"
          aria-expanded={isMobileMenuOpen}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={
                isMobileMenuOpen
                  ? "M6 18L18 6M6 6l12 12"
                  : "M4 6h16M4 12h16m-7 6h7"
              }
            />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden absolute top-full left-0 right-0 bg-gray-900 border-t border-gray-800 transition-all duration-300 ${
          isMobileMenuOpen
            ? "max-h-screen opacity-100"
            : "max-h-0 opacity-0 pointer-events-none"
        } overflow-hidden`}
      >
        <div className="px-8 py-2 space-y-2 max-h-[70vh] overflow-y-auto">
          {mainNavigation.map(renderMobileNavigationItem)}

          {/* Mobile Sign Up/Logout Button */}
          <div className="pt-4">
            {user ? (
              <div className="space-y-2">
                <div className="text-white text-sm">Welcome, {user.name}!</div>
                <button
                  onClick={handleLogoutClick}
                  className="block w-full text-center py-3 bg-red-500 text-white rounded-md hover:bg-red-600 transition-colors"
                >
                  Logout
                </button>
              </div>
            ) : (
              <Link
                to="/signup"
                className="block w-full text-center py-3 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors"
              >
                Sign Up
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
