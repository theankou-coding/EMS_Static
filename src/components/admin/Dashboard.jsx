'use client';

import {
  CalendarIcon,
  FolderIcon,
  EyeIcon,
  Bars3Icon,
  UsersIcon,
} from '@heroicons/react/24/outline';

export default function Dashboard() {
  return (
    <main className="relative max-w-7xl mx-auto mt-5">
      {/* Header bar */}
      <header className=" relative flex items-center  justify-between p-4 bg-white rounded-xl shadow">
        <div>
          <h1 className="text-lg font-semibold flex items-center space-x-2">
            <CalendarIcon className="w-6 h-6 text-teal-700" />
            <span>Dashboard</span>
            <span className="bg-teal-700 text-white text-xs px-2 py-0.5 rounded-full">✔</span>
          </h1>
          <p className="text-gray-600 text-xs mt-1">
            Hi loem theankou, Welcome to Menu online Dashboard!
          </p>
        </div>
        <div className="flex items-center space-x-3">
          <button
            className="flex items-center gap-2 px-4 py-1 border border-gray-300 rounded-lg hover:bg-gray-100 transition"
            aria-label="List view"
            title="List view"
          >
            <Bars3Icon className="w-5 h-5" />
          </button>
          <button
            className="flex items-center gap-2 px-4 py-1 border border-gray-300 rounded-lg hover:bg-gray-100 transition"
            aria-label="Grid view"
            title="Grid view"
          >
            <FolderIcon className="w-5 h-5" />
          </button>
          <button
            className="flex items-center gap-2 px-4 py-1 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition"
            aria-label="Open app"
            title="Open app"
          >
            <EyeIcon className="w-5 h-5" />
            <span>open app</span>
          </button>
        </div>
      </header>

      {/* Filters and date range */}
      <section className="flex items-center justify-between mt-6 space-x-4">
        <div className="flex space-x-3">
          <button className="bg-teal-700 text-white rounded-lg px-6 py-2 font-semibold shadow">
            Today
          </button>
          <button className="px-6 py-2 rounded-lg bg-white border border-gray-300 font-semibold hover:bg-gray-100 transition">
            Week
          </button>
          <button className="px-6 py-2 rounded-lg bg-white border border-gray-300 font-semibold hover:bg-gray-100 transition">
            Month
          </button>
        </div>
        <button
          className="w-56 px-4 py-2 border border-gray-300 rounded-lg text-gray-500 text-sm text-left cursor-default select-none"
          disabled
        >
          04/06/2025 - 04/08/2025
        </button>
        <button className="flex items-center space-x-2 px-3 py-2 bg-white border border-gray-300 rounded-lg shadow cursor-pointer">
          <UsersIcon className="w-5 h-5 text-gray-600" />
          <span className="text-sm">Makho_unique</span>
        </button>
      </section>

      {/* Top cards */}
      <section className="grid grid-cols-12 gap-4 mt-6">
        <div className="col-span-5 rounded-xl bg-gradient-to-tr from-blue-900 to-blue-700 h-28"></div>
        <div className="col-span-4 rounded-xl bg-gradient-to-tr from-teal-700 to-teal-600 h-28"></div>
        <div className="col-span-3 rounded-xl bg-gradient-to-tr from-blue-800 to-blue-700 h-28"></div>
      </section>

      {/* Main dashboard content */}
      <section className="grid grid-cols-12 gap-6 mt-6">
        {/* Total Orders */}
        <section className="col-span-7 bg-white rounded-xl shadow p-6 flex flex-col">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-lg font-semibold">Total Orders</h2>
            <select className="border border-gray-300 rounded-lg px-3 py-1 font-semibold focus:outline-none">
              <option>Orders</option>
              <option>Users</option>
            </select>
          </div>
          <div className="flex-grow border border-gray-300 border-dashed rounded-lg flex items-center justify-center text-gray-400 select-none">
            {/* Placeholder for chart */}
            No records available
          </div>
        </section>

        {/* Right side stats */}
        <aside className="col-span-5 grid grid-rows-2 gap-6">
          {/* QR Scan Count */}
          <section className="bg-white rounded-xl shadow p-6 flex flex-col">
            <h3 className="font-semibold mb-4">QR Scan Count</h3>
            <table className="text-left text-sm w-full border-collapse">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="py-2">Store</th>
                  <th className="py-2">Table</th>
                  <th className="py-2">Count</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-100">
                  <td className="py-2">Makho_unique</td>
                  <td className="py-2">Dinner</td>
                  <td className="py-2">1</td>
                </tr>
              </tbody>
            </table>
          </section>

          {/* Most Sold Foods */}
          <section className="bg-white rounded-xl shadow p-6 flex items-center justify-center text-gray-400 select-none border border-gray-300 border-dashed">
            Most Sold Foods No records available
          </section>
        </aside>
      </section>
    </main>
  );
}
