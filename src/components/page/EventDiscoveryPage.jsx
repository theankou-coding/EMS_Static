import React, { useState, useEffect, useCallback } from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";
import {
  FaSearch,
  FaFilter,
  FaMapMarkerAlt,
  FaCalendarAlt,
  FaClock,
  FaUsers,
  FaStar,
  FaArrowRight,
  FaChevronDown,
  FaChevronUp,
  FaBookmark,
  FaShare,
  FaPlay,
  FaBuilding,
  FaGraduationCap,
  FaLaptop,
  FaMedkit,
  FaMusic,
  FaPalette,
  FaRocket,
  FaGamepad,
} from "react-icons/fa";

const EventDiscoveryPage = ({ user }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedLocation, setSelectedLocation] = useState("all");
  const [expandedEvents, setExpandedEvents] = useState({});
  const [bookmarkedEvents, setBookmarkedEvents] = useState(new Set());
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Categories data
  const categories = [
    { id: "all", name: "All Categories", count: 124 },
    { id: "technology", name: "Technology", count: 45 },
    { id: "business", name: "Business", count: 32 },
    { id: "design", name: "Design & UX", count: 28 },
    { id: "marketing", name: "Marketing", count: 19 },
  ];

  // Featured events data
  const featuredEvents = [
    {
      id: 1,
      title: "Future of Professional Sports",
      category: "Sports & Recreation",
      date: "2024-06-15",
      time: "10:00 AM",
      location: "New York, NY",
      attendees: 250,
      price: "Free",
      rating: 4.8,
      image: "/api/placeholder/300/200",
      description:
        "Explore the intersection of technology and professional sports.",
      organizer: "Sports Tech Hub",
      featured: true,
    },
    {
      id: 2,
      title: "Guide to Blockchain Development",
      category: "Technology",
      date: "2024-06-18",
      time: "2:00 PM",
      location: "San Francisco, CA",
      attendees: 180,
      price: "$49",
      rating: 4.9,
      image: "/api/placeholder/300/200",
      description: "Learn blockchain development from industry experts.",
      organizer: "Tech Academy",
      featured: true,
    },
    {
      id: 3,
      title: "UX Design Best Practices Driven",
      category: "Design & UX",
      date: "2024-06-20",
      time: "11:00 AM",
      location: "Austin, TX",
      attendees: 120,
      price: "$29",
      rating: 4.7,
      image: "/api/placeholder/300/200",
      description: "Master UX design principles and best practices.",
      organizer: "Design Studio",
      featured: true,
    },
  ];

  // Upcoming events data
  const upcomingEvents = [
    {
      id: 4,
      title: "Tech Innovation Summit 2024",
      category: "Technology",
      date: "2024-07-01",
      time: "9:00 AM",
      location: "Silicon Valley, CA",
      attendees: 500,
      price: "$99",
      rating: 4.9,
      organizer: "Innovation Hub",
      tags: ["AI", "Machine Learning", "Startup"],
    },
    {
      id: 5,
      title: "Digital Marketing Masterclass",
      category: "Marketing",
      date: "2024-07-05",
      time: "2:00 PM",
      location: "Los Angeles, CA",
      attendees: 200,
      price: "$79",
      rating: 4.8,
      organizer: "Marketing Pro",
      tags: ["Digital Marketing", "SEO", "Social Media"],
    },
    {
      id: 6,
      title: "Web Development Bootcamp",
      category: "Technology",
      date: "2024-07-10",
      time: "10:00 AM",
      location: "Seattle, WA",
      attendees: 150,
      price: "$149",
      rating: 4.7,
      organizer: "Code Academy",
      tags: ["Web Development", "JavaScript", "React"],
    },
    {
      id: 7,
      title: "Business Leadership Forum",
      category: "Business",
      date: "2024-07-15",
      time: "1:00 PM",
      location: "Chicago, IL",
      attendees: 300,
      price: "$89",
      rating: 4.6,
      organizer: "Business Leaders",
      tags: ["Leadership", "Management", "Strategy"],
    },
  ];

  // Company/Organizer browse data
  const browseByCompany = [
    {
      id: 1,
      name: "Technology",
      icon: FaLaptop,
      color: "bg-blue-500",
      count: 45,
    },
    { id: 2, name: "Health", icon: FaMedkit, color: "bg-green-500", count: 32 },
    {
      id: 3,
      name: "Education",
      icon: FaGraduationCap,
      color: "bg-purple-500",
      count: 28,
    },
    {
      id: 4,
      name: "Business",
      icon: FaBuilding,
      color: "bg-orange-500",
      count: 25,
    },
    {
      id: 5,
      name: "Creative Arts",
      icon: FaPalette,
      color: "bg-teal-500",
      count: 22,
    },
    { id: 6, name: "Startups", icon: FaRocket, color: "bg-red-500", count: 18 },
    {
      id: 7,
      name: "Entertainment",
      icon: FaMusic,
      color: "bg-pink-500",
      count: 15,
    },
    {
      id: 8,
      name: "Gaming",
      icon: FaGamepad,
      color: "bg-indigo-500",
      count: 12,
    },
  ];

  // Event handlers
  const handleSearch = useCallback((query) => {
    setSearchQuery(query);
    // Implement search logic here
  }, []);

  const handleCategoryFilter = useCallback((categoryId) => {
    setSelectedCategory(categoryId);
    // Implement category filtering logic here
  }, []);

  const toggleEventExpansion = useCallback((eventId) => {
    setExpandedEvents((prev) => ({
      ...prev,
      [eventId]: !prev[eventId],
    }));
  }, []);

  const toggleBookmark = useCallback((eventId) => {
    setBookmarkedEvents((prev) => {
      const newBookmarks = new Set(prev);
      if (newBookmarks.has(eventId)) {
        newBookmarks.delete(eventId);
      } else {
        newBookmarks.add(eventId);
      }
      return newBookmarks;
    });
  }, []);

  const handleEventRegistration = useCallback((eventId) => {
    console.log("Registering for event:", eventId);
    // Implement registration logic here
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar user={user} />
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-600 via-purple-600 to-purple-800 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20" />

        <div className="relative container mx-auto px-4 lg:px-8 py-20">
          <div
            className={`max-w-4xl mx-auto text-center transform transition-all duration-1000 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              DISCOVER TECH EVENTS
              <br />
              <span className="text-blue-200">FOR EVERYONE</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100 leading-relaxed">
              Explore a world of technology events, from conferences to
              workshops,
              <br />
              designed for professionals and enthusiasts alike.
            </p>
            <button className="bg-white text-purple-700 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors duration-300">
              Discover events
            </button>
          </div>
        </div>

        {/* Search Bar */}
        <div className="relative container mx-auto px-4 lg:px-8 pb-8">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
              <div className="grid md:grid-cols-4 gap-4">
                <div className="md:col-span-2">
                  <div className="relative">
                    <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
                    <input
                      type="text"
                      placeholder="Search events, topics, or speakers..."
                      value={searchQuery}
                      onChange={(e) => handleSearch(e.target.value)}
                      className="w-full pl-12 pr-4 py-3 bg-white rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                    />
                  </div>
                </div>
                <div>
                  <select
                    value={selectedCategory}
                    onChange={(e) => handleCategoryFilter(e.target.value)}
                    className="w-full px-4 py-3 bg-white rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                  >
                    <option value="all">All Categories</option>
                    <option value="technology">Technology</option>
                    <option value="business">Business</option>
                    <option value="design">Design & UX</option>
                    <option value="marketing">Marketing</option>
                  </select>
                </div>
                <div>
                  <select
                    value={selectedLocation}
                    onChange={(e) => setSelectedLocation(e.target.value)}
                    className="w-full px-4 py-3 bg-white rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                  >
                    <option value="all">All Locations</option>
                    <option value="online">Online</option>
                    <option value="newyork">New York</option>
                    <option value="california">California</option>
                    <option value="texas">Texas</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Categories */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Popular Categories
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {categories.map((category, index) => (
              <button
                key={category.id}
                onClick={() => handleCategoryFilter(category.id)}
                className={`p-4 rounded-xl border transition-all duration-300 hover:shadow-lg transform hover:scale-105 ${
                  selectedCategory === category.id
                    ? "border-blue-500 bg-blue-50 text-blue-700"
                    : "border-gray-200 bg-white text-gray-700 hover:border-blue-300"
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="text-center">
                  <div className="font-semibold">{category.name}</div>
                  <div className="text-sm text-gray-500 mt-1">
                    {category.count} events
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Events */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900">
              Featured Events
            </h2>
            <button className="text-blue-600 hover:text-blue-700 font-medium flex items-center">
              View all <FaArrowRight className="ml-2" />
            </button>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {featuredEvents.map((event, index) => (
              <div
                key={event.id}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden transform hover:scale-105"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                {/* Event Image */}
                <div className="relative h-48 bg-gradient-to-br from-gray-200 to-gray-300">
                  <div className="absolute top-4 left-4">
                    <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                      {event.category}
                    </span>
                  </div>
                  <div className="absolute top-4 right-4">
                    <button
                      onClick={() => toggleBookmark(event.id)}
                      className={`p-2 rounded-full transition-colors ${
                        bookmarkedEvents.has(event.id)
                          ? "bg-red-500 text-white"
                          : "bg-white/80 text-gray-700 hover:bg-white"
                      }`}
                    >
                      <FaBookmark className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                {/* Event Details */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {event.title}
                  </h3>

                  <div className="space-y-2 mb-4">
                    <div className="flex items-center text-gray-600">
                      <FaCalendarAlt className="w-4 h-4 mr-2" />
                      <span className="text-sm">{event.date}</span>
                      <FaClock className="w-4 h-4 ml-4 mr-2" />
                      <span className="text-sm">{event.time}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <FaMapMarkerAlt className="w-4 h-4 mr-2" />
                      <span className="text-sm">{event.location}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center text-gray-600">
                        <FaUsers className="w-4 h-4 mr-2" />
                        <span className="text-sm">
                          {event.attendees} attending
                        </span>
                      </div>
                      <div className="flex items-center">
                        <FaStar className="w-4 h-4 text-yellow-400 mr-1" />
                        <span className="text-sm font-medium">
                          {event.rating}
                        </span>
                      </div>
                    </div>
                  </div>

                  <p className="text-gray-600 text-sm mb-4">
                    {event.description}
                  </p>

                  <div className="flex justify-between items-center">
                    <div>
                      <span className="text-2xl font-bold text-blue-600">
                        {event.price}
                      </span>
                    </div>
                    <button
                      onClick={() => handleEventRegistration(event.id)}
                      className="bg-blue-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors flex items-center"
                    >
                      Register <FaArrowRight className="ml-2 w-3 h-3" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            UPCOMING EVENT
          </h2>

          <div className="space-y-4">
            {upcomingEvents.map((event, index) => (
              <div
                key={event.id}
                className="bg-gray-50 rounded-2xl p-6 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex justify-between items-start">
                  <div className="flex-1">
                    <div className="flex items-center mb-2">
                      <span className="bg-gray-900 text-white px-3 py-1 rounded text-sm font-medium mr-4">
                        {event.category}
                      </span>
                      <div className="flex items-center text-gray-600">
                        <FaStar className="w-4 h-4 text-yellow-400 mr-1" />
                        <span className="text-sm">{event.rating}</span>
                      </div>
                    </div>

                    <h3 className="text-2xl font-bold text-gray-900 mb-2 flex items-center">
                      {event.title}
                      <button
                        onClick={() => toggleEventExpansion(event.id)}
                        className="ml-4 p-1 text-gray-400 hover:text-gray-600"
                      >
                        {expandedEvents[event.id] ? (
                          <FaChevronUp />
                        ) : (
                          <FaChevronDown />
                        )}
                      </button>
                    </h3>

                    <div className="grid md:grid-cols-4 gap-4 text-sm text-gray-600 mb-4">
                      <div className="flex items-center">
                        <FaCalendarAlt className="w-4 h-4 mr-2" />
                        {event.date}
                      </div>
                      <div className="flex items-center">
                        <FaClock className="w-4 h-4 mr-2" />
                        {event.time}
                      </div>
                      <div className="flex items-center">
                        <FaMapMarkerAlt className="w-4 h-4 mr-2" />
                        {event.location}
                      </div>
                      <div className="flex items-center">
                        <FaUsers className="w-4 h-4 mr-2" />
                        {event.attendees} attending
                      </div>
                    </div>

                    {expandedEvents[event.id] && (
                      <div className="mt-4 p-4 bg-white rounded-lg">
                        <p className="text-gray-600 mb-3">
                          Join us for an intensive learning experience with
                          industry experts and networking opportunities.
                        </p>
                        <div className="flex flex-wrap gap-2 mb-4">
                          {event.tags.map((tag, tagIndex) => (
                            <span
                              key={tagIndex}
                              className="px-2 py-1 bg-blue-100 text-blue-800 rounded text-xs"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                        <div className="text-sm text-gray-500">
                          Organized by: {event.organizer}
                        </div>
                      </div>
                    )}
                  </div>

                  <div className="ml-6 text-right">
                    <div className="text-2xl font-bold text-blue-600 mb-2">
                      {event.price}
                    </div>
                    <button
                      onClick={() => handleEventRegistration(event.id)}
                      className="bg-blue-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors"
                    >
                      Register
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Never Miss a Tech Event Again */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Never Miss a Tech Event Again!
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Subscribe to our newsletter and get notified about the latest tech
            events, workshops, and conferences in your area.
          </p>
          <div className="max-w-md mx-auto flex gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500 outline-none"
            />
            <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </section>

      {/* Browse by Company/Category */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Browse by Category
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {browseByCompany.map((company, index) => (
              <button
                key={company.id}
                className="p-6 rounded-2xl text-white font-semibold text-center hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
                style={{
                  backgroundColor: company.color
                    .replace("bg-", "")
                    .split("-")[0],
                }}
              >
                <company.icon className="w-12 h-12 mx-auto mb-4" />
                <div className="text-lg font-bold">{company.name}</div>
                <div className="text-sm opacity-90 mt-1">
                  {company.count} events
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* About Eventify */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                About Eventify
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Eventify is your premier destination for discovering and
                attending the most exciting tech events, conferences, and
                workshops. We connect professionals, students, and enthusiasts
                with learning opportunities that drive innovation and career
                growth.
              </p>
              <div className="grid grid-cols-3 gap-6 mb-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600">500+</div>
                  <div className="text-sm text-gray-600">Events</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600">50K+</div>
                  <div className="text-sm text-gray-600">Attendees</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600">100%</div>
                  <div className="text-sm text-gray-600">Satisfaction</div>
                </div>
              </div>
            </div>
            <div className="lg:text-right">
              <div className="inline-block bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-4">Join Our Community</h3>
                <p className="mb-6">
                  Connect with like-minded professionals and stay ahead of the
                  tech curve.
                </p>
                <button className="bg-white text-purple-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                  Get Started
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default EventDiscoveryPage;
