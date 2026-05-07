import { Link } from "react-router-dom";
import schoolLogo from "../assets/schoollogo.png";
function Navbar() {
  return (
    <nav className="sticky top-0 z-50 w-full bg-blue-900 text-white shadow-md">
      <div className="h-25 w-full mx-auto px-4 lg:px-6 py-3 flex items-center justify-between">
        {/* Logo Section */}
        <div className="flex items-center gap-3 shrink-0 min-w-fit">
          <img
            src={schoolLogo}
            alt="School Logo"
            className="h-30 w-auto object-contain bg-transparent shrink-0"
          />

          <div>
            <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold tracking-wide leading-tight max-w-72 lg:max-w-full">
              CHILDREN WORLD
              <br />
              INTERNATIONAL SCHOOL
            </h1>
            <p className="text-sm text-yellow-300 font-medium">
              Excellence In Education
            </p>
          </div>
        </div>

        {/* Navigation Links */}
        <ul className="hidden lg:flex items-center gap-5 xl:gap-8 text-lg font-medium flex-1 justify-center px-6">
          <li>
            <Link
              to="/"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="hover:text-yellow-300 transition duration-300"
            >
              Home
            </Link>
          </li>

          <li>
            <button
              onClick={() => {
                const section = document.getElementById("about")
                section?.scrollIntoView({ behavior: "smooth" })
              }}
              className="hover:text-yellow-300 transition duration-300"
            >
              About
            </button>
          </li>

          <li className="hover:text-yellow-300 cursor-pointer transition duration-300">
            Admissions
          </li>

          <li className="hover:text-yellow-300 cursor-pointer transition duration-300">
            Facilities
          </li>

          <li className="hover:text-yellow-300 cursor-pointer transition duration-300">
            <button
              onClick={() => {
                const section = document.getElementById("contact")
                section?.scrollIntoView({ behavior: "smooth" })
              }}
              className="hover:text-yellow-300 transition duration-300"
            >
              Contact
            </button>
          </li>
        </ul>

        {/* CTA Button */}
        <li>
          
          <Link
            to="/applynow"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          ><button className="hidden sm:block bg-yellow-400 text-black px-4 lg:px-5 py-2 rounded-lg font-semibold hover:bg-yellow-300 transition duration-300 whitespace-nowrap">
            Apply Now
          </button></Link>
        </li>
      </div>
    </nav>
  );
}

export default Navbar;
