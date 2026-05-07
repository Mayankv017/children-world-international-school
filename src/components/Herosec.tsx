

import { useEffect, useState } from 'react'

import pic1 from '../assets/pic1.jpg'
import pic2 from '../assets/pic2.jpg'
import pic3 from '../assets/pic3.jpg'

const slides = [
  {
    image: pic1,
    title: 'Empowering Young Minds',
    subtitle: 'Building Future Leaders With Excellence In Education',
  },
  {
    image: pic2,
    title: 'Modern Learning Environment',
    subtitle: 'Smart Classrooms And Creative Activities For Students',
  },
  {
    image: pic3,
    title: 'A Place To Grow',
    subtitle: 'Nurturing Talent, Discipline, And Innovation Everyday',
  },
]

function HeroSec() {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 4000)

    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative w-full h-[85vh] overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            currentSlide === index ? 'opacity-100 z-10' : 'opacity-0 z-0'
          }`}
        >
          {/* Background Image */}
          <img
            src={slide.image}
            alt={slide.title}
            className="w-full h-full object-cover"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/45" />

          {/* Content */}
          <div className="absolute inset-0 flex items-center px-6 lg:px-20">
            <div className="max-w-3xl text-white">
              <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold leading-tight mb-6">
                {slide.title}
              </h1>

              <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-2xl">
                {slide.subtitle}
              </p>

              <div className="flex flex-wrap gap-4">
                <button className="bg-yellow-400 text-black px-6 py-3 rounded-lg font-semibold hover:bg-yellow-300 transition duration-300">
                  Explore More
                </button>

                <button className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-black transition duration-300">
                  Contact Us
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Slide Buttons */}
      <div className="absolute bottom-6 right-6 z-20 flex gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-4 h-4 rounded-full transition duration-300 ${
              currentSlide === index
                ? 'bg-yellow-400 scale-110'
                : 'bg-white/70 hover:bg-white'
            }`}
          />
        ))}
      </div>
    </section>
  )
}

export default HeroSec