import React, { useState } from 'react';

const RoomsSection = () => {
  const [selectedRoom, setSelectedRoom] = useState('deluxe');
  
  const rooms = [
    {
      id: 'deluxe',
      name: 'Deluxe Room',
      price: '$299',
      perNight: '/night',
      size: '400 sq ft',
      guests: '2 Guests',
      bed: 'King Bed',
      features: ['Sea View', 'Free Wi-Fi', 'Mini Bar', 'Smart TV'],
      image: 'https://images.unsplash.com/photo-1618773928121-c32242e63f39?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
      id: 'premium',
      name: 'Premium Suite',
      price: '$499',
      perNight: '/night',
      size: '600 sq ft',
      guests: '3 Guests',
      bed: 'King Bed + Sofa',
      features: ['Balcony', 'Jacuzzi', 'Free Breakfast', 'Private Lounge'],
      image: 'https://plus.unsplash.com/premium_photo-1661879252375-7c1db1932572?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
      id: 'presidential',
      name: 'Presidential Suite',
      price: '$899',
      perNight: '/night',
      size: '1200 sq ft',
      guests: '4 Guests',
      bed: '2 King Beds',
      features: ['Private Pool', 'Butler Service', 'Dining Area', 'Panoramic View'],
      image: 'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    }
  ];

  const handleBookRoom = (room) => {
    alert(`Booking ${room.name} for ${room.price}${room.perNight}`);
  };

  return (
    <section id="rooms" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Rooms & Suites</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Experience luxury and comfort in our carefully designed accommodations
          </p>
        </div>

        {/* Room Selection Tabs */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex bg-white rounded-full p-1 shadow">
            {rooms.map((room) => (
              <button
                key={room.id}
                onClick={() => setSelectedRoom(room.id)}
                className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                  selectedRoom === room.id
                    ? 'bg-amber-600 text-white'
                    : 'text-gray-700 hover:text-amber-600'
                }`}
              >
                {room.name}
              </button>
            ))}
          </div>
        </div>

        {/* Rooms Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {rooms.map((room) => (
            <div
              key={room.id}
              className={`bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl ${
                selectedRoom === room.id ? 'ring-2 ring-amber-500' : ''
              }`}
            >
              {/* Room Image */}
              <div className="h-56 overflow-hidden">
                <img
                  src={room.image}
                  alt={room.name}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Room Details */}
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-gray-800">{room.name}</h3>
                    <div className="flex items-center mt-1">
                      <span className="text-2xl font-bold text-amber-600">{room.price}</span>
                      <span className="text-gray-600 ml-1">{room.perNight}</span>
                    </div>
                  </div>
                  <span className="bg-amber-100 text-amber-800 text-xs font-medium px-3 py-1 rounded-full">
                    Popular
                  </span>
                </div>

                {/* Room Specs */}
                <div className="grid grid-cols-3 gap-4 mb-6">
                  <div className="text-center">
                    <div className="text-gray-500 text-sm">Size</div>
                    <div className="font-medium">{room.size}</div>
                  </div>
                  <div className="text-center">
                    <div className="text-gray-500 text-sm">Guests</div>
                    <div className="font-medium">{room.guests}</div>
                  </div>
                  <div className="text-center">
                    <div className="text-gray-500 text-sm">Bed</div>
                    <div className="font-medium">{room.bed}</div>
                  </div>
                </div>

                {/* Features */}
                <div className="mb-6">
                  <h4 className="font-medium text-gray-700 mb-3">Room Features</h4>
                  <div className="flex flex-wrap gap-2">
                    {room.features.map((feature, index) => (
                      <span
                        key={index}
                        className="bg-gray-100 text-gray-700 text-sm px-3 py-1 rounded-full"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Book Button */}
                <button
                  onClick={() => handleBookRoom(room)}
                  className="w-full bg-amber-600 hover:bg-amber-700 text-white font-medium py-3 px-6 rounded-lg transition duration-300"
                >
                  Book This Room
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <button className="border-2 border-amber-600 text-amber-600 hover:bg-amber-50 font-medium py-3 px-8 rounded-lg transition duration-300">
            View All Rooms & Suites
          </button>
        </div>
      </div>
    </section>
  );
};

export default RoomsSection;