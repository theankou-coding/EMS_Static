import React from "react";
import { Link } from "react-router-dom";
import Navbar from "./NavBar";
import Footer from "../Footer";

const events = [
  {
    id: 1,
    title: "Future of AI: Development Summit",
    img: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=600&q=80",
    description:
      "Join the latest innovations in AI development and explore its impacts on industry.",
    date: "Wed, Aug 03, 2025",
    attendees: 150,
    location: "San Francisco, CA",
    type: "Conference",
  },
  {
    id: 2,
    title: "Hands-on Blockchain Development",
    img: "https://images.unsplash.com/photo-1506765515384-028b60a970df?auto=format&fit=crop&w=600&q=80",
    description:
      "Learn blockchain development with practical labs and hands-on sessions.",
    date: "Thu, Aug 04, 2025",
    attendees: 80,
    location: "New York, NY",
    type: "Workshop",
  },
  {
    id: 3,
    title: "Tech Startup Networking Mixer",
    img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=600&q=80",
    description:
      "A lively networking event for tech startup founders and investors.",
    date: "Fri, Aug 05, 2025",
    attendees: 120,
    location: "Austin, TX",
    type: "Networking",
  },
  // repeat or add more events as needed
];

// Sample filter lists
const categories = [
  "AI & ML",
  "Blockchain",
  "Cybersecurity",
  "Web Development",
];
const dates = ["Today", "This Week", "This Month"];
const durations = ["1 hour", "2 hours", "Half day", "Full day"];
const types = ["Conference", "Workshop", "Webinar", "Networking"];

export default function EventListingPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="relative flex-grow container mx-auto px-6 py-24 grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Left Sidebar - Filters */}
        <aside className="space-y-8 sticky top-20 self-start border border-gray-200 rounded-lg p-6 shadow-sm bg-white">
          <h2 className="font-bold text-lg mb-4">Filter By Category</h2>
          <ul className="space-y-2 text-gray-700">
            {categories.map((cat) => (
              <li key={cat}>
                <label className="flex items-center space-x-2 cursor-pointer">
                  <input type="checkbox" className="form-checkbox" />
                  <span>{cat}</span>
                </label>
              </li>
            ))}
            <li>
              <button className="text-blue-600 text-sm hover:underline mt-2">
                View more
              </button>
            </li>
          </ul>

          <h2 className="font-bold text-lg mb-4">Date</h2>
          <ul className="space-y-2 text-gray-700">
            {dates.map((date) => (
              <li key={date}>
                <label className="flex items-center space-x-2 cursor-pointer">
                  <input type="radio" name="date" className="form-radio" />
                  <span>{date}</span>
                </label>
              </li>
            ))}
            <li>
              <button className="text-blue-600 text-sm hover:underline mt-2">
                View more
              </button>
            </li>
          </ul>

          <h2 className="font-bold text-lg mb-4">Duration</h2>
          <ul className="space-y-2 text-gray-700">
            {durations.map((dur) => (
              <li key={dur}>
                <label className="flex items-center space-x-2 cursor-pointer">
                  <input type="checkbox" className="form-checkbox" />
                  <span>{dur}</span>
                </label>
              </li>
            ))}
          </ul>

          <h2 className="font-bold text-lg mb-4">Type</h2>
          <ul className="space-y-2 text-gray-700">
            {types.map((type) => (
              <li key={type}>
                <label className="flex items-center space-x-2 cursor-pointer">
                  <input type="checkbox" className="form-checkbox" />
                  <span>{type}</span>
                </label>
              </li>
            ))}
          </ul>
        </aside>

        {/* Right Content - Event Listings */}
        <section className="lg:col-span-3 space-y-8">
          <header>
            <h1 className="text-3xl font-bold mb-6">All Events</h1>
          </header>

          <div className="space-y-6">
            {events.map((event) => (
              <article
                key={event.id}
                className="flex flex-col md:flex-row border border-gray-200 rounded-lg shadow-sm bg-white overflow-hidden"
              >
                <img
                  src={event.img}
                  alt={event.title}
                  className="w-full md:w-64 object-cover"
                  loading="lazy"
                />
                <div className="p-6 flex flex-col justify-between flex-grow">
                  <div>
                    <h2 className="text-xl font-semibold mb-2">
                      {event.title}
                    </h2>
                    <p className="text-gray-700 mb-4">{event.description}</p>
                    <p className="text-sm text-gray-500">
                      <time>{event.date}</time> | {event.location} |{" "}
                      {event.type}
                    </p>
                  </div>
                  <div className="flex items-center justify-between mt-4">
                    <span className="text-gray-600 text-sm">
                      {event.attendees} Attendees
                    </span>
                    <Link
                      to={`/events/${event.id}`}
                      className="text-blue-600 text-sm hover:underline"
                    >
                      View Details →
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
