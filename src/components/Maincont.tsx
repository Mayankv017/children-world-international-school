

import pic1 from '../assets/pic1.jpg'
import pic2 from '../assets/pic2.jpg'
import pic3 from '../assets/pic3.jpg'

function Maincont() {
  return (
    <main className="bg-[#EBDCB8] py-20 px-6 lg:px-16">
      {/* Welcome Section */}
      <section className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-14 items-center mb-24">
        <div className="space-y-6 animate-fade-in">
          <p className="text-yellow-700 font-semibold uppercase tracking-widest">
            Welcome To Our School
          </p>

          <h1 className="text-4xl lg:text-6xl font-bold text-blue-950 leading-tight">
            Building Bright Futures Through Quality Education
          </h1>

          <p className="text-gray-700 text-lg leading-8">
            Children World International School focuses on academic excellence,
            discipline, creativity, and personality development to prepare
            students for the modern world.
          </p>

          <button className="bg-blue-900 text-white px-8 py-4 rounded-xl font-semibold hover:bg-blue-800 transition duration-300 shadow-lg hover:scale-105">
            Learn More
          </button>
        </div>

        <div className="grid grid-cols-2 gap-5">
          <img
            src={pic1}
            alt="School"
            className="rounded-3xl h-72 w-full object-cover shadow-2xl hover:scale-105 transition duration-500"
          />

          <img
            src={pic2}
            alt="Students"
            className="rounded-3xl h-72 w-full object-cover mt-12 shadow-2xl hover:scale-105 transition duration-500"
          />
        </div>
      </section>

      {/* Principal Section */}
      <section className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center mb-24">
        <div className="relative flex justify-center">
          <div className="absolute w-80 h-80 bg-blue-300 rounded-full blur-3xl opacity-40 animate-pulse"></div>

          <img
            src={pic3}
            alt="Principal"
            className="relative z-10 w-[350px] h-[450px] object-cover rounded-[40px] shadow-2xl border-8 border-white animate-bounce"
          />
        </div>

        <div className="space-y-6">
          <p className="text-yellow-700 font-semibold uppercase tracking-widest">
            Principal's Message
          </p>

          <h2 className="text-4xl lg:text-5xl font-bold text-blue-950 leading-tight">
            Inspiring Excellence And Leadership In Every Student
          </h2>

          <p className="text-gray-700 text-lg leading-8">
            Our mission is to provide a safe, innovative, and inspiring learning
            environment where every child discovers their talents and achieves
            their highest potential.
          </p>

          <p className="text-gray-700 text-lg leading-8">
            We believe education is not only about academics but also about
            values, confidence, discipline, and leadership.
          </p>

          <button className="bg-yellow-400 text-black px-8 py-4 rounded-xl font-semibold hover:bg-yellow-300 transition duration-300 shadow-lg hover:scale-105">
            Read Message
          </button>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="max-w-7xl mx-auto text-center">
        <p className="text-yellow-700 font-semibold uppercase tracking-widest mb-4">
          School Gallery
        </p>

        <h2 className="text-4xl lg:text-5xl font-bold text-blue-950 mb-14">
          Campus Life Moments
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          <img
            src={pic1}
            alt="Gallery"
            className="rounded-3xl h-80 w-full object-cover shadow-xl hover:scale-105 transition duration-500"
          />

          <img
            src={pic2}
            alt="Gallery"
            className="rounded-3xl h-80 w-full object-cover shadow-xl hover:scale-105 transition duration-500"
          />

          <img
            src={pic3}
            alt="Gallery"
            className="rounded-3xl h-80 w-full object-cover shadow-xl hover:scale-105 transition duration-500"
          />
        </div>
      </section>
    </main>
  )
}

export default Maincont