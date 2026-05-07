

function loginreg() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#EBDCB8] px-4 py-10">
      <div className="w-full max-w-md bg-white shadow-2xl rounded-2xl p-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-blue-900">
            Login Portal
          </h1>
          <p className="text-gray-600 mt-2">
            Faculty / Student Login
          </p>
        </div>

        <form className="space-y-6">
          <div>
            <label className="block font-medium mb-2 text-gray-700">
              Email Address
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block font-medium mb-2 text-gray-700">
              Password
            </label>
            <input
              type="password"
              placeholder="Enter your password"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="flex items-center justify-between text-sm">
            <label className="flex items-center gap-2 text-gray-600">
              <input type="checkbox" />
              Remember Me
            </label>

            <button
              type="button"
              className="text-blue-900 hover:underline"
            >
              Forgot Password?
            </button>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-900 hover:bg-blue-800 text-white py-3 rounded-xl text-lg font-semibold transition duration-300"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  )
}

export default loginreg