

function TopHeader() {
  return (
    <div className="w-full bg-black text-white text-sm">
      <div className="max-w-7xl mx-auto px-6 py-2 flex flex-col md:flex-row items-center justify-between gap-2">
        {/* Left Side */}
        <div className="flex items-center gap-4 font-medium">
          <p>📞 +91 9876543210</p>
          <p>✉️ school@email.com</p>
        </div>

        {/* Right Side */}
        <div className="flex items-center gap-4 font-medium">
          <a
            // href="https://maps.app.goo.gl/hjKPKGWo1G3woVpm9"
            href="https://www.google.com/maps/place/Bhilwara,+Rajasthan"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-yellow-300 transition duration-300"
          >
            📍 Bhilwara, Rajasthan
          </a>
          <p className="hover:text-blue-900 cursor-pointer transition duration-300">
            Student Login
          </p>
        </div>
      </div>
    </div>
  )
}

export default TopHeader