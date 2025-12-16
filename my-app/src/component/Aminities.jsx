import React, { useState } from 'react';

const AmenitiesSection = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [expandedAmenity, setExpandedAmenity] = useState(null);

  const categories = [
    { id: 'all', name: 'All Amenities' },
    { id: 'wellness', name: 'Wellness & Spa' },
    { id: 'dining', name: 'Dining' },
    { id: 'business', name: 'Business' },
    { id: 'recreation', name: 'Recreation' }
  ];

  const amenities = [
    {
      id: 1,
      name: 'Infinity Pool',
      category: 'recreation',
      icon: '🏊‍♂️',
      description: 'Stunning infinity pool with panoramic ocean views, temperature-controlled and open 24/7',
      features: ['Panoramic Views', 'Temperature Controlled', 'Poolside Service', 'Sunset Viewing Deck'],
      timing: '6:00 AM - 11:00 PM',
      image: 'https://images.unsplash.com/photo-1575429198097-0414ec08e8cd?ixlib=rb-4.0.3&auto=format&fit=crop&w=1770&q=80'
    },
    {
      id: 2,
      name: 'Luxury Spa',
      category: 'wellness',
      icon: '💆‍♀️',
      description: 'Award-winning spa with traditional and modern treatments in a serene environment',
      features: ['Massage Therapy', 'Aromatherapy', 'Steam Room', 'Private Suites'],
      timing: '8:00 AM - 10:00 PM',
      image: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?ixlib=rb-4.0.3&auto=format&fit=crop&w=1770&q=80'
    },
    {
      id: 3,
      name: 'Fine Dining Restaurant',
      category: 'dining',
      icon: '🍽️',
      description: 'Michelin-starred restaurant offering gourmet cuisine with farm-to-table ingredients',
      features: ['Chef\'s Table', 'Wine Pairing', 'Seasonal Menu', 'Ocean View'],
      timing: '7:00 AM - 11:00 PM',
      image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1770&q=80'
    },
    {
      id: 4,
      name: 'Business Center',
      category: 'business',
      icon: '💼',
      description: 'Fully equipped business center with private meeting rooms and high-speed internet',
      features: ['Private Rooms', 'Video Conferencing', 'Printing Services', 'Secretarial Support'],
      timing: '24 Hours',
      image: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixlib=rb-4.0.3&auto=format&fit=crop&w=1769&q=80'
    },
    {
      id: 5,
      name: 'Fitness Center',
      category: 'wellness',
      icon: '💪',
      description: 'State-of-the-art fitness facility with personal trainers and group classes',
      features: ['Cardio Zone', 'Weight Training', 'Yoga Studio', 'Personal Trainers'],
      timing: '5:00 AM - 12:00 AM',
      image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-4.0.3&auto=format&fit=crop&w=1770&q=80'
    },
    {
      id: 6,
      name: 'Rooftop Bar',
      category: 'dining',
      icon: '🍹',
      description: 'Trendy rooftop bar with signature cocktails and breathtaking city views',
      features: ['Signature Cocktails', 'Live Music', 'Fire Pit', 'Skyline Views'],
      timing: '4:00 PM - 2:00 AM',
      image: 'https://images.unsplash.com/photo-1514933651103-005eec06c04b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1770&q=80'
    },
    {
      id: 7,
      name: 'Kids Club',
      category: 'recreation',
      icon: '👶',
      description: 'Supervised children\'s activities and entertainment for our younger guests',
      features: ['Supervised Play', 'Educational Activities', 'Games Room', 'Outdoor Play Area'],
      timing: '9:00 AM - 6:00 PM',
      image: 'https://images.unsplash.com/photo-1530549387789-4c1017266635?ixlib=rb-4.0.3&auto=format&fit=crop&w=1770&q=80'
    },
    {
      id: 8,
      name: 'Concierge Service',
      category: 'business',
      icon: '🔑',
      description: '24/7 dedicated concierge to assist with reservations, tours, and special requests',
      features: ['24/7 Service', 'Tour Bookings', 'Restaurant Reservations', 'Transportation'],
      timing: '24 Hours',
      image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=1770&q=80'
    }
  ];

  const filteredAmenities = activeCategory === 'all' 
    ? amenities 
    : amenities.filter(amenity => amenity.category === activeCategory);

  const toggleAmenity = (id) => {
    setExpandedAmenity(expandedAmenity === id ? null : id);
  };

  return (
    <section id="amenities" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-amber-100 px-4 py-2 rounded-full mb-4">
            <span className="text-amber-700 font-medium">Premium Facilities</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Luxury Amenities</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Experience world-class facilities designed for your comfort and enjoyment
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-5 py-2 rounded-full font-medium transition-all duration-300 ${
                activeCategory === category.id
                  ? 'bg-amber-600 text-white shadow-md'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Amenities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {filteredAmenities.map((amenity) => (
            <div
              key={amenity.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 border border-gray-100"
            >
              {/* Amenity Image */}
              <div className="h-48 overflow-hidden relative">
                <img
                  src={amenity.image}
                  alt={amenity.name}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full w-12 h-12 flex items-center justify-center">
                  <span className="text-2xl">{amenity.icon}</span>
                </div>
                <div className="absolute bottom-4 left-4 bg-amber-600 text-white text-xs font-medium px-3 py-1 rounded-full">
                  {amenity.category.charAt(0).toUpperCase() + amenity.category.slice(1)}
                </div>
              </div>

              {/* Amenity Details */}
              <div className="p-5">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-lg font-bold text-gray-800">{amenity.name}</h3>
                  <button
                    onClick={() => toggleAmenity(amenity.id)}
                    className="text-amber-600 hover:text-amber-700"
                  >
                    <svg
                      className={`w-5 h-5 transition-transform duration-300 ${
                        expandedAmenity === amenity.id ? 'rotate-180' : ''
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                </div>

                {/* Timing */}
                <div className="flex items-center text-gray-600 text-sm mb-3">
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>{amenity.timing}</span>
                </div>

                {/* Short Description */}
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                  {amenity.description}
                </p>

                {/* Expanded Content */}
                {expandedAmenity === amenity.id && (
                  <div className="mt-4 pt-4 border-t border-gray-100 animate-fadeIn">
                    <h4 className="font-medium text-gray-700 mb-3">Features:</h4>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {amenity.features.map((feature, index) => (
                        <span
                          key={index}
                          className="bg-gray-100 text-gray-700 text-xs px-3 py-1 rounded-full"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                    <button className="w-full bg-amber-50 hover:bg-amber-100 text-amber-700 font-medium py-2 px-4 rounded-lg transition duration-300 text-sm">
                      Learn More
                    </button>
                  </div>
                )}

                {/* View Details Button */}
                {expandedAmenity !== amenity.id && (
                  <button
                    onClick={() => toggleAmenity(amenity.id)}
                    className="w-full border border-amber-600 text-amber-600 hover:bg-amber-50 font-medium py-2 px-4 rounded-lg transition duration-300 text-sm mt-2"
                  >
                    View Details
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Services */}
        <div className="bg-gradient-to-r from-amber-50 to-amber-100 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">Additional Services</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mx-auto mb-3 shadow-sm">
                <span className="text-xl">🚗</span>
              </div>
              <div className="font-medium text-gray-800">Airport Transfer</div>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mx-auto mb-3 shadow-sm">
                <span className="text-xl">🧳</span>
              </div>
              <div className="font-medium text-gray-800">Valet Parking</div>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mx-auto mb-3 shadow-sm">
                <span className="text-xl">🐕</span>
              </div>
              <div className="font-medium text-gray-800">Pet Friendly</div>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mx-auto mb-3 shadow-sm">
                <span className="text-xl">🛒</span>
              </div>
              <div className="font-medium text-gray-800">Shopping Arcade</div>
            </div>
          </div>
        </div>

        {/* Booking CTA */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center bg-gray-100 px-4 py-2 rounded-full mb-4">
            <svg className="w-4 h-4 text-green-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            <span className="text-gray-700">All amenities included in your stay</span>
          </div>
          
        </div>
      </div>
    </section>
  );
};

// Add this CSS for animations (put in your global CSS file)
const styles = `
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fadeIn {
  animation: fadeIn 0.3s ease-out;
}

.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
`;

// Add to your main CSS file or create a style tag
const AmenitiesSectionWithStyles = () => (
  <>
    <style>{styles}</style>
    <AmenitiesSection />
  </>
);

export default AmenitiesSection;