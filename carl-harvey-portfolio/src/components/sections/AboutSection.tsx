'use client';

import React from 'react';
import { personalInfo } from '@/data/content';

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            About Me
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Profile Image */}
          <div className="flex justify-center">
            <img
              src={personalInfo.profileImagePath}
              alt={personalInfo.name}
              className="w-80 h-80 rounded-full object-cover shadow-lg"
            />
          </div>
          
          {/* About Content */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              {personalInfo.name}
            </h3>
            <p className="text-xl text-blue-600 font-semibold mb-6">
              {personalInfo.title}
            </p>
            
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                {personalInfo.bio}
              </p>
              
              <p>
                I specialize in creating custom web applications, portfolio websites, and system solutions that help businesses and individuals achieve their digital goals. With expertise in modern web technologies and a focus on user experience, I deliver solutions that are both functional and visually appealing.
              </p>
              
              <p>
                My approach combines technical excellence with creative problem-solving, ensuring that each project is tailored to meet specific client needs while maintaining high standards of quality and performance.
              </p>
            </div>
            
            {/* Skills/Technologies */}
            <div className="mt-8">
              <h4 className="text-lg font-semibold text-gray-900 mb-4">Core Technologies</h4>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {['React', 'Next.js', 'TypeScript', 'Node.js', 'Tailwind CSS', 'PostgreSQL'].map((tech) => (
                  <div key={tech} className="bg-blue-50 text-blue-700 px-3 py-2 rounded-md text-sm font-medium">
                    {tech}
                  </div>
                ))}
              </div>
            </div>
            
            {/* Contact Info */}
            <div className="mt-8 p-6 bg-gray-50 rounded-lg">
              <h4 className="text-lg font-semibold text-gray-900 mb-3">Let's Connect</h4>
              <div className="space-y-2">
                <p className="text-gray-700">
                  <span className="font-medium">Email:</span>{' '}
                  <a 
                    href={`mailto:${personalInfo.email}`}
                    className="text-blue-600 hover:text-blue-700 transition-colors"
                  >
                    {personalInfo.email}
                  </a>
                </p>
                {personalInfo.location && (
                  <p className="text-gray-700">
                    <span className="font-medium">Location:</span> {personalInfo.location}
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
