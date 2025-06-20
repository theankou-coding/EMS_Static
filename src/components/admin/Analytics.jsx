"use  client";
import {
  CalendarIcon,
  UsersIcon,
  BellIcon,
  UserCircleIcon,
  PencilSquareIcon,
  TrashIcon,
} from "@heroicons/react/24/outline";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const summaryCards = [
  {
    title: "Total Events",
    value: "248",
    trend: "12% from last month",
    trendUp: true,
    icon: CalendarIcon,
    bgIcon: "bg-blue-100",
    iconColor: "text-blue-600",
  },
  {
    title: "Total Attendees",
    value: "15,847",
    trend: "18% from last month",
    trendUp: true,
    icon: UsersIcon,
    bgIcon: "bg-purple-100",
    iconColor: "text-purple-600",
  },
];

const recentEvents = [
  {
    name: "Summer Music Festival",
    date: "Apr 15, 2025",
    status: "Active",
    statusColor: "bg-green-100 text-green-700",
  },
  {
    name: "Tech Conference 2025",
    date: "Apr 20, 2025",
    status: "Upcoming",
    statusColor: "bg-yellow-100 text-yellow-700",
  },
];

const attendanceData = [
  { day: "Mon", attendees: 20 },
  { day: "Tue", attendees: 30 },
  { day: "Wed", attendees: 20 },
  { day: "Thu", attendees: 40 },
  { day: "Fri", attendees: 35 },
  { day: "Sat", attendees: 50 },
  { day: "Sun", attendees: 45 },
];

const quickActions = [
  { label: "Create Event", icon: CalendarIcon },
  { label: "Add Attendee", icon: UsersIcon },
  { label: "View Reports", icon: CalendarIcon },
  { label: "Settings", icon: CalendarIcon },
];

const recentEventsTable = [
  {
    name: "Tech Conference 2025",
    date: "Apr 15, 2025",
    location: "NICC",
    attendees: 1240,
    status: "Active",
    statusColor: " text-green-700",
  },
  {
    name: "Engineering Days",
    date: "Apr 20, 2025",
    location: "NICC",
    attendees: 856,
    status: "Pending",
    statusColor: " text-yellow-700",
  },
  {
    name: "Web Marketing",
    date: "Apr 25, 2025",
    location: "NICC",
    attendees: 425,
    status: "Draft",
    statusColor: " text-gray-700",
  },
];

