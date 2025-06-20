import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
  Navigate,
} from "react-router-dom";
import {
  CalendarIcon,
  UsersIcon,
  BellIcon,
  UserCircleIcon,
} from "@heroicons/react/24/outline";
// Import your page/components files.
import EventManager from "./components/admin/EventManager";
import EventManagerEdit from "./components/admin/AttendeeEdit";
import Analytics from "./components/admin/Analytics";
import Attendee from "./components/admin/AddAttendee";
import AddAttendee from "./components/admin/AddAttendee";
import AttendeeEdit from "./components/admin/AttendeeEdit";
import Dashboard from "./components/admin/Dashboard";
// import Setting from "./components/admin/";
const tabs = [
  { name: "Event", icon: CalendarIcon, path: "/event" },
  { name: "Attendee", icon: UsersIcon, path: "/attendee" },
  { name: "Dashboard", icon: CalendarIcon, path: "/dashboard" },
  { name: "Analytics", icon: CalendarIcon, path: "/analytics" },
  { name: "Setting", icon: CalendarIcon, path: "/setting" },
];
export default function App() {
  return (
    <Router>
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
                  `flex items-center space-x-2 rounded-md px-3 py-2 font-medium cursor-pointer ${
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
        </aside>
        {/* Main content area */}
        <main className="flex-1 flex flex-col overflow-auto">
          <header className="flex items-center justify-between border-b border-gray-200 dark:border-gray-700 px-6 py-3 bg-white dark:bg-gray-800">
            <h1 className="text-xl font-semibold">Event Manager</h1>
            <div className="flex items-center space-x-4">
              <button
                aria-label="Notifications"
                className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700"
              >
                <BellIcon className="w-6 h-6" />
              </button>
              <div className="flex items-center space-x-2 text-sm font-medium">
                <UserCircleIcon className="w-6 h-6" />
                <span>Admin User</span>
              </div>
            </div>
          </header>
          <section className="flex-1 overflow-y-auto p-6 bg-gray-50 dark:bg-gray-900">
            <Routes>
              <Route path="/event" element={<EventManager />} />
              <Route
                path="/eventmanageredit/:id"
                element={<EventManagerEdit />}
              />
              <Route path="/attendee" element={<Attendee />} />
              <Route path="/attendeeedit/:id" element={<AttendeeEdit />} />
              <Route path="/addattendee" element={<AddAttendee />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/analytics" element={<Analytics />} />
              {/* <Route path="/setting" element={<Setting />} /> */}
              <Route path="*" element={<Navigate to="/event" replace />} />
            </Routes>
          </section>
        </main>
      </div>
    </Router>
  );
}
