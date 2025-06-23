import React from "react";
import { Link } from "react-router-dom";
import UserNavbar from "./NavBar";
import Footer from "../Footer";

const schedule = [
  {
    day: "Day 1: Foundations & Innovations",
    items: [
      {
        time: "9:00 AM",
        title: "Registration & Networking Breakfast",
        color: "bg-blue-500",
      },
      {
        time: "10:00 AM",
        title: "Keynote: The Future of AI in 2025 and Beyond",
        color: "bg-green-500",
      },
      {
        time: "11:00 AM",
        title: "Panel: Blockchain Ethical AI Development",
        color: "bg-purple-500",
      },
      { time: "1:00 PM", title: "Lunch & Break", color: "bg-yellow-500" },
      {
        time: "2:00 PM",
        title: "Hands-on Workshop: AI & Development",
        color: "bg-pink-500",
      },
      {
        time: "4:00 PM",
        title: "Closing Networking Event",
        color: "bg-red-500",
      },
    ],
  },
  {
    day: "Day 2: Applications & Future Trends",
    items: [
      {
        time: "9:00 AM",
        title: "Registration & Healthtech Workshop",
        color: "bg-blue-500",
      },
      { time: "10:30 AM", title: "Deep AI Keynote", color: "bg-green-500" },
      { time: "1:00 PM", title: "Lunch & Break", color: "bg-yellow-500" },
      {
        time: "2:00 PM",
        title: "Ethics & AI Presentations",
        color: "bg-pink-500",
      },
      {
        time: "4:00 PM",
        title: "Closing Panel & Networking Reception",
        color: "bg-red-500",
      },
    ],
  },
];

const galleryImages = [
  "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=400&q=80",
  "https://images.unsplash.com/photo-1506765515384-028b60a970df?auto=format&fit=crop&w=400&q=80",
  "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=400&q=80",
  "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=400&q=80",
];

const speakers = [
  {
    name: "Ms. Lim Soanwn",
    role: "AI Researcher - OpenAI",
    bio: "Leading expert on machine learning applications with multiple published papers on NLP.",
  },
  {
    name: "Mr. Dara Vicheth",
    role: "Blockchain Innovator - Crypto Labs",
    bio: "Pioneer in decentralized systems authoring 'Blockchain Beyond Bitcoin'.",
  },
  {
    name: "Dr. Mao Chumreun",
    role: "Future Tech Strategist - InnovateX",
    bio: "Tech futurist focusing on AI ethics and social impact of automation.",
  },
];

export default function EventDetailPage() {
  return (
    <>
      <div className="min-h-screen bg-gray-50 p-6 md:p-12 max-w-7xl mx-auto flex flex-col">
        <UserNavbar />
        <main className="flex-grow grid grid-cols-1 lg:grid-cols-3 gap-8 mt-6">
          {/* Left Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Event Overview */}
            <section className="bg-white rounded-lg shadow p-6">
              <img
                src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80"
                alt="Event"
                className="rounded-lg mb-6 w-full h-64 object-cover"
              />
              <h2 className="text-xl font-bold mb-4">Event Overview</h2>
              <p className="text-gray-700 leading-relaxed mb-3">
                Join us for the All Innovation Summit, a groundbreaking event
                where technology leaders, researchers, and enthusiasts gather to
                explore the latest advancements in Artificial Intelligence and
                machine learning. This hybrid conference features expert keynote
                speakers, hands-on workshops, and networking opportunities.
              </p>
              <p className="text-gray-700 leading-relaxed">
                From natural language processing to computer vision, from
                responsible AI to future applications, our expert presenters
                cover the most pressing challenges in AI and more. Whether you
                join us in person or online, you’ll discover new ideas, connect
                with industry pioneers, and gain insights from global
                innovators.
              </p>
            </section>

            {/* Event Schedule */}
            <section className="bg-white rounded-lg shadow p-6">
              <h2 className="text-xl font-bold mb-6">Event Schedule</h2>
              {schedule.map(({ day, items }, i) => (
                <div key={i} className="mb-8">
                  <h3 className="text-lg font-semibold mb-4">{day}</h3>
                  <ul className="space-y-4">
                    {items.map(({ time, title, color }, idx) => (
                      <li key={idx} className="flex items-start space-x-4">
                        <span
                          className={`w-3 h-3 mt-2 rounded-full ${color}`}
                        ></span>
                        <div>
                          <p className="font-semibold">{time}</p>
                          <p>{title}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </section>

            {/* Event Gallery */}
            <section>
              <h2 className="text-xl font-bold mb-4">Event Gallery</h2>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {galleryImages.map((src, idx) => (
                  <img
                    key={idx}
                    src={src}
                    alt={`Gallery ${idx + 1}`}
                    className="rounded-lg object-cover h-24 w-full cursor-pointer hover:scale-105 transition-transform"
                  />
                ))}
              </div>
            </section>

            {/* Meet Our Speakers */}
            <section className="space-y-6">
              <h2 className="text-xl font-bold">Meet Our Speakers</h2>
              {speakers.map(({ name, role, bio }, i) => (
                <div key={i} className="bg-white shadow rounded-lg p-5">
                  <h3 className="font-semibold text-lg">{name}</h3>
                  <p className="text-indigo-600 font-semibold my-1">{role}</p>
                  <p className="text-gray-700">{bio}</p>
                </div>
              ))}
            </section>
          </div>

          {/* Right Sidebar - Register Form */}
          <aside className="bg-white rounded-lg shadow p-6 sticky top-12 h-fit space-y-6">
            <h2 className="text-xl font-bold">Register Now</h2>
            <p className="text-gray-700">
              Secure your spot at this free event!
            </p>
            <dl className="grid grid-cols-2 gap-x-6 gap-y-2 text-gray-700 text-sm">
              <div>
                <dt className="font-semibold">Date:</dt>
                <dd>June 10-19, 2023</dd>
              </div>
              <div>
                <dt className="font-semibold">Time:</dt>
                <dd>9:00 AM - 5:00 PM</dd>
              </div>
              <div className="col-span-2">
                <dt className="font-semibold">Location:</dt>
                <dd>TechHub Conference Center, Phnom Penh (Level 5)</dd>
              </div>
            </dl>
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <input
                type="text"
                placeholder="Full Name"
                required
                className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="email"
                placeholder="Email Address"
                required
                className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="text"
                placeholder="Profession"
                className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-semibold py-2 rounded"
              >
                Register For Free
              </button>
            </form>
            <div>
              <h3 className="text-xl font-semibold mb-3">Event Details</h3>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li>
                  <strong>Who Should Attend:</strong> AI experts, developers,
                  researchers, students
                </li>
                <li>
                  <strong>Amenities:</strong> WiFi, refreshments, lunch coupons
                </li>
                <li>
                  <strong>Languages:</strong> English & Khmer translation
                  provided
                </li>
                <li>
                  <strong>Certification:</strong> Available for attendees with
                  full participation
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-3">Share This Event</h3>
              <div className="flex space-x-4 text-2xl">
                <a
                  href="#"
                  className="hover:text-blue-600"
                  aria-label="Share on Facebook"
                >
                  📘
                </a>
                <a
                  href="#"
                  className="hover:text-blue-600"
                  aria-label="Share on Twitter"
                >
                  🐦
                </a>
                <a
                  href="#"
                  className="hover:text-blue-600"
                  aria-label="Share on LinkedIn"
                >
                  💼
                </a>
              </div>
            </div>
          </aside>
        </main>
      </div>
      <Footer />
    </>
  );
}
