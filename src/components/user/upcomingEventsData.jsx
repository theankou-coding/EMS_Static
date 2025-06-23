import React, { useState, useRef } from "react";

const upcomingEventsData = [
  {
    id: 1,
    title: "Tech Innovation",
    date: "Wed, Aug 04, 2025",
    time: "8:30AM - 4:00PM",
    description:
      "An annual conference spotlighting cutting-edge technological breakthroughs across AI, IoT, green tech, and blockchain. Network with innovators, attend product launches, and explore the future of tech entrepreneurship.",
  },
  {
    id: 2,
    title: "Tech Innovation",
    date: "Wed, Aug 04, 2025",
    time: "8:30AM - 4:00PM",
    description:
      "An annual conference spotlighting cutting-edge technological breakthroughs across AI, IoT, green tech, and blockchain. Network with innovators, attend product launches, and explore the future of tech entrepreneurship.",
  },
  {
    id: 3,
    title: "Tech Innovation",
    date: "Wed, Aug 04, 2025",
    time: "8:30AM - 4:00PM",
    description:
      "An annual conference spotlighting cutting-edge technological breakthroughs across AI, IoT, green tech, and blockchain. Network with innovators, attend product launches, and explore the future of tech entrepreneurship.",
  },
  // Add more events if needed
];

const UpcomingEvents = () => {
  const [expandedId, setExpandedId] = useState(null);
  const containerRef = useRef(null);

  const toggleExpand = (id) => {
    if (expandedId === id) {
      setExpandedId(null);
    } else {
      setExpandedId(id);
      // Scroll the container into view at the top
      containerRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      className="container mx-auto px-6 md:px-20 mt-16 max-w-7xl"
      ref={containerRef}
    >
      <h2 className="text-2xl font-bold mb-6">Upcoming Event</h2>
      {upcomingEventsData.map(({ id, title, date, time, description }) => {
        const isExpanded = expandedId === id;

        return (
          <article
            key={id}
            tabIndex={0}
            role="button"
            onClick={() => toggleExpand(id)}
            className="cursor-pointer rounded-lg border border-gray-300 px-5 py-4 mb-4 hover:shadow-md transition"
          >
            <div className="flex justify-between items-center">
              <div>
                <time className="text-sm text-gray-500">{date}</time>
                <h3 className="text-lg font-semibold flex items-center gap-2">
                  {title}
                  <span
                    className={`transition-transform duration-300 inline-block ${
                      isExpanded ? "rotate-180" : "rotate-0"
                    }`}
                  >
                    ▼
                  </span>
                </h3>
              </div>
              <button
                className="bg-blue-600 text-white rounded-md px-4 py-2 font-semibold hover:bg-blue-700 transition"
                onClick={(e) => {
                  e.stopPropagation();
                  alert(`Register clicked for ${title}`);
                }}
              >
                Register
              </button>
            </div>

            {isExpanded && (
              <div className="mt-4 text-gray-700">
                <p className="mb-2 text-gray-600 font-semibold">
                  {date}, {time}
                </p>
                <p>{description}</p>
                <hr className="mt-4 border-gray-300" />
              </div>
            )}
          </article>
        );
      })}
    </section>
  );
};

export default UpcomingEvents;
