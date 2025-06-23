import React, { useState, useMemo } from "react";
import UserNavbar from "./NavBar";
import UpcomingEvents from "./upcomingEventsData";
import Footer from "../Footer";
import CategoriesBrowse from "./CategroiesBrowse";

const featuredEvents = [
  {
    id: 1,
    title: "Future of AI: Development Summit",
    category: "AI & ML",
    img: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=400&q=80",
    description: "Explore upcoming trends in AI and machine learning.",
    date: "Wed, Aug 03, 2025",
    attendees: 150,
  },
  {
    id: 2,
    title: "Hands-on Blockchain Development",
    category: "Blockchain",
    img: "https://images.unsplash.com/photo-1506765515384-028b60a970df?auto=format&fit=crop&w=400&q=80",
    description: "Learn blockchain tech with practical labs and experts.",
    date: "Wed, Aug 03, 2025",
    attendees: 80,
  },
  {
    id: 3,
    title: "Tech Startup Networking Mixer",
    category: "Networking",
    img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=400&q=80",
    description: "Connect with startup founders and investors.",
    date: "Wed, Aug 03, 2025",
    attendees: 120,
  },
];

const categories = [
  "All Categories",
  "AI & ML",
  "Blockchain",
  "Networking",
  "Cybersecurity",
];

const dates = ["Any Date", "Today", "This Week", "This Month"];

const Homepage = () => {
  // Declare states
  const [searchText, setSearchText] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All Categories");
  const [selectedDate, setSelectedDate] = useState("Any Date");

  // Filtering logic for events
  const filteredEvents = useMemo(() => {
    return featuredEvents.filter((event) => {
      const matchesSearch =
        event.title.toLowerCase().includes(searchText.toLowerCase()) ||
        event.description.toLowerCase().includes(searchText.toLowerCase());
      const matchesCategory =
        selectedCategory === "All Categories" ||
        event.category === selectedCategory;
      // Currently date filtering is placeholder
      const matchesDate = true;
      return matchesSearch && matchesCategory && matchesDate;
    });
  }, [searchText, selectedCategory, selectedDate]);

  return (
    <div className="flex flex-col min-h-screen">
      <UserNavbar />
      {/* Hero Section */}
      <header className="container mx-auto bg-white text-black py-32 px-6 md:px-20 relative overflow-hidden">
        <h1 className="text-4xl md:text-6xl font-extrabold max-w-3xl leading-tight ">
          DISCOVER TECH <span className="text-blue-500">EVENTS</span> FOR
          EVERYONE
        </h1>
        <p className="max-w-2xl mt-4 text-lg font-semibold text-blue-200">
          Discover the latest in tech, presenting with our curated selection of
          live events, workshops, and webinars.
        </p>
        <button className="mt-8 bg-blue-400 hover:bg-blue-500 transition font-bold px-8 py-3 rounded-lg shadow-lg text-white">
          Browse All Events
        </button>
      </header>

      {/* Search Section */}
      <section className="container mx-auto px-6 md:px-20 mt-1">
        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 justify-center">
          <input
            type="text"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            placeholder="Search events"
            className="flex-grow border border-gray-300 rounded-lg px-4 py-3 text-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="border border-gray-300 rounded-lg px-5 py-3 text-lg focus:ring-2 focus:ring-blue-500 focus:outline-none w-40 text-[1rem]"
          >
            {categories.map((cat) => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
          </select>
          <select
            value={selectedDate}
            onChange={(e) => setSelectedDate(e.target.value)}
            className="border border-gray-300 rounded-lg px-4 py-3 text-lg focus:ring-2 focus:ring-blue-500 focus:outline-none w-40 text-[1rem]"
          >
            {dates.map((d) => (
              <option key={d} value={d}>
                {d}
              </option>
            ))}
          </select>
          <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition">
            Search
          </button>
        </div>
      </section>

      {/* Featured Events */}
      <section className="container mx-auto px-6 md:px-20 mt-14">
        <h2 className="text-2xl sm:text-3xl font-bold mb-6">Featured Events</h2>
        <div className="grid gap-6 md:grid-cols-3">
          {filteredEvents.length > 0 ? (
            filteredEvents.map(
              ({ id, title, img, description, date, attendees }) => (
                <article
                  key={id}
                  className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition"
                >
                  <img
                    src={img}
                    alt={title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4">
                    <h3 className="font-semibold text-lg mb-2">{title}</h3>
                    <p className="text-gray-600 mb-4">{description}</p>
                    <div className="flex justify-between text-sm text-gray-500">
                      <time>{date}</time>
                      <span>{attendees} Attendees</span>
                    </div>
                    <button className="mt-4 rounded-md bg-blue-600 text-white px-4 py-2 font-semibold hover:bg-blue-700 transition">
                      View Details
                    </button>
                  </div>
                </article>
              )
            )
          ) : (
            <p className="text-center text-gray-600 col-span-full">
              No events found.
            </p>
          )}
        </div>
      </section>

      {/* Upcoming Events */}
      <div className=" relative container mx-auto px-6 md:px-20 mt-16 mb-20">
        <UpcomingEvents />
      </div>

      {/* Newsletter Section */}
      <section className="mt-20 bg-gradient-to-r from-blue-900 to-purple-900 py-16 text-center text-white">
        <h2 className="text-3xl font-extrabold mb-4">
          Never Miss a Tech Event Again
        </h2>
        <p className="max-w-xl mx-auto mb-8">
          Subscribe for exclusive early access, event highlights, and expert
          insights delivered straight to your inbox.
        </p>
        <form className="flex max-w-md mx-auto space-x-4">
          <input
            type="email"
            placeholder="Enter your email"
            required
            className="flex-grow rounded-md px-4 py-3 text-lg text-gray-900"
          />
          <button
            type="submit"
            className="bg-blue-500 rounded-md px-6 py-3 font-bold hover:bg-blue-600 transition"
          >
            Subscribe
          </button>
        </form>
      </section>

      {/* Categories Browse */}
      <CategoriesBrowse />

      {/* About Eventify Section */}
      <section className="container mx-auto px-6 md:px-20 mb-24 flex flex-col lg:flex-row items-center gap-10 max-w-7xl">
        <div className="flex-1">
          <h2 className="text-4xl font-extrabold mb-6 text-white">
            About Eventify
          </h2>
          <p className="text-gray-300 mb-6 text-lg leading-relaxed">
            Eventify is your gateway to free technology events, workshops, and
            networking opportunities. We specialize in bringing the tech
            community together through dynamic in-person and virtual gatherings.
          </p>
          <p className="text-gray-300 text-lg leading-relaxed">
            Our mission is to empower developers, data scientists, and
            innovators by creating an accessible platform that connects you to
            the world’s leading technology conferences and meetups.
          </p>
          <ul className="mt-6 grid grid-cols-3 gap-8 text-center text-white font-semibold text-lg">
            <li>
              <span className="block text-3xl text-blue-400 font-extrabold">
                15K+
              </span>
              Events Hosted
            </li>
            <li>
              <span className="block text-3xl text-blue-400 font-extrabold">
                10K+
              </span>
              Attendees
            </li>
            <li>
              <span className="block text-3xl text-blue-400 font-extrabold">
                100+
              </span>
              Partner Organizations
            </li>
          </ul>
        </div>
        <div className="flex-1">
          <img
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=600&q=80"
            alt="Tech event"
            className="rounded-xl shadow-lg w-full object-cover"
          />
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Homepage;
