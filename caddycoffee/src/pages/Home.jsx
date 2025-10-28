import React from 'react'
import coffeeCup from "../assets/images/coffee-cup.png"; // <-- your image path
const Home = () => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between px-6 md:px-16  bg-gradient-to-b from-[#fffaf5] to-[#fff]">
      {/* Left Content */}
      <div className="md:w-1/2 space-y-6 text-center md:text-left py-12">
        <h1 className="text-4xl md:text-6xl font-bold text-[#4b2e05] leading-tight">
          Chill, Sip & Bite — Your Favourite Café Spot
        </h1>
        <p className="text-lg text-[#5c3d12]">
          From ice-cold coffee to hot cappuccino, crispy sandwiches, delicious chaap, and mouth-watering momos — we serve happiness in every bite and sip.
        </p>
        <button className="mt-4 px-6 py-3 bg-[#4b2e05] text-white rounded-full hover:bg-[#3a2304] transition">
          Explore Menu
        </button>
      </div>

      {/* Right Image */}
      <div className="md:w-1/2 flex justify-center mt-8 md:mt-0">
        <img
          src={coffeeCup}
          alt="Cold Coffee Cup"
          className="w-64 md:w-96 drop-shadow-2xl rounded-2xl"
        />
      </div>
    </section>
  );
}

export default Home
