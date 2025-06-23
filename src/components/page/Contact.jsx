import React, { useState, useCallback } from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";

const ContactUsAlt = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState(null);

  const handleChange = useCallback((e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  }, []);

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();
      setStatus("loading");
      setTimeout(() => {
        console.log("Contact form submitted:", formData);
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
        setTimeout(() => setStatus(null), 3000);
      }, 1500);
    },
    [formData]
  );

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-[#081c33] via-[#0e2a4c] to-[#15355b]">
      <Navbar />

      <main className="flex-grow py-24 px-6 lg:px-16 relative text-gray-200 overflow-hidden">
        {/* Background blur overlay */}
        <div
          aria-hidden="true"
          className="absolute inset-0 opacity-40 bg-gradient-to-br from-[#081c33] via-[#0e2a4c] to-[#15355b] -z-10"
          style={{ filter: "blur(60px)" }}
        ></div>

        <section className="relative max-w-3xl mx-auto bg-white bg-opacity-10 backdrop-blur-md rounded-3xl shadow-lg px-12 py-16 z-10">
          <h2 className="text-5xl font-extrabold text-white text-center mb-6">
            Get in Touch
          </h2>
          <p className="text-center text-blue-300 text-lg mb-12 max-w-lg mx-auto leading-relaxed">
            Questions? Comments? We're here to help. Fill out the form below and
            we'll get back to you as soon as possible.
          </p>
          <form onSubmit={handleSubmit} className="space-y-8">
            <div>
              <label
                htmlFor="name"
                className="block text-white mb-2 font-semibold text-lg"
              >
                Full Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                placeholder="Your full name"
                className="w-full border border-blue-300 bg-white rounded-xl px-5 py-4 text-lg placeholder-gray-400 focus:outline-none focus:ring-3 focus:ring-blue-400 transition duration-300"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-white mb-2 font-semibold text-lg"
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                placeholder="you@example.com"
                className="w-full border border-blue-300 bg-white rounded-xl px-5 py-4 text-lg placeholder-gray-400 focus:outline-none focus:ring-3 focus:ring-blue-400 transition duration-300"
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-white mb-2 font-semibold text-lg"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                value={formData.message}
                onChange={handleChange}
                placeholder="Your message here..."
                rows={6}
                className="w-full border border-blue-300 bg-white rounded-xl px-5 py-4 text-lg placeholder-gray-400 resize-none focus:outline-none focus:ring-3 focus:ring-blue-400 transition duration-300"
              />
            </div>
            <button
              type="submit"
              disabled={status === "loading"}
              className={`w-full rounded-2xl py-5 text-xl font-extrabold text-white transition-transform duration-300 transform ${
                status === "loading"
                  ? "bg-blue-300 cursor-not-allowed"
                  : "bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 hover:scale-105 shadow-lg shadow-blue-500/40"
              }`}
            >
              {status === "loading" ? "Sending..." : "Send Message"}
            </button>
          </form>
          {status === "success" && (
            <p className="mt-8 text-center text-green-400 font-semibold text-lg animate-fade-in">
              Thanks for reaching out! We'll contact you shortly.
            </p>
          )}
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default ContactUsAlt;
