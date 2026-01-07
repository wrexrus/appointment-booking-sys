import React from 'react';

const servicesData = [
  {
    title: "Instant Booking",
    description: "Book your appointments in seconds with our seamless real-time scheduling system.",
    icon: "⚡",
  },
  {
    title: "Secure Payments",
    description: "Experience hassle-free and secure transactions with multiple payment options.",
    icon: "🔒",
  },
  {
    title: "24/7 Support",
    description: "Our dedicated support team is available around the clock to assist you.",
    icon: "🎧",
  },
];

const Services = () => {
  return (
    <div id="services" className="py-20 bg-amber-50 text-center">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-5xl font-extrabold mb-4 text-amber-900 tracking-tight">Our Premium Services</h2>
        <p className="text-lg text-gray-600 mb-16 max-w-2xl mx-auto">
          Discover how we can transform your scheduling experience with our top-tier features designed for efficiency and ease.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {servicesData.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-shadow duration-300 flex flex-col items-center hover:-translate-y-2 transform transition-transform"
            >
              <div className="w-16 h-16 bg-amber-100 text-amber-600 rounded-full flex items-center justify-center text-3xl mb-6">
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-3">{service.title}</h3>
              <p className="text-gray-600 leading-relaxed text-center">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
