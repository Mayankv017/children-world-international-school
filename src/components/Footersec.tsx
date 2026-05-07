import schoolLogo from "../assets/schoollogo.png";

function FooterSec() {
  return (
    <footer className="bg-blue-950 text-white pt-14 pb-6">
      <div className="max-w-full mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-15 lg:gap-30">
        {/* School Info */}
        <div className="max-w-105">
          <div className="w-auto flex items-center gap-5 mb-5">
            <img
              src={schoolLogo}
              alt="School Logo"
              className="h-40 w-auto object-contain bg-transparent shrink-0"
            />

            <div>
              <h2 className="text-2xl lg:text-3xl font-bold leading-tight max-w-65">
                CHILDREN WORLD
                <br />
                INTERNATIONAL SCHOOL
              </h2>
            </div>
          </div>

          <p className="text-gray-300 leading-7">
            Providing quality education with modern learning methods,
            discipline, creativity, and overall student development.
          </p>
        </div>

        {/* Quick Links */}
        <div className="lg:ml-10 xl:ml-16">
          <h3 className="text-2xl font-semibold mb-5 text-yellow-400">
            Quick Links
          </h3>

          <ul className="space-y-3 text-gray-300">
            <li className="hover:text-yellow-300 cursor-pointer transition duration-300">
              Home
            </li>

            <li className="hover:text-yellow-300 cursor-pointer transition duration-300">
              About Us
            </li>

            <li className="hover:text-yellow-300 cursor-pointer transition duration-300">
              Admissions
            </li>

            <li className="hover:text-yellow-300 cursor-pointer transition duration-300">
              Gallery
            </li>

            <li className="hover:text-yellow-300 cursor-pointer transition duration-300">
              Contact
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-2xl font-semibold mb-5 text-yellow-400">
            Contact Us
          </h3>

          <div className="space-y-4 text-gray-300 leading-7">
            <a
              href="https://www.google.com/maps/place/Bhilwara,+Rajasthan"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-yellow-300 transition duration-300"
            >
              <p>📍 Gurugram, Haryana, India</p>
            </a>
            {/* <p>📍 Gurugram, Haryana, India</p> */}
            <p>📞 +91 8440833999</p>
            <p>✉️ school@email.com</p>
          </div>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-2xl font-semibold mb-5 text-yellow-400">
            Newsletter
          </h3>

          <p className="text-gray-300 mb-5 leading-7">
            Subscribe to get latest updates, notices, and school news.
          </p>

          <div className="flex flex-col gap-3">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-4 py-3 rounded-lg bg-white text-black outline-none"
            />

            <button className="bg-yellow-400 text-black py-3 rounded-lg font-semibold hover:bg-yellow-300 transition duration-300">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-white/15 mt-1 pt-1 text-center text-gray-600 text-sm px-6">
        © 2026 Children World International School. All Rights Reserved.
      </div>
    </footer>
  );
}

export default FooterSec;
