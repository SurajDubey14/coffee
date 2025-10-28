import React from "react";
import coffeeCup from "../assets/images/coffee-cup.png"; // <-- your image path
import coldCoffee from "../assets/images/cold-coffee.png";
import hotCoffee from "../assets/images/hot-coffee.png";
import sandwich from "../assets/images/sandwich.png";
import sandwiches from "../assets/images/sandwich.jpg";
import momos from "../assets/images/momos.png";
import momo from "../assets/images/momos.jpg";

const categories = [
  { title: "Cold Coffee", img: coldCoffee },
  { title: "Hot Coffee", img: hotCoffee },
  { title: "Sandwiches", img: sandwich },
  { title: "Momos", img: momos },
];

const Home = () => {
  return (
    <>
      <section className="flex flex-col md:flex-row items-center justify-between p-4 px-6 md:px-16  bg-gradient-to-b from-[#fffaf5] to-[#fff]">
        {/* Left Content */}
        <div className="md:w-1/2 space-y-6 text-center md:text-left py-12">
          <h1 className="text-4xl md:text-6xl font-bold text-[#4b2e05] leading-tight">
            Chill, Sip & Bite — Your Favourite Café Spot
          </h1>
          <p className="text-lg text-[#5c3d12]">
            From ice-cold coffee to hot cappuccino, crispy sandwiches, delicious
            chaap, and mouth-watering momos — we serve happiness in every bite
            and sip.
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

      <section className="py-16 bg-[#fffaf5] text-center">
        <h2 className="text-4xl font-bold text-[#4b2e05] mb-10">
          What’s Brewing & Cooking ☕🍔
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 max-w-6xl mx-auto px-6">
          {categories.map((item, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-2xl p-4 hover:scale-105 transition transform duration-300"
            >
              <img
                src={item.img}
                alt={item.title}
                className="w-28 h-28 mx-auto object-contain mb-4"
              />
              <h3 className="text-lg font-semibold text-[#4b2e05]">
                {item.title}
              </h3>
            </div>
          ))}
        </div>
      </section>

      <section className="py-16 bg-white px-6 md:px-16 flex flex-col md:flex-row items-center justify-between gap-10">
        {/* Left Image */}
        <div className="md:w-1/2">
          <img
            src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80"
            alt="Cafe interior"
            className="rounded-2xl shadow-lg"
          />
        </div>

        {/* Right Content */}
        <div className="md:w-1/2 text-center md:text-left space-y-6">
          <h2 className="text-4xl font-bold text-[#4b2e05]">
            Brewed with Passion, Served with Love ❤️
          </h2>
          <p className="text-lg text-[#5c3d12]">
            At <span className="font-semibold">Caddy Coffee</span>, every cup of
            coffee and every plate of snacks is crafted with care. We believe
            great taste starts with quality ingredients, cozy vibes, and a
            smile. Whether you’re here for a chill cold coffee, a hot
            cappuccino, spicy chaap, or crispy momos — you’ll always find
            comfort in every bite.
          </p>
          <button className="px-6 py-3 bg-[#4b2e05] text-white rounded-full hover:bg-[#3a2304] transition">
            Learn More
          </button>
        </div>
      </section>

      {/* Customer Favorites Section */}
      <section className="py-16 bg-[#fffaf5] text-center px-6 md:px-16">
        <h2 className="text-4xl font-bold text-[#4b2e05] mb-10">
          Customer Favorites ❤️
        </h2>
        <p className="text-lg text-[#5c3d12] max-w-2xl mx-auto mb-12">
          These are the most loved items by our customers — perfect for your
          next visit!
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {/* Item 1 */}
          <div className="bg-white shadow-lg rounded-2xl p-4 hover:scale-105 transition-transform duration-300">
            <img
              src="https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=600&q=80"
              alt="Cold Coffee"
              className="w-full h-48 object-cover rounded-xl mb-4"
            />
            <h3 className="text-xl font-semibold text-[#4b2e05]">
              Iced Cold Coffee
            </h3>
            <p className="text-[#5c3d12] mt-2">₹149</p>
          </div>

          {/* Item 2 */}
          {/* <div className="bg-white shadow-lg rounded-2xl p-4 hover:scale-105 transition-transform duration-300">
            <img
              src="https://images.unsplash.com/photo-1606756790138-8ab4e06d3121?auto=format&fit=crop&w=600&q=80"
              alt="Tandoori Chaap"
              className="w-full h-48 object-cover rounded-xl mb-4"
            />
            <h3 className="text-xl font-semibold text-[#4b2e05]">
              Tandoori Chaap
            </h3>
            <p className="text-[#5c3d12] mt-2">₹179</p>
          </div> */}

          {/* Item 3 */}
          <div className="bg-white shadow-lg rounded-2xl p-4 hover:scale-105 transition-transform duration-300">
            <img
              src={momo}
              alt="Veg Momos"
              className="w-full h-48 object-cover rounded-xl mb-4"
            />
            <h3 className="text-xl font-semibold text-[#4b2e05]">Veg Momos</h3>
            <p className="text-[#5c3d12] mt-2">₹99</p>
          </div>

          {/* Item 4 */}
          <div className="bg-white shadow-lg rounded-2xl p-4 hover:scale-105 transition-transform duration-300">
            <img
              src={sandwiches}
              alt="Grilled Sandwich"
              className="w-full h-48 object-cover rounded-xl mb-4"
            />
            <h3 className="text-xl font-semibold text-[#4b2e05]">
              Grilled Sandwich
            </h3>
            <p className="text-[#5c3d12] mt-2">₹129</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
