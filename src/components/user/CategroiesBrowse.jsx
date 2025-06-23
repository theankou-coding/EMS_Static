const categories = [
  {
    id: 1,
    name: "Development",
    eventsCount: 24,
    // Example SVG icon for Development
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-7 w-7 mx-auto mb-2"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 17v-6h13v6" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12H4l4-8v8z" />
      </svg>
    ),
    gradient: "from-purple-600 to-indigo-600",
  },
  {
    id: 2,
    name: "AI & ML",
    eventsCount: 18,
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-7 w-7 mx-auto mb-2"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path d="M12 7v10m5-5H7" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    gradient: "from-green-500 to-teal-500",
  },
  {
    id: 3,
    name: "Cybersecurity",
    eventsCount: 12,
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-7 w-7 mx-auto mb-2"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 12l9-5-9-5-9 5 9 5z"
        />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 12v9" />
      </svg>
    ),
    gradient: "from-orange-500 to-red-500",
  },
  {
    id: 4,
    name: "Cybersecurity",
    eventsCount: 12,
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-7 w-7 mx-auto mb-2"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 12l9-5-9-5-9 5 9 5z"
        />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 12v9" />
      </svg>
    ),
    gradient: "from-orange-500 to-red-500",
  },
  {
    id: 5,
    name: "Cybersecurity",
    eventsCount: 12,
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-7 w-7 mx-auto mb-2"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 12l9-5-9-5-9 5 9 5z"
        />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 12v9" />
      </svg>
    ),
    gradient: "from-orange-500 to-red-500",
  },
  {
    id: 6,
    name: "AI & ML",
    eventsCount: 18,
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-7 w-7 mx-auto mb-2"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path d="M12 7v10m5-5H7" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    gradient: "from-green-500 to-teal-500",
  },
  {
    id: 7,
    name: "AI & ML",
    eventsCount: 18,
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-7 w-7 mx-auto mb-2"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path d="M12 7v10m5-5H7" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    gradient: "from-green-500 to-teal-500",
  },
  {
    id: 8,
    name: "AI & ML",
    eventsCount: 18,
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-7 w-7 mx-auto mb-2"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path d="M12 7v10m5-5H7" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    gradient: "from-green-500 to-teal-500",
  },
  // Add more categories similarly...
];

export default function CategoriesBrowse() {
  return (
    <section className="container mx-auto mt-20 mb-20 px-6 md:px-20">
      <h2 className="text-3xl font-extrabold mb-10 text-center">
        Browse By Category
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-8 gap-6 max-w-7xl mx-auto">
        {categories.map(({ id, name, eventsCount, icon, gradient }) => (
          <button
            key={id}
            type="button"
            className={`rounded-xl shadow-md text-white font-bold py-6 text-center flex flex-col justify-center items-center px-4 bg-gradient-to-r ${gradient} hover:brightness-110 transition`}
          >
            {icon}
            <span className="text-lg">{name}</span>
            <span className="text-sm mt-1 opacity-80">
              {eventsCount} Events
            </span>
          </button>
        ))}
      </div>
    </section>
  );
}
