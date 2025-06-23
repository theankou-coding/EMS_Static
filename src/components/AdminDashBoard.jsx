// AdminDashboard.jsx
import { Routes, Route, NavLink, Navigate } from "react-router-dom";

import {
  CalendarIcon,
  UsersIcon,
  BellIcon,
  UserCircleIcon,
  ChartBarIcon,
  CogIcon,
  HomeIcon,
} from "@heroicons/react/24/outline";

// Import your admin components
import EventManager from "./admin/EventManager";
import EventManagerEdit from "./admin/EventManagerEdit";
import Analytics from "./admin/Analytics";
import Attendee from "./admin/Attendee";
import AddAttendee from "./admin/AddAttendee";
import AttendeeEdit from "./admin/AttendeeEdit";
import Dashboard from "./admin/Dashboard";

const AdminDashboard = ({ user, onLogout }) => {
  const tabs = [
    { name: "Dashboard", icon: HomeIcon, path: "/dashboard" },
    { name: "Events", icon: CalendarIcon, path: "/events" },
    { name: "Attendees", icon: UsersIcon, path: "/attendees" },
    { name: "Analytics", icon: ChartBarIcon, path: "/analytics" },
    { name: "Settings", icon: CogIcon, path: "/settings" },
  ];

  return (
    <div className="h-screen flex bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700 flex flex-col">
        <div className="px-6 py-5 text-lg font-semibold border-b border-gray-200 dark:border-gray-700">
          Event Manager
        </div>
        <nav className="flex flex-col space-y-2 px-2 py-4 flex-1">
          {tabs.map(({ name, icon: Icon, path }) => (
            <NavLink
              key={name}
              to={path}
              className={({ isActive }) =>
                `flex items-center space-x-2 rounded-md px-3 py-2 font-medium cursor-pointer transition-colors ${
                  isActive
                    ? "bg-blue-100 text-blue-700 dark:bg-blue-600 dark:text-white"
                    : "text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                }`
              }
            >
              <Icon className="w-5 h-5" />
              <span>{name}</span>
            </NavLink>
          ))}
        </nav>

        {/* Logout Button */}
        <div className="px-2 py-4 border-t border-gray-200 dark:border-gray-700">
          <button
            onClick={onLogout}
            className="w-full flex items-center space-x-2 rounded-md px-3 py-2 font-medium text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
              />
            </svg>
            <span>Logout</span>
          </button>
        </div>
      </aside>

      {/* Main content area */}
      <main className="flex-1 flex flex-col overflow-auto">
        <header className="flex items-center justify-between border-b border-gray-200 dark:border-gray-700 px-6 py-3 bg-white dark:bg-gray-800">
          <h1 className="text-xl font-semibold">Admin Dashboard</h1>
          <div className="flex items-center space-x-4">
            <button
              aria-label="Notifications"
              className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700"
            >
              <BellIcon className="w-6 h-6" />
            </button>
            <div className="flex items-center space-x-2 text-sm font-medium">
              <UserCircleIcon className="w-6 h-6" />
              <span>{user?.name || "Admin User"}</span>
            </div>
          </div>
        </header>

        <section className="flex-1 overflow-y-auto p-6 bg-gray-50 dark:bg-gray-900">
          <Routes>
            <Route path="/" element={<Navigate to="/dashboard" replace />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/events" element={<EventManager />} />
            <Route path="/events/edit/:id" element={<EventManagerEdit />} />
            <Route path="/attendees" element={<Attendee />} />
            <Route path="/attendees/edit/:id" element={<AttendeeEdit />} />
            <Route path="/attendees/add" element={<AddAttendee />} />
            <Route path="/analytics" element={<Analytics />} />
            <Route path="/settings" element={<div>Settings Component</div>} />
            <Route path="*" element={<Navigate to="/dashboard" replace />} />
          </Routes>
        </section>
      </main>
    </div>
  );
};

export default AdminDashboard;
