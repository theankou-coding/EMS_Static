'use  client';
import React, { useState } from 'react';
import { useNavigate } from 'next/navigation';
import { PencilSquareIcon, TrashIcon } from '@heroicons/react/24/outline';

const attendeesData = [
  {
    id: 1,
    name: 'Tralalero Tralala',
    email: 'tralalerotralala@example.com',
    event: 'Tech Conference 2025',
    status: 'Confirmed',
    avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
  },
  {
    id: 2,
    name: 'Balerina Kapuchina',
    email: 'chimpanzinibananini@example.com',
    event: 'Tech Conference 2025',
    status: 'Pending',
    avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
  },
  {
    id: 3,
    name: 'Bombardino Crocodilo',
    email: 'johndoe@example.com',
    event: 'Engineering Days',
    status: 'Cancelled',
    avatar: 'https://randomuser.me/api/portraits/men/77.jpg',
  },
];

const statusColors = {
  Confirmed: 'bg-green-100 text-green-700',
  Pending: 'bg-yellow-100 text-yellow-700',
  Cancelled: 'bg-red-100 text-red-700',
};

const events = [
  { id: 'all', name: 'All Events' },
  { id: 'Tech Conference 2025', name: 'Tech Conference 2025' },
  { id: 'Engineering Days', name: 'Engineering Days' },
];

const statuses = [
  { id: 'all', name: 'All Status' },
  { id: 'Confirmed', name: 'Confirmed' },
  { id: 'Pending', name: 'Pending' },
  { id: 'Cancelled', name: 'Cancelled' },
];

export default function AttendeeManagement() {
  const navigate = useNavigate();

  const [search, setSearch] = useState('');
  const [selectedEvent, setSelectedEvent] = useState('all');
  const [selectedStatus, setSelectedStatus] = useState('all');

  // Filter attendees based on search, event and status
  const filteredAttendees = attendeesData.filter((attendee) => {
    const matchesSearch =
      attendee.name.toLowerCase().includes(search.toLowerCase()) ||
      attendee.email.toLowerCase().includes(search.toLowerCase());
    const matchesEvent = selectedEvent === 'all' || attendee.event === selectedEvent;
    const matchesStatus = selectedStatus === 'all' || attendee.status === selectedStatus;
    return matchesSearch && matchesEvent && matchesStatus;
  });

  return (
    <div className="max-w-8xl mx-auto p-6 bg-gray-50 dark:bg-gray-900 rounded space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-semibold text-gray-900 dark:text-white">
          Attendees Management
        </h1>
        <div className="flex space-x-3">
          <button
            onClick={() => navigate('/addattendee')}
            type="button"
            className="inline-flex items-center px-4 py-2 bg-indigo-600 border border-transparent rounded-md font-semibold text-white hover:bg-indigo-700 focus:outline-none focus:ring focus:ring-indigo-300"
          >
            + Add Attendee
          </button>
          <button
            type="button"
            className="inline-flex items-center px-4 py-2 bg-white dark:bg-gray-800 border border-gray-300 rounded-md font-semibold text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring focus:ring-indigo-300"
          >
            Filter
          </button>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row sm:items-center space-y-4 sm:space-y-0 sm:space-x-4">
        <div className="flex-grow relative text-gray-400 focus-within:text-gray-600">
          <label htmlFor="search" className="sr-only">
            Search Attendees
          </label>
          <input
            type="search"
            id="search"
            className="block w-full pl-10 pr-3 py-2 border border-gray-300 dark:border-gray-700 rounded-md text-gray-900 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm bg-white dark:bg-gray-800"
            placeholder="Search attendees..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
            <svg
              className="h-5 w-5"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="11" cy="11" r="7" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
          </div>
        </div>

        <select
          value={selectedEvent}
          onChange={(e) => setSelectedEvent(e.target.value)}
          className="block w-full rounded border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 py-2 px-3 shadow-sm text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        >
          {events.map((event) => (
            <option key={event.id} value={event.id}>
              {event.name}
            </option>
          ))}
        </select>

        <select
          value={selectedStatus}
          onChange={(e) => setSelectedStatus(e.target.value)}
          className="block w-full rounded border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 py-2 px-3 shadow-sm text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        >
          {statuses.map((status) => (
            <option key={status.id} value={status.id}>
              {status.name}
            </option>
          ))}
        </select>
      </div>

      {filteredAttendees.length === 0 ? (
        <div className="border border-gray-300 dark:border-gray-700 rounded-md h-64 flex items-center justify-center text-gray-400 italic bg-white dark:bg-gray-800">
          No attendees found.
        </div>
      ) : (
        <div className="overflow-x-auto bg-white dark:bg-gray-800 rounded-md border border-gray-300 dark:border-gray-700 shadow-sm">
          <table className="w-full text-left text-sm text-gray-900 dark:text-gray-100">
            <thead className="bg-gray-100 dark:bg-gray-700">
              <tr>
                <th className="px-6 py-3 font-medium">Attendee</th>
                <th className="px-6 py-3 font-medium">Event</th>
                <th className="px-6 py-3 font-medium">Status</th>
                <th className="px-6 py-3 font-medium">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredAttendees.map(({ id, name, email, event, status, avatar }) => (
                <tr key={id} className="border-b border-gray-200 dark:border-gray-700">
                  <td className="flex items-center px-6 py-3 space-x-3">
                    <img src={avatar} alt={name} className="h-10 w-10 rounded-full object-cover" />
                    <div>
                      <p className="font-medium">{name}</p>
                      <p className="text-xs text-gray-500 dark:text-gray-400">{email}</p>
                    </div>
                  </td>
                  <td className="px-6 py-3">{event}</td>
                  <td className="px-6 py-3">
                    <span
                      className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${
                        statusColors[status] || 'bg-gray-100 text-gray-800'
                      }`}
                    >
                      {status}
                    </span>
                  </td>
                  <td className="px-6 py-3 flex space-x-4">
                    <button
                      onClick={() => navigate(`/attendeeedit/${id}`)}
                      aria-label="Edit"
                      className="text-blue-600 hover:text-blue-900"
                    >
                      <PencilSquareIcon className="w-5 h-5" />
                    </button>
                    <button
                      aria-label="Delete"
                      className="text-red-600 hover:text-red-900"
                      onClick={() => alert(`Delete attendee id: ${id}`)}
                    >
                      <TrashIcon className="w-5 h-5" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
