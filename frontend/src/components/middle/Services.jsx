import React from 'react';

const Services = () => {
  return (
    <div id="services" className="py-12 bg-gray-100 text-center">
      <h2 className="text-4xl font-bold mb-8 text-gray-800">Our Services</h2>
      <div className="flex justify-center gap-8">
        <div className="bg-white border border-gray-300 rounded-lg p-6 shadow-md hover:shadow-lg transition">
          <h3 className="text-2xl font-semibold text-blue-600 mb-4">Service 1</h3>
          <p className="text-gray-600">Details about Service 1.</p>
        </div>
        <div className="bg-white border border-gray-300 rounded-lg p-6 shadow-md hover:shadow-lg transition">
          <h3 className="text-2xl font-semibold text-blue-600 mb-4">Service 2</h3>
          <p className="text-gray-600">Details about Service 2.</p>
        </div>
        <div className="bg-white border border-gray-300 rounded-lg p-6 shadow-md hover:shadow-lg transition">
          <h3 className="text-2xl font-semibold text-blue-600 mb-4">Service 3</h3>
          <p className="text-gray-600">Details about Service 3.</p>
        </div>
      </div>
    </div>
  );
};

export default Services;
