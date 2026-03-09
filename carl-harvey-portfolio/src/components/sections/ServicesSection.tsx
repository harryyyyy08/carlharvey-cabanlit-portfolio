'use client';

import React from 'react';
import { services } from '@/data/content';

export default function ServicesSection() {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Services I Offer
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive web development and system solutions tailored to your specific needs
          </p>
          <div className="w-24 h-1 bg-blue-600 mx-auto mt-4"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className={`bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 ${
                service.isFeatured ? 'border-2 border-blue-500' : ''
              }`}
            >
              {service.isFeatured && (
                <div className="inline-block bg-blue-500 text-white text-xs px-3 py-1 rounded-full mb-4">
                  Featured
                </div>
              )}
              
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                {service.title}
              </h3>
              
              <p className="text-gray-600 mb-4">
                {service.shortDescription}
              </p>
              
              <p className="text-gray-700 leading-relaxed">
                {service.detailedDescription}
              </p>
              
              <div className="mt-6">
                <button className="text-blue-600 font-semibold hover:text-blue-700 transition-colors">
                  Learn More →
                </button>
              </div>
            </div>
          ))}
        </div>
        
        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="bg-blue-600 text-white p-8 rounded-lg max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">
              Ready to Start Your Project?
            </h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Let's discuss how I can help bring your ideas to life with custom web solutions that meet your specific requirements.
            </p>
            <button
              onClick={() => {
                const element = document.querySelector('#contact');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200"
            >
              Get In Touch
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
