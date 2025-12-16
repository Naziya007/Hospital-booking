import React, { useState } from 'react';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  // WhatsApp number - Replace with your actual number
  const whatsappNumber = '+919876543210';
  
  // Email address for contact form
  const contactEmail = 'contact@mypms.com';

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Create mailto link with form data
    const mailtoLink = `mailto:${contactEmail}?subject=${encodeURIComponent(formData.subject || 'Contact Form Submission')}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\n\nMessage:\n${formData.message}`
    )}`;
    
    // Open email client
    window.location.href = mailtoLink;
    
    // Show success message
    setIsSubmitted(true);
    
    // Reset form
    setTimeout(() => {
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
      setIsSubmitted(false);
    }, 3000);
  };

  // Open WhatsApp chat
  const openWhatsApp = () => {
    const message = `Hello, I'd like to get more information about MYpms.`;
    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappURL, '_blank');
  };

  // Open email directly
  const openEmail = () => {
    window.location.href = `mailto:${contactEmail}`;
  };

  // Open phone dialer
  const callPhone = () => {
    window.location.href = `tel:+11234567890`;
  };

  // Open location in maps
  const openLocation = () => {
    window.open('https://maps.google.com/?q=123+Hotel+Street,+New+York,+NY+10001', '_blank');
  };

  return (
    <section id="contact" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-amber-100 px-4 py-2 rounded-full mb-4">
            <span className="text-amber-700 font-medium">Get in Touch</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Contact Us</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Have questions or need assistance? We're here to help you 24/7 through multiple channels
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Column - Contact Form */}
          <div>
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Send us a Message</h3>
              
              {isSubmitted ? (
                <div className="text-center py-8">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                  <h4 className="text-xl font-bold text-gray-800 mb-2">Message Sent Successfully!</h4>
                  <p className="text-gray-600 mb-4">Your email client will open with your message. Please send the email to complete the process.</p>
                  <p className="text-sm text-gray-500">You can also use WhatsApp for instant response</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-gray-700 mb-2">Full Name *</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
                        placeholder="John Doe"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-gray-700 mb-2">Email Address *</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
                        placeholder="john@example.com"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-gray-700 mb-2">Phone Number</label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
                        placeholder="+1 (234) 567-8900"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-700 mb-2">Subject *</label>
                      <select
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
                        required
                      >
                        <option value="">Select a subject</option>
                        <option value="General Inquiry">General Inquiry</option>
                        <option value="Booking Information">Booking Information</option>
                        <option value="Room Information">Room Information</option>
                        <option value="Event Planning">Event Planning</option>
                        <option value="Partnership">Partnership</option>
                        <option value="Feedback">Feedback</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-gray-700 mb-2">Message *</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows="5"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
                      placeholder="How can we help you?"
                      required
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-amber-600 hover:bg-amber-700 text-white font-bold py-4 px-8 rounded-lg transition duration-300 shadow-md hover:shadow-lg"
                  >
                    Send Message via Email
                  </button>
                </form>
              )}
            </div>

            {/* Quick Contact Options */}
            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
              <button
                onClick={openWhatsApp}
                className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-medium py-4 px-6 rounded-lg transition duration-300 flex items-center justify-center"
              >
                <span className="mr-3 text-xl">💬</span>
                <span>Chat on WhatsApp</span>
              </button>
              
              <button
                onClick={openEmail}
                className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-medium py-4 px-6 rounded-lg transition duration-300 flex items-center justify-center"
              >
                <span className="mr-3 text-xl">✉️</span>
                <span>Send Direct Email</span>
              </button>
            </div>
          </div>

          {/* Right Column - Contact Information */}
          <div>
            {/* Contact Methods */}
            <div className="space-y-8">
              {/* WhatsApp Contact Card */}
              <div className="bg-gradient-to-r from-green-50 to-green-100 rounded-2xl p-6 border border-green-200">
                <div className="flex items-start">
                  <div className="w-14 h-14 bg-green-500 rounded-xl flex items-center justify-center mr-4">
                    <span className="text-2xl text-white">💬</span>
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl font-bold text-gray-800 mb-2">WhatsApp Chat</h4>
                    <p className="text-gray-700 mb-3">Instant messaging for quick questions and support</p>
                    <div className="flex items-center">
                      <span className="font-medium text-gray-800 mr-2">Phone:</span>
                      <span className="text-green-700 font-bold">{whatsappNumber}</span>
                    </div>
                    <button
                      onClick={openWhatsApp}
                      className="mt-4 bg-green-600 hover:bg-green-700 text-white font-medium py-2 px-6 rounded-lg transition duration-300 inline-flex items-center"
                    >
                      <span>Start Chat Now</span>
                      <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>

              {/* Email Contact Card */}
              <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-2xl p-6 border border-blue-200">
                <div className="flex items-start">
                  <div className="w-14 h-14 bg-blue-500 rounded-xl flex items-center justify-center mr-4">
                    <span className="text-2xl text-white">✉️</span>
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl font-bold text-gray-800 mb-2">Email Support</h4>
                    <p className="text-gray-700 mb-3">Send detailed inquiries and receive responses within 24 hours</p>
                    <div className="flex items-center">
                      <span className="font-medium text-gray-800 mr-2">Email:</span>
                      <span className="text-blue-700 font-bold">{contactEmail}</span>
                    </div>
                    <button
                      onClick={openEmail}
                      className="mt-4 bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-lg transition duration-300 inline-flex items-center"
                    >
                      <span>Compose Email</span>
                      <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>

              {/* Other Contact Methods */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div 
                  onClick={callPhone}
                  className="bg-gray-50 hover:bg-gray-100 rounded-xl p-6 border border-gray-200 cursor-pointer transition duration-300"
                >
                  <div className="flex flex-col items-center text-center">
                    <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mb-4">
                      <span className="text-xl">📞</span>
                    </div>
                    <h4 className="font-bold text-gray-800 mb-2">Phone Call</h4>
                    <p className="text-gray-600 text-sm mb-3">Speak directly with our team</p>
                    <div className="text-amber-700 font-bold">+1 (123) 456-7890</div>
                  </div>
                </div>

                <div 
                  onClick={openLocation}
                  className="bg-gray-50 hover:bg-gray-100 rounded-xl p-6 border border-gray-200 cursor-pointer transition duration-300"
                >
                  <div className="flex flex-col items-center text-center">
                    <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mb-4">
                      <span className="text-xl">📍</span>
                    </div>
                    <h4 className="font-bold text-gray-800 mb-2">Visit Us</h4>
                    <p className="text-gray-600 text-sm mb-3">Come see us in person</p>
                    <div className="text-amber-700 font-bold">View on Map</div>
                  </div>
                </div>
              </div>

              {/* Social Media Links */}
             
            </div>

            {/* Contact Information Details */}
            <div className="mt-8 bg-amber-50 rounded-2xl p-6 border border-amber-200">
              <h4 className="text-lg font-bold text-gray-800 mb-4">Contact Information</h4>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-10 h-10 bg-amber-100 rounded-lg flex items-center justify-center mr-3">
                    <span className="text-amber-600">🏨</span>
                  </div>
                  <div>
                    <div className="font-medium text-gray-800">Hotel Address</div>
                    <div className="text-gray-600">123 Luxury Street, Hotel District</div>
                    <div className="text-gray-600">New York, NY 10001, USA</div>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-10 h-10 bg-amber-100 rounded-lg flex items-center justify-center mr-3">
                    <span className="text-amber-600">⏰</span>
                  </div>
                  <div>
                    <div className="font-medium text-gray-800">Operating Hours</div>
                    <div className="text-gray-600">Front Desk: 24/7</div>
                    <div className="text-gray-600">Support: 8:00 AM - 10:00 PM</div>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-10 h-10 bg-amber-100 rounded-lg flex items-center justify-center mr-3">
                    <span className="text-amber-600">🚗</span>
                  </div>
                  <div>
                    <div className="font-medium text-gray-800">Parking Available</div>
                    <div className="text-gray-600">Valet & self-parking options</div>
                    <div className="text-gray-600">Reserved for hotel guests</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

  
      </div>
    </section>
  );
};

export default ContactSection;