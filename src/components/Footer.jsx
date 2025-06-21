import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaFacebookF,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10 px-6 md:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Eventify description and social */}
        <div>
          <h2 className="text-white font-bold flex items-center space-x-2 mb-4 text-lg">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-blue-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2v-7H3v7a2 2 0 002 2z"
              />
            </svg>
            <span>Eventify</span>
          </h2>
          <p className="text-gray-400 leading-relaxed">
            Your gateway to free technology events, workshops, and networking
            opportunities.
          </p>
          <div className="flex space-x-4 mt-6 text-gray-400">
            <a
              href="https://twitter.com"
              aria-label="Twitter"
              className="hover:text-blue-400"
            >
              <FaTwitter />
            </a>
            <a
              href="https://linkedin.com"
              aria-label="LinkedIn"
              className="hover:text-blue-600"
            >
              <FaLinkedinIn />
            </a>
            <a
              href="https://instagram.com"
              aria-label="Instagram"
              className="hover:text-pink-500"
            >
              <FaInstagram />
            </a>
            <a
              href="https://facebook.com"
              aria-label="Facebook"
              className="hover:text-blue-700"
            >
              <FaFacebookF />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-white font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:text-white transition">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition">
                About Us
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h3 className="text-white font-semibold mb-4">Resources</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:text-white transition">
                FAQ
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition">
                Blog
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition">
                Help Center
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Us */}
        <div>
          <h3 className="text-white font-semibold mb-4">Contact Us</h3>
          <ul className="space-y-3 text-gray-400">
            <li className="flex items-center space-x-2">
              <FaEnvelope className="text-blue-500" />
              <a
                href="mailto:info@eventify.tech"
                className="hover:text-white transition"
              >
                info@eventify.tech
              </a>
            </li>
            <li className="flex items-center space-x-2">
              <FaPhoneAlt className="text-blue-500" />
              <span>+1 (234) 567-890</span>
            </li>
            <li className="flex items-center space-x-2">
              <FaMapMarkerAlt className="text-blue-500" />
              <address className="not-italic">
                Russian Federation Blvd (110), Phnom Penh 120404
              </address>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center text-gray-500 text-sm">
        <p>© 2023 Eventify. All rights reserved.</p>
        <ul className="flex space-x-6 mt-4 md:mt-0">
          <li>
            <a href="#" className="hover:text-white transition">
              Privacy Policy
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-white transition">
              Terms of Service
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-white transition">
              Cookie Policy
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
