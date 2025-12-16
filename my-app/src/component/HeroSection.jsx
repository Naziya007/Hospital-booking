import React, { useState } from "react";

const HeroSection = () => {
  const [checkInDate, setCheckInDate] = useState("");
  const [checkOutDate, setCheckOutDate] = useState("");
  const [guests, setGuests] = useState(2);

  const heroImage =
    "https://plus.unsplash.com/premium_photo-1661873298245-e78a12a3d157?q=80&w=996&auto=format&fit=crop&ixlib=rb-4.1.0";

  const getTodayDate = () => new Date().toISOString().split("T")[0];

  const getTomorrowDate = () => {
    const d = new Date();
    d.setDate(d.getDate() + 1);
    return d.toISOString().split("T")[0];
  };

  const handleBookNow = () => {
    if (!checkInDate || !checkOutDate) {
      alert("Please select check-in and check-out dates");
      return;
    }
    alert(
      `Booking confirmed!\nCheck-in: ${checkInDate}\nCheck-out: ${checkOutDate}\nGuests: ${guests}`
    );
  };

  return (
    <section
      id="home"
      className="pt-24 pb-16 md:pt-32 md:pb-24 bg-gradient-to-br from-gray-900 to-gray-800"
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* LEFT CONTENT */}
          <div className="lg:w-1/2">
            <div className="inline-flex bg-amber-500/20 px-4 py-2 rounded-full mb-6">
              <span className="text-amber-300 font-medium">
                Welcome to LuxuryStay
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Luxury Hotel & <br />
              <span className="text-amber-400">Premium Resort</span>
            </h1>

            <p className="text-lg text-gray-300 mb-8 max-w-xl">
              Experience world-class hospitality with breathtaking views,
              exceptional service, and unforgettable memories.
            </p>

            {/* STATS */}
            <div className="grid grid-cols-3 gap-6 mb-10">
              <div className="text-center">
                <div className="text-3xl font-bold text-white">200+</div>
                <div className="text-amber-300">Rooms</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white">5⭐</div>
                <div className="text-amber-300">Rating</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white">24/7</div>
                <div className="text-amber-300">Service</div>
              </div>
            </div>

            {/* BOOKING CARD */}
            <div className="bg-white rounded-xl shadow-xl p-6 max-w-lg">
              <h3 className="text-xl font-bold text-gray-800 mb-4">
                Book Your Stay
              </h3>

              <div className="grid md:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block mb-2 text-gray-700">Check-in</label>
                  <input
                    type="date"
                    min={getTodayDate()}
                    value={checkInDate}
                    onChange={(e) => setCheckInDate(e.target.value)}
                    className="w-full border px-4 py-3 rounded-lg focus:ring-2 focus:ring-amber-500"
                  />
                </div>

                <div>
                  <label className="block mb-2 text-gray-700">Check-out</label>
                  <input
                    type="date"
                    min={checkInDate || getTomorrowDate()}
                    value={checkOutDate}
                    onChange={(e) => setCheckOutDate(e.target.value)}
                    className="w-full border px-4 py-3 rounded-lg focus:ring-2 focus:ring-amber-500"
                  />
                </div>
              </div>

              <div className="mb-6">
                <label className="block mb-2 text-gray-700">Guests</label>
                <div className="flex items-center border rounded-lg px-4 py-3">
                  <button
                    onClick={() => setGuests(Math.max(1, guests - 1))}
                    className="text-xl"
                  >
                    −
                  </button>
                  <span className="flex-1 text-center font-medium">
                    {guests} Guest{guests > 1 && "s"}
                  </span>
                  <button
                    onClick={() => setGuests(guests + 1)}
                    className="text-xl"
                  >
                    +
                  </button>
                </div>
              </div>

              <button
                onClick={handleBookNow}
                className="w-full bg-amber-600 hover:bg-amber-700 text-white font-bold py-4 rounded-lg"
              >
                Book Now • From $299/night
              </button>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="lg:w-1/2 relative">
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={heroImage}
                alt="Luxury Hotel"
                className="w-full h-[500px] object-cover"
              />
            </div>

            <div className="absolute -bottom-4 -right-4 bg-white rounded-xl shadow-lg p-4">
              <div className="font-bold">Best Price Guarantee</div>
              <div className="text-sm text-gray-600">
                Lowest rates available
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
