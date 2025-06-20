'use  client';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  CalendarIcon,
  UsersIcon,
  TicketIcon,
  StarIcon,
  PencilSquareIcon,
  TrashIcon,
} from '@heroicons/react/24/outline';

const summaryData = [
  {
    label: 'Total Events',
    value: '245',
    icon: CalendarIcon,
    bgColor: 'bg-blue-100',
    iconColor: 'text-blue-600',
  },
  {
    label: 'Total Attendees',
    value: '1,234',
    icon: UsersIcon,
    bgColor: 'bg-green-100',
    iconColor: 'text-green-600',
  },
  {
    label: 'Total Registrations',
    value: '892',
    icon: TicketIcon,
    bgColor: 'bg-purple-100',
    iconColor: 'text-purple-600',
  },
  {
    label: 'Feedback Score',
    value: '4.7 / 5',
    icon: StarIcon,
    bgColor: 'bg-yellow-100',
    iconColor: 'text-yellow-600',
  },
];

const initialRecentEvents = [
  {
    eventName: 'Tech Conference 2025',
    date: 'Apr 15, 2025',
    location: 'NICC',
    status: 'Active',
    statusColor: 'bg-green-100 text-green-700',
  },
  {
    eventName: 'Engineering Days',
    date: 'May 20, 2025',
    location: 'NICC',
    status: 'Pending',
    statusColor: 'bg-yellow-100 text-yellow-700',
  },
  {
    eventName: 'Tech Conference 2025',
    date: 'Apr 15, 2025',
    location: 'NICC',
    status: 'Active',
    statusColor: 'bg-green-100 text-green-700',
  },
  {
    eventName: 'Engineering Days',
    date: 'May 20, 2025',
    location: 'NICC',
    status: 'Pending',
    statusColor: 'bg-yellow-100 text-yellow-700',
  },
];

