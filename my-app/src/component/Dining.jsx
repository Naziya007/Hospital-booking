import React, { useState } from 'react';

const DiningSection = () => {
  const [selectedRestaurant, setSelectedRestaurant] = useState('all');
  const [expandedRestaurant, setExpandedRestaurant] = useState(null);
  const [reservationForm, setReservationForm] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    guests: 2,
    restaurant: ''
  });

  const categories = [
    { id: 'all', name: 'All Restaurants' },
    { id: 'fine-dining', name: 'Fine Dining' },
    { id: 'casual', name: 'Casual Dining' },
    { id: 'bar', name: 'Bars & Lounges' },
    { id: 'poolside', name: 'Poolside' }
  ];

  const restaurants = [
    {
      id: 1,
      name: 'Azure Restaurant',
      category: 'fine-dining',
      cuisine: 'International & Seafood',
      description: 'Michelin-starred dining experience with panoramic ocean views and a curated wine selection',
      rating: 4.9,
      priceRange: '$$$$',
      features: ['Ocean View', 'Wine Pairing', 'Chef\'s Table', 'Live Piano'],
      timing: '6:00 PM - 11:00 PM',
      dressCode: 'Smart Casual',
      signatureDish: 'Lobster Thermidor',
      image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1770&q=80',
      menu: [
        { name: 'Truffle Risotto', price: '$42' },
        { name: 'Wagyu Beef Tenderloin', price: '$85' },
        { name: 'Seafood Platter', price: '$120' }
      ]
    },
    {
      id: 2,
      name: 'Bamboo Garden',
      category: 'casual',
      cuisine: 'Asian Fusion',
      description: 'Authentic Asian flavors with modern twists in a zen-inspired garden setting',
      rating: 4.7,
      priceRange: '$$$',
      features: ['Open Kitchen', 'Sushi Bar', 'Private Tatami Rooms', 'Tea Ceremony'],
      timing: '11:00 AM - 10:00 PM',
      dressCode: 'Casual',
      signatureDish: 'Black Cod Miso',
      image: 'https://images.unsplash.com/photo-1559339352-11d035aa65de?ixlib=rb-4.0.3&auto=format&fit=crop&w=1770&q=80',
      menu: [
        { name: 'Dim Sum Platter', price: '$28' },
        { name: 'Sushi Omakase', price: '$65' },
        { name: 'Thai Green Curry', price: '$24' }
      ]
    },
    {
      id: 3,
      name: 'Sky Lounge',
      category: 'bar',
      cuisine: 'Cocktails & Tapas',
      description: 'Rooftop lounge with signature cocktails, craft beers, and small plates',
      rating: 4.8,
      priceRange: '$$',
      features: ['Rooftop View', 'Live DJ', 'Craft Cocktails', 'Fire Pit'],
      timing: '4:00 PM - 2:00 AM',
      dressCode: 'Smart Casual',
      signatureDish: 'Truffle Arancini',
      image: 'https://images.unsplash.com/photo-1514933651103-005eec06c04b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1770&q=80',
      menu: [
        { name: 'Craft Cocktails', price: '$18' },
        { name: 'Charcuterie Board', price: '$32' },
        { name: 'Oysters Rockefeller', price: '$26' }
      ]
    },
    {
      id: 4,
      name: 'Terra Cafe',
      category: 'casual',
      cuisine: 'Mediterranean',
      description: 'All-day dining with fresh, organic ingredients and beautiful garden views',
      rating: 4.6,
      priceRange: '$$',
      features: ['Outdoor Seating', 'Organic Menu', 'Breakfast Buffet', 'Fresh Juices'],
      timing: '7:00 AM - 10:00 PM',
      dressCode: 'Casual',
      signatureDish: 'Avocado Toast',
      image: 'https://images.unsplash.com/photo-1559925393-8be0ec4767c8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1770&q=80',
      menu: [
        { name: 'Mediterranean Bowl', price: '$22' },
        { name: 'Artisan Pizza', price: '$26' },
        { name: 'Fresh Pasta', price: '$24' }
      ]
    },
    {
      id: 5,
      name: 'Pool Bar & Grill',
      category: 'poolside',
      cuisine: 'Grill & Light Bites',
      description: 'Casual poolside dining with refreshing drinks and grilled specialties',
      rating: 4.5,
      priceRange: '$$',
      features: ['Pool View', 'Fresh Salads', 'Signature Cocktails', 'Live BBQ'],
      timing: '10:00 AM - 8:00 PM',
      dressCode: 'Pool Attire',
      signatureDish: 'Grilled Octopus',
      image: 'https://images.unsplash.com/photo-1575429198097-0414ec08e8cd?ixlib=rb-4.0.3&auto=format&fit=crop&w=1770&q=80',
      menu: [
        { name: 'Fish Tacos', price: '$20' },
        { name: 'Poolside Burger', price: '$22' },
        { name: 'Tropical Salad', price: '$18' }
      ]
    },
    {
      id: 6,
      name: 'Vino Wine Bar',
      category: 'bar',
      cuisine: 'Wine & Cheese',
      description: 'Intimate wine bar with curated selection and artisanal cheese pairings',
      rating: 4.7,
      priceRange: '$$$',
      features: ['Wine Tasting', 'Sommelier Service', 'Cheese Board', 'Cozy Ambiance'],
      timing: '5:00 PM - 12:00 AM',
      dressCode: 'Smart Casual',
      signatureDish: 'Artisanal Cheese Platter',
      image: 'https://images.unsplash.com/photo-1470337458703-46ad1756a187?ixlib=rb-4.0.3&auto=format&fit=crop&w=1770&q=80',
      menu: [
        { name: 'Wine Flight', price: '$35' },
        { name: 'Cheese Board', price: '$28' },
        { name: 'Charcuterie', price: '$32' }
      ]
    }
  ];

  const filteredRestaurants = selectedRestaurant === 'all' 
    ? restaurants 
    : restaurants.filter(r => r.category === selectedRestaurant);

  const handleReservationChange = (e) => {
    const { name, value } = e.target;
    setReservationForm(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleReservationSubmit = (e) => {
    e.preventDefault();
    if (!reservationForm.name || !reservationForm.email || !reservationForm.date || !reservationForm.time) {
      alert('Please fill all required fields');
      return;
    }
    alert(`Reservation confirmed at ${reservationForm.restaurant || 'selected restaurant'} for ${reservationForm.date} at ${reservationForm.time}`);
    setReservationForm({
      name: '',
      email: '',
      phone: '',
      date: '',
      time: '',
      guests: 2,
      restaurant: ''
    });
  };

  const getTodayDate = () => {
    return new Date().toISOString().split('T')[0];
  };

  const toggleRestaurantDetails = (id) => {
    setExpandedRestaurant(expandedRestaurant === id ? null : id);
  };

  return (
    <section id="dining" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-amber-100 px-4 py-2 rounded-full mb-4">
            <span className="text-amber-700 font-medium">Culinary Experience</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Dining & Restaurants</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover exceptional culinary experiences at our award-winning restaurants and bars
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedRestaurant(category.id)}
              className={`px-5 py-2 rounded-full font-medium transition-all duration-300 ${
                selectedRestaurant === category.id
                  ? 'bg-amber-600 text-white shadow-md'
                  : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Restaurants Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {filteredRestaurants.map((restaurant) => (
            <div
              key={restaurant.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              {/* Restaurant Image */}
              <div className="h-56 overflow-hidden relative">
                <img
                  src={restaurant.image}
                  alt={restaurant.name}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full w-12 h-12 flex items-center justify-center shadow-md">
                  <span className="text-lg">🍽️</span>
                </div>
                <div className="absolute bottom-4 left-4 bg-amber-600 text-white text-xs font-medium px-3 py-1 rounded-full">
                  {restaurant.category.charAt(0).toUpperCase() + restaurant.category.slice(1)}
                </div>
              </div>

              {/* Restaurant Details */}
              <div className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <h3 className="text-xl font-bold text-gray-800">{restaurant.name}</h3>
                    <p className="text-amber-600 font-medium">{restaurant.cuisine}</p>
                  </div>
                  <div className="flex items-center bg-amber-50 px-3 py-1 rounded-full">
                    <span className="text-amber-700 font-bold">{restaurant.rating}</span>
                    <svg className="w-4 h-4 text-amber-500 ml-1" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  </div>
                </div>

                {/* Price Range & Timing */}
                <div className="flex justify-between items-center mb-4">
                  <div className="text-gray-700 font-medium">{restaurant.priceRange}</div>
                  <div className="flex items-center text-gray-600 text-sm">
                    <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {restaurant.timing}
                  </div>
                </div>

                {/* Short Description */}
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                  {restaurant.description}
                </p>

                {/* Features */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {restaurant.features.slice(0, 3).map((feature, index) => (
                    <span
                      key={index}
                      className="bg-gray-100 text-gray-700 text-xs px-3 py-1 rounded-full"
                    >
                      {feature}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-3">
                  <button
                    onClick={() => toggleRestaurantDetails(restaurant.id)}
                    className="flex-1 border border-amber-600 text-amber-600 hover:bg-amber-50 font-medium py-2 px-4 rounded-lg transition duration-300 text-sm"
                  >
                    {expandedRestaurant === restaurant.id ? 'Hide Details' : 'View Details'}
                  </button>
                  <button
                    onClick={() => {
                      setReservationForm(prev => ({ ...prev, restaurant: restaurant.name }));
                      document.getElementById('reservation-section').scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="flex-1 bg-amber-600 hover:bg-amber-700 text-white font-medium py-2 px-4 rounded-lg transition duration-300 text-sm"
                  >
                    Reserve Table
                  </button>
                </div>

                {/* Expanded Details */}
                {expandedRestaurant === restaurant.id && (
                  <div className="mt-6 pt-6 border-t border-gray-100 animate-fadeIn">
                    <h4 className="font-bold text-gray-800 mb-3">Signature Dish: {restaurant.signatureDish}</h4>
                    <div className="mb-4">
                      <h5 className="font-medium text-gray-700 mb-2">Popular Menu Items:</h5>
                      <div className="space-y-2">
                        {restaurant.menu.map((item, index) => (
                          <div key={index} className="flex justify-between items-center">
                            <span className="text-gray-600">{item.name}</span>
                            <span className="font-medium text-gray-800">{item.price}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="text-sm text-gray-600">
                      <span className="font-medium">Dress Code:</span> {restaurant.dressCode}
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Quick Reservation Form */}
        <div id="reservation-section" className="bg-white rounded-2xl shadow-xl p-8 md:p-10 mb-12">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-2">Make a Reservation</h3>
            <p className="text-gray-600">Book your table in advance for a seamless dining experience</p>
          </div>

          <form onSubmit={handleReservationSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div>
                <label className="block text-gray-700 mb-2">Full Name *</label>
                <input
                  type="text"
                  name="name"
                  value={reservationForm.name}
                  onChange={handleReservationChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
                  placeholder="John Doe"
                  required
                />
              </div>

              <div>
                <label className="block text-gray-700 mb-2">Email *</label>
                <input
                  type="email"
                  name="email"
                  value={reservationForm.email}
                  onChange={handleReservationChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
                  placeholder="john@example.com"
                  required
                />
              </div>

              <div>
                <label className="block text-gray-700 mb-2">Phone</label>
                <input
                  type="tel"
                  name="phone"
                  value={reservationForm.phone}
                  onChange={handleReservationChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
                  placeholder="+1 (234) 567-8900"
                />
              </div>

              <div>
                <label className="block text-gray-700 mb-2">Restaurant</label>
                <select
                  name="restaurant"
                  value={reservationForm.restaurant}
                  onChange={handleReservationChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
                >
                  <option value="">Select Restaurant</option>
                  {restaurants.map(r => (
                    <option key={r.id} value={r.name}>{r.name}</option>
                  ))}
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <label className="block text-gray-700 mb-2">Date *</label>
                <input
                  type="date"
                  name="date"
                  value={reservationForm.date}
                  onChange={handleReservationChange}
                  min={getTodayDate()}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
                  required
                />
              </div>

              <div>
                <label className="block text-gray-700 mb-2">Time *</label>
                <select
                  name="time"
                  value={reservationForm.time}
                  onChange={handleReservationChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
                  required
                >
                  <option value="">Select Time</option>
                  <option value="18:00">6:00 PM</option>
                  <option value="18:30">6:30 PM</option>
                  <option value="19:00">7:00 PM</option>
                  <option value="19:30">7:30 PM</option>
                  <option value="20:00">8:00 PM</option>
                  <option value="20:30">8:30 PM</option>
                  <option value="21:00">9:00 PM</option>
                </select>
              </div>

              <div>
                <label className="block text-gray-700 mb-2">Number of Guests</label>
                <div className="flex items-center border border-gray-300 rounded-lg px-4 py-3">
                  <button
                    type="button"
                    onClick={() => setReservationForm(prev => ({ ...prev, guests: Math.max(1, prev.guests - 1) }))}
                    className="text-gray-600 hover:text-amber-600 text-xl"
                  >
                    −
                  </button>
                  <span className="flex-1 text-center text-gray-800 font-medium">
                    {reservationForm.guests} Guest{reservationForm.guests !== 1 ? 's' : ''}
                  </span>
                  <button
                    type="button"
                    onClick={() => setReservationForm(prev => ({ ...prev, guests: prev.guests + 1 }))}
                    className="text-gray-600 hover:text-amber-600 text-xl"
                  >
                    +
                  </button>
                </div>
              </div>
            </div>

            <div className="text-center">
              <button
                type="submit"
                className="bg-amber-600 hover:bg-amber-700 text-white font-bold py-3 px-12 rounded-lg transition duration-300 shadow-md hover:shadow-lg"
              >
                Reserve Table
              </button>
              <p className="text-gray-500 text-sm mt-3">We'll confirm your reservation within 2 hours</p>
            </div>
          </form>
        </div>

      </div>
    </section>
  );
};

export default DiningSection;