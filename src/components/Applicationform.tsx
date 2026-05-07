function ApplyNow() {
  return (
    <div className="min-h-screen bg-[#EBDCB8] py-10 px-4">
      <div className="max-w-4xl mx-auto bg-white shadow-xl rounded-2xl p-8">
        <h1 className="text-4xl font-bold text-blue-900 mb-8 text-center">
          Student Admission Form
        </h1>
        <form className="space-y-10">
          {/* Student Details */}
          <div>
            <h2 className="text-2xl font-semibold text-blue-800 mb-4 border-b pb-2">
              Student Details
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block font-medium mb-2">
                  Student Name
                </label>
                <input
                  type="text"
                  placeholder="Enter student name"
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block font-medium mb-2">
                  Date of Birth
                </label>
                <input
                  type="date"
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block font-medium mb-2">
                  Gender
                </label>
                <select className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500">
                  <option>Select Gender</option>
                  <option>Male</option>
                  <option>Female</option>
                  <option>Other</option>
                </select>
              </div>
              <div>
                <label className="block font-medium mb-2">
                  Class Applying For
                </label>
                <input
                  type="text"
                  placeholder="Enter class"
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>
          </div>
          {/* Parent Details */}
          <div>
            <h2 className="text-2xl font-semibold text-blue-800 mb-4 border-b pb-2">
              Parent Details
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block font-medium mb-2">
                  Father Name
                </label>
                <input
                  type="text"
                  placeholder="Enter father name"
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block font-medium mb-2">
                  Mother Name
                </label>
                <input
                  type="text"
                  placeholder="Enter mother name"
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block font-medium mb-2">
                  Occupation
                </label>
                <input
                  type="text"
                  placeholder="Enter occupation"
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>
          </div>
          {/* Contact Details */}
          <div>
            <h2 className="text-2xl font-semibold text-blue-800 mb-4 border-b pb-2">
              Contact Details
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block font-medium mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  placeholder="Enter phone number"
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block font-medium mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="Enter email address"
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>
          </div>
          {/* Address */}
          <div>
            <h2 className="text-2xl font-semibold text-blue-800 mb-4 border-b pb-2">
              Address
            </h2>
            <textarea
              rows={5}
              placeholder="Enter full address"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>
          </div>
          {/* Submit Button */}
          <div className="text-center">
            <button
              type="submit"
              className="bg-blue-900 hover:bg-blue-800 text-white px-10 py-3 rounded-xl text-lg font-semibold transition duration-300"
            >
              Submit Application
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
export default ApplyNow