export default function EventDashboard() {
  const navigate = useNavigate();

  const [recentEvents, setRecentEvents] = useState(initialRecentEvents);
  const [modalOpen, setModalOpen] = useState(false);
  const [newEvent, setNewEvent] = useState({
    eventName: '',
    date: '',
    location: '',
    status: 'Pending',
  });

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  const handleChange = (e) => {
    setNewEvent({ ...newEvent, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newEvent.eventName || !newEvent.date || !newEvent.location) return;

    const statusColor =
      newEvent.status === 'Active'
        ? 'bg-green-100 text-green-700'
        : newEvent.status === 'Pending'
          ? 'bg-yellow-100 text-yellow-700'
          : 'bg-gray-100 text-gray-700';

    setRecentEvents([
      {
        eventName: newEvent.eventName,
        date: newEvent.date,
        location: newEvent.location,
        status: newEvent.status,
        statusColor,
      },
      ...recentEvents,
    ]);
    setNewEvent({ eventName: '', date: '', location: '', status: 'Pending' });
    closeModal();
  };

  return (
    <div className="max-w-8xl mx-auto p-6 dark:bg-gray-800 min-h-screen ">
      {/* Summary Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-6">
        {summaryData.map(({ label, value, icon: Icon, bgColor, iconColor }) => (
          <div
            key={label}
            className="flex items-center space-x-4 rounded-lg p-4 shadow bg-gray-50 dark:bg-gray-700"
          >
            <div
              className={`p-3 rounded-lg flex items-center justify-center ${bgColor} ${iconColor}`}
            >
              <Icon className="w-6 h-6" />
            </div>
            <div>
              <p className="text-sm text-gray-500 dark:text-gray-300 font-medium">{label}</p>
              <p className="text-lg font-semibold text-gray-900 dark:text-gray-100">{value}</p>
            </div>
          </div>
        ))}
      </div>
      {/* Add New Event Button */}
      <button
        className="mb-6 bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700 transition"
        onClick={openModal}
      >
        + Add New Event
      </button>
      {/* Recent Events Table */}
      <div>
        <h2 className="font-semibold text-lg mb-4 text-gray-900 dark:text-gray-100">
          Recent Events
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm border-collapse">
            <thead>
              <tr className="bg-gray-100 dark:bg-gray-900">
                <th className="px-4 py-3 font-medium text-gray-700 dark:text-gray-300">
                  Event Name
                </th>
                <th className="px-4 py-3 font-medium text-gray-700 dark:text-gray-300">Date</th>
                <th className="px-4 py-3 font-medium text-gray-700 dark:text-gray-300">Location</th>
                <th className="px-4 py-3 font-medium text-gray-700 dark:text-gray-300">Status</th>
                <th className="px-4 py-3 font-medium text-gray-700 dark:text-gray-300">Actions</th>
              </tr>
            </thead>
            <tbody>
              {recentEvents.map(({ eventName, date, location, status, statusColor }, idx) => (
                <tr
                  key={`${eventName}-${idx}`}
                  className={
                    idx % 2 === 0 ? 'bg-white dark:bg-gray-800' : 'bg-gray-50 dark:bg-gray-700'
                  }
                >
                  <td className="px-4 py-3 text-gray-900 dark:text-gray-100">{eventName}</td>
                  <td className="px-4 py-3 text-gray-900 dark:text-gray-100">{date}</td>
                  <td className="px-4 py-3 text-gray-900 dark:text-gray-100">{location}</td>
                  <td className="px-4 py-3">
                    <span
                      className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${statusColor}`}
                    >
                      {status}
                    </span>
                  </td>
                  <td className="px-4 py-3 flex space-x-4 text-blue-600">
                    <button
                      aria-label="Edit"
                      onClick={() => navigate(`/eventmanageredit/${idx}`)}
                      className="hover:text-blue-900"
                    >
                      <PencilSquareIcon className="w-5 h-5" />
                    </button>
                    <button aria-label="Delete" className="text-red-600 hover:text-red-900">
                      <TrashIcon className="w-5 h-5" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Modal */}
      {modalOpen && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center p-4">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg w-full max-w-lg p-6 relative">
            <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-gray-100">
              Add New Event
            </h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label
                  htmlFor="eventName"
                  className="block text-sm font-medium mb-1 text-gray-900 dark:text-gray-100"
                >
                  Event Name
                </label>
                <input
                  id="eventName"
                  name="eventName"
                  type="text"
                  value={newEvent.eventName}
                  onChange={handleChange}
                  placeholder="Enter event name"
                  className="w-full rounded border border-gray-300 dark:border-gray-600 p-2 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="date"
                  className="block text-sm font-medium mb-1 text-gray-900 dark:text-gray-100"
                >
                  Date
                </label>
                <input
                  id="date"
                  name="date"
                  type="date"
                  value={newEvent.date}
                  onChange={handleChange}
                  className="w-full rounded border border-gray-300 dark:border-gray-600 p-2 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="location"
                  className="block text-sm font-medium mb-1 text-gray-900 dark:text-gray-100"
                >
                  Location
                </label>
                <input
                  id="location"
                  name="location"
                  type="text"
                  value={newEvent.location}
                  onChange={handleChange}
                  placeholder="Enter event location"
                  className="w-full rounded border border-gray-300 dark:border-gray-600 p-2 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="status"
                  className="block text-sm font-medium mb-1 text-gray-900 dark:text-gray-100"
                >
                  Status
                </label>
                <select
                  id="status"
                  name="status"
                  value={newEvent.status}
                  onChange={handleChange}
                  className="w-full rounded border border-gray-300 dark:border-gray-600 p-2 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100"
                >
                  <option value="Pending">Pending</option>
                  <option value="Active">Active</option>
                  <option value="Draft">Draft</option>
                </select>
              </div>
              <div className="flex justify-end space-x-3 pt-4 border-t border-gray-300 dark:border-gray-700">
                <button
                  type="button"
                  onClick={closeModal}
                  className="px-4 py-2 rounded  dark:bg-gray-700 text-gray-900 dark:text-gray-100 hover:bg-gray-400 dark:hover:bg-gray-600"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 rounded bg-indigo-600 text-white hover:bg-indigo-700"
                >
                  Create Event
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
