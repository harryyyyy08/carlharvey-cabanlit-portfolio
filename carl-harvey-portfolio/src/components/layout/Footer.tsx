import React from 'react';
import { personalInfo } from '@/data/content';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Section */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-lg font-semibold mb-4">{personalInfo.name}</h3>
            <p className="text-gray-300 mb-4 max-w-md">
              {personalInfo.bio}
            </p>
            <p className="text-gray-400 text-sm">
              Specializing in custom web applications, portfolio websites, and system development solutions.
            </p>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Get In Touch</h3>
            <div className="space-y-2">
              <p className="text-gray-300">
                <span className="font-medium">Email:</span>{' '}
                <a 
                  href={`mailto:${personalInfo.email}`}
                  className="text-blue-400 hover:text-blue-300 transition-colors"
                >
                  {personalInfo.email}
                </a>
              </p>
              {personalInfo.location && (
                <p className="text-gray-300">
                  <span className="font-medium">Location:</span> {personalInfo.location}
                </p>
              )}
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-8 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © {currentYear} {personalInfo.name}. All rights reserved.
            </p>
            <div className="mt-4 md:mt-0">
              <p className="text-gray-400 text-sm">
                Built with Next.js, TypeScript, and Tailwind CSS
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
