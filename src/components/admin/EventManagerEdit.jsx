'use  client';
import React, { useState, useEffect } from 'react';
import { useNavigate, useParams, Link } from 'react-router-dom';

export default function EventManagerEdit() {
  const { id } = useParams();
  const navigate = useNavigate();

  // Example: mock event data loaded by ID
  const [event, setEvent] = useState(null);

  useEffect(() => {
    // Simulate fetching event by id
    const mockEvent = {
      eventName: 'Tech Conference 2025',
      date: '2025-04-15',
      location: 'NICC',
      status: 'Active',
    };
    setEvent(mockEvent);
  }, [id]);

  const handleChange = (e) => {
    setEvent({ ...event, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: save updated event data here
    alert('Event updated!');
    navigate('/'); // Redirect back to dashboard or event list
  };

  if (!event) return <p>Loading event data...</p>;

  return (
    <div className="min-h-screen p-8 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 max-w-8xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Edit Event</h1>
      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <label className="block mb-1 font-medium">Event Name</label>
          <input
            name="eventName"
            value={event.eventName}
            onChange={handleChange}
            className="w-full p-2 rounded border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800"
            required
          />
        </div>
        <div>
          <label className="block mb-1 font-medium">Date</label>
          <input
            type="date"
            name="date"
            value={event.date}
            onChange={handleChange}
            className="w-full p-2 rounded border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800"
            required
          />
        </div>
        <div>
          <label className="block mb-1 font-medium">Location</label>
          <input
            name="location"
            value={event.location}
            onChange={handleChange}
            className="w-full p-2 rounded border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800"
            required
          />
        </div>
        <div>
          <label className="block mb-1 font-medium">Status</label>
          <select
            name="status"
            value={event.status}
            onChange={handleChange}
            className="w-full p-2 rounded border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800"
          >
            <option>Active</option>
            <option>Pending</option>
            <option>Draft</option>
          </select>
        </div>
        <div className="flex justify-between">
          <Link
            to="/"
            className="px-4 py-2 rounded bg-gray-300 dark:bg-gray-700 text-gray-900 dark:text-gray-100 hover:bg-gray-400 dark:hover:bg-gray-600"
          >
            Cancel
          </Link>
          <button
            type="submit"
            className="px-4 py-2 rounded bg-indigo-600 text-white hover:bg-indigo-700"
          >
            Save
          </button>
        </div>
      </form>
    </div>
  );
}