export default function Dashboard() {
  return (
    <div className="min-h-screen dark:bg-gray-800 flex font-sans">
      {/* Main Content without sidebar */}
      <main className="flex-1 p-8">
        {/* Header */}
        <header className="flex justify-between items-center border-b border-gray-200 pb-4 mb-8">
          <div>
            <h2 className="text-2xl font-bold">Dashboard Overview</h2>
            <p className="text-gray-600 mt-1">Welcome back, Admin</p>
          </div>
          <div className="flex items-center space-x-6">
            <button
              aria-label="Notifications"
              className="p-2 rounded-full hover:bg-gray-100"
            >
              <BellIcon className="w-6 h-6 text-gray-600" />
            </button>
            <div className="flex items-center space-x-3 text-gray-700 font-medium">
              <UserCircleIcon className="w-6 h-6" />
              <span>Admin User</span>
            </div>
          </div>
        </header>

        {/* Summary Cards */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          {summaryCards.map(
            ({
              title,
              value,
              trend,
              trendUp,
              icon: Icon,
              bgIcon,
              iconColor,
            }) => (
              <div
                key={title}
                className="dark:bg-gray-900 p-4 rounded-lg shadow flex items-center space-x-4"
              >
                <div
                  className={`${bgIcon} p-3 rounded-md flex items-center justify-center`}
                >
                  <Icon className={`${iconColor} w-6 h-6`} />
                </div>
                <div>
                  <p className="text-sm text-gray-500">{title}</p>
                  <p className="text-2xl font-bold">{value}</p>
                  <p
                    className={`text-sm font-semibold mt-1 ${
                      trendUp ? "text-green-500" : "text-red-500"
                    }`}
                  >
                    {trendUp ? "↑" : "↓"} {trend}
                  </p>
                </div>
              </div>
            )
          )}
        </section>

        {/* Row: Recent Events + Attendance Analytics */}
        <section className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-10">
          {/* Recent Events */}
          <div className="dark:bg-gray-900 p-6 rounded-lg shadow col-span-1 lg:col-span-2">
            <div className="flex justify-between items-center mb-4">
              <h3 className="font-semibold text-lg">Recent Events</h3>
              <button className="text-blue-600 hover:underline text-sm">
                View All
              </button>
            </div>
            {recentEvents.map(({ name, date, status, statusColor }) => (
              <div
                key={name}
                className="flex justify-between items-center dark:bg-gray-900 rounded-md p-3 mb-3"
              >
                <div>
                  <p className="font-medium">{name}</p>
                  <p className="text-xs text-gray-500">{date}</p>
                </div>
                <div>
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-semibold ${statusColor}`}
                  >
                    {status}
                  </span>
                </div>
              </div>
            ))}
          </div>
          {/* Attendance Analytics (Bar Chart) */}
          <div className="dark:bg-gray-900 p-6 rounded-lg shadow">
            <div className="flex justify-between items-center mb-4">
              <h3 className="font-semibold text-lg">Attendance Analytics</h3>
              <select className="text-sm rounded border border-gray-300 px-2 py-1">
                <option>Last 7 days</option>
                <option>Last 30 days</option>
                <option>Last year</option>
              </select>
            </div>
            <ResponsiveContainer width="100%" height={180}>
              <BarChart data={attendanceData} margin={{ left: -10, right: 0 }}>
                <XAxis dataKey="day" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="attendees" fill="#4338CA" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </section>

        {/* Quick Actions */}
        <section className="dark:bg-gray-900 p-6 rounded-lg shadow mb-10 grid grid-cols-2 md:grid-cols-4 gap-4">
          {quickActions.map(({ label, icon: Icon }) => (
            <button
              key={label}
              className="flex flex-col items-center space-y-2 p-3 dark:bg-gray-900 rounded-lg hover:bg-blue-100 transition text-gray-700"
            >
              <Icon className="w-6 h-6 text-blue-600" />
              <span className="text-sm font-semibold">{label}</span>
            </button>
          ))}
        </section>

        {/* Bottom Table Recent Events */}
        <section className="dark:bg-gray-900 rounded-lg shadow p-6">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-semibold">Recent Events</h3>
            <button className="text-blue-600 hover:underline text-sm">
              View All
            </button>
          </div>
          <table className="w-full text-left border-collapse border border-gray-200">
            <thead>
              <tr>
                <th className="py-2 px-3 border border-gray-200">Event Name</th>
                <th className="py-2 px-3 border border-gray-200">Date</th>
                <th className="py-2 px-3 border border-gray-200">Location</th>
                <th className="py-2 px-3 border border-gray-200">Attendees</th>
                <th className="py-2 px-3 border border-gray-200">Status</th>
                <th className="py-2 px-3 border border-gray-200">Actions</th>
              </tr>
            </thead>
            <tbody>
              {recentEventsTable.map(
                (
                  { name, date, location, attendees, status, statusColor },
                  i
                ) => (
                  <tr key={i} className="hover:dark:bg-gray-800">
                    <td className="py-2 px-3 border border-gray-200">{name}</td>
                    <td className="py-2 px-3 border border-gray-200">{date}</td>
                    <td className="py-2 px-3 border border-gray-200">
                      {location}
                    </td>
                    <td className="py-2 px-3 border border-gray-200">
                      {attendees.toLocaleString()}
                    </td>
                    <td
                      className={`py-1 px-3 border border-gray-200 rounded-full font-semibold ${statusColor}`}
                    >
                      {status}
                    </td>
                    <td className="py-2 px-3 border border-gray-200 flex space-x-2">
                      <button className="hover:text-blue-600">
                        <PencilSquareIcon className="w-5 h-5" />
                      </button>
                      <button className="hover:text-red-600">
                        <TrashIcon className="w-5 h-5" />
                      </button>
                    </td>
                  </tr>
                )
              )}
            </tbody>
          </table>
        </section>
      </main>
    </div>
  );
}
